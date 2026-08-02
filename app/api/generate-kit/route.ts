import { NextRequest, NextResponse } from "next/server";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

// ── HubSpot ────────────────────────────────────────────────────────────────────
const HS_PORTAL_ID = "246426534";
const HS_FORM_ID = "1afd1c7a-145b-426b-a40d-f2df27790c75";

// ── MIP Brand Colors (0-1 scale for pdf-lib) ──────────────────────────────────
const NAVY = rgb(0.039, 0.086, 0.235);       // #0a163c
const NAVY_MID = rgb(0.102, 0.247, 0.659);   // #1a3fa8
const GOLD = rgb(0.961, 0.784, 0.255);       // #f5c842
const WHITE = rgb(1, 1, 1);
const LIGHT_GRAY = rgb(0.973, 0.976, 0.988); // #f8f9fc
const MID_GRAY = rgb(0.6, 0.6, 0.65);
const DARK_TEXT = rgb(0.1, 0.1, 0.15);
const BODY_TEXT = rgb(0.3, 0.3, 0.38);

// ── Date Helpers ───────────────────────────────────────────────────────────────
function addMonths(date: Date, months: number): Date {
  const d = new Date(date);
  d.setMonth(d.getMonth() + months);
  return d;
}

function formatMonthYear(date: Date): string {
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

function formatFullDate(date: Date): string {
  return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

interface EnrollmentDates {
  birthday65: Date;
  iepStart: Date;
  iepEnd: Date;
  medigapWindowStart: Date;
  medigapWindowEnd: Date;
  partDDeadline: Date;
  learnBasicsDate: Date;
  checkWorkCoverageDate: Date;
}

function calculateDates(dob: Date): EnrollmentDates {
  // 65th birthday
  const birthday65 = new Date(dob);
  birthday65.setFullYear(dob.getFullYear() + 65);

  // IEP: 3 months before birthday month through 3 months after
  const iepStart = new Date(birthday65.getFullYear(), birthday65.getMonth() - 3, 1);
  const iepEnd = new Date(birthday65.getFullYear(), birthday65.getMonth() + 4, 0); // last day of 3rd month after

  // Medigap Open Enrollment: starts first day of birthday month, lasts 6 months
  const medigapWindowStart = new Date(birthday65.getFullYear(), birthday65.getMonth(), 1);
  const medigapWindowEnd = new Date(birthday65.getFullYear(), birthday65.getMonth() + 6, 0);

  // Part D: enroll within 63 days of Part B start to avoid penalty
  const partDDeadline = new Date(iepEnd);
  partDDeadline.setDate(partDDeadline.getDate() + 63);

  // Learn basics: 12 months before 65th birthday
  const learnBasicsDate = addMonths(birthday65, -12);

  // Check work coverage: 6 months before 65th birthday
  const checkWorkCoverageDate = addMonths(birthday65, -6);

  return {
    birthday65,
    iepStart,
    iepEnd,
    medigapWindowStart,
    medigapWindowEnd,
    partDDeadline,
    learnBasicsDate,
    checkWorkCoverageDate,
  };
}

// ── Drawing Helpers ────────────────────────────────────────────────────────────
function drawRect(
  page: ReturnType<PDFDocument["addPage"]>,
  x: number, y: number, w: number, h: number,
  color: ReturnType<typeof rgb>
) {
  page.drawRectangle({ x, y, width: w, height: h, color });
}

function drawText(
  page: ReturnType<PDFDocument["addPage"]>,
  text: string,
  x: number, y: number,
  size: number,
  color: ReturnType<typeof rgb>,
  font: Awaited<ReturnType<PDFDocument["embedFont"]>>
) {
  page.drawText(text, { x, y, size, color, font });
}

// Wrap text to fit within maxWidth, returns array of lines
function wrapText(text: string, font: Awaited<ReturnType<PDFDocument["embedFont"]>>, size: number, maxWidth: number): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    const test = current ? current + " " + word : word;
    if (font.widthOfTextAtSize(test, size) <= maxWidth) {
      current = test;
    } else {
      if (current) lines.push(current);
      current = word;
    }
  }
  if (current) lines.push(current);
  return lines;
}

