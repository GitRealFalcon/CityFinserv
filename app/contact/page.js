// app/about/page.jsx

import ClientContact from "./ClientContact";

export const metadata = {
  title: 'Contact | Your Financial Guide',
  description: 'Certified financial advisor offering tailored financial services like credit help, loans, insurance, and more.',
};

export default function AboutPage() {
  return <ClientContact />;
}