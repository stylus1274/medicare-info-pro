import { NextRequest, NextResponse } from "next/server";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

// ── HubSpot ────────────────────────────────────────────────────────────────────
const HS_PORTAL_ID = "246426534";
const HS_FORM_ID = "1afd1c7a-145b-426b-a40d-f2df27790c75";

// ── MIP Brand Colors ───────────────────────────────────────────────────────────
const NAVY      = rgb(0.039, 0.086, 0.235);   // #0a163c
const NAVY_MID  = rgb(0.102, 0.247, 0.659);   // #1a3fa8
const GOLD      = rgb(0.961, 0.784, 0.255);   // #f5c842
const WHITE     = rgb(1, 1, 1);
const LIGHT_BG  = rgb(0.973, 0.976, 0.988);   // #f8f9fc
const TEAL      = rgb(0.118, 0.565, 0.490);
const ORANGE    = rgb(0.902, 0.494, 0.133);
const RED_DARK  = rgb(0.753, 0.200, 0.200);
const MID_GRAY  = rgb(0.55, 0.55, 0.60);
const BODY_TEXT = rgb(0.28, 0.30, 0.38);
const DARK_TEXT = rgb(0.08, 0.10, 0.18);
const RULE_CLR  = rgb(0.86, 0.88, 0.93);
const NOTE_BG   = rgb(0.96, 0.97, 1.00);

// ── Helpers ────────────────────────────────────────────────────────────────────
type Font = Awaited<ReturnType<PDFDocument["embedFont"]>>;
type Page = ReturnType<PDFDocument["addPage"]>;
type Color = ReturnType<typeof rgb>;

function addMonths(date: Date, months: number): Date {
  const d = new Date(date);
  d.setMonth(d.getMonth() + months);
  return d;
}
function fmtMonthYear(d: Date) {
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}
function fmtFull(d: Date) {
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}
function fmtShort(d: Date) {
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

interface Dates {
  dob: Date;
  birthday65: Date;
  iepStart: Date;
  iepEnd: Date;
  medigapStart: Date;
  medigapEnd: Date;
  partDDeadline: Date;
  minus12: Date;
  minus6: Date;
}

function calcDates(dob: Date): Dates {
  const birthday65 = new Date(dob);
  birthday65.setFullYear(dob.getFullYear() + 65);

  const iepStart = new Date(birthday65.getFullYear(), birthday65.getMonth() - 3, 1);
  const iepEnd   = new Date(birthday65.getFullYear(), birthday65.getMonth() + 4, 0);

  const medigapStart = new Date(birthday65.getFullYear(), birthday65.getMonth(), 1);
  const medigapEnd   = new Date(birthday65.getFullYear(), birthday65.getMonth() + 6, 0);

  const partDDeadline = new Date(iepEnd);
  partDDeadline.setDate(partDDeadline.getDate() + 63);

  return {
    dob,
    birthday65,
    iepStart,
    iepEnd,
    medigapStart,
    medigapEnd,
    partDDeadline,
    minus12: addMonths(birthday65, -12),
    minus6:  addMonths(birthday65, -6),
  };
}

// Drawing primitives
function rect(page: Page, x: number, y: number, w: number, h: number, color: Color, opacity = 1) {
  page.drawRectangle({ x, y, width: w, height: h, color, opacity });
}
function borderRect(page: Page, x: number, y: number, w: number, h: number, borderColor: Color, bw = 1) {
  page.drawRectangle({ x, y, width: w, height: h, borderColor, borderWidth: bw });
}
function txt(page: Page, text: string, x: number, y: number, size: number, color: Color, font: Font) {
  page.drawText(text, { x, y, size, color, font });
}
function wrap(text: string, font: Font, size: number, maxW: number): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let cur = "";
  for (const w of words) {
    const test = cur ? cur + " " + w : w;
    if (font.widthOfTextAtSize(test, size) <= maxW) { cur = test; }
    else { if (cur) lines.push(cur); cur = w; }
  }
  if (cur) lines.push(cur);
  return lines;
}
function multiline(page: Page, text: string, x: number, startY: number, size: number, color: Color, font: Font, maxW: number, lineH: number): number {
  const lines = wrap(text, font, size, maxW);
  let y = startY;
  for (const l of lines) { txt(page, l, x, y, size, color, font); y -= lineH; }
  return y;
}

// Page header (used on pages 2-14)
async function pageHeader(pdfDoc: PDFDocument, page: Page, sectionLabel: string, pageNum: number, total: number) {
  const bold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const reg  = await pdfDoc.embedFont(StandardFonts.Helvetica);
  rect(page, 0, 760, 612, 32, WHITE);
  rect(page, 0, 758, 612, 2, RULE_CLR);
  txt(page, "Medicare Information Pro", 50, 770, 9, NAVY_MID, bold);
  const lw = bold.widthOfTextAtSize(sectionLabel.toUpperCase(), 8);
  txt(page, sectionLabel.toUpperCase(), 562 - lw, 770, 8, MID_GRAY, bold);
  txt(page, "medicareinfopro.com  |  813-699-5559", 50, 20, 7.5, MID_GRAY, reg);
  txt(page, `Page ${pageNum} of ${total}`, 530, 20, 7.5, MID_GRAY, reg);
}

// Checkbox helper
function checkbox(page: Page, x: number, y: number, size = 9) {
  borderRect(page, x, y, size, size, NAVY_MID, 0.8);
}

// ── PAGE BUILDERS ──────────────────────────────────────────────────────────────