// ── Page Builders ──────────────────────────────────────────────────────────────

// Cover Page
async function buildCoverPage(pdfDoc: PDFDocument, firstName: string, lastName: string, dates: EnrollmentDates, logoBytes: Uint8Array) {
  const page = pdfDoc.addPage([612, 792]);
  const bold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const regular = await pdfDoc.embedFont(StandardFonts.Helvetica);

  // Navy background
  drawRect(page, 0, 0, 612, 792, NAVY);

  // Gold accent bar top
  drawRect(page, 0, 770, 612, 22, GOLD);

  // Decorative circle top-right
  page.drawEllipse({ x: 560, y: 720, xScale: 70, yScale: 70, color: NAVY_MID, opacity: 0.5 });
  page.drawEllipse({ x: 590, y: 680, xScale: 40, yScale: 40, color: GOLD, opacity: 0.15 });

  // Logo
  try {
    const logoImage = await pdfDoc.embedPng(logoBytes);
    const logoDims = logoImage.scale(0.55);
    page.drawImage(logoImage, { x: 50, y: 700, width: logoDims.width, height: logoDims.height });
  } catch {
    drawText(page, "Medicare Information Pro", 50, 710, 14, GOLD, bold);
  }

  // Eyebrow label
  drawText(page, "YOUR PERSONALIZED MEDICARE WORKBOOK", 50, 640, 9, GOLD, bold);

  // Main title
  drawText(page, "The Medicare", 50, 590, 42, WHITE, bold);
  drawText(page, "Decision Kit", 50, 540, 42, GOLD, bold);

  // Subtitle
  const subtitleLines = wrapText(
    "Organize your deadlines, coverage options, and action plan before you choose coverage.",
    regular, 13, 510
  );
  let sy = 510;
  for (const line of subtitleLines) {
    drawText(page, line, 50, sy, 13, rgb(0.8, 0.85, 0.95), regular);
    sy -= 18;
  }

  // Section pills
  const pills = ["ENROLLMENT TIMELINE", "COVERAGE COMPARISON", "KEY DATES", "ACTION PLAN"];
  let px = 50;
  const py = 430;
  for (const pill of pills) {
    const pw = bold.widthOfTextAtSize(pill, 8) + 20;
    drawRect(page, px, py - 4, pw, 20, NAVY_MID);
    drawText(page, pill, px + 10, py + 2, 8, WHITE, bold);
    px += pw + 10;
    if (px > 500) { px = 50; }
  }

  // Divider
  drawRect(page, 50, 400, 512, 1, rgb(0.3, 0.4, 0.6));

  // "How to use" box
  drawRect(page, 50, 310, 512, 80, rgb(0.08, 0.15, 0.35));
  drawText(page, "How to use this kit", 66, 372, 11, GOLD, bold);
  const howLines = wrapText(
    "Complete the worksheets before you compare plans or speak with an agent. Bring the finished kit to the conversation so your options can be checked against your real healthcare needs.",
    regular, 9, 476
  );
  let hy = 355;
  for (const line of howLines) {
    drawText(page, line, 66, hy, 9, rgb(0.8, 0.85, 0.95), regular);
    hy -= 13;
  }

  // Prepared for banner
  drawRect(page, 0, 40, 612, 36, GOLD);
  const fullName = `${firstName} ${lastName}`.toUpperCase();
  const birthdayLabel = `65TH BIRTHDAY: ${formatMonthYear(dates.birthday65).toUpperCase()}`;
  drawText(page, `PREPARED FOR: ${fullName}  |  ${birthdayLabel}`, 50, 53, 9, NAVY, bold);

  // Footer
  drawText(page, "medicareinfopro.com  |  813-699-5559", 50, 20, 8, MID_GRAY, regular);
  drawText(page, "Page 1 of 6", 530, 20, 8, MID_GRAY, regular);
}

