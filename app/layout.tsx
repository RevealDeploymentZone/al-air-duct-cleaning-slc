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
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/icon.svg',
    apple: '/icon.svg',
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

        {/* Google Map Section */}
        <section className="bg-gray-800 py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-white mb-6">Our Service Area – Salt Lake City, UT</h2>
            <div className="w-full rounded-xl overflow-hidden shadow-lg" style={{ height: '400px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425528.5344435563!2d-112.43706621413045!3d33.56787984372134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x64da4d077b672761%3A0xf9bc2c1e21204634!2sAL%20Air%20Duct%20Cleaning%20Phoenix!5e0!3m2!1sen!2sin!4v1785047043780!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        <Footer />
      </body>
    </html>
  )
}