// Page 1: Cover
async function buildCover(pdfDoc: PDFDocument, firstName: string, lastName: string, dates: Dates, logoBytes: Uint8Array) {
  const page = pdfDoc.addPage([612, 792]);
  const bold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const reg  = await pdfDoc.embedFont(StandardFonts.Helvetica);

  rect(page, 0, 0, 612, 792, NAVY);
  rect(page, 0, 770, 612, 22, GOLD);

  // Decorative circles
  page.drawEllipse({ x: 570, y: 730, xScale: 65, yScale: 65, color: NAVY_MID, opacity: 0.45 });
  page.drawEllipse({ x: 600, y: 685, xScale: 38, yScale: 38, color: GOLD, opacity: 0.12 });
  page.drawEllipse({ x: 30, y: 200, xScale: 55, yScale: 55, color: TEAL, opacity: 0.25 });

  // Logo
  try {
    const logo = await pdfDoc.embedPng(logoBytes);
    const d = logo.scale(0.52);
    page.drawImage(logo, { x: 50, y: 700, width: d.width, height: d.height });
  } catch { txt(page, "Medicare Information Pro", 50, 712, 13, GOLD, bold); }

  txt(page, "YOUR TURNING 65 WORKBOOK", 50, 650, 9, GOLD, bold);
  txt(page, "The Turning 65", 50, 605, 40, WHITE, bold);
  txt(page, "Medicare Decision Kit", 50, 555, 40, GOLD, bold);

  multiline(page, "Organize your deadlines, doctors, prescriptions and likely costs before you choose coverage.", reg, 12, 50, 520, rgb(0.78, 0.83, 0.94), 510, 17);

  // Section pills
  const pills = [
    { label: "ENROLLMENT TIMELINE", color: NAVY_MID },
    { label: "COVERAGE COMPARISON", color: RED_DARK },
    { label: "COST WORKSHEET", color: ORANGE },
    { label: "DOCTOR + DRUG LISTS", color: NAVY },
    { label: "PERSONAL ACTION PLAN", color: TEAL },
  ];
  let px = 50; let py = 440;
  for (const p of pills) {
    const pw = bold.widthOfTextAtSize(p.label, 8) + 18;
    if (px + pw > 560) { px = 50; py -= 24; }
    rect(page, px, py - 4, pw, 18, p.color);
    txt(page, p.label, px + 9, py + 2, 8, WHITE, bold);
    px += pw + 8;
  }

  // How to use box
  rect(page, 50, 340, 512, 72, rgb(0.06, 0.12, 0.30));
  txt(page, "How to use this kit", 66, 394, 11, GOLD, bold);
  multiline(page, "Complete the worksheets before you compare plans or speak with an agent. Bring the finished kit to the conversation so your options can be checked against your real healthcare needs.", reg, 9, 66, 376, rgb(0.78, 0.83, 0.94), 476, 13);

  txt(page, "UPDATED JULY 2026", 50, 318, 8, GOLD, bold);
  txt(page, "Educational resource  |  Printable and fillable", 50, 305, 8, MID_GRAY, reg);

  // Prepared for banner
  rect(page, 0, 40, 612, 36, GOLD);
  const fullName = `${firstName.toUpperCase()} ${lastName.toUpperCase()}`;
  const bday = fmtMonthYear(dates.birthday65).toUpperCase();
  txt(page, `PREPARED FOR: ${fullName}  |  65TH BIRTHDAY: ${bday}`, 50, 53, 9, NAVY, bold);
}

// Page 2: Medicare Snapshot
async function buildSnapshot(pdfDoc: PDFDocument) {
  const page = pdfDoc.addPage([612, 792]);
  const bold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const reg  = await pdfDoc.embedFont(StandardFonts.Helvetica);
  await pageHeader(pdfDoc, page, "Start Here", 2, 14);

  txt(page, "Start here: your Medicare snapshot", 50, 720, 22, NAVY, bold);
  multiline(page, "Check every statement that applies. These details can change when you should enroll and which coverage tradeoffs matter most.", reg, 10, 50, 700, BODY_TEXT, 512, 14);

  txt(page, "Which statements describe you?", 50, 668, 13, NAVY_MID, bold);

  const checks = [
    "I will turn 65 within the next 12 months.",
    "I or my employer contributes to an HSA.",
    "I already receive Social Security or RRB benefits.",
    "I have COBRA, retiree, VA, TRICARE or Marketplace coverage.",
    "I or my spouse will keep working after I turn 65.",
    "I take one or more prescription medications.",
    "I currently have employer group health coverage.",
    "Keeping specific doctors or hospitals is important.",
  ];
  let cy = 648;
  for (let i = 0; i < checks.length; i++) {
    const bx = i % 2 === 0 ? 50 : 330;
    if (i % 2 === 0 && i > 0) cy -= 28;
    checkbox(page, bx, cy);
    multiline(page, checks[i], bx + 14, cy + 8, 9, BODY_TEXT, reg, 255, 12);
  }

  txt(page, "Medicare at a glance", 50, 530, 13, NAVY_MID, bold);

  const parts = [
    { label: "PART A", title: "Hospital insurance", color: NAVY_MID, body: "Inpatient hospital care, skilled nursing facility care after a qualifying stay, hospice and limited home health care." },
    { label: "PART B", title: "Medical insurance", color: TEAL, body: "Doctor visits, outpatient care, preventive services, durable medical equipment and other medically necessary services." },
    { label: "PART C", title: "Medicare Advantage", color: RED_DARK, body: "A private-plan way to receive Part A and Part B benefits. Most plans include Part D and may offer extra benefits." },
    { label: "PART D", title: "Prescription drug coverage", color: ORANGE, body: "Private insurance that helps cover prescriptions. It can be included in Medicare Advantage or purchased separately." },
  ];
  const cardW = 238; let cardX = 50; let cardY = 510;
  for (let i = 0; i < parts.length; i++) {
    if (i === 2) { cardX = 50; cardY = 380; }
    const cx2 = i % 2 === 0 ? 50 : 324;
    rect(page, cx2, cardY - 80, cardW, 90, LIGHT_BG);
    rect(page, cx2, cardY - 80, cardW, 90, RULE_CLR, 0); borderRect(page, cx2, cardY - 80, cardW, 90, RULE_CLR);
    const lw = bold.widthOfTextAtSize(parts[i].label, 8) + 12;
    rect(page, cx2 + 8, cardY + 2, lw, 16, parts[i].color);
    txt(page, parts[i].label, cx2 + 14, cardY + 6, 8, WHITE, bold);
    txt(page, parts[i].title, cx2 + lw + 14, cardY + 5, 10, DARK_TEXT, bold);
    multiline(page, parts[i].body, cx2 + 8, cardY - 12, 8.5, BODY_TEXT, reg, 222, 12);
  }

  // 2026 quick costs note
  rect(page, 50, 258, 512, 40, NOTE_BG);
  rect(page, 50, 258, 3, 40, NAVY_MID);
  multiline(page, "2026 quick costs: standard Part B premium $202.90/month; Part B deductible $283; Part A inpatient deductible $1,736 per benefit period; Part D covered-drug out-of-pocket cap $2,100.", reg, 8.5, 62, 288, BODY_TEXT, 490, 12);
}

