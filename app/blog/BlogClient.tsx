"use client";

/**
 * Blog Listing , MIP Next.js Client Component
 * Design: MIP brand , navy/gold, editorial magazine-style layout
 * Sections: Page Header + Search → Sticky Category Filter → Featured Post → Article Grid + Sidebar
 * All year references updated to 2026.
 */

import { useState, ReactNode } from "react";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ChevronRight,
  Tag,
  Search,
  ArrowRight,
  Briefcase,
  Shield,
  DollarSign,
  FileText,
  BookOpen,
  Phone,
  TrendingUp,
  Star,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/working-past-65-hero-KNQjDiJCrME7N7PvAtH8Bp.webp";

type Category = "All" | "Enrollment" | "Plans" | "Costs" | "Coverage" | "Supplements" | "Part D";

const CATEGORIES: Category[] = ["All", "Enrollment", "Plans", "Costs", "Coverage", "Supplements", "Part D"];

const CATEGORY_ICONS: Record<Category, ReactNode> = {
  All: <BookOpen size={14} aria-hidden="true" />,
  Enrollment: <Briefcase size={14} aria-hidden="true" />,
  Plans: <Shield size={14} aria-hidden="true" />,
  Costs: <DollarSign size={14} aria-hidden="true" />,
  Coverage: <FileText size={14} aria-hidden="true" />,
  Supplements: <Star size={14} aria-hidden="true" />,
  "Part D": <Tag size={14} aria-hidden="true" />,
};

const CATEGORY_COLORS: Record<Exclude<Category, "All">, string> = {
  Enrollment: "bg-blue-100 text-blue-700",
  Plans: "bg-purple-100 text-purple-700",
  Costs: "bg-amber-100 text-amber-700",
  Coverage: "bg-emerald-100 text-emerald-700",
  Supplements: "bg-rose-100 text-rose-700",
  "Part D": "bg-teal-100 text-teal-700",
};

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: Exclude<Category, "All">;
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
  live?: boolean;
  sortOrder?: number;
}