// Page header helper
async function addPageHeader(page: ReturnType<PDFDocument["addPage"]>, pdfDoc: PDFDocument, sectionLabel: string, pageNum: number) {
  const bold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const regular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  drawRect(page, 0, 762, 612, 30, WHITE);
  drawRect(page, 0, 760, 612, 2, rgb(0.88, 0.9, 0.95));
  drawText(page, "Medicare Information Pro", 50, 770, 9, NAVY_MID, bold);
  drawText(page, sectionLabel.toUpperCase(), 400, 770, 8, MID_GRAY, bold);
  drawText(page, `Page ${pageNum} of 6`, 530, 20, 8, MID_GRAY, regular);
  drawText(page, "medicareinfopro.com  |  813-699-5559", 50, 20, 8, MID_GRAY, regular);
}

// Enrollment Timeline Page
async function buildTimelinePage(pdfDoc: PDFDocument, firstName: string, dates: EnrollmentDates) {
  const page = pdfDoc.addPage([612, 792]);
  const bold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const regular = await pdfDoc.embedFont(StandardFonts.Helvetica);

  await addPageHeader(page, pdfDoc, "Enrollment Timeline", 2);

  drawText(page, `${firstName}'s Turning 65 Timeline`, 50, 720, 22, NAVY, bold);
  const subLines = wrapText("Plan early so your coverage is settled before the month Medicare should begin.", regular, 11, 512);
  let sy = 698;
  for (const l of subLines) { drawText(page, l, 50, sy, 11, BODY_TEXT, regular); sy -= 15; }

  const milestones = [
    {
      label: "12 MONTHS BEFORE",
      date: formatMonthYear(dates.learnBasicsDate),
      title: "Learn the basic paths",
      body: "Review Parts A, B, C and D. Decide whether keeping certain doctors, traveling, monthly predictability or a low premium matters most.",
      color: NAVY_MID,
    },
    {
      label: "6 MONTHS BEFORE",
      date: formatMonthYear(dates.checkWorkCoverageDate),
      title: "Check work coverage and HSA rules",
      body: "Ask your benefits administrator which plan pays first, whether your drug coverage is creditable, and what happens to dependents.",
      color: rgb(0.2, 0.6, 0.5),
    },
    {
      label: "3 MONTHS BEFORE",
      date: formatMonthYear(dates.iepStart),
      title: "Your enrollment window opens",
      body: "Your Initial Enrollment Period begins. Apply early if you want coverage ready for your eligibility month.",
      color: rgb(0.8, 0.5, 0.1),
    },
    {
      label: "BIRTHDAY MONTH",
      date: formatMonthYear(dates.birthday65),
      title: "Confirm every effective date",
      body: "Verify Part A, Part B, drug coverage and any supplemental coverage separately. Do not assume all coverage starts on the same date.",
      color: rgb(0.75, 0.2, 0.2),
    },
    {
      label: "1-3 MONTHS AFTER",
      date: formatMonthYear(dates.iepEnd),
      title: "Use the rest of your IEP carefully",
      body: "Your Initial Enrollment Period ends. Enrolling later can delay the start of coverage.",
      color: NAVY,
    },
  ];

  let my = 660;
  for (const m of milestones) {
    // Date label above
    drawText(page, `(${m.date})`, 280, my + 4, 8, MID_GRAY, regular);
    // Dot
    page.drawEllipse({ x: 75, y: my - 10, xScale: 8, yScale: 8, color: m.color });
    // Vertical line (except last)
    if (m !== milestones[milestones.length - 1]) {
      drawRect(page, 73, my - 75, 4, 65, rgb(0.85, 0.87, 0.92));
    }
    // Card
    drawRect(page, 100, my - 65, 462, 72, LIGHT_GRAY);
    drawRect(page, 100, my - 65, 3, 72, m.color);
    drawText(page, m.label, 112, my + 2, 7, m.color, bold);
    drawText(page, m.title, 112, my - 12, 11, DARK_TEXT, bold);
    const bodyLines = wrapText(m.body, regular, 9, 430);
    let by = my - 28;
    for (const bl of bodyLines) { drawText(page, bl, 112, by, 9, BODY_TEXT, regular); by -= 12; }
    my -= 110;
  }
}

// Key Dates Page
async function buildKeyDatesPage(pdfDoc: PDFDocument, firstName: string, dates: EnrollmentDates) {
  const page = pdfDoc.addPage([612, 792]);
  const bold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const regular = await pdfDoc.embedFont(StandardFonts.Helvetica);

  await addPageHeader(page, pdfDoc, "Key Dates", 3);

  drawText(page, "Write Down Your Key Dates", 50, 720, 22, NAVY, bold);
  const subLines = wrapText(`${firstName}, these dates are calculated from your date of birth. Confirm them with Medicare.gov or Social Security before relying on them.`, regular, 11, 512);
  let sy = 698;
  for (const l of subLines) { drawText(page, l, 50, sy, 11, BODY_TEXT, regular); sy -= 15; }

  const dateRows = [
    { label: "65th Birthday Month", value: formatMonthYear(dates.birthday65) },
    { label: "IEP Begins (3 months before)", value: formatMonthYear(dates.iepStart) },
    { label: "IEP Ends (3 months after)", value: formatMonthYear(dates.iepEnd) },
    { label: "Medigap Open Enrollment Opens", value: formatFullDate(dates.medigapWindowStart) },
    { label: "Medigap Open Enrollment Closes", value: formatFullDate(dates.medigapWindowEnd) },
    { label: "Part D Late Penalty Deadline", value: formatFullDate(dates.partDDeadline) },
  ];

  let ry = 640;
  for (const row of dateRows) {
    drawRect(page, 50, ry - 4, 512, 30, LIGHT_GRAY);
    drawRect(page, 50, ry - 4, 2, 30, NAVY_MID);
    drawText(page, row.label, 62, ry + 8, 10, DARK_TEXT, bold);
    drawText(page, row.value, 350, ry + 8, 10, NAVY_MID, bold);
    ry -= 38;
  }

  // Important note box
  drawRect(page, 50, ry - 50, 512, 60, rgb(0.96, 0.97, 1.0));
  drawRect(page, 50, ry - 50, 4, 60, GOLD);
  const noteLines = wrapText(
    "Your Initial Enrollment Period generally lasts seven months: the three months before your birthday month, the birthday month, and the three months after it. Enrolling in the first three months means coverage starts on the first day of your birthday month.",
    regular, 9, 490
  );
  let ny = ry + 2;
  for (const nl of noteLines) { drawText(page, nl, 62, ny, 9, BODY_TEXT, regular); ny -= 12; }

  // Blank fields for user to fill in
  drawText(page, "Additional dates to track:", 50, ry - 80, 11, DARK_TEXT, bold);
  const blankLabels = ["Current Coverage Ends", "Planned Retirement Date", "Desired Medicare Start", "Confirmed Effective Date"];
  let bl = ry - 100;
  for (let i = 0; i < blankLabels.length; i++) {
    const bx = i % 2 === 0 ? 50 : 330;
    if (i % 2 === 0 && i > 0) bl -= 50;
    drawText(page, blankLabels[i].toUpperCase(), bx, bl, 7, MID_GRAY, bold);
    drawRect(page, bx, bl - 22, 240, 18, WHITE);
    drawRect(page, bx, bl - 22, 240, 18, rgb(0.88, 0.9, 0.95), );
  }
}

