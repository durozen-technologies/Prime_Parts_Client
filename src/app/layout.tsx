import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://primeparts-lime.vercel.app'),
  title: 'Prime Parts | Powering Performance. Built for Reliability.',
  description: 'Leading supplier and wholesale distributor of automotive spare parts, engine components, braking systems, suspension units, and heavy industrial assemblies.',
  keywords: [
    'automotive spare parts',
    'car spare parts',
    'commercial vehicle parts',
    'Prime Parts',
    'engine components',
    'brake pads distributor',
    'suspension parts India',
    'automotive components warehouse',
    'OEM replacement parts'
  ],
  authors: [{ name: 'Prime Parts India' }],
  openGraph: {
    title: 'Prime Parts | Powering Performance. Built for Reliability.',
    description: 'Premier automotive spare parts company portfolio and wholesale distribution network.',
    url: 'https://primeparts.in',
    siteName: 'Prime Parts',
    images: [
      {
        url: '/images/part-01.jpg',
        width: 1200,
        height: 630,
        alt: 'Prime Parts Automotive Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Rajdhani:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#f8fafc] text-slate-900 antialiased min-h-screen selection:bg-red-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
