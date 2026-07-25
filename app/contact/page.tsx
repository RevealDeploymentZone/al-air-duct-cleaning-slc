import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us | Free Estimate — AL Air Duct Cleaning SLC',
  description:
    'Contact AL Air Duct Cleaning Salt Lake City for a free estimate. Call (385) 462-1032 or fill out our form. We respond within 1 hour during business hours.',
  alternates: { canonical: 'https://saltlakecity.alairductcleaning.com/contact' },
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-4">Get Your Free Estimate</h1>
          <p className="text-xl text-blue-100">
            Fill out the form below or call us directly. We respond to all inquiries within 1 hour during business hours and offer same-day appointments when available.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Phone / Text</p>
                  <a href="tel:3854621032" className="text-blue-700 font-bold text-xl hover:underline">(385) 462-1032</a>
                  <p className="text-gray-500 text-sm mt-1">Call or text anytime during business hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <a href="mailto:info@alairductcleaning.com" className="text-blue-700 hover:underline">info@alairductcleaning.com</a>
                  <p className="text-gray-500 text-sm mt-1">We reply within 1 business hour</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Business Hours</p>
                  <p className="text-gray-700">Monday – Friday: 7:00am – 7:00pm</p>
                  <p className="text-gray-700">Saturday: 8:00am – 5:00pm</p>
                  <p className="text-gray-500">Sunday: Closed</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Service Area</p>
                  <p className="text-gray-700">Salt Lake City & Surrounding Areas</p>
                  <p className="text-gray-500 text-sm mt-1">
                    Salt Lake City, West Valley, Sandy, South Jordan, Murray, Draper, Midvale, West Jordan, and more.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-blue-50 rounded-xl border border-blue-100">
              <h3 className="font-bold text-blue-900 mb-2">Why Choose AL Air Duct Cleaning?</h3>
              <ul className="text-sm text-blue-800 space-y-2">
                {[
                  'NADCA-certified technicians',
                  '4.9★ from 127+ verified reviews',
                  'Before & after photos provided',
                  'Transparent, upfront pricing',
                  '100% satisfaction guarantee',
                  'Same-day appointments available',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-blue-600">&#10003;</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Request Your Free Estimate</h2>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