// Coverage Comparison Page
async function buildCoverageComparisonPage(pdfDoc: PDFDocument) {
  const page = pdfDoc.addPage([612, 792]);
  const bold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const regular = await pdfDoc.embedFont(StandardFonts.Helvetica);

  await addPageHeader(page, pdfDoc, "Coverage Comparison", 4);

  drawText(page, "Compare Your Two Main Coverage Paths", 50, 720, 20, NAVY, bold);
  drawText(page, "Compare access, costs, prescriptions, travel and plan rules before choosing a path.", 50, 700, 10, BODY_TEXT, regular);

  // Table header
  drawRect(page, 50, 660, 512, 28, NAVY);
  drawText(page, "FACTOR", 60, 670, 9, WHITE, bold);
  drawText(page, "ORIGINAL MEDICARE + Medigap + Part D", 200, 670, 9, WHITE, bold);
  drawText(page, "MEDICARE ADVANTAGE", 430, 670, 9, GOLD, bold);

  const rows = [
    ["Doctors", "Any doctor accepting Medicare", "Usually network-based"],
    ["Specialists", "No referral usually needed", "Some plans require referrals"],
    ["Drug Coverage", "Separate Part D plan", "Most plans include Part D"],
    ["Cost Structure", "No annual out-of-pocket limit without Medigap", "Has an annual out-of-pocket limit"],
    ["Extra Benefits", "Dental/vision usually not included", "May include dental, vision, hearing"],
    ["Approvals", "Prior auth less common", "Prior auth may be required"],
    ["Travel", "Broad U.S. access", "Routine care may be limited outside area"],
  ];

  let ty = 650;
  for (let i = 0; i < rows.length; i++) {
    const bg = i % 2 === 0 ? WHITE : LIGHT_GRAY;
    drawRect(page, 50, ty - 22, 512, 30, bg);
    drawRect(page, 50, ty - 22, 1, 30, rgb(0.85, 0.87, 0.92));
    drawRect(page, 190, ty - 22, 1, 30, rgb(0.85, 0.87, 0.92));
    drawRect(page, 420, ty - 22, 1, 30, rgb(0.85, 0.87, 0.92));
    drawRect(page, 562, ty - 22, 1, 30, rgb(0.85, 0.87, 0.92));
    drawText(page, rows[i][0], 60, ty - 8, 9, DARK_TEXT, bold);
    const col2Lines = wrapText(rows[i][1], regular, 8, 215);
    const col3Lines = wrapText(rows[i][2], regular, 8, 130);
    drawText(page, col2Lines[0] || "", 200, ty - 8, 8, BODY_TEXT, regular);
    if (col2Lines[1]) drawText(page, col2Lines[1], 200, ty - 18, 8, BODY_TEXT, regular);
    drawText(page, col3Lines[0] || "", 430, ty - 8, 8, BODY_TEXT, regular);
    if (col3Lines[1]) drawText(page, col3Lines[1], 430, ty - 18, 8, BODY_TEXT, regular);
    ty -= 32;
  }

  // Priorities section
  drawText(page, "Choose your top three priorities:", 50, ty - 20, 11, DARK_TEXT, bold);
  const priorities = [
    "Broad provider access", "Low monthly premium",
    "Predictable healthcare spending", "Prescription fit",
    "Travel flexibility", "Dental, vision or hearing extras",
  ];
  let px = 50;
  let py2 = ty - 45;
  for (let i = 0; i < priorities.length; i++) {
    if (i % 2 === 0 && i > 0) { py2 -= 22; px = 50; }
    const bx = i % 2 === 0 ? 50 : 330;
    drawRect(page, bx, py2 - 2, 10, 10, WHITE);
    page.drawRectangle({ x: bx, y: py2 - 2, width: 10, height: 10, borderColor: NAVY_MID, borderWidth: 1 });
    drawText(page, priorities[i], bx + 15, py2 + 5, 9, BODY_TEXT, regular);
  }

  drawText(page, "Comparison summarized from Medicare.gov. Plan rules, benefits, networks and costs vary.", 50, 60, 7, MID_GRAY, regular);
}

