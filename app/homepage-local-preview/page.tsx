import HomeLocalPreviewClient from '../HomeLocalPreviewClient';

/**
 * Brandon-first homepage preview only.
 * This noindex route exists for review and must not replace the live homepage until approved.
 */
export const metadata: Metadata = {
  title: 'Preview: Medicare Help for Brandon, FL Residents | Medicare Information Pro',
  description:
    'Noindex review page showing a proposed Brandon-first homepage experience for Medicare Information Pro.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function HomepageLocalPreviewPage() {
  return <HomeLocalPreviewClient />;
}
