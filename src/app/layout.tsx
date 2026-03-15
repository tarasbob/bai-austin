import type { Metadata } from 'next';
import { DM_Sans, Playfair_Display } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import './globals.css';

const dmSans = DM_Sans({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

const playfair = Playfair_Display({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: {
    default: 'BAi | Consultants in Acoustics, Sound Reinforcement & AV Systems',
    template: '%s | BAi Acoustics',
  },
  description:
    'BAi, LLC — Texas-based consultants in acoustics, noise control, sound reinforcement, and audiovisual systems since 1935. Offices in Austin, Dallas, and Houston.',
  keywords: [
    'acoustics consulting',
    'sound reinforcement',
    'audiovisual systems',
    'noise control',
    'room acoustics',
    'Austin Texas',
    'BAi',
  ],
  openGraph: {
    title: 'BAi | Acoustics Consultants Since 1935',
    description:
      'Consultants in Acoustics, Sound Reinforcement, and Audiovisual Systems. 85+ years, 6,000+ projects, 3 Texas offices.',
    type: 'website',
    locale: 'en_US',
    siteName: 'BAi Acoustics & AV Design',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BAi | Acoustics Consultants Since 1935',
    description:
      'Consultants in Acoustics, Sound Reinforcement, and Audiovisual Systems.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${playfair.variable} font-sans antialiased`}
      >
        <JsonLd />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
