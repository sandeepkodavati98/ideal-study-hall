import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://idealstudyhall.com'),
  title: 'Ideal Study Hall Rajahmundry | Peaceful Study Space & Reading Room',
  description:
    'Dedicated quiet study space in Jampeta, Rajahmundry for CA, UPSC, APPSC Groups, SSC, Banking, and Railway aspirants. Fully Air-Conditioned, Power Backup, Individual Cabins, Knowledge Shelf.',
  keywords: [
    'Ideal Study Hall',
    'Study hall Rajahmundry',
    'Reading room Rajahmundry',
    'Study hall near Jampeta',
    'AC study room Rajahmundry',
    'Govt exam study room Rajahmundry'
  ],
  openGraph: {
    title: 'Ideal Study Hall Rajahmundry | Where Effort Meets Success',
    description: 'Flat ₹1,100/Month. Zero Deposit. Individual Cabins, AC, Free Exam Prep Books & Power Backup.',
    url: 'https://idealstudyhall.com',
    siteName: 'Ideal Study Hall',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Ideal Study Hall',
    image: 'https://idealstudyhall.com/images/hall-wide.webp',
    telephone: '+917416411042',
    priceRange: '₹1100/month',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Near Nandam Ganiraju Junction, Beside Siri Dairy, Jampeta',
      addressLocality: 'Rajahmundry',
      addressRegion: 'Andhra Pradesh',
      postalCode: '533101',
      addressCountry: 'IN',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '06:00',
        closes: '22:00',
      },
    ],
    url: 'https://idealstudyhall.com',
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}