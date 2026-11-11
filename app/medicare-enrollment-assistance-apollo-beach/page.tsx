import MedicareEnrollmentGuide, {
  enrollmentGuideMetadata,
  type EnrollmentGuide,
} from "@/components/MedicareEnrollmentGuide";

const guide: EnrollmentGuide = {
  "path": "/medicare-enrollment-assistance-apollo-beach/",
  "title": "Medicare Enrollment After Moving to Apollo Beach, FL",
  "headline": "Medicare Enrollment After Moving to Apollo Beach, FL",
  "description": "Moving to Apollo Beach? Check your current Medicare plan’s service area, update your address, and review your coverage options after the move.",
  "city": "Apollo Beach",
  "intro": "If you are moving to Apollo Beach with Medicare, start by identifying your current coverage and telling the right organization about your move. Use this checklist to find out what your change of address means for your plan.",
  "steps": [
    {
      "title": "Write down the coverage you have today",
      "text": "Identify each part of your coverage, including any Medicare Advantage plan, stand-alone drug plan, or Medicare Supplement policy. Keep the plan names, member service numbers, and dates handy for your calls.",
      "link": {
        "label": "Review Original Medicare and Medicare Advantage",
        "href": "/original-vs-advantage/"
      }
    },
    {
      "title": "Report the move and check the service area",
      "text": "Give your current plan your new Apollo Beach address and move date. Ask whether the plan serves that address, what changes you can make, and which deadlines apply. Check Medicare’s rules for moves and other qualifying events before choosing a new plan.",
      "link": {
        "label": "Check Medicare’s Special Enrollment Periods",
        "href": "https://www.medicare.gov/basics/get-started-with-medicare/get-more-coverage/joining-a-plan/special-enrollment-periods"
      }
    },
    {
      "title": "Compare plans for your new ZIP code",
      "text": "Use your new residential ZIP code, such as 33572, to search Medicare Plan Finder. Confirm your preferred Apollo Beach pharmacy and any doctors you intend to use. If you keep a doctor outside the area, ask the plan how that office is covered.",
      "link": {
        "label": "Compare plans at your new address",
        "href": "https://www.medicare.gov/plan-compare/"
      }
    },
    {
      "title": "Confirm when each plan starts and ends",
      "text": "Write down your old coverage end date and any new plan’s effective date. Check that your prescriptions can be filled during the move and keep your enrollment confirmation. Contact the plan if the effective dates or pharmacy details differ from what you expected.",
      "link": {
        "label": "Review Medicare enrollment timing",
        "href": "/enrollment-timeline/"
      }
    }
  ],
  "checklistTitle": "Apollo Beach Medicare Move Checklist",
  "checklist": [
    "New street address, ZIP code, and move date",
    "Current plan names and member service numbers",
    "Doctors you intend to keep and new offices you may use",
    "Prescription refill dates and your preferred pharmacy"
  ],
  "servicePath": "/medicare-enrollment-assistance-in-apollo-beach-fl/"
};

export const metadata = enrollmentGuideMetadata(guide);

export default function Page() {
  return <MedicareEnrollmentGuide guide={guide} />;
}
