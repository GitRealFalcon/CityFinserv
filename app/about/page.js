// app/about/page.jsx

import { ClientAbout } from './ClientAbout';

export const metadata = {
  title: 'About | Your Financial Guide',
  description: 'Certified financial advisor offering tailored financial services like credit help, loans, insurance, and more.',
};

export default function AboutPage() {
  return <ClientAbout />;
}