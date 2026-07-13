import type { Metadata } from 'next';
import { Space_Grotesk, Instrument_Sans, IBM_Plex_Mono } from 'next/font/google';
import WhatsAppButton from '@/components/WhatsAppButton';
import './globals.css';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });
const instrumentSans = Instrument_Sans({ subsets: ['latin'], variable: '--font-instrument-sans' });
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-plex-mono' });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://vsolcorp.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Vision Solutions Limited — Enterprise Technology for the Horn of Africa',
    template: '%s — Vision Solutions Limited',
  },
  description:
    'VSL designs, builds and runs the digital systems that let enterprises, institutions and governments in Somalia modernize with confidence. ICT consulting, software development and 24/7 support.',
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Vision Solutions Limited',
    title: 'Vision Solutions Limited — Enterprise Technology for the Horn of Africa',
    description:
      'ICT consulting, software development and 24/7 support — one accountable technology partner in Mogadishu.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${instrumentSans.variable} ${plexMono.variable}`}>
      <body className="bg-ink font-body text-light">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