// Page 3: Enrollment Timeline
async function buildTimeline(pdfDoc: PDFDocument, firstName: string, dates: Dates) {
  const page = pdfDoc.addPage([612, 792]);
  const bold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const reg  = await pdfDoc.embedFont(StandardFonts.Helvetica);
  await pageHeader(pdfDoc, page, "Enrollment Timeline", 3, 14);

  txt(page, `Your turning 65 timeline`, 50, 720, 22, NAVY, bold);
  multiline(page, "Plan early so your coverage is settled before the month Medicare should begin.", reg, 10, 50, 700, BODY_TEXT, 512, 14);

  const milestones = [
    { tag: "12 MONTHS BEFORE", date: fmtMonthYear(dates.minus12), title: "Learn the basic paths", body: "Review Parts A, B, C and D. Decide whether keeping certain doctors, traveling, monthly predictability or a low premium matters most.", color: NAVY_MID },
    { tag: "6 MONTHS BEFORE",  date: fmtMonthYear(dates.minus6),  title: "Check work coverage and HSA rules", body: "Ask your benefits administrator which plan pays first, whether your drug coverage is creditable and what happens to dependents. Review HSA contribution timing before enrolling.", color: TEAL },
    { tag: "3 MONTHS BEFORE",  date: fmtMonthYear(dates.iepStart), title: "Your usual enrollment window opens", body: "The Initial Enrollment Period generally begins three months before the month you turn 65. Apply early if you want coverage ready for your eligibility month.", color: ORANGE },
    { tag: "BIRTHDAY MONTH",   date: fmtMonthYear(dates.birthday65), title: "Confirm every effective date", body: "Verify Part A, Part B, drug coverage and any supplemental coverage separately. Do not assume all coverage starts on the same date.", color: RED_DARK },
    { tag: "1 TO 3 MONTHS AFTER", date: `${fmtMonthYear(addMonths(dates.birthday65, 1))} - ${fmtMonthYear(dates.iepEnd)}`, title: "Use the rest of your IEP carefully", body: "The Initial Enrollment Period generally ends three months after your birthday month. Enrolling later can delay the start of coverage.", color: NAVY },
  ];

  let my = 668;
  for (let i = 0; i < milestones.length; i++) {
    const m = milestones[i];
    // date label above card
    const dw = reg.widthOfTextAtSize(`(${m.date})`, 8);
    txt(page, `(${m.date})`, 562 - dw, my + 4, 8, MID_GRAY, reg);
    // dot
    page.drawEllipse({ x: 75, y: my - 8, xScale: 7, yScale: 7, color: m.color });
    // vertical line
    if (i < milestones.length - 1) rect(page, 73, my - 70, 4, 60, RULE_CLR);
    // card
    rect(page, 100, my - 62, 454, 70, LIGHT_BG);
    rect(page, 100, my - 62, 3, 70, m.color);
    txt(page, m.tag, 112, my + 3, 7.5, m.color, bold);
    txt(page, m.title, 112, my - 11, 11, DARK_TEXT, bold);
    multiline(page, m.body, 112, my - 26, 8.5, BODY_TEXT, reg, 430, 12);
    my -= 104;
  }

  // Birthday note
  rect(page, 50, 58, 512, 40, NOTE_BG);
  rect(page, 50, 58, 3, 40, NAVY_MID);
  multiline(page, "Birthday on the first day of a month? Medicare generally treats your coverage timing differently, with premium-free Part A beginning the month before you turn 65. Confirm your exact dates with Social Security.", reg, 8.5, 62, 88, BODY_TEXT, 490, 12);
}

// Page 4: Enrollment Path
async function buildEnrollmentPath(pdfDoc: PDFDocument) {
  const page = pdfDoc.addPage([612, 792]);
  const bold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const reg  = await pdfDoc.embedFont(StandardFonts.Helvetica);
  await pageHeader(pdfDoc, page, "Enrollment Path", 4, 14);

  txt(page, "Which enrollment path fits you?", 50, 720, 22, NAVY, bold);
  multiline(page, "These questions identify situations that need extra checking. They do not replace confirmation from Social Security, Medicare or your benefits administrator.", reg, 10, 50, 700, BODY_TEXT, 512, 14);

  // Warning note
  rect(page, 50, 650, 512, 36, rgb(1.0, 0.97, 0.92));
  rect(page, 50, 650, 3, 36, ORANGE);
  multiline(page, "Do not make an enrollment decision based on employer size alone. Ask which coverage pays first and whether you need Part A and Part B for the employer plan to pay correctly.", reg, 8.5, 62, 678, BODY_TEXT, 490, 12);

  const situations = [
    { num: "1", title: "Already receiving Social Security?", body: "Many people receiving benefits before 65 are enrolled automatically. Check your Medicare card or online status instead of assuming.", color: NAVY_MID },
    { num: "2", title: "Covered through active employment?", body: "Coverage based on your or your spouse's current job may support delayed Part B, but the rules depend on the plan and employment status.", color: TEAL },
    { num: "3", title: "Employer has 20 or more employees?", body: "For many workers age 65 or older, a 20-plus employee group plan pays first. Smaller-employer coverage may pay second. Confirm in writing.", color: ORANGE },
    { num: "4", title: "Contributing to an HSA?", body: "Medicare enrollment can affect HSA eligibility. Premium-free Part A may be retroactive when enrollment occurs after 65. Get tax guidance before contributing.", color: RED_DARK },
    { num: "5", title: "Using COBRA or retiree coverage?", body: "COBRA does not extend the Part B Special Enrollment Period tied to active employment. Retiree coverage often pays after Medicare.", color: NAVY },
    { num: "6", title: "Using VA, TRICARE or Marketplace coverage?", body: "Each works differently with Medicare. Confirm the exact enrollment and coordination rules for your coverage before making changes.", color: TEAL },
  ];

  let sx = 50; let sy = 620;
  for (let i = 0; i < situations.length; i++) {
    const s = situations[i];
    const bx = i % 2 === 0 ? 50 : 324;
    if (i % 2 === 0 && i > 0) sy -= 100;
    rect(page, bx, sy - 82, 238, 90, LIGHT_BG);
    borderRect(page, bx, sy - 82, 238, 90, RULE_CLR);
    // number badge
    page.drawEllipse({ x: bx + 16, y: sy - 2, xScale: 12, yScale: 12, color: s.color });
    txt(page, s.num, bx + 12, sy - 6, 10, WHITE, bold);
    multiline(page, s.title, bx + 32, sy - 2, 10, DARK_TEXT, bold, 195, 13);
    multiline(page, s.body, bx + 8, sy - 28, 8.5, BODY_TEXT, reg, 222, 12);
    checkbox(page, bx + 8, sy - 76);
    txt(page, "This applies to me", bx + 22, sy - 70, 8.5, BODY_TEXT, reg);
    if (i % 2 !== 0) { sx = 50; }
  }

  txt(page, "Ask your benefits administrator", 50, 218, 12, NAVY_MID, bold);
  const adminQs = [
    "Which coverage pays first after I turn 65?",
    "Is the prescription coverage creditable for Part D?",
    "Will my spouse or dependents lose coverage if I enroll?",
    "What documentation should I keep for a later Special Enrollment Period?",
  ];
  let aqy = 200;
  for (let i = 0; i < adminQs.length; i++) {
    const bx = i % 2 === 0 ? 50 : 330;
    if (i % 2 === 0 && i > 0) aqy -= 22;
    checkbox(page, bx, aqy);
    txt(page, adminQs[i], bx + 14, aqy + 8, 8.5, BODY_TEXT, reg);
  }
}