// Action Plan Page
async function buildActionPlanPage(pdfDoc: PDFDocument, firstName: string, dates: EnrollmentDates) {
  const page = pdfDoc.addPage([612, 792]);
  const bold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const regular = await pdfDoc.embedFont(StandardFonts.Helvetica);

  await addPageHeader(page, pdfDoc, "Action Plan", 5);

  drawText(page, `${firstName}'s Medicare Action Plan`, 50, 720, 22, NAVY, bold);
  drawText(page, "Your prioritized next steps based on your enrollment timeline.", 50, 700, 11, BODY_TEXT, regular);

  const steps = [
    {
      num: "1",
      title: "Learn the difference between Original Medicare and Medicare Advantage",
      body: "Visit medicareinfopro.com/original-vs-advantage or call us. This single decision shapes everything else.",
      due: formatMonthYear(dates.learnBasicsDate),
      color: NAVY_MID,
    },
    {
      num: "2",
      title: "Check whether your current coverage pays first",
      body: "If you or your spouse still works, ask your HR department in writing which plan is primary. Get the answer before your IEP opens.",
      due: formatMonthYear(dates.checkWorkCoverageDate),
      color: rgb(0.2, 0.6, 0.5),
    },
    {
      num: "3",
      title: "List your doctors and prescriptions",
      body: "Use the inventory worksheet to record your providers and drugs before comparing plans. Network and formulary fit matter more than premium alone.",
      due: formatMonthYear(dates.iepStart),
      color: rgb(0.8, 0.5, 0.1),
    },
    {
      num: "4",
      title: "Enroll during your Initial Enrollment Period",
      body: `Your IEP runs from ${formatMonthYear(dates.iepStart)} through ${formatMonthYear(dates.iepEnd)}. Enrolling in the first three months means coverage starts on your birthday month.`,
      due: formatMonthYear(dates.iepStart),
      color: rgb(0.75, 0.2, 0.2),
    },
    {
      num: "5",
      title: "Secure Medigap coverage during your open enrollment window",
      body: `Your six-month Medigap Open Enrollment window runs from ${formatMonthYear(dates.medigapWindowStart)} to ${formatMonthYear(dates.medigapWindowEnd)}. After it closes, insurers can charge more or deny coverage based on health.`,
      due: formatMonthYear(dates.medigapWindowStart),
      color: NAVY,
    },
  ];

  let ay = 670;
  for (const step of steps) {
    drawRect(page, 50, ay - 55, 512, 72, LIGHT_GRAY);
    drawRect(page, 50, ay - 55, 3, 72, step.color);
    // Number badge
    page.drawEllipse({ x: 68, y: ay + 4, xScale: 12, yScale: 12, color: step.color });
    drawText(page, step.num, 64, ay - 1, 10, WHITE, bold);
    // Due label
    drawText(page, `TARGET: ${step.due.toUpperCase()}`, 430, ay + 10, 7, step.color, bold);
    drawText(page, step.title, 88, ay + 8, 10, DARK_TEXT, bold);
    const bodyLines = wrapText(step.body, regular, 8.5, 420);
    let by = ay - 8;
    for (const bl of bodyLines) { drawText(page, bl, 88, by, 8.5, BODY_TEXT, regular); by -= 12; }
    ay -= 95;
  }
}

