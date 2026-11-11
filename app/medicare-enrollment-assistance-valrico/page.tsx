import MedicareEnrollmentGuide, {
  enrollmentGuideMetadata,
  type EnrollmentGuide,
} from "@/components/MedicareEnrollmentGuide";

const guide: EnrollmentGuide = {
  "path": "/medicare-enrollment-assistance-valrico/",
  "title": "How to Enroll in Medicare After Retirement in Valrico, FL",
  "headline": "How to Enroll in Medicare After Retirement in Valrico, FL",
  "description": "Retiring in Valrico? Organize your employer coverage dates, review the Part B application steps, and check coverage for your retirement.",
  "city": "Valrico",
  "intro": "If you are retiring in Valrico and leaving job-based coverage, start with the dates your employer gives you. Use those dates to prepare questions for Social Security and plan how your Medicare coverage will begin.",
  "steps": [
    {
      "title": "Ask for the dates in writing",
      "text": "Contact your employer or your spouse’s employer for the last day of work and the last day of active employee health coverage. Record any separate dates for retiree coverage or COBRA so you can describe each type of insurance accurately when asking about Medicare.",
      "link": {
        "label": "Review Medicare’s guidance on working past 65",
        "href": "https://www.medicare.gov/basics/get-started-with-medicare/medicare-basics/working-past-65"
      }
    },
    {
      "title": "Confirm which Medicare application applies",
      "text": "Check your Medicare card or account to see which parts you already have. If you have Part A and need to add Part B, ask Social Security which application and proof of employer coverage you need. Confirm your enrollment window and effective date for your situation.",
      "link": {
        "label": "Review Social Security’s Medicare application options",
        "href": "https://www.ssa.gov/medicare/sign-up"
      }
    },
    {
      "title": "Compare coverage for retirement in Valrico",
      "text": "List the doctors, hospitals, prescriptions, and pharmacy you expect to use after retirement. Compare options using your home ZIP code, such as 33594 or 33596, and check the exact plan and coverage year. Include costs for the services you use regularly.",
      "link": {
        "label": "Compare Medicare plans for your Valrico ZIP code",
        "href": "https://www.medicare.gov/plan-compare/"
      }
    },
    {
      "title": "Review the transition before ending coverage",
      "text": "Keep copies of forms and confirmations. Compare your employer coverage end date with your confirmed Medicare and plan start dates. Ask your employer or Social Security to clarify any gap or overlap before canceling existing coverage.",
      "link": {
        "label": "Review Medicare and employer coverage after 65",
        "href": "/medicare-and-employer-insurance-after-65-brandon-fl/"
      }
    }
  ],
  "checklistTitle": "Valrico Retirement Coverage Checklist",
  "checklist": [
    "Last day of work and last day of active employee coverage",
    "Existing Medicare card and start dates, if available",
    "Employer contact for coverage verification",
    "Current medications, doctors, and pharmacy"
  ],
  "servicePath": "/medicare-enrollment-assistance-in-valrico-fl/"
};

export const metadata = enrollmentGuideMetadata(guide);

export default function Page() {
  return <MedicareEnrollmentGuide guide={guide} />;
}