const ARTICLES: Article[] = [
  {
    slug: "/working-past-65",
    title: "Working Past 65: When to Enroll in Medicare",
    excerpt:
      "If you're still working at 65 with employer coverage, you may not need to enroll in Medicare right away , but the rules are nuanced and the penalties for getting it wrong are permanent. Here's everything you need to know.",
    category: "Enrollment",
    author: "Sarah Mitchell",
    date: "April 2026",
    readTime: "12 min read",
    image: HERO_IMG,
    featured: true,
    live: true,
  },
  {
    slug: "/plan-g-complete-guide",
    title: "Medicare Supplement Plan G: The Complete 2026 Guide",
    excerpt:
      "Plan G has become the most popular Medigap plan in America , and for good reason. We break down exactly what it covers, what it costs, and who it's best for.",
    category: "Supplements",
    author: "David Chen",
    date: "March 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    live: true,
  },
  {
    slug: "/does-medicare-cover-life-alert",
    title: "Does Medicare Cover Life Alert?",
    excerpt:
      "Original Medicare doesn't cover personal emergency response systems like Life Alert , but some Medicare Advantage plans do. Here's what to look for when comparing plans.",
    category: "Coverage",
    author: "Sarah Mitchell",
    date: "March 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80",
    live: true,
  },
  {
    slug: "/2026-medicare-advantage-changes",
    title: "2026 Medicare Advantage Changes: What Enrollees Need to Know",
    excerpt:
      "CMS has finalized significant changes to Medicare Advantage for 2026, including new Star Ratings adjustments, prior authorization reforms, and benefit changes. Here's what's changing and how it affects you.",
    category: "Plans",
    author: "Michael Torres",
    date: "February 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    live: true,
  },
  {
    slug: "/irmaa-explained",
    title: "IRMAA Explained: How Your Income Affects Your Medicare Premiums",
    excerpt:
      "If your income exceeds certain thresholds, you'll pay more for Medicare Part B and Part D. We explain how IRMAA works, the 2026 brackets, and how to appeal a surcharge you believe is incorrect.",
    category: "Costs",
    author: "David Chen",
    date: "January 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    live: true,
  },
  {
    slug: "/part-d-2000-cap",
    title: "The $2,000 Part D Out-of-Pocket Cap: What It Means for You",
    excerpt:
      "Medicare Part D now has a $2,000 annual out-of-pocket cap , the most significant drug coverage change in decades. Here's how it works and who benefits most.",
    category: "Part D",
    author: "Sarah Mitchell",
    date: "January 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80",
    live: true,
  },
  {
    slug: "/medigap-open-enrollment",
    title: "Medigap Open Enrollment: Your One Chance for Guaranteed Coverage",
    excerpt:
      "Your 6-month Medigap Open Enrollment Period begins when you turn 65 and enroll in Part B. Miss it, and insurers can deny you coverage or charge higher premiums based on your health history.",
    category: "Supplements",
    author: "Michael Torres",
    date: "December 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
    live: true,
  },
  {
    slug: "/annual-enrollment-period-guide",
    title: "Annual Enrollment Period Guide: How to Review and Switch Plans",
    excerpt:
      "Every year from October 15 to December 7, Medicare beneficiaries can switch plans. Here's how to review your current coverage, compare alternatives, and make the best choice.",
    category: "Enrollment",
    author: "Sarah Mitchell",
    date: "October 2025",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80",
    live: true,
  },
  {
    slug: "/medicare-coverage-for-scooters",
    title: "Does Medicare Cover Power Wheelchairs and Mobility Scooters?",
    excerpt:
      "Medicare Part B covers power wheelchairs and mobility scooters as durable medical equipment, but only when strict medical necessity criteria are met. Here is exactly what is required and how to navigate the approval process.",
    category: "Coverage",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    live: true,
  },
  {
    slug: "/how-medicare-premiums-are-calculated",
    title: "How Medicare Premiums Are Calculated in 2026",
    excerpt:
      "Medicare premiums are not one-size-fits-all. Your Part B and Part D premiums depend on your income from two years ago, your work history affects Part A costs, and Medicare Advantage premiums vary by plan and county.",
    category: "Costs",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    live: true,
  },
  {
    slug: "/why-is-medicare-coverage-so-important",
    title: "Why Is Medicare Coverage So Important? 7 Reasons That Matter",
    excerpt:
      "Medicare is not just a government benefit. For most Americans over 65, it is the primary financial protection against medical costs that can otherwise wipe out decades of savings.",
    category: "Coverage",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
    live: true,},
  {
    slug: "/does-medicare-cover-ambulance-rides",
    title: "Does Medicare Cover Ambulance Rides in 2026?",
    excerpt:
      "Ambulance rides can cost thousands of dollars. Medicare Part B covers them when medically necessary, but strict rules determine when coverage applies, what you owe, and how to avoid surprise bills.",
    category: "Coverage",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=800&q=80",
    live: true,
  },
  {
    slug: "/why-is-health-insurance-so-expensive-in-florida",
    title: "Why Is Health Insurance So Expensive in Florida?",
    excerpt:
      "Florida residents consistently pay more for health insurance than most other Americans. An older population, a large uninsured pool, high hospital prices, and a fragmented insurance market all push premiums higher. Here is what is driving the cost and what you can actually do about it.",
    category: "Costs",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    live: true,
  },
  {
    slug: "/best-medicare-advantage-plans-florida",
    title: "Best Medicare Advantage Plans in Florida 2026",
    excerpt:
      "Florida has one of the most competitive Medicare Advantage markets in the country. Knowing which plans consistently deliver strong value requires looking beyond the premium and understanding what each plan actually covers in your specific area.",
    category: "Plans",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    live: true,
  },
  {
    slug: "/how-to-sign-up-for-medicare-without-an-agent-step-by-step-guide",
    title: "How to Sign Up for Medicare Without an Agent: Step-by-Step Guide",
    excerpt:
      "Signing up for Medicare is something you can absolutely do on your own. This step-by-step guide walks through every step, from checking your eligibility to confirming your coverage is active.",
    category: "Enrollment",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    live: true,
  },
  {
    slug: "/medicare-qualifications-florida",
    title: "Medicare Qualifications in Florida: Who Is Eligible?",
    excerpt:
      "Most people think of Medicare as a program that starts at 65, but the eligibility rules are more nuanced than that. Age, work history, disability status, and specific medical conditions all affect when and how you qualify.",
    category: "Enrollment",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80",
    live: true,
  },
  {
    slug: "/how-much-does-health-insurance-cost-per-month-in-florida",
    title: "How Much Does Health Insurance Cost Per Month in Florida?",
    excerpt:
      "Florida health insurance premiums are among the highest in the country. What you pay depends on your age, the type of coverage, and whether you qualify for subsidies. Here is a clear breakdown of 2026 costs across every major coverage type.",
    category: "Costs",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    live: true,
  },
  {
    slug: "/what-are-the-best-medicare-plans-for-seniors",
    title: "What Are the Best Medicare Plans for Seniors?",
    excerpt:
      "There is no single best Medicare plan. The right choice depends on your health, your doctors, your medications, and how much financial risk you are comfortable carrying. This guide walks through every major option so you can make a confident, informed decision.",
    category: "Plans",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    live: true,
  },
  {
    slug: "/is-reinstating-a-part-d-plan-possible",
    title: "Is Reinstating a Part D Plan Possible?",
    excerpt:
      "Dropping a Medicare Part D plan or missing your initial enrollment window can have lasting financial consequences. Whether you can reinstate coverage depends on your specific situation and which enrollment period applies. Here is what you need to know.",
    category: "Part D",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80",
    live: true,
  },
  {
    slug: "/how-to-reduce-medicare-premiums-based-on-income-2026",
    title: "How to Reduce Medicare Premiums Based on Income 2026",
    excerpt:
      "If your income is above certain thresholds, you pay more for Medicare Parts B and D through a surcharge called IRMAA. Understanding how IRMAA is calculated, when you can appeal it, and how to plan your income to minimize it can save you hundreds or even thousands of dollars per year.",
    category: "Costs",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&q=80",
    live: true,
  },
  {
    slug: "/medicare-advantage-changes-2026-florida",
    title: "Medicare Advantage Changes 2026: What Florida Enrollees Need to Know",
    excerpt:
      "Medicare Advantage plans change every year, but 2026 brings more significant shifts than most. Florida enrollees who do not review their plan during the Annual Enrollment Period risk facing higher costs, reduced benefits, or coverage gaps.",
    category: "Plans",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=800&q=80",
    live: true,
  },
  {
    slug: "/medicare-set-aside-explained",
    title: "Medicare Set-Aside Explained: What It Is and When You Need One",
    excerpt:
      "If you are settling a personal injury or workers compensation claim and you are a Medicare beneficiary, you may need a Medicare Set-Aside arrangement. Getting this wrong can result in Medicare refusing to pay your future medical bills.",
    category: "Coverage",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    live: true,
  },
  {
    slug: "/florida-medicare-if-still-working-at-65",
    title: "Florida Medicare If Still Working at 65: What You Need to Know",
    excerpt:
      "Turning 65 while still employed is increasingly common in Florida. Whether you must enroll in Medicare, can delay it, or should coordinate it with your employer plan depends on the size of your employer and the type of coverage you have.",
    category: "Enrollment",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    live: true,
  },
  {
    slug: "/medicare-scope-of-appointment",
    title: "Medicare Scope of Appointment: What It Is and Why It Matters",
    excerpt:
      "Before a Medicare agent can discuss Advantage or Part D plans with you, federal law requires them to obtain a signed Scope of Appointment form. This guide explains what the SOA is, the 48-hour rule, what agents can and cannot discuss, and what to do if an agent skips it.",
    category: "Plans",
    author: "Greg Wohl",
    date: "July 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    live: true,
    sortOrder: 1,
  },
  {
    slug: "/medicare-grocery-card",
    title: "Medicare Grocery Card: What It Is, Who Qualifies, and How to Get One",
    excerpt:
      "You may have seen ads promising a Medicare grocery card that puts hundreds of dollars on a prepaid card for food. Some of these benefits are real, but the details matter. This page explains exactly what the Medicare grocery card is, which plans offer it, who qualifies, what you can buy, and how to get one.",
    category: "Coverage",
    author: "Greg Wohl",
    date: "July 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
    live: true,
    sortOrder: 1,
  },
  {
    slug: "/medicare-8-minute-rule",
    title: "Medicare's 8-Minute Rule: What It Is and How It Affects Your Ambulance Bill",
    excerpt:
      "If you or a family member has ever received a confusing ambulance bill after a Medicare claim, the 8-minute rule may be part of the reason. This FAQ explains what the rule is, how it affects ALS and BLS billing, what you are actually responsible for paying, and what to do if your claim is denied.",
    category: "Coverage",
    author: "Greg Wohl",
    date: "July 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=800&q=80",
    live: true,
    sortOrder: 1,
  },
  {
    slug: "/at-what-age-can-you-get-medicare",
    title: "At What Age Can You Get Medicare? Eligibility Rules Explained",
    excerpt:
      "Most Americans become eligible for Medicare at 65, but the rules are more nuanced than a single number. Disability, kidney disease, and employer coverage all affect when and how you enroll. This guide covers every eligibility scenario so you know exactly where you stand.",
    category: "Enrollment",
    author: "Greg Wohl",
    date: "July 2026",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    live: true,
    sortOrder: 1,
  },
  {
    slug: "/does-medicare-cover-dental",
    title: "Does Medicare Cover Dental Care? What Is and Is Not Covered in 2026",
    excerpt:
      "Original Medicare does not cover routine dental care, and the gap can be expensive. This guide explains exactly what Medicare Parts A and B cover for dental, how Medicare Advantage plans fill the gap, and the best options for getting dental coverage alongside Medicare.",
    category: "Coverage",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1588776814546-1ffbb172d936?w=800&q=80",
    live: true,
    sortOrder: 1,
  },
  {
    slug: "/medicare-advantage-vs-medigap",
    title: "Medicare Advantage vs. Medigap: A Side-by-Side Comparison",
    excerpt:
      "Medicare Advantage and Medigap are the two main paths beyond Original Medicare, and they work in fundamentally different ways. This guide compares costs, coverage, flexibility, and trade-offs so you can choose the option that fits your health and budget.",
    category: "Plans",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "13 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    live: true,
    sortOrder: 2,
  },
  {
    slug: "/best-medicare-advantage-plans-hillsborough-county",
    title: "Best Medicare Advantage Plans in Hillsborough County for 2026",
    excerpt:
      "With 58 Medicare Advantage plans available in Hillsborough County in 2026, choosing the right one requires more than comparing premiums. This guide breaks down the top carriers, plan types, extra benefits, and the key questions every local resident should ask before enrolling.",
    category: "Plans",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    live: true,
    sortOrder: 2,
  },
  {
    slug: "/medicare-out-of-pocket-costs",
    title: "Medicare Out-of-Pocket Costs: Your Guide to Copays, Deductibles, and Maximizing Savings",
    excerpt:
      "Medicare is not free. Learn exactly what you pay under Parts A, B, C, and D in 2026, why Original Medicare has no out-of-pocket maximum, and the best strategies to protect yourself from unexpected costs.",
    category: "Costs",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80",
    live: true,
    sortOrder: 2,
  },
  {
    slug: "/how-to-get-help-paying-for-medicare",
    title: "How to Get Help Paying for Medicare: Extra Help, LIS, and Medicare Savings Programs Explained",
    excerpt:
      "If you have limited income or resources, you may qualify for programs that significantly reduce your Medicare costs. This guide explains every major assistance program, who qualifies, and exactly how to apply.",
    category: "Costs",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    live: true,
    sortOrder: 3,
  },
  {
    slug: "/does-medicare-cover-home-health-care",
    title: "Does Medicare Cover Home Health Care? What You Need to Know in 2026",
    excerpt:
      "Medicare covers skilled home health care, but only when specific eligibility criteria are met. Understanding what qualifies, what is excluded, and how long coverage lasts can help you plan ahead and avoid unexpected costs.",
    category: "Coverage",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    live: true,
    sortOrder: 4,
  },
  {
    slug: "/what-is-the-special-enrollment-period",
    title: "What Is the Medicare Special Enrollment Period and When Can You Use It?",
    excerpt:
      "Missing your initial Medicare enrollment window does not mean you are out of options. The Special Enrollment Period gives you a second chance to enroll or make changes when a qualifying life event occurs.",
    category: "Enrollment",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    live: true,
    sortOrder: 4,
  },
  {
    slug: "/does-medicare-cover-cataract-surgery",
    title: "Does Medicare Cover Cataract Surgery? What to Expect in 2026",
    excerpt:
      "Cataracts are the leading cause of vision loss in adults over 65. Medicare Part B covers medically necessary cataract surgery including a standard lens implant — but premium lenses, laser upgrades, and routine vision care are handled differently.",
    category: "Coverage",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
    live: true,
    sortOrder: 4,
  },
  {
    slug: "/does-medicare-cover-ozempic",
    title: "Does Medicare Cover Ozempic? Coverage, Costs, and Alternatives",
    excerpt:
      "Ozempic is one of the most prescribed medications in the country, but Medicare coverage depends entirely on why your doctor prescribed it. For diabetes, coverage is generally available through Part D. For weight loss alone, coverage is more limited.",
    category: "Coverage",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80",
    live: true,
  },
  {
    slug: "/switch-medicare-advantage-florida",
    title: "How to Switch Medicare Advantage Plans in Florida",
    excerpt:
      "You are not locked into your Medicare Advantage plan forever. Florida beneficiaries have several windows each year to switch plans, and the right time to switch depends on your situation.",
    category: "Plans",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    live: true,
  },
  {
    slug: "/can-i-drop-my-medicare-advantage-plan-and-go-back-to-original-medicare",
    title: "Can I Drop My Medicare Advantage Plan and Go Back to Original Medicare?",
    excerpt:
      "Yes, you can drop your Medicare Advantage plan and return to Original Medicare. But the timing of when you do it, and whether you can get a Medigap supplement afterward, depends on which enrollment window you use.",
    category: "Plans",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    live: true,
  },
  {
    slug: "/florida-health-insurance-cost",
    title: "Florida Health Insurance Cost in 2026: What to Expect",
    excerpt:
      "Health insurance costs in Florida are among the highest in the nation. Whether you are buying through the ACA marketplace, enrolling in Medicare, or evaluating employer coverage, understanding what drives costs helps you find the best value.",
    category: "Costs",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80",
    live: true,
  },
  {
    slug: "/medicare-plans-cancer-treatment",
    title: "Medicare Coverage for Cancer Treatment: What Is Covered in 2026",
    excerpt:
      "Medicare covers most cancer treatments including chemotherapy, radiation, surgery, and immunotherapy. But the out-of-pocket costs can be substantial without the right supplemental coverage.",
    category: "Coverage",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    live: true,
  },
  {
    slug: "/medicare-scams-florida",
    title: "Medicare Scams in Florida 2026: How to Spot and Avoid Them",
    excerpt:
      "Florida consistently ranks among the top states for Medicare fraud. Scammers target Medicare beneficiaries with fake plan offers, genetic testing schemes, and identity theft attempts.",
    category: "Coverage",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80",
    live: true,
  },
  {
    slug: "/medicare-supplement-plans-in-florida",
    title: "Medicare Supplement Plans in Florida 2026: Complete Guide",
    excerpt:
      "Medicare Supplement (Medigap) plans fill the gaps in Original Medicare coverage. Florida has one of the most competitive Medigap markets in the country, which means more choices and potentially lower premiums if you know how to shop.",
    category: "Supplements",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    live: true,
  },
  {
    slug: "/how-to-choose-medicare-advantage-plans-2026",
    title: "How to Choose a Medicare Advantage Plan in 2026: Step-by-Step Guide",
    excerpt:
      "With hundreds of Medicare Advantage plans available in Florida, choosing the right one requires more than comparing monthly premiums. This step-by-step guide walks you through every factor that matters.",
    category: "Plans",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    live: true,
  },
  {
    slug: "/original-medicare-vs-medicare-advantage-in-florida",
    title: "Original Medicare vs. Medicare Advantage in Florida 2026: Which Is Right for You?",
    excerpt:
      "The choice between Original Medicare and Medicare Advantage is the most consequential decision most beneficiaries make. Both options have real advantages and real drawbacks.",
    category: "Plans",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    live: true,
  },
  {
    slug: "/pros-and-cons-of-florida-medicare-supplement-plans",
    title: "Pros and Cons of Florida Medicare Supplement Plans 2026",
    excerpt:
      "Medicare Supplement plans offer some of the most comprehensive coverage available to Medicare beneficiaries. But they also come with higher monthly premiums and no extra benefits. Here is the balanced view.",
    category: "Plans",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    live: true,
  },
  {
    slug: "/medicare-age",
    title: "What Age Do You Get Medicare? Eligibility Ages Explained",
    excerpt:
      "Most people know Medicare starts at 65, but the rules around exactly when and how you enroll are more nuanced than most people realize. This guide explains every age-based eligibility scenario.",
    category: "Enrollment",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    live: true,
  },
  {
    slug: "/the-pros-and-cons-of-enrolling-in-a-medicare-advantage-plan-in-florida",
    title: "Pros and Cons of Enrolling in a Medicare Advantage Plan in Florida 2026",
    excerpt:
      "Medicare Advantage now covers nearly 60% of Florida Medicare beneficiaries, but that does not mean it is the right choice for everyone. This guide gives you an honest, balanced look at the advantages and disadvantages.",
    category: "Plans",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
    live: true,
  },
  {
    slug: "/medicare-supplement-plans-florida-2026",
    title: "Medicare Supplement Plans Florida 2026: Plan G vs. N vs. F Compared",
    excerpt:
      "Medicare Supplement plans are standardized by the federal government, meaning the benefits for each plan letter are identical regardless of insurer. The only variable is the premium. This guide compares the top plans in Florida for 2026.",
    category: "Plans",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    live: true,
  },
  {
    slug: "/medicare-disability-eligibility-requirements",
    title: "Medicare Disability Eligibility Requirements 2026: Complete Guide",
    excerpt:
      "Medicare is not just for people 65 and older. If you have a qualifying disability, End-Stage Renal Disease, or ALS, you may be eligible for Medicare at any age. This guide explains every disability pathway and the waiting periods involved.",
    category: "Enrollment",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80",
    live: true,
  },
  {
    slug: "/medicare-issues-for-veterans-tampa",
    title: "Medicare and VA Benefits for Veterans in Tampa: What You Need to Know in 2026",
    excerpt:
      "Veterans in Tampa have access to both VA healthcare and Medicare, but the two programs do not automatically coordinate. Understanding how they work together can save you thousands of dollars and prevent gaps in coverage.",
    category: "Coverage",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&q=80",
    live: true,
  },
  {
    slug: "/medicare-why-are-there-so-many-letters",
    title: "Why Are There So Many Medicare Plan Letters? A–N Explained",
    excerpt:
      "Medicare supplement plans come in letters A through N, and each letter represents a standardized set of benefits. Understanding what each letter covers helps you choose the right plan without overpaying.",
    category: "Plans",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
    live: true,
  },
  {
    slug: "/value-added-benefits-through-medicare-advantage",
    title: "Value-Added Benefits Through Medicare Advantage in 2026: What Is Still Available",
    excerpt:
      "Medicare Advantage plans offer extra benefits beyond Original Medicare: dental, vision, hearing, OTC allowances, transportation, and more. In 2026, many plans have scaled back these benefits. This guide explains what is still available.",
    category: "Plans",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
    live: true,
  },
  {
    slug: "/medigap-premium-increases",
    title: "Medigap Premium Increases: Why They Happen and How to Manage Them in Florida",
    excerpt:
      "Medigap premiums do not stay the same year after year. They increase due to inflation, the rating method your insurer uses, and the overall health claims of the pool. Understanding why premiums increase can save you hundreds of dollars per year.",
    category: "Costs",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80",
    live: true,
  },
  {
    slug: "/why-medicare-denies-mobility-scooter-claims-florida",
    title: "Why Medicare Denies Mobility Scooter Claims in Florida: Top Reasons and How to Appeal",
    excerpt:
      "Medicare covers power wheelchairs and mobility scooters as Durable Medical Equipment, but the approval process is strict and claims are frequently denied. Learn the top denial reasons and how to build a successful claim.",
    category: "Coverage",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    live: true,
  },
  {
    slug: "/best-medicare-agent-in-florida",
    title: "How to Find the Best Medicare Agent in Florida: What to Look For in 2026",
    excerpt:
      "Choosing the right Medicare agent in Florida is one of the most important decisions you will make during Medicare enrollment. A good agent saves you time, prevents costly mistakes, and helps you find coverage that fits your actual healthcare needs.",
    category: "Coverage",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    live: true,
  },
  {
    slug: "/5-best-medicare-consultants-in-tampa-bay",
    title: "5 Best Medicare Consultants in Tampa Bay: What to Look For in 2026",
    excerpt:
      "Finding the right Medicare consultant in Tampa Bay can save you thousands of dollars and prevent costly enrollment mistakes. This guide explains what separates great consultants from average ones and what to look for when choosing your Medicare advisor.",
    category: "Coverage",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
    live: true,
  },
  {
    slug: "/maximize-medicare-benefits-florida-seniors",
    title: "How to Maximize Your Medicare Benefits in Florida: A Complete Guide for 2026",
    excerpt:
      "Most Medicare beneficiaries in Florida use only a fraction of the benefits available to them. Free preventive screenings go unused, cost-reduction programs go unapplied for, and plan choices are made once and never revisited. This guide shows you exactly how to get full value from your Medicare coverage.",
    category: "Coverage",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    live: true,
  },
  {
    slug: "/medicare-advantage-travel-benefits-florida-residents",
    title: "Medicare Advantage Travel Benefits for Florida Residents: What Is Covered in 2026",
    excerpt:
      "Florida residents who travel frequently or split time between states face a coverage challenge with Medicare Advantage. Most MA plans are built around a local service area, which means coverage outside that area is limited. Understanding how travel benefits work, and choosing the right plan structure, can prevent unexpected out-of-pocket costs when you are away from home.",
    category: "Coverage",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    live: true,
  },
  {
    slug: "/best-medicare-plans-for-snowbirds-in-florida",
    title: "Best Medicare Plans for Snowbirds in Florida 2026: A Complete Guide",
    excerpt:
      "Snowbirds who split time between Florida and a northern state face a Medicare coverage challenge that most beneficiaries do not. The plan that works perfectly in Florida may leave you without coverage for routine care in your other home state. This guide explains your options and how to choose the plan that works best for your dual-state lifestyle.",
    category: "Plans",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    live: true,
  },
  {
    slug: "/can-i-have-both-medicare-and-medicaid",
    title: "Can I Have Both Medicare and Medicaid? Dual Eligibility Explained for Florida Residents",
    excerpt:
      "Yes, you can have both Medicare and Medicaid at the same time. Beneficiaries who qualify for both programs are called dual-eligible, and they receive some of the most comprehensive coverage available in the U.S. healthcare system. This guide explains how dual eligibility works in Florida, what benefits you receive, and how to enroll.",
    category: "Coverage",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80",
    live: true,
  },
  {
    slug: "/medicare-part-d-out-of-pocket-cap",
    title: "Understanding the $2,000 Out-of-Pocket Cap for Medicare Part D in 2025 and 2026",
    excerpt:
      "Starting in 2025, Medicare Part D has a $2,000 annual out-of-pocket cap, the most significant drug coverage improvement in decades. This guide explains how the cap works, what changed from previous years, and how to maximize your savings.",
    category: "Coverage",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80",
    live: true,
  },
  {
    slug: "/resolving-common-challenges-when-selecting-medicare-in-florida",
    title: "Resolving Common Challenges When Selecting Medicare in Florida: A Practical Guide",
    excerpt:
      "Choosing Medicare in Florida comes with unique challenges: plan availability, provider networks, snowbird coverage, and enrollment timing. Learn how to navigate the most common problems Florida beneficiaries face.",
    category: "Enrollment",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    live: true,
  },
  {
    slug: "/medicare-and-employer-insurance-after-65-brandon-fl",
    title: "Medicare and Employer Insurance After 65 in Brandon, FL: How They Work Together",
    excerpt:
      "Still working at 65 in Brandon, FL? Learn how Medicare coordinates with employer insurance, when to enroll in Part B, how to avoid penalties, and when Medicare or your employer plan pays first.",
    category: "Enrollment",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    live: true,
  },
  {
    slug: "/understanding-medicare-part-b",
    title: "Understanding Medicare Part B: Coverage, Costs, and Enrollment in 2026",
    excerpt:
      "Medicare Part B covers doctor visits, outpatient care, preventive services, and medical equipment. Learn what Part B covers, what it costs in 2026, how to enroll, and how to avoid the late enrollment penalty.",
    category: "Coverage",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
    live: true,
  },
  {
    slug: "/which-medicare-advantage-plans-tampa-free-post-hospital-meals",
    title: "Which Medicare Advantage Plans in Tampa Offer Free Post-Hospital Meals?",
    excerpt:
      "Some Medicare Advantage plans in Tampa offer free post-hospital meal delivery as a supplemental benefit. Learn which plans include this benefit, how it works, and how to compare plans in the Tampa Bay area.",
    category: "Plans",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80",
    live: true,
  },
  {
    slug: "/do-you-need-to-work-with-a-medicare-insurance-agent",
    title: "Do You Need to Work With a Medicare Insurance Agent?",
    excerpt:
      "Working with a Medicare insurance agent is free, but is it necessary? We break down exactly what an agent does, when it makes sense to use one, and when you can confidently go it alone.",
    category: "Coverage",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
    live: true,
  },
  {
    slug: "/what-are-the-6-things-medicare-doesnt-cover",
    title: "What Are the 6 Things Medicare Doesn't Cover?",
    excerpt:
      "Original Medicare leaves several significant gaps in coverage. Understanding what Medicare does not cover helps you plan for out-of-pocket costs and decide whether supplemental coverage makes sense for you.",
    category: "Coverage",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80",
    live: true,
  },
  {
    slug: "/medicare-broker-vs-agent",
    title: "Medicare Broker vs. Agent: What's the Difference?",
    excerpt:
      "Medicare broker and Medicare agent are often used interchangeably, but there are important differences. Learn what each term means, how they are compensated, and which type of help is best for your situation.",
    category: "Coverage",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
    live: true,
  },
  {
    slug: "/affordable-health-insurance-options-for-tampa-families",
    title: "Affordable Health Insurance Options for Tampa Families",
    excerpt:
      "Tampa families have more health insurance options than many realize. From ACA marketplace plans and Medicaid to Medicare at 65, learn how to find affordable coverage that fits your family's budget.",
    category: "Costs",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    live: true,
  },
  {
    slug: "/use-medicare-insurance-agent-in-florida",
    title: "Why Use a Medicare Insurance Agent in Florida?",
    excerpt:
      "Florida has one of the most competitive Medicare markets in the country. A licensed independent Medicare insurance agent helps you navigate it at no cost to you.",
    category: "Coverage",
    author: "Greg Wohl",
    date: "June 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    live: true,
  },
  {
    slug: "/medicare-vs-medicaid",
    title: "Medicare vs. Medicaid: Understanding the Difference",
    excerpt:
      "Medicare and Medicaid are two separate government programs that are often confused. We explain who qualifies for each, what they cover, and how they can work together for dual-eligible beneficiaries.",
    category: "Coverage",
    author: "David Chen",
    date: "September 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80",
    live: true,
  },
];

