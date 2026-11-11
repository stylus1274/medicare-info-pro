import MedicareEnrollmentGuide, {
  enrollmentGuideMetadata,
  type EnrollmentGuide,
} from "@/components/MedicareEnrollmentGuide";

const guide: EnrollmentGuide = {
  "path": "/medicare-enrollment-assistance-riverview/",
  "title": "How to Enroll in Medicare in Riverview, FL",
  "headline": "How to Enroll in Medicare in Riverview, FL",
  "description": "Turning 65 in Riverview? Check when to enroll, confirm your Medicare start dates, and prepare to compare coverage for your ZIP code.",
  "city": "Riverview",
  "intro": "If you are turning 65 in Riverview, start with two questions: Do you need to apply for Medicare, and when should coverage begin? Use these steps to organize your application and compare coverage for your address.",
  "steps": [
    {
      "title": "Check whether you need to apply",
      "text": "Look for a Medicare card or enrollment notice if you already receive Social Security benefits. If you are unsure whether enrollment is automatic for you, confirm with Social Security. Write down any Part A and Part B start dates already shown on your paperwork.",
      "link": {
        "label": "Check Medicare enrollment with Social Security",
        "href": "https://www.ssa.gov/medicare/sign-up"
      }
    },
    {
      "title": "Identify your enrollment window",
      "text": "Review the Initial Enrollment Period for people approaching 65. If you have coverage through your or your spouse’s current job, ask the benefits administrator how that coverage works with Medicare and confirm your timing with Social Security before making a decision.",
      "link": {
        "label": "Check Medicare’s enrollment periods",
        "href": "https://www.medicare.gov/basics/get-started-with-medicare/sign-up/when-can-i-sign-up-for-medicare"
      }
    },
    {
      "title": "Compare coverage for your address",
      "text": "Use the ZIP code where you actually live, such as 33569, 33578, or 33579. Make a list of your Riverview doctors and preferred pharmacy. Compare coverage using each provider’s office address, the exact plan name, and the year your coverage will start.",
      "link": {
        "label": "Compare plans with Medicare Plan Finder",
        "href": "https://www.medicare.gov/plan-compare/"
      }
    },
    {
      "title": "Keep a record of your application",
      "text": "Save the submission confirmation and check your application status. When you receive your Medicare card or enrollment notice, compare the effective dates with the dates you expected. Ask Social Security to clarify any discrepancy before changing other insurance.",
      "link": {
        "label": "Review the Medicare enrollment timeline",
        "href": "/enrollment-timeline/"
      }
    }
  ],
  "checklistTitle": "Riverview Medicare Enrollment Checklist",
  "checklist": [
    "Your residential ZIP code and the month you turn 65",
    "Current insurance and the dates you expect it to end",
    "Medicare card or enrollment notice, if received",
    "Doctors, prescriptions, and preferred pharmacy"
  ],
  "servicePath": "/medicare-enrollment-assistance-in-riverview-fl/"
};

export const metadata = enrollmentGuideMetadata(guide);

export default function Page() {
  return <MedicareEnrollmentGuide guide={guide} />;
}