// Page 5: Key Dates
async function buildKeyDates(pdfDoc: PDFDocument, dates: Dates) {
  const page = pdfDoc.addPage([612, 792]);
  const bold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const reg  = await pdfDoc.embedFont(StandardFonts.Helvetica);
  await pageHeader(pdfDoc, page, "Key Dates", 5, 14);

  txt(page, "Write down your key dates", 50, 720, 22, NAVY, bold);
  multiline(page, "A deadline you can see is much harder to miss. Confirm these entries using Medicare.gov or Social Security before relying on them.", reg, 10, 50, 700, BODY_TEXT, 512, 14);

  // Pre-filled fields
  const preFields = [
    { label: "DATE OF BIRTH", value: fmtShort(dates.dob) },
    { label: "MONTH YOU TURN 65", value: fmtMonthYear(dates.birthday65) },
    { label: "IEP BEGINS", value: fmtShort(dates.iepStart) },
    { label: "IEP ENDS", value: fmtShort(dates.iepEnd) },
  ];
  let fy = 658;
  for (let i = 0; i < preFields.length; i++) {
    const fx = i % 2 === 0 ? 50 : 330;
    if (i % 2 === 0 && i > 0) fy -= 56;
    txt(page, preFields[i].label, fx, fy + 10, 7.5, MID_GRAY, bold);
    rect(page, fx, fy - 12, 240, 20, WHITE);
    borderRect(page, fx, fy - 12, 240, 20, RULE_CLR);
    txt(page, preFields[i].value, fx + 6, fy - 4, 10, DARK_TEXT, reg);
  }

  // Blank fields
  const blankFields = ["CURRENT COVERAGE ENDS", "PLANNED RETIREMENT DATE", "DESIRED MEDICARE START", "CONFIRMED EFFECTIVE DATE"];
  let bfy = fy - 70;
  for (let i = 0; i < blankFields.length; i++) {
    const fx = i % 2 === 0 ? 50 : 330;
    if (i % 2 === 0 && i > 0) bfy -= 56;
    txt(page, blankFields[i], fx, bfy + 10, 7.5, MID_GRAY, bold);
    rect(page, fx, bfy - 12, 240, 20, WHITE);
    borderRect(page, fx, bfy - 12, 240, 20, RULE_CLR);
  }

  // IEP note
  rect(page, 50, bfy - 80, 512, 36, NOTE_BG);
  rect(page, 50, bfy - 80, 3, 36, NAVY_MID);
  multiline(page, "Your Initial Enrollment Period generally lasts seven months: the three months before your birthday month, the birthday month and the three months after it.", reg, 8.5, 62, bfy - 50, BODY_TEXT, 490, 12);

  // Three deadline cards
  const deadlines = [
    { num: "1", label: "PART B AFTER ACTIVE EMPLOYMENT", body: "A common Special Enrollment Period lasts eight months after employment or qualifying group coverage ends, whichever happens first. COBRA does not stop this clock.", color: RED_DARK },
    { num: "2", label: "MEDIGAP OPEN ENROLLMENT", body: `The federal six-month Medigap window starts the first month you are 65 or older and have Part B (${fmtMonthYear(dates.medigapStart)} through ${fmtMonthYear(dates.medigapEnd)}). After it, options may be limited or cost more.`, color: TEAL },
    { num: "3", label: "PART D CREDITABLE COVERAGE", body: `Going 63 days or more without Part D or other creditable prescription coverage can trigger a late penalty when you enroll later. Deadline: ${fmtFull(dates.partDDeadline)}.`, color: ORANGE },
  ];
  let dy = bfy - 108;
  for (const d of deadlines) {
    rect(page, 50, dy - 52, 512, 60, LIGHT_BG);
    borderRect(page, 50, dy - 52, 512, 60, RULE_CLR);
    page.drawEllipse({ x: 68, y: dy + 2, xScale: 12, yScale: 12, color: d.color });
    txt(page, d.num, 64, dy - 3, 10, WHITE, bold);
    txt(page, d.label, 88, dy + 4, 8, d.color, bold);
    multiline(page, d.body, 88, dy - 10, 8.5, BODY_TEXT, reg, 460, 12);
    dy -= 72;
  }
}

// Page 6: Coverage Comparison
async function buildCoverageComparison(pdfDoc: PDFDocument) {
  const page = pdfDoc.addPage([612, 792]);
  const bold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const reg  = await pdfDoc.embedFont(StandardFonts.Helvetica);
  await pageHeader(pdfDoc, page, "Coverage Comparison", 6, 14);

  txt(page, "Compare your two main coverage paths", 50, 720, 20, NAVY, bold);
  multiline(page, "Compare access, costs, prescriptions, travel and plan rules before choosing a path.", reg, 10, 50, 700, BODY_TEXT, 512, 14);

  // Table header
  rect(page, 50, 660, 512, 28, NAVY);
  txt(page, "FACTOR", 60, 670, 8.5, WHITE, bold);
  txt(page, "ORIGINAL MEDICARE + Medigap + Part D", 200, 670, 8.5, WHITE, bold);
  txt(page, "MEDICARE ADVANTAGE", 430, 670, 8.5, GOLD, bold);

  const rows = [
    ["Doctors", "Any doctor accepting Medicare nationwide", "Usually network-based; out-of-network may cost more"],
    ["Specialists", "No referral usually needed", "Some plans require referrals from a primary doctor"],
    ["Drug coverage", "Separate Part D plan required", "Most plans include Part D drug coverage"],
    ["Cost structure", "No annual out-of-pocket limit without Medigap", "Has an annual out-of-pocket limit for covered services"],
    ["Extra benefits", "Dental, vision and hearing usually not included", "Many plans include dental, vision and hearing extras"],
    ["Prior auth", "Less common for most services", "Prior authorization may be required for some services"],
    ["Travel", "Broad access anywhere Medicare is accepted", "Routine care may be limited to the plan service area"],
  ];

  let ty = 650;
  for (let i = 0; i < rows.length; i++) {
    const bg = i % 2 === 0 ? WHITE : LIGHT_BG;
    rect(page, 50, ty - 24, 512, 32, bg);
    borderRect(page, 50, ty - 24, 512, 32, RULE_CLR, 0.5);
    rect(page, 190, ty - 24, 1, 32, RULE_CLR);
    rect(page, 420, ty - 24, 1, 32, RULE_CLR);
    txt(page, rows[i][0], 58, ty - 6, 9, DARK_TEXT, bold);
    multiline(page, rows[i][1], 198, ty - 4, 8, BODY_TEXT, reg, 214, 11);
    multiline(page, rows[i][2], 428, ty - 4, 8, BODY_TEXT, reg, 130, 11);
    ty -= 34;
  }

  // Priorities
  txt(page, "Choose your top three priorities:", 50, ty - 18, 11, DARK_TEXT, bold);
  const priorities = [
    "Broad provider access", "Low monthly premium",
    "Predictable healthcare spending", "Prescription fit",
    "Travel flexibility", "Dental, vision or hearing extras",
  ];
  let py2 = ty - 38;
  for (let i = 0; i < priorities.length; i++) {
    const bx = i % 2 === 0 ? 50 : 330;
    if (i % 2 === 0 && i > 0) py2 -= 22;
    checkbox(page, bx, py2);
    txt(page, priorities[i], bx + 14, py2 + 8, 9, BODY_TEXT, reg);
  }

  txt(page, "Comparison summarized from Medicare.gov. Plan rules, benefits, networks and costs vary by plan and location.", 50, 48, 7, MID_GRAY, reg);
}