export default function BlogClient() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const featured = ARTICLES.find((a) => a.featured);
  const rest = ARTICLES.filter((a) => !a.featured).sort(
    (a, b) => (a.sortOrder ?? 9999) - (b.sortOrder ?? 9999)
  );
  const filtered = rest.filter((a) => {
    const matchesCategory = activeCategory === "All" || a.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* ── Page Header ── */}
      <div className="bg-[#0d1f5c] text-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-14">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[0.8rem] text-white/50 mb-4">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <ChevronRight size={13} aria-hidden="true" />
            <span className="text-white/70" aria-current="page">Blog</span>
          </nav>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <h1
                className="text-[2.2rem] sm:text-[2.8rem] font-bold leading-tight mb-3"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                Medicare Insights
              </h1>
              <p className="text-[1rem] text-white/70 max-w-xl leading-relaxed">
                Guides, explainers, and tools written by licensed Medicare specialists , updated regularly to reflect the latest rules and rates.
              </p>
            </div>
            {/* Search */}
            <div className="relative w-full sm:w-72 flex-shrink-0">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" aria-hidden="true" />
              <input
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search blog articles"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 text-[0.9rem] focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Category Filter Bar ── */}
      <div className="border-b border-gray-100 bg-white sticky top-0 z-20 shadow-sm">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div
            className="flex items-center gap-1 overflow-x-auto py-3"
            role="tablist"
            aria-label="Filter articles by category"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                role="tab"
                aria-selected={activeCategory === cat}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[0.82rem] font-semibold whitespace-nowrap transition-all duration-150 flex-shrink-0 ${
                  activeCategory === cat
                    ? "bg-[#1a3fa8] text-white shadow-sm"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {CATEGORY_ICONS[cat]}
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Layout ── */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">

          {/* ── Articles ── */}
          <main>
            {/* Featured Post only when no filter/search active */}
            {activeCategory === "All" && searchQuery === "" && featured && (
              <div className="mb-12">
                <p className="text-[0.75rem] font-bold uppercase tracking-widest text-[#1a3fa8] mb-4 flex items-center gap-2">
                  <TrendingUp size={13} aria-hidden="true" /> Featured Article
                </p>
                <Link
                  href={featured.live ? featured.slug : "#"}
                  onClick={!featured.live ? (e) => e.preventDefault() : undefined}
                  className="group block rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 bg-white"
                  aria-label={`Read featured article: ${featured.title}`}
                >
                  <div className="relative h-72 sm:h-80 overflow-hidden">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.65) 100%)" }}
                      aria-hidden="true"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[0.72rem] font-bold uppercase tracking-wider mb-3 ${CATEGORY_COLORS[featured.category]}`}
                      >
                        {CATEGORY_ICONS[featured.category]} {featured.category}
                      </span>
                      <h2
                        className="text-[1.5rem] sm:text-[1.8rem] font-bold text-white leading-tight mb-2"
                        style={{ fontFamily: "'Merriweather', serif" }}
                      >
                        {featured.title}
                      </h2>
                      <div className="flex items-center gap-4 text-[0.8rem] text-white/70">
                        <span>{featured.author}</span>
                        <span className="flex items-center gap-1">
                          <Calendar size={12} aria-hidden="true" /> {featured.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} aria-hidden="true" /> {featured.readTime}
                        </span>
                      </div>
                    </div>
                    {featured.live && (
                      <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-emerald-500 text-white text-[0.7rem] font-bold uppercase tracking-wider">
                        Live
                      </div>
                    )}
                  </div>
                  <div className="p-6 bg-white">
                    <p className="text-[0.925rem] text-gray-600 leading-relaxed mb-4">{featured.excerpt}</p>
                    <span className="inline-flex items-center gap-1.5 text-[0.875rem] font-bold text-[#1a3fa8] group-hover:gap-2.5 transition-all">
                      Read the full guide <ArrowRight size={14} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </div>
            )}

            {/* Article Grid */}
            <div>
              {activeCategory !== "All" || searchQuery !== "" ? (
                <p className="text-[0.85rem] text-gray-500 mb-6" aria-live="polite">
                  {filtered.length} article{filtered.length !== 1 ? "s" : ""} found
                  {activeCategory !== "All" ? ` in "${activeCategory}"` : ""}
                  {searchQuery ? ` matching "${searchQuery}"` : ""}
                </p>
              ) : (
                <p className="text-[0.75rem] font-bold uppercase tracking-widest text-gray-400 mb-6">All Articles</p>
              )}

              {filtered.length === 0 ? (
                <div className="text-center py-16 text-gray-400">
                  <BookOpen size={40} className="mx-auto mb-4 opacity-30" aria-hidden="true" />
                  <p className="text-[1rem] font-semibold text-gray-500">No articles found</p>
                  <p className="text-[0.875rem] mt-1">Try a different category or search term.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {filtered.map((article) => (
                    <Link
                      key={article.slug}
                      href={article.live ? article.slug : "#"}
                      onClick={!article.live ? (e) => e.preventDefault() : undefined}
                      aria-label={article.live ? `Read: ${article.title}` : `${article.title}  (coming soon)`}
                      className={`group block rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 bg-white ${
                        !article.live ? "cursor-default opacity-80" : ""
                      }`}
                    >
                      <div className="relative h-44 overflow-hidden">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 flex items-center gap-2">
                          <span
                            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[0.7rem] font-bold uppercase tracking-wider ${CATEGORY_COLORS[article.category]}`}
                          >
                            {article.category}
                          </span>
                          {article.live && (
                            <span className="px-2 py-1 rounded-full bg-emerald-500 text-white text-[0.65rem] font-bold uppercase tracking-wider">
                              Live
                            </span>
                          )}
                          {!article.live && (
                            <span className="px-2 py-1 rounded-full bg-gray-800/70 text-white text-[0.65rem] font-bold uppercase tracking-wider">
                              Coming Soon
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="p-5">
                        <h3
                          className="text-[1rem] font-bold text-gray-900 leading-snug mb-2 group-hover:text-[#1a3fa8] transition-colors"
                          style={{ fontFamily: "'Merriweather', serif" }}
                        >
                          {article.title}
                        </h3>
                        <p className="text-[0.825rem] text-gray-500 leading-relaxed mb-4 line-clamp-2">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-col gap-1">
                            <span className="text-[0.75rem] font-semibold text-[#1a3fa8]">{article.author}</span>
                            <div className="flex items-center gap-3 text-[0.75rem] text-gray-400">
                              <span className="flex items-center gap-1">
                                <Calendar size={11} aria-hidden="true" /> {article.date}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock size={11} aria-hidden="true" /> {article.readTime}
                              </span>
                            </div>
                          </div>
                          {article.live && (
                            <span className="text-[0.8rem] font-bold text-[#1a3fa8] flex items-center gap-1 group-hover:gap-2 transition-all">
                              Read <ArrowRight size={12} aria-hidden="true" />
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </main>

          {/* ── Sidebar ── */}
          <aside className="hidden lg:block" aria-label="Blog sidebar">
            <div className="sticky top-20 space-y-6">

              {/* Agent CTA */}
              <div
                className="rounded-2xl p-5 text-white"
                style={{ background: "linear-gradient(135deg, #0d1f5c 0%, #1a3fa8 100%)" }}
              >
                <h3 className="text-[1rem] font-bold mb-2" style={{ fontFamily: "'Merriweather', serif" }}>
                  Have Questions?
                </h3>
                <p className="text-[0.85rem] text-white/80 mb-4 leading-relaxed">
                  Our licensed Medicare specialists are available to answer your questions , at no cost to you.
                </p>
                <a
                  href="tel:8136995559"
                  aria-label="Call MIP at (813) 699-5559"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-[#1a3fa8] font-bold text-[0.875rem] hover:bg-white/90 transition-colors w-full justify-center mb-2"
                >
                  <Phone size={15} aria-hidden="true" />
                  813-699-5559
                </a>
                <Link
                  href="/enrollment-calculator"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/30 text-white font-semibold text-[0.875rem] hover:bg-white/10 transition-colors w-full justify-center"
                >
                  Enrollment Calculator <ArrowRight size={13} aria-hidden="true" />
                </Link>
              </div>

              {/* Popular Tools */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
                <h3 className="text-[0.8rem] font-bold uppercase tracking-wider text-gray-400 mb-4">Popular Tools</h3>
                <ul className="space-y-3">
                  {[
                    { label: "Enrollment Timeline Calculator", href: "/enrollment-calculator", desc: "Find your personal enrollment dates" },
                    { label: "First Steps Checklist", href: "/first-steps-checklist", desc: "Your 30-step action plan" },
                    { label: "Costs at a Glance", href: "/costs-at-a-glance", desc: "2026 premiums & deductibles" },
                    { label: "Am I Eligible?", href: "/am-i-eligible", desc: "Check your Medicare eligibility" },
                  ].map((tool) => (
                    <li key={tool.href}>
                      <Link
                        href={tool.href}
                        className="group flex items-start gap-3 hover:bg-gray-50 rounded-xl p-2 -mx-2 transition-colors"
                      >
                        <ArrowRight
                          size={14}
                          className="text-[#1a3fa8] flex-shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform"
                          aria-hidden="true"
                        />
                        <div>
                          <p className="text-[0.875rem] font-semibold text-gray-800 group-hover:text-[#1a3fa8] transition-colors">
                            {tool.label}
                          </p>
                          <p className="text-[0.775rem] text-gray-400">{tool.desc}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Browse by Category */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
                <h3 className="text-[0.8rem] font-bold uppercase tracking-wider text-gray-400 mb-4">
                  Browse by Category
                </h3>
                <ul className="space-y-1">
                  {CATEGORIES.filter((c) => c !== "All").map((cat) => {
                    const count = ARTICLES.filter((a) => a.category === cat).length;
                    return (
                      <li key={cat}>
                        <button
                          onClick={() => setActiveCategory(cat)}
                          aria-pressed={activeCategory === cat}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-[0.875rem] transition-colors ${
                            activeCategory === cat
                              ? "bg-[#1a3fa8]/8 text-[#1a3fa8] font-semibold"
                              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            {CATEGORY_ICONS[cat]} {cat}
                          </span>
                          <span className="text-[0.75rem] text-gray-400 font-normal">{count}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-amber-50 rounded-2xl border border-amber-200 p-5">
                <h3
                  className="text-[0.95rem] font-bold text-gray-900 mb-1"
                  style={{ fontFamily: "'Merriweather', serif" }}
                >
                  Medicare Updates
                </h3>
                <p className="text-[0.8rem] text-gray-600 mb-4 leading-relaxed">
                  Get notified when we publish new guides and when Medicare rates change.
                </p>
                <input
                  type="email"
                  placeholder="your@email.com"
                  aria-label="Email address for Medicare updates newsletter"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-[0.875rem] focus:outline-none focus:border-[#1a3fa8] mb-2 bg-white"
                />
                <button
                  className="w-full py-2.5 rounded-xl bg-[#1a3fa8] text-white font-bold text-[0.875rem] hover:bg-[#0d1f5c] transition-colors"
                  aria-label="Subscribe to Medicare updates newsletter"
                >
                  Subscribe
                </button>
                <p className="text-[0.72rem] text-gray-400 mt-2 text-center">No spam. Unsubscribe anytime.</p>
              </div>

            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}
