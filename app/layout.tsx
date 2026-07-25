import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://saltlakecity.alairductcleaning.com'),
  title: {
    default: 'AL Air Duct Cleaning Salt Lake City | Professional HVAC & Duct Cleaning',
    template: '%s | AL Air Duct Cleaning Salt Lake City',
  },
  description:
    'Professional air duct cleaning, dryer vent cleaning, HVAC cleaning, and mold removal in Salt Lake City, UT. 10+ years experience. 4.9★ rating. Call (385) 462-1032.',
  keywords: [
    'air duct cleaning salt lake city',
    'duct cleaning SLC',
    'HVAC cleaning Salt Lake City',
    'dryer vent cleaning Utah',
    'mold removal ductwork SLC',
  ],
  authors: [{ name: 'AL Air Duct Cleaning SLC' }],
  creator: 'AL Air Duct Cleaning SLC',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://saltlakecity.alairductcleaning.com',
    siteName: 'AL Air Duct Cleaning Salt Lake City',
    title: 'AL Air Duct Cleaning Salt Lake City | Professional HVAC & Duct Cleaning',
    description:
      'Professional air duct cleaning, dryer vent cleaning, HVAC cleaning, and mold removal in Salt Lake City, UT. Call (385) 462-1032 for a free estimate.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AL Air Duct Cleaning Salt Lake City',
    description: 'Professional duct & HVAC cleaning services in Salt Lake City, UT.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://saltlakecity.alairductcleaning.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
