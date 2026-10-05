// ── Site-wide Search Content Index ──────────────────────────────────────────
// Selected guides, tools, coverage answers, and local services for header suggestions and site search.

export interface SearchResult {
  title: string;
  description: string;
  url: string;
  category: string;
  tags: string[];
}

export const SEARCH_INDEX: SearchResult[] = [
  {
    title: "Check Medicare Doctor and Hospital Networks in Brandon, FL",
    description: "Verify your exact plan, doctors, office locations, and hospital before choosing or changing Medicare coverage.",
    url: "/check-medicare-doctor-hospital-networks-brandon-fl/",
    category: "Guide",
    tags: ["Brandon", "doctor", "hospital", "provider", "network", "HMO", "PPO", "accepts Medicare", "HCA", "Valrico", "Riverview", "Seffner"],
  },
  // Local services connected to the homepage.
  {"title": "Medicare in Brandon, FL", "description": "Explore local Medicare coverage options and enrollment guidance from our Brandon office.", "url": "/medicare-brandon-fl", "category": "Local Services", "tags": ["brandon local medicare insurance agent office"]},
  {"title": "Turning 65 in Brandon", "description": "Prepare for your first Medicare enrollment and compare coverage options.", "url": "/turning-65-brandon-fl", "category": "Local Services", "tags": ["brandon turning 65 enrollment new medicare"]},
  {"title": "Medicare and Employer Coverage After 65 in Brandon", "description": "Review how Medicare fits with employer coverage before retiring or making a change.", "url": "/medicare-and-employer-insurance-after-65-brandon-fl", "category": "Local Services", "tags": ["brandon working retirement employer coverage"]},
  {"title": "Compare Medicare Plans in Brandon", "description": "Review coverage, provider networks, prescriptions, and costs with a local agent.", "url": "/comparing-medicare-plans-brandon", "category": "Local Services", "tags": ["brandon compare plans costs doctors prescriptions"]},
  {"title": "Medicare Consulting Services in Brandon", "description": "Get help understanding coverage options and reviewing your current Medicare plan.", "url": "/medicare-consulting-services-brandon", "category": "Local Services", "tags": ["brandon annual plan review consultation consulting"]},
  {"title": "Brandon Medicare Advantage Plans", "description": "Understand Medicare Advantage coverage and the questions to ask before comparing plans.", "url": "/medicare-advantage-plans-brandon-florida", "category": "Local Services", "tags": ["brandon advantage part c hmo ppo"]},
  {"title": "Medicare Supplement Plans in Brandon", "description": "Learn about Medigap coverage alongside Original Medicare.", "url": "/medicare-supplement-insurance-plans-brandon", "category": "Local Services", "tags": ["brandon medigap supplement plan g plan n"]},
  {"title": "Meet Our Licensed Medicare Agents", "description": "Get to know the Medicare Information Project team and agent profiles.", "url": "/our-team", "category": "Local Services", "tags": ["brandon agents team greg jennifer mark valerie kelly paul chris jose"]},

  // ── Core Guides ──────────────────────────────────────────────────────────
  {
    title: "Medicare 101: The Complete Beginner's Guide",
    description: "Everything you need to know about Medicare — Parts A, B, C, and D explained in plain language.",
    url: "/medicare-101/",
    category: "Guide",
    tags: ["medicare 101", "basics", "beginner", "parts a b c d", "what is medicare"],
  },
  {
    title: "Am I Eligible for Medicare?",
    description: "Find out if you qualify for Medicare based on your age, disability status, or work history.",
    url: "/am-i-eligible/",
    category: "Guide",
    tags: ["eligibility", "qualify", "age 65", "disability", "ssdi", "who can enroll"],
  },
  {
    title: "Enrollment Timeline: When to Sign Up",
    description: "Understand your Initial Enrollment Period, Special Enrollment Periods, and how to avoid late penalties.",
    url: "/enrollment-timeline/",
    category: "Guide",
    tags: ["enrollment", "when to enroll", "initial enrollment period", "iep", "sep", "late penalty", "deadline"],
  },
  {
    title: "Original Medicare vs. Medicare Advantage",
    description: "A side-by-side comparison of traditional Medicare and Medicare Advantage plans to help you choose.",
    url: "/original-vs-advantage/",
    category: "Guide",
    tags: ["original medicare", "medicare advantage", "part c", "comparison", "which is better", "hmo ppo"],
  },
  {
    title: "Medicare Costs at a Glance",
    description: "Review Medicare premiums, deductibles, copays, and out-of-pocket costs in one place.",
    url: "/costs-at-a-glance/",
    category: "Guide",
    tags: ["costs", "premiums", "deductibles", "copay", "out of pocket", "annual costs", "how much does medicare cost"],
  },
  {
    title: "First Steps Checklist: New to Medicare",
    description: "A step-by-step checklist for people turning 65 or newly eligible for Medicare.",
    url: "/first-steps-checklist/",
    category: "Guide",
    tags: ["checklist", "new to medicare", "turning 65", "first steps", "getting started"],
  },
  {
    title: "Do I Need a Medicare Supplement (Medigap)?",
    description: "Learn what Medigap covers, how it works alongside Original Medicare, and whether it's right for you.",
    url: "/do-i-need-a-supplement/",
    category: "Guide",
    tags: ["medigap", "supplement", "gap coverage", "plan g", "plan n", "out of pocket costs"],
  },
  {
    title: "Understanding Medicare Part D (Prescription Drugs)",
    description: "Understand Part D prescription coverage, plan costs, and medication formularies.",
    url: "/understanding-part-d/",
    category: "Guide",
    tags: ["part d", "prescription drugs", "drug coverage", "formulary", "coverage gap", "donut hole"],
  },
  {
    title: "How to Maximize Your Medicare Benefits",
    description: "Strategies to get the most out of your Medicare coverage, including preventive care and extra benefits.",
    url: "/maximize-benefits/",
    category: "Guide",
    tags: ["maximize benefits", "preventive care", "extra benefits", "wellness", "annual wellness visit"],
  },

  // ── Coverage Q&A ─────────────────────────────────────────────────────────
  {
    title: "Does Medicare Cover Dental?",
    description: "Find out what Medicare does and doesn't cover for dental care, and what your options are.",
    url: "/coverage/dental/",
    category: "Coverage Q&A",
    tags: ["dental", "teeth", "dentures", "dental coverage", "does medicare cover dental"],
  },
  {
    title: "Does Medicare Cover Hearing Aids?",
    description: "Learn about Medicare's hearing aid coverage limitations and alternative options.",
    url: "/coverage/hearing-aids/",
    category: "Coverage Q&A",
    tags: ["hearing aids", "hearing loss", "hearing coverage", "does medicare cover hearing aids"],
  },
  {
    title: "Does Medicare Cover Vision / Eye Care?",
    description: "Understand what Medicare covers for vision, glasses, and eye exams.",
    url: "/coverage/vision/",
    category: "Coverage Q&A",
    tags: ["vision", "glasses", "eye exam", "eyeglasses", "does medicare cover vision"],
  },
  {
    title: "Does Medicare Cover Prescription Drugs?",
    description: "How Medicare Part D covers prescription drugs and what you need to know about formularies.",
    url: "/coverage/prescription-drugs/",
    category: "Coverage Q&A",
    tags: ["prescription drugs", "medications", "part d", "drug coverage", "formulary"],
  },

  // ── Tools ────────────────────────────────────────────────────────────────
  {
    title: "Medicare Quiz: Find Your Best Path",
    description: "Answer a few questions and get a personalized recommendation for your Medicare journey.",
    url: "/medicare-quiz/",
    category: "Tool",
    tags: ["quiz", "personalized", "recommendation", "which plan", "find my plan", "get started"],
  },
  {
    title: "Enrollment Date Calculator",
    description: "Enter your birthday and work history to find your exact Medicare enrollment windows.",
    url: "/enrollment-calculator/",
    category: "Tool",
    tags: ["calculator", "enrollment date", "when do i enroll", "birthday", "enrollment window"],
  },

  // ── Blog ─────────────────────────────────────────────────────────────────
  {
    title: "Why Is Medicare Coverage So Important?",
    description: "Medicare provides vital healthcare services, financial protection, and preventive care for millions of Americans aged 65 and older.",
    url: "/why-is-medicare-coverage-so-important/",
    category: "Blog",
    tags: ["why medicare important", "medicare coverage", "financial protection", "preventive care", "medicare benefits", "eligibility", "coverage gaps"],
  },
  {
    title: "Working Past 65? Here's What You Need to Know About Medicare",
    description: "If you're still working at 65 and covered by employer insurance, this guide explains your options.",
    url: "/working-past-65/",
    category: "Blog",
    tags: ["working past 65", "employer coverage", "still working", "delay medicare", "group health plan"],
  },
  {
    title: "How to Enroll in Medicare Without Social Security",
    description: "Not receiving Social Security yet? Learn how to sign up for Medicare on your own.",
    url: "/medicare-without-social-security/",
    category: "Blog",
    tags: ["no social security", "enroll without ss", "manual enrollment", "ssa", "social security"],
  },

  // ── Resource Hub ─────────────────────────────────────────────────────────
  {
    title: "Medicare Resources & Guides Hub",
    description: "Browse all Medicare guides, articles, tools, and downloadable resources in one place.",
    url: "/resources/",
    category: "Resources",
    tags: ["resources", "guides", "articles", "hub", "all topics"],
  },
  {
    title: "Medicare Blog",
    description: "Latest articles, news, and expert insights on Medicare enrollment, coverage, and costs.",
    url: "/blog/",
    category: "Blog",
    tags: ["blog", "articles", "news", "latest", "updates"],
  },
];

// ── Search function ───────────────────────────────────────────────────────────
export function searchContent(query: string): SearchResult[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase().trim();
  const words = q.split(/\s+/);

  return SEARCH_INDEX.filter((item) => {
    const haystack = [
      item.title,
      item.description,
      item.category,
      ...item.tags,
    ]
      .join(" ")
      .toLowerCase();

    // Score: match all words for higher relevance
    return words.every((word) => haystack.includes(word)) ||
      words.some((word) => haystack.includes(word));
  }).sort((a, b) => {
    // Exact title match first
    const aTitle = a.title.toLowerCase().includes(q) ? 1 : 0;
    const bTitle = b.title.toLowerCase().includes(q) ? 1 : 0;
    if (bTitle !== aTitle) return bTitle - aTitle;

    // Then by how many words match
    const aScore = words.filter((w) =>
      [a.title, a.description, ...a.tags].join(" ").toLowerCase().includes(w)
    ).length;
    const bScore = words.filter((w) =>
      [b.title, b.description, ...b.tags].join(" ").toLowerCase().includes(w)
    ).length;
    return bScore - aScore;
  });
}
