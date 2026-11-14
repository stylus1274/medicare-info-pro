/* MedicareInfoPro first-party traffic tracker. No cookies, names, IPs, query strings or click IDs are sent. */
(function () {
  'use strict';
  try {
    if (window.__mipTraffic) return;
    window.__mipTraffic = true;
    if (navigator.webdriver) return;

    var ENDPOINT = 'https://mip-cms.abacusai.app/api/collect';
    var TIMEOUT = 30 * 60 * 1000;
    var SKIP = /^\/(api|_next|admin|traffic)(\/|$)/i;
    var store = window.sessionStorage;

    function rid() {
      if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
      return Date.now().toString(36) + Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
    }
    function get(k) { try { return store.getItem(k); } catch (e) { return null; } }
    function set(k, v) { try { store.setItem(k, v); } catch (e) {} }
    function clip(v) { return v ? String(v).slice(0, 150) : null; }

    function device() {
      var ua = navigator.userAgent || '';
      if (/iPad|Tablet|PlayBook|Silk/i.test(ua) || (/Android/i.test(ua) && !/Mobile/i.test(ua))) return 'tablet';
      if (/Mobi|iPhone|iPod|Android/i.test(ua)) return 'mobile';
      return 'desktop';
    }

    function attribution() {
      var p = new URLSearchParams(location.search);
      var ref = null;
      try {
        if (document.referrer) {
          var h = new URL(document.referrer).hostname.replace(/^www\./, '');
          if (h && h !== location.hostname.replace(/^www\./, '')) ref = h;
        }
      } catch (e) {}
      var click = null;
      if (p.get('gclid') || p.get('gbraid') || p.get('wbraid')) click = 'google';
      else if (p.get('msclkid')) click = 'microsoft';
      return {
        ref: ref,
        utmSource: clip(p.get('utm_source')),
        utmMedium: clip(p.get('utm_medium')),
        utmCampaign: clip(p.get('utm_campaign')),
        clickId: click
      };
    }

    function session() {
      var now = Date.now();
      var sid = get('mip_t_sid');
      var last = Number(get('mip_t_last') || 0);
      var attr = null;
      try { attr = JSON.parse(get('mip_t_attr') || 'null'); } catch (e) {}
      var fresh = attribution();
      var hasNewCampaign = (fresh.utmSource || fresh.utmCampaign || fresh.clickId) && JSON.stringify(fresh) !== JSON.stringify(attr);
      if (!sid || !attr || now - last > TIMEOUT || hasNewCampaign) {
        sid = rid();
        attr = fresh;
        set('mip_t_sid', sid);
        set('mip_t_attr', JSON.stringify(attr));
      }
      set('mip_t_last', String(now));
      return { sid: sid, attr: attr };
    }

    function send(ev) {
      try {
        fetch(ENDPOINT, {
          method: 'POST',
          mode: 'cors',
          credentials: 'omit',
          keepalive: true,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ events: [ev] })
        }).catch(function () {});
      } catch (e) {}
    }

    var lastPath = null;
    function track() {
      var path = location.pathname || '/';
      if (path === lastPath || SKIP.test(path)) return;
      lastPath = path;
      var s = session();
      var ev = {
        eventId: rid(),
        sessionId: s.sid,
        path: path.slice(0, 500),
        device: device(),
        ref: s.attr.ref,
        utmSource: s.attr.utmSource,
        utmMedium: s.attr.utmMedium,
        utmCampaign: s.attr.utmCampaign,
        clickId: s.attr.clickId
      };
      send(ev);
    }

    // Button clicks: any element marked data-track="<name>". Records the name, page and link path only.
    document.addEventListener('click', function (e) {
      try {
        var t = e.target;
        var el = t && t.closest ? t.closest('[data-track]') : null;
        if (!el) return;
        var path = location.pathname || '/';
        if (SKIP.test(path)) return;
        var name = String(el.getAttribute('data-track') || '').slice(0, 100);
        if (!name) return;
        var href = null;
        try {
          var raw = el.getAttribute('href');
          if (raw) { var u = new URL(raw, location.href); href = u.origin === location.origin ? u.pathname : u.protocol + '//' + u.hostname + u.pathname; }
        } catch (err) {}
        var s = session();
        send({
          type: 'click',
          name: name,
          href: href ? href.slice(0, 500) : null,
          eventId: rid(),
          sessionId: s.sid,
          path: path.slice(0, 500),
          device: device(),
          ref: s.attr.ref,
          utmSource: s.attr.utmSource,
          utmMedium: s.attr.utmMedium,
          utmCampaign: s.attr.utmCampaign,
          clickId: s.attr.clickId
        });
      } catch (err) {}
    }, true);

    ['pushState', 'replaceState'].forEach(function (m) {
      var orig = history[m];
      history[m] = function () {
        var r = orig.apply(this, arguments);
        setTimeout(track, 0);
        return r;
      };
    });
    window.addEventListener('popstate', track);
    track();
  } catch (e) {}
})();