// Page 7: Doctor and Care Inventory
async function buildDoctorInventory(pdfDoc: PDFDocument) {
  const page = pdfDoc.addPage([612, 792]);
  const bold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const reg  = await pdfDoc.embedFont(StandardFonts.Helvetica);
  await pageHeader(pdfDoc, page, "Doctor Inventory", 7, 14);

  txt(page, "Your doctors and care inventory", 50, 720, 22, NAVY, bold);
  multiline(page, "List every provider before you compare plans. A plan that excludes one key doctor can cost more than a higher-premium option that keeps them in network.", reg, 10, 50, 700, BODY_TEXT, 512, 14);

  // Table header
  rect(page, 50, 658, 512, 24, NAVY);
  const cols = [
    { label: "Doctor / provider", x: 58, w: 120 },
    { label: "Specialty", x: 186, w: 80 },
    { label: "City", x: 274, w: 70 },
    { label: "Medicare / network status", x: 352, w: 120 },
    { label: "Checked on", x: 480, w: 74 },
  ];
  for (const c of cols) txt(page, c.label, c.x, 665, 7.5, WHITE, bold);

  let ry = 648;
  for (let i = 0; i < 7; i++) {
    const bg = i % 2 === 0 ? WHITE : LIGHT_BG;
    rect(page, 50, ry - 20, 512, 26, bg);
    borderRect(page, 50, ry - 20, 512, 26, RULE_CLR, 0.5);
    for (const c of cols) rect(page, c.x - 2, ry - 20, 1, 26, RULE_CLR);
    ry -= 28;
  }

  txt(page, "Other care preferences", 50, ry - 18, 12, NAVY_MID, bold);
  const otherFields = [
    "Preferred hospital",
    "Preferred pharmacy",
    "Equipment / supply provider",
    "Rehab / skilled nursing facility",
    "Upcoming tests or procedures",
  ];
  let ofy = ry - 38;
  for (let i = 0; i < otherFields.length; i++) {
    const fx = i % 2 === 0 ? 50 : 330;
    if (i % 2 === 0 && i > 0) ofy -= 44;
    txt(page, otherFields[i].toUpperCase(), fx, ofy + 8, 7, MID_GRAY, bold);
    rect(page, fx, ofy - 10, 240, 18, WHITE);
    borderRect(page, fx, ofy - 10, 240, 18, RULE_CLR);
  }

  rect(page, 50, ofy - 60, 512, 36, NOTE_BG);
  rect(page, 50, ofy - 60, 3, 36, NAVY_MID);
  multiline(page, "Check each doctor's Medicare participation status at medicare.gov/care-compare before comparing plans. Providers can change their status.", reg, 8.5, 62, ofy - 32, BODY_TEXT, 490, 12);
}

// Page 8: Prescription Inventory
async function buildRxInventory(pdfDoc: PDFDocument) {
  const page = pdfDoc.addPage([612, 792]);
  const bold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const reg  = await pdfDoc.embedFont(StandardFonts.Helvetica);
  await pageHeader(pdfDoc, page, "Prescription Inventory", 8, 14);

  txt(page, "Your prescription inventory", 50, 720, 22, NAVY, bold);
  multiline(page, "Use the exact drug name, dose and frequency. A plan that covers one strength or form may not cover another.", reg, 10, 50, 700, BODY_TEXT, 512, 14);

  // Table header
  rect(page, 50, 658, 512, 24, NAVY);
  const rxCols = [
    { label: "Drug name", x: 58, w: 120 },
    { label: "Dose", x: 186, w: 60 },
    { label: "How often", x: 254, w: 80 },
    { label: "Pharmacy", x: 342, w: 100 },
    { label: "Tier / cost / notes", x: 450, w: 104 },
  ];
  for (const c of rxCols) txt(page, c.label, c.x, 665, 7.5, WHITE, bold);

  let ry = 648;
  for (let i = 0; i < 7; i++) {
    const bg = i % 2 === 0 ? WHITE : LIGHT_BG;
    rect(page, 50, ry - 20, 512, 26, bg);
    borderRect(page, 50, ry - 20, 512, 26, RULE_CLR, 0.5);
    for (const c of rxCols) rect(page, c.x - 2, ry - 20, 1, 26, RULE_CLR);
    ry -= 28;
  }

  txt(page, "Check each plan for", 50, ry - 18, 12, NAVY_MID, bold);
  const planChecks = [
    "Every drug is on the formulary",
    "Your pharmacy is preferred or in network",
    "Prior authorization requirements",
    "Step therapy requirements",
    "Quantity limits",
    "Mail-order rules and prices",
  ];
  let pcy = ry - 38;
  for (let i = 0; i < planChecks.length; i++) {
    const bx = i % 2 === 0 ? 50 : 330;
    if (i % 2 === 0 && i > 0) pcy -= 22;
    checkbox(page, bx, pcy);
    txt(page, planChecks[i], bx + 14, pcy + 8, 9, BODY_TEXT, reg);
  }

  rect(page, 50, pcy - 50, 512, 36, NOTE_BG);
  rect(page, 50, pcy - 50, 3, 36, TEAL);
  multiline(page, "For 2026, annual out-of-pocket spending on covered Part D drugs is capped at $2,100. Premiums, non-covered drugs and certain other costs do not count toward that cap.", reg, 8.5, 62, pcy - 22, BODY_TEXT, 490, 12);

  txt(page, "QUESTIONS TO ASK THE PLAN OR AGENT", 50, pcy - 72, 7.5, MID_GRAY, bold);
  rect(page, 50, pcy - 100, 512, 24, WHITE);
  borderRect(page, 50, pcy - 100, 512, 24, RULE_CLR);
}