// Agent / Contact Page
async function buildContactPage(pdfDoc: PDFDocument, logoBytes: Uint8Array) {
  const page = pdfDoc.addPage([612, 792]);
  const bold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const regular = await pdfDoc.embedFont(StandardFonts.Helvetica);

  // Navy background
  drawRect(page, 0, 0, 612, 792, NAVY);
  drawRect(page, 0, 770, 612, 22, GOLD);

  // Logo
  try {
    const logoImage = await pdfDoc.embedPng(logoBytes);
    const logoDims = logoImage.scale(0.45);
    page.drawImage(logoImage, { x: 50, y: 700, width: logoDims.width, height: logoDims.height });
  } catch {
    drawText(page, "Medicare Information Pro", 50, 710, 14, GOLD, bold);
  }

  drawText(page, "Ready to talk through your options?", 50, 650, 20, WHITE, bold);
  const subLines = wrapText(
    "Our licensed Medicare agents are available Monday through Friday to answer your questions, compare plans, and help you enroll. There is no cost and no obligation.",
    regular, 12, 512
  );
  let sy = 625;
  for (const l of subLines) { drawText(page, l, 50, sy, 12, rgb(0.8, 0.85, 0.95), regular); sy -= 17; }

  // Contact cards
  const contacts = [
    { label: "Phone", value: "813-699-5559" },
    { label: "Website", value: "medicareinfopro.com" },
    { label: "Get Started", value: "medicareinfopro.com/get-started" },
    { label: "Free Consultation", value: "medicareinfopro.com/free-consultation" },
  ];
  let cy = 540;
  for (const c of contacts) {
    drawRect(page, 50, cy - 8, 512, 36, rgb(0.08, 0.15, 0.35));
    drawText(page, c.label.toUpperCase(), 66, cy + 14, 8, GOLD, bold);
    drawText(page, c.value, 66, cy + 2, 11, WHITE, regular);
    cy -= 46;
  }

  // Disclaimer
  const discLines = wrapText(
    "Medicare Information Pro is a licensed insurance agency. We are not affiliated with or endorsed by Medicare or any government agency. Medicare has neither reviewed nor endorsed this information.",
    regular, 8, 512
  );
  let dy = 120;
  drawRect(page, 50, 90, 512, 1, rgb(0.2, 0.3, 0.5));
  for (const dl of discLines) { drawText(page, dl, 50, dy, 8, rgb(0.5, 0.55, 0.65), regular); dy -= 11; }

  drawText(page, "Page 6 of 6", 530, 20, 8, MID_GRAY, regular);
}

// ── Main Route Handler ─────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, dob, email } = body as {
      firstName: string;
      lastName: string;
      dob: string; // "YYYY-MM-DD"
      email: string;
    };

    if (!firstName || !lastName || !dob || !email) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    // Parse DOB
    const dobDate = new Date(dob + "T12:00:00");
    if (isNaN(dobDate.getTime())) {
      return NextResponse.json({ error: "Invalid date of birth." }, { status: 400 });
    }

    const dates = calculateDates(dobDate);

    // Fetch logo for embedding
    let logoBytes: Uint8Array;
    try {
      const logoRes = await fetch("https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/logo-white_bb567c3d.png");
      logoBytes = new Uint8Array(await logoRes.arrayBuffer());
    } catch {
      logoBytes = new Uint8Array(0);
    }

    // Build PDF
    const pdfDoc = await PDFDocument.create();
    pdfDoc.setTitle(`Medicare Decision Kit — ${firstName} ${lastName}`);
    pdfDoc.setAuthor("Medicare Information Pro");
    pdfDoc.setSubject("Personalized Medicare Decision Kit");
    pdfDoc.setCreator("medicareinfopro.com");

    await buildCoverPage(pdfDoc, firstName, lastName, dates, logoBytes);
    await buildTimelinePage(pdfDoc, firstName, dates);
    await buildKeyDatesPage(pdfDoc, firstName, dates);
    await buildCoverageComparisonPage(pdfDoc);
    await buildActionPlanPage(pdfDoc, firstName, dates);
    await buildContactPage(pdfDoc, logoBytes);

    const pdfBytes = await pdfDoc.save();

    // Submit to HubSpot (fire-and-forget, don't block PDF download)
    const hsUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${HS_PORTAL_ID}/${HS_FORM_ID}`;
    const hsFields = [
      { name: "email", value: email },
      { name: "firstname", value: firstName },
      { name: "lastname", value: lastName },
      { name: "hs_lead_status", value: "NEW" },
      { name: "message", value: `Source: Medicare Decision Kit Download\nDate of Birth: ${dob}` },
    ];
    fetch(hsUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fields: hsFields,
        context: { pageUri: "https://medicareinfopro.com/free-medicare-kit", pageName: "Free Medicare Kit" },
      }),
    }).catch(() => {}); // non-blocking

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
