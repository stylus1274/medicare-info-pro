/*
 * MedicareInfoPro — first-party visitor tracker
 * -------------------------------------------------
 * Add this to your public site (medicareinfopro.com). It records pageviews,
 * clicks and scroll depth and sends them to your CMS analytics endpoint.
 * It collects NO typed form values and stores NO personal content — only
 * interaction events. Data collection begins the moment this script is live.
 *
 * How to install (Next.js App Router site):
 *   1. Copy this file to  public/analytics-tracker.js  in the site repo.
 *   2. In app/layout.tsx add, inside <body>:
 *        import Script from 'next/script';
 *        <Script src="/analytics-tracker.js" strategy="afterInteractive" />
 *   Or for any site, add before </body>:
 *        <script src="/analytics-tracker.js" defer></script>
 */
(function () {
  'use strict';

  // The CMS ingest endpoint (this app's deployed URL).
  var ENDPOINT = 'https://mip-cms.abacusai.app/api/track';

  // Don't track admin / internal paths.
  var EXCLUDE = [/^\/admin/i, /^\/api\//i, /^\/_next\//i];

  try {
    if (typeof window === 'undefined' || !window.sessionStorage) return;
    var path0 = location.pathname;
    if (EXCLUDE.some(function (re) { return re.test(path0); })) return;
  } catch (e) { return; }

  // ---- ids ----
  function uid() {
    try {
      if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
    } catch (e) {}
    return 'x' + Date.now().toString(36) + Math.random().toString(36).slice(2, 10);
  }

  var SKEY = 'mip_sid';
  function sessionId() {
    try {
      var v = sessionStorage.getItem(SKEY);
      if (!v) { v = uid(); sessionStorage.setItem(SKEY, v); }
      return v;
    } catch (e) { return uid(); }
  }

  function deviceCategory() {
    var ua = (navigator.userAgent || '').toLowerCase();
    if (/ipad|tablet|playbook|silk/.test(ua) || (/android/.test(ua) && !/mobile/.test(ua))) return 'tablet';
    if (/mobi|iphone|ipod|android|blackberry|windows phone/.test(ua)) return 'mobile';
    var w = window.innerWidth || screen.width || 0;
    if (w && w < 768) return 'mobile';
    if (w && w < 1024) return 'tablet';
    return 'desktop';
  }

  var SID = sessionId();
  var DEVICE = deviceCategory();

  // ---- delivery ----
  function send(events) {
    if (!events || !events.length) return;
    var body = JSON.stringify({ events: events });
    try {
      if (navigator.sendBeacon) {
        var blob = new Blob([body], { type: 'application/json' });
        if (navigator.sendBeacon(ENDPOINT, blob)) return;
      }
    } catch (e) {}
    try {
      fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: body, keepalive: true, mode: 'cors' }).catch(function () {});
    } catch (e) {}
  }

  // ---- per-pageview state ----
  var currentPath = null;
  var pageviewId = null;
  var maxScroll = 0;
  var scrollSent = -1;

  function fullDocHeight() {
    var d = document.documentElement, b = document.body;
    return Math.max(d.scrollHeight, b ? b.scrollHeight : 0, d.offsetHeight, b ? b.offsetHeight : 0, d.clientHeight) || 1;
  }

  function recordPageview() {
    var p = location.pathname + location.search;
    if (EXCLUDE.some(function (re) { return re.test(location.pathname); })) return;
    // finalize scroll of the previous page first
    flushScroll();
    currentPath = p;
    pageviewId = uid();
    maxScroll = 0;
    scrollSent = -1;
    send([{
      type: 'pageview',
      eventId: pageviewId,
      sessionId: SID,
      path: p,
      referrer: document.referrer || null,
      device: DEVICE,
      screenWidth: window.innerWidth || null
    }]);
    // send an initial 0% scroll record so the pageview is represented
    sendScroll(true);
  }

  // ---- scroll depth ----
  function computeScroll() {
    var h = fullDocHeight();
    var viewed = (window.scrollY || window.pageYOffset || 0) + (window.innerHeight || 0);
    var pct = Math.max(0, Math.min(100, Math.round((viewed / h) * 100)));
    if (pct > maxScroll) maxScroll = pct;
  }

  function sendScroll(force) {
    if (!pageviewId) return;
    if (!force && maxScroll <= scrollSent) return;
    scrollSent = maxScroll;
    send([{ type: 'scroll', pageviewId: pageviewId, sessionId: SID, path: currentPath, maxPercent: maxScroll, device: DEVICE }]);
  }

  function flushScroll() {
    if (pageviewId && maxScroll > scrollSent) sendScroll(false);
  }

  var scrollTimer = null;
  window.addEventListener('scroll', function () {
    computeScroll();
    if (scrollTimer) return;
    scrollTimer = setTimeout(function () { scrollTimer = null; sendScroll(false); }, 2000);
  }, { passive: true });

  // ---- clicks ----
  var clickQueue = [];
  var clickTimer = null;

  function describe(el) {
    var meaningful = el.closest('a,button,[role=button],input[type=submit],input[type=button],[data-track]') || el;
    var tag = (meaningful.tagName || '').toLowerCase();
    var label = '';
    var isPhone = false, phone = null;
    var href = meaningful.getAttribute ? meaningful.getAttribute('href') : null;
    if (href && href.indexOf('tel:') === 0) { isPhone = true; phone = href.slice(4).trim(); }
    label = (meaningful.getAttribute && (meaningful.getAttribute('aria-label') || meaningful.getAttribute('title'))) || (meaningful.innerText || meaningful.textContent || '').trim();
    if (label) label = label.replace(/\s+/g, ' ').slice(0, 120);
    return {
      tag: tag,
      id: meaningful.id || null,
      classes: (typeof meaningful.className === 'string' ? meaningful.className : '').slice(0, 300) || null,
      label: label || null,
      isPhone: isPhone,
      phone: phone
    };
  }

  function flushClicks() {
    if (!clickQueue.length) return;
    var batch = clickQueue.splice(0, clickQueue.length);
    send(batch);
  }

  document.addEventListener('click', function (e) {
    try {
      var target = e.target;
      if (!target || !target.closest) return;
      var info = describe(target);
      var h = fullDocHeight();
      var w = document.documentElement.clientWidth || window.innerWidth || 1;
      var xPct = Math.max(0, Math.min(100, (e.pageX / w) * 100));
      var yPct = Math.max(0, Math.min(100, (e.pageY / h) * 100));
      clickQueue.push({
        type: 'click',
        eventId: uid(),
        sessionId: SID,
        path: currentPath || (location.pathname + location.search),
        screenWidth: w,
        screenHeight: h,
        xPercent: Math.round(xPct * 100) / 100,
        yPercent: Math.round(yPct * 100) / 100,
        elementTag: info.tag,
        elementId: info.id,
        elementClasses: info.classes,
        elementLabel: info.label,
        device: DEVICE,
        isPhoneLink: info.isPhone,
        phoneNumber: info.phone
      });
      if (clickTimer) clearTimeout(clickTimer);
      clickTimer = setTimeout(flushClicks, 3000);
    } catch (err) {}
  }, true);

  // ---- SPA route changes ----
  function onRouteChange() {
    if (location.pathname + location.search !== currentPath) recordPageview();
  }
  ['pushState', 'replaceState'].forEach(function (m) {
    var orig = history[m];
    if (typeof orig === 'function') {
      history[m] = function () {
        var r = orig.apply(this, arguments);
        setTimeout(onRouteChange, 0);
        return r;
      };
    }
  });
  window.addEventListener('popstate', onRouteChange);

  // ---- leave / hide ----
  function onLeave() { flushScroll(); flushClicks(); }
  window.addEventListener('pagehide', onLeave);
  document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'hidden') onLeave(); });

  // ---- start ----
  if (document.readyState === 'complete' || document.readyState === 'interactive') recordPageview();
  else window.addEventListener('DOMContentLoaded', recordPageview);
})();