// Page 9: Cost Comparison
async function buildCostComparison(pdfDoc: PDFDocument) {
  const page = pdfDoc.addPage([612, 792]);
  const bold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const reg  = await pdfDoc.embedFont(StandardFonts.Helvetica);
  await pageHeader(pdfDoc, page, "Cost Comparison", 9, 14);

  txt(page, "Compare your true Medicare costs", 50, 720, 22, NAVY, bold);
  multiline(page, "Compare premiums, expected care costs and high-use-year exposure.", reg, 10, 50, 700, BODY_TEXT, 512, 14);

  // Table header
  rect(page, 50, 660, 512, 28, NAVY);
  txt(page, "ANNUAL COST CATEGORY", 58, 670, 8, WHITE, bold);
  txt(page, "OPTION A", 310, 674, 8, WHITE, bold);
  txt(page, "Original + supplement + Part D", 290, 663, 7, rgb(0.75, 0.8, 0.95), reg);
  txt(page, "OPTION B", 450, 674, 8, GOLD, bold);
  txt(page, "Medicare Advantage", 435, 663, 7, rgb(0.75, 0.8, 0.95), reg);

  const costRows = [
    "Part B premium (12 months)",
    "Plan / Medigap premiums",
    "Part D or drug-plan premiums",
    "Expected prescription costs",
    "Expected visits and copays",
    "Dental, vision and hearing",
    "Travel / out-of-network exposure",
    "Estimated annual total",
  ];
  let cry = 648;
  for (let i = 0; i < costRows.length; i++) {
    const isTotalRow = i === costRows.length - 1;
    const bg = isTotalRow ? rgb(0.93, 0.95, 1.0) : (i % 2 === 0 ? WHITE : LIGHT_BG);
    rect(page, 50, cry - 22, 512, 28, bg);
    borderRect(page, 50, cry - 22, 512, 28, RULE_CLR, 0.5);
    rect(page, 280, cry - 22, 1, 28, RULE_CLR);
    rect(page, 420, cry - 22, 1, 28, RULE_CLR);
    const font = isTotalRow ? bold : reg;
    txt(page, costRows[i], 58, cry - 6, isTotalRow ? 9.5 : 9, isTotalRow ? NAVY : DARK_TEXT, font);
    // blank fill boxes
    rect(page, 288, cry - 16, 120, 18, WHITE);
    borderRect(page, 288, cry - 16, 120, 18, RULE_CLR);
    rect(page, 428, cry - 16, 120, 18, WHITE);
    borderRect(page, 428, cry - 16, 120, 18, RULE_CLR);
    cry -= 30;
  }

  txt(page, "High-use-year reality check", 50, cry - 18, 12, NAVY_MID, bold);
  const realityLabels = ["OPTION A: LIKELY MAXIMUM EXPOSURE", "OPTION B: PLAN OUT-OF-POCKET MAXIMUM"];
  for (let i = 0; i < 2; i++) {
    const bx = i === 0 ? 50 : 330;
    txt(page, realityLabels[i], bx, cry - 36, 7, MID_GRAY, bold);
    rect(page, bx, cry - 62, 240, 22, WHITE);
    borderRect(page, bx, cry - 62, 240, 22, RULE_CLR);
  }

  rect(page, 50, cry - 100, 512, 36, NOTE_BG);
  rect(page, 50, cry - 100, 3, 36, RED_DARK);
  multiline(page, "Original Medicare has no annual out-of-pocket limit unless you have other coverage, such as Medigap, Medicaid or employer coverage. Medicare Advantage plans have annual limits for covered Part A and Part B services.", reg, 8.5, 62, cry - 72, BODY_TEXT, 490, 12);

  multiline(page, "Planning formula: annual premiums + likely prescriptions + routine cost sharing + a realistic amount for unexpected care. Compare the result with your emergency savings and monthly budget.", reg, 8.5, 50, cry - 118, BODY_TEXT, 512, 12);
}

// Page 10: Seven Mistakes Part 1 (mistakes 1-4)
async function buildMistakesPart1(pdfDoc: PDFDocument) {
  const page = pdfDoc.addPage([612, 792]);
  const bold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const reg  = await pdfDoc.embedFont(StandardFonts.Helvetica);
  await pageHeader(pdfDoc, page, "Costly Mistakes", 10, 14);

  txt(page, "Seven expensive Medicare mistakes", 50, 720, 22, NAVY, bold);
  multiline(page, "Most Medicare problems start with one bad assumption. Use this list as a final check before you enroll or delay coverage.", reg, 10, 50, 700, BODY_TEXT, 512, 14);

  const mistakes = [
    {
      num: "1", color: NAVY_MID,
      title: "Treating COBRA like active-employer coverage",
      why: "The Part B Special Enrollment Period generally starts when active employment ends, even if COBRA continues.",
      doThis: "Record the employment end date and confirm your Part B deadline.",
    },
    {
      num: "2", color: TEAL,
      title: "Ignoring the HSA and Medicare timing conflict",
      why: "Medicare enrollment can make HSA contributions ineligible, and Part A can be retroactive when you enroll after 65.",
      doThis: "Coordinate Medicare, Social Security and HSA dates with qualified tax guidance.",
    },
    {
      num: "3", color: ORANGE,
      title: "Choosing a plan because the premium is $0",
      why: "Premiums are only one cost. Copays, coinsurance, drug costs, networks and the annual maximum can matter more.",
      doThis: "Complete the true-cost worksheet on page 9 before comparing plans.",
    },
    {
      num: "4", color: RED_DARK,
      title: "Checking doctors but forgetting prescriptions",
      why: "A plan can fit your doctors and still make an important drug expensive or subject to restrictions.",
      doThis: "Check every drug, dose, pharmacy, tier and coverage rule.",
    },
  ];

  let my = 668;
  for (const m of mistakes) {
    rect(page, 50, my - 74, 512, 82, LIGHT_BG);
    borderRect(page, 50, my - 74, 512, 82, RULE_CLR);
    page.drawEllipse({ x: 68, y: my + 2, xScale: 12, yScale: 12, color: m.color });
    txt(page, m.num, 64, my - 3, 10, WHITE, bold);
    txt(page, m.title, 88, my + 4, 11, DARK_TEXT, bold);
    txt(page, "WHY IT MATTERS", 88, my - 12, 7.5, m.color, bold);
    multiline(page, m.why, 88, my - 26, 8.5, BODY_TEXT, reg, 460, 12);
    txt(page, "DO THIS", 88, my - 52, 7.5, NAVY_MID, bold);
    txt(page, m.doThis, 130, my - 52, 8.5, BODY_TEXT, reg);
    my -= 100;
  }
}

// Page 11: Seven Mistakes Part 2 + Questions
async function buildMistakesPart2(pdfDoc: PDFDocument) {
  const page = pdfDoc.addPage([612, 792]);
  const bold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const reg  = await pdfDoc.embedFont(StandardFonts.Helvetica);
  await pageHeader(pdfDoc, page, "Questions to Ask", 11, 14);

  txt(page, "Finish the mistake check", 50, 720, 22, NAVY, bold);
  multiline(page, "Then use the questions below to make sure a plan comparison addresses the issues that actually affect you.", reg, 10, 50, 700, BODY_TEXT, 512, 14);

  const mistakes = [
    {
      num: "5", color: NAVY,
      title: "Assuming Medicare enrollment is automatic",
      why: "Automatic enrollment depends on your situation. Waiting for a card that is not coming can create a coverage gap.",
      doThis: "Verify your enrollment status with Social Security.",
    },
    {
      num: "6", color: TEAL,
      title: "Missing the one-time Medigap window",
      why: "After the federal six-month open enrollment period, insurers may be able to use medical underwriting in many situations.",
      doThis: "Write down the month your Part B coverage starts.",
    },
    {
      num: "7", color: ORANGE,
      title: "Dropping other coverage before confirming new dates",
      why: "Part A, Part B, Part D and private coverage can have different effective dates.",
      doThis: "Keep proof of every effective date before canceling current coverage.",
    },
  ];

  let my = 668;
  for (const m of mistakes) {
    rect(page, 50, my - 74, 512, 82, LIGHT_BG);
    borderRect(page, 50, my - 74, 512, 82, RULE_CLR);
    page.drawEllipse({ x: 68, y: my + 2, xScale: 12, yScale: 12, color: m.color });
    txt(page, m.num, 64, my - 3, 10, WHITE, bold);
    txt(page, m.title, 88, my + 4, 11, DARK_TEXT, bold);
    txt(page, "WHY IT MATTERS", 88, my - 12, 7.5, m.color, bold);
    multiline(page, m.why, 88, my - 26, 8.5, BODY_TEXT, reg, 460, 12);
    txt(page, "DO THIS", 88, my - 52, 7.5, NAVY_MID, bold);
    txt(page, m.doThis, 130, my - 52, 8.5, BODY_TEXT, reg);
    my -= 100;
  }

  txt(page, "Questions to ask a licensed agent", 50, my - 18, 12, NAVY_MID, bold);
  const agentQs = [
    "Are all my doctors and hospitals covered?",
    "Could I face underwriting if I switch later?",
    "Are all my prescriptions on the formulary?",
    "Which benefits can change each year?",
    "What needs prior authorization?",
    "Are my pharmacies preferred or in network?",
    "What is my realistic high-use-year cost?",
    "How does the plan handle specialist care?",
    "What happens when I travel or move?",
    "What enrollment deadline applies to me?",
  ];
  let qy = my - 40;
  for (let i = 0; i < agentQs.length; i++) {
    const bx = i % 2 === 0 ? 50 : 330;
    if (i % 2 === 0 && i > 0) qy -= 22;
    checkbox(page, bx, qy);
    txt(page, agentQs[i], bx + 14, qy + 8, 8.5, BODY_TEXT, reg);
  }
}

// Page 12: One-Page Action Plan
async function buildActionPlan(pdfDoc: PDFDocument, firstName: string, dates: Dates) {
  const page = pdfDoc.addPage([612, 792]);
  const bold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const reg  = await pdfDoc.embedFont(StandardFonts.Helvetica);
  await pageHeader(pdfDoc, page, "Action Plan", 12, 14);

  txt(page, "Your one-page Medicare action plan", 50, 720, 22, NAVY, bold);
  multiline(page, "Turn the research into a short list of decisions, owners and dates. Keep a copy of every confirmation you receive.", reg, 10, 50, 700, BODY_TEXT, 512, 14);

  // Top fields
  const topFields = ["MY PRIMARY COVERAGE GOAL", "MY TARGET DECISION DATE", "COVERAGE PATHS I WILL COMPARE", "AGENT / BENEFITS APPOINTMENT"];
  let tfy = 658;
  for (let i = 0; i < topFields.length; i++) {
    const fx = i % 2 === 0 ? 50 : 330;
    if (i % 2 === 0 && i > 0) tfy -= 48;
    txt(page, topFields[i], fx, tfy + 8, 7, MID_GRAY, bold);
    rect(page, fx, tfy - 12, 240, 20, WHITE);
    borderRect(page, fx, tfy - 12, 240, 20, RULE_CLR);
  }

  // Action table
  const tableY = tfy - 50;
  rect(page, 50, tableY - 24, 512, 28, NAVY);
  txt(page, "NEXT ACTION", 58, tableY - 8, 8, WHITE, bold);
  txt(page, "OWNER", 310, tableY - 8, 8, WHITE, bold);
  txt(page, "DUE DATE", 400, tableY - 8, 8, WHITE, bold);
  txt(page, "DONE", 510, tableY - 8, 8, WHITE, bold);

  let ary = tableY - 30;
  for (let i = 0; i < 6; i++) {
    const bg = i % 2 === 0 ? WHITE : LIGHT_BG;
    rect(page, 50, ary - 20, 512, 28, bg);
    borderRect(page, 50, ary - 20, 512, 28, RULE_CLR, 0.5);
    rect(page, 300, ary - 20, 1, 28, RULE_CLR);
    rect(page, 390, ary - 20, 1, 28, RULE_CLR);
    rect(page, 500, ary - 20, 1, 28, RULE_CLR);
    checkbox(page, 510, ary - 10);
    ary -= 30;
  }

  txt(page, "NOTES AND CONFIRMATIONS", 50, ary - 18, 7.5, MID_GRAY, bold);
  rect(page, 50, ary - 60, 512, 38, WHITE);
  borderRect(page, 50, ary - 60, 512, 38, RULE_CLR);

  rect(page, 50, ary - 100, 512, 36, NOTE_BG);
  rect(page, 50, ary - 100, 3, 36, GOLD);
  multiline(page, "Keep copies of enrollment confirmations, employer coverage records, creditable drug coverage notices and plan effective dates.", reg, 8.5, 62, ary - 72, BODY_TEXT, 490, 12);
}

// Page 13: Glossary
async function buildGlossary(pdfDoc: PDFDocument) {
  const page = pdfDoc.addPage([612, 792]);
  const bold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const reg  = await pdfDoc.embedFont(StandardFonts.Helvetica);
  await pageHeader(pdfDoc, page, "Glossary", 13, 14);

  txt(page, "Plain-English Medicare glossary", 50, 720, 22, NAVY, bold);
  multiline(page, "These are the terms most likely to affect enrollment, access or cost. Keep this page nearby while comparing coverage.", reg, 10, 50, 700, BODY_TEXT, 512, 14);

  const terms = [
    { term: "Assignment", def: "An agreement by a provider to accept the Medicare-approved amount as full payment for a covered service." },
    { term: "IRMAA", def: "An income-related surcharge that some higher-income beneficiaries pay for Part B and Part D." },
    { term: "Coinsurance", def: "A percentage of the approved cost you pay after any deductible is met." },
    { term: "Maximum out-of-pocket", def: "The most a Medicare Advantage plan requires you to pay in a year for covered Part A and Part B services." },
    { term: "Copayment", def: "A fixed amount you pay for a covered service, visit or prescription." },
    { term: "Medigap", def: "Private insurance that works with Original Medicare to help pay certain deductibles, copays and coinsurance." },
    { term: "Creditable drug coverage", def: "Prescription coverage expected to pay, on average, at least as much as standard Medicare drug coverage." },
    { term: "Network", def: "The providers and facilities contracted with a plan to deliver care at specified rates." },
    { term: "Deductible", def: "The amount you pay before a plan begins sharing certain covered costs." },
    { term: "Prior authorization", def: "Approval a plan may require before it covers certain services, supplies or drugs." },
    { term: "Formulary", def: "A plan's list of covered prescription drugs, often organized into pricing tiers." },
    { term: "Service area", def: "The geographic area where a health plan accepts members and usually provides routine care." },
    { term: "Guaranteed issue right", def: "A protection requiring an insurer to sell you certain Medigap policies in qualifying situations." },
    { term: "Special Enrollment Period", def: "A limited period to enroll in or change coverage after a qualifying event or circumstance." },
  ];

  let gy = 668;
  for (let i = 0; i < terms.length; i++) {
    const bx = i % 2 === 0 ? 50 : 330;
    if (i % 2 === 0 && i > 0) gy -= 60;
    rect(page, bx, gy - 48, 238, 56, LIGHT_BG);
    borderRect(page, bx, gy - 48, 238, 56, RULE_CLR);
    txt(page, terms[i].term, bx + 8, gy + 2, 10, DARK_TEXT, bold);
    multiline(page, terms[i].def, bx + 8, gy - 14, 8.5, BODY_TEXT, reg, 220, 12);
  }

  rect(page, 50, 60, 512, 36, NOTE_BG);
  rect(page, 50, 60, 3, 36, ORANGE);
  multiline(page, "If a term appears in a plan document and you are unsure what it means for your costs or access, ask for a plain-language example using your own doctors and prescriptions.", reg, 8.5, 62, 88, BODY_TEXT, 490, 12);
}

// Page 14: Sources and Next Step
async function buildSources(pdfDoc: PDFDocument, logoBytes: Uint8Array) {
  const page = pdfDoc.addPage([612, 792]);
  const bold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const reg  = await pdfDoc.embedFont(StandardFonts.Helvetica);
  await pageHeader(pdfDoc, page, "Sources and Next Step", 14, 14);

  txt(page, "Official sources and your next step", 50, 720, 22, NAVY, bold);
  multiline(page, "Medicare rules and plan details can change. Use these official pages to verify information before making a coverage decision.", reg, 10, 50, 700, BODY_TEXT, 512, 14);

  const sources = [
    "[1] Medicare.gov: When can I sign up for Medicare?",
    "[2] Medicare.gov: When does Medicare coverage start?",
    "[3] Medicare.gov: Working past 65",
    "[4] Social Security: When to sign up for Medicare",
    "[5] Medicare.gov: Compare Original Medicare and Medicare Advantage",
    "[6] Medicare.gov: Get ready to buy a Medigap policy",
    "[7] Medicare.gov: Part D late enrollment penalty",
    "[8] CMS: 2026 Medicare Parts A and B premiums and deductibles",
    "[9] CMS: Final CY 2026 Part D redesign instructions",
    "[10] Medicare.gov: Who pays first?",
  ];

  let sy = 668;
  for (const s of sources) {
    page.drawEllipse({ x: 58, y: sy + 3, xScale: 4, yScale: 4, color: NAVY_MID });
    txt(page, s, 70, sy, 9.5, BODY_TEXT, reg);
    sy -= 20;
  }

  // CTA box
  rect(page, 50, sy - 70, 512, 80, NAVY);
  txt(page, "Ready to compare your options?", 66, sy - 20, 14, WHITE, bold);
  multiline(page, "A licensed Medicare agent can review your completed workbook and compare coverage against your doctors, prescriptions, budget and priorities.", reg, 9, 66, sy - 38, rgb(0.78, 0.83, 0.94), 480, 13);
  rect(page, 66, sy - 72, 160, 20, GOLD);
  txt(page, "medicareinfopro.com", 74, sy - 65, 9, NAVY, bold);
  txt(page, "813-699-5559", 260, sy - 65, 11, GOLD, bold);

  // Disclosure
  rect(page, 50, sy - 120, 512, 1, RULE_CLR);
  txt(page, "IMPORTANT DISCLOSURE", 50, sy - 132, 7.5, NAVY_MID, bold);
  multiline(page, "This workbook is for educational purposes only. It is not legal, tax or medical advice and does not determine eligibility, benefits or plan availability. Confirm dates and coverage with Medicare, Social Security, your employer benefits administrator or a licensed insurance agent. Plan benefits, costs, formularies and networks vary and may change.", reg, 7.5, 50, sy - 148, BODY_TEXT, 512, 11);
  multiline(page, "Medicare Information Pro is a licensed insurance agency. We are not affiliated with or endorsed by Medicare or any government agency. Medicare has neither reviewed nor endorsed this information.", reg, 7.5, 50, sy - 188, BODY_TEXT, 512, 11);

  txt(page, "Sources reviewed July 2026", 50, 36, 7.5, MID_GRAY, reg);
}

// ── Main Route Handler ─────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, dob, email } = body as {
      firstName: string; lastName: string; dob: string; email: string;
    };

    if (!firstName || !lastName || !dob || !email) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const dobDate = new Date(dob + "T12:00:00");
    if (isNaN(dobDate.getTime())) {
      return NextResponse.json({ error: "Invalid date of birth." }, { status: 400 });
    }

    const dates = calcDates(dobDate);

    let logoBytes: Uint8Array;
    try {
      const res = await fetch("https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/logo-white_bb567c3d.png");
      logoBytes = new Uint8Array(await res.arrayBuffer());
    } catch { logoBytes = new Uint8Array(0); }

    const pdfDoc = await PDFDocument.create();
    pdfDoc.setTitle(`Medicare Decision Kit — ${firstName} ${lastName}`);
    pdfDoc.setAuthor("Medicare Information Pro");
    pdfDoc.setSubject("Personalized Medicare Decision Kit");
    pdfDoc.setCreator("medicareinfopro.com");

    await buildCover(pdfDoc, firstName, lastName, dates, logoBytes);
    await buildSnapshot(pdfDoc);
    await buildTimeline(pdfDoc, firstName, dates);
    await buildEnrollmentPath(pdfDoc);
    await buildKeyDates(pdfDoc, dates);
    await buildCoverageComparison(pdfDoc);
    await buildDoctorInventory(pdfDoc);
    await buildRxInventory(pdfDoc);
    await buildCostComparison(pdfDoc);
    await buildMistakesPart1(pdfDoc);
    await buildMistakesPart2(pdfDoc);
    await buildActionPlan(pdfDoc, firstName, dates);
    await buildGlossary(pdfDoc);
    await buildSources(pdfDoc, logoBytes);

    const pdfBytes = await pdfDoc.save();

    // HubSpot submission (fire-and-forget)
    const hsUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${HS_PORTAL_ID}/${HS_FORM_ID}`;
    fetch(hsUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fields: [
          { name: "email",     value: email },
          { name: "firstname", value: firstName },
          { name: "lastname",  value: lastName },
          { name: "message",   value: `Source: Medicare Decision Kit Download\nDate of Birth: ${dob}` },
        ],
        context: { pageUri: "https://medicareinfopro.com/free-medicare-kit", pageName: "Free Medicare Kit" },
      }),
    }).catch(() => {});

    return new NextResponse(pdfBytes, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="Medicare-Decision-Kit-${firstName}.pdf"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("[generate-kit]", err);
    return NextResponse.json({ error: "Failed to generate PDF." }, { status: 500 });
  }
}
