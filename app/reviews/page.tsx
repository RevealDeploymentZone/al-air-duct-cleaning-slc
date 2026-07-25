import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Customer Reviews | AL Air Duct Cleaning Salt Lake City',
  description:
    '127+ verified reviews for AL Air Duct Cleaning SLC. 4.9/5 average rating from real Salt Lake City customers. Read what our customers say about our service.',
  alternates: { canonical: 'https://saltlakecity.alairductcleaning.com/reviews' },
}

const reviews = [
  { name: 'Sarah M.', location: 'Salt Lake City', service: 'Residential Duct Cleaning', rating: 5, text: 'I was skeptical at first, but the before and after photos they showed me were jaw-dropping. I had no idea how much debris was inside my ducts. Our home smells fresher, my daughter\'s allergies have noticeably improved, and I feel so much better knowing we\'re breathing cleaner air. Highly recommend!' },
  { name: 'David K.', location: 'Sandy, UT', service: 'Mold Inspection & Removal', rating: 5, text: 'Called them after noticing a musty smell from our vents for months. They found mold in two duct branches that we had absolutely no idea about. They showed me photos, explained everything clearly, and did a thorough remediation job. Worth every penny for the peace of mind alone.' },
  { name: 'Jennifer L.', location: 'Draper, UT', service: 'HVAC Cleaning', rating: 5, text: 'Our energy bill dropped noticeably after their HVAC cleaning. I didn\'t realize how much a dirty system was costing us every month. The technician was professional, on time, and explained what he was doing throughout the process. My allergies are significantly better too. Will definitely use them again.' },
  { name: 'Michael R.', location: 'West Valley City', service: 'Dryer Vent Cleaning', rating: 5, text: 'Our dryer was taking forever — two full cycles to dry a normal load. After their cleaning, it works like new. The technician showed me the massive amount of lint he pulled out and I was genuinely alarmed at the fire risk we\'d been living with. Fast, professional, affordable.' },
  { name: 'Amanda T.', location: 'Murray, UT', service: 'Residential Duct Cleaning', rating: 5, text: 'We just moved into a previously-owned home and wanted to start fresh with clean ducts. They were thorough, showed us everything they found (including some construction debris from a previous remodel), and left the place cleaner than they found it. Great experience from booking to completion.' },
  { name: 'Robert C.', location: 'South Jordan, UT', service: 'Commercial Duct Cleaning', rating: 5, text: 'Had them service our office building. They worked after hours so there was zero disruption to business. The crew was professional, efficient, and thorough. Multiple employees commented on how much better the air felt after. We\'ve booked them for annual maintenance going forward.' },
  { name: 'Lisa P.', location: 'Holladay, UT', service: 'Sanitization & Deodorization', rating: 5, text: 'We adopted two dogs and the house developed a pet smell we couldn\'t get rid of no matter how much we cleaned. Their sanitization and deodorization treatment made a massive difference — not just a cover-up smell, but genuinely fresh air. I was amazed. Our guests noticed it too.' },
  { name: 'Tom B.', location: 'Midvale, UT', service: 'Air Duct Cleaning', rating: 5, text: 'Five years since my last cleaning and they pulled out what looked like a small animal from my return duct — mostly lint and dust. The negative pressure system they use is clearly superior to what some other companies do. No mess, great results. I\'ll be scheduling every 2 years going forward.' },
  { name: 'Karen H.', location: 'Cottonwood Heights', service: 'Residential Duct Cleaning', rating: 4, text: 'Great service overall. The technician was knowledgeable and professional. The cleaning took about 3 hours for our 2,400 sq ft home. The only small thing was scheduling took a few days, but understandable as they seem busy. Would recommend to anyone looking for quality duct cleaning in SLC.' },
]

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'AL Air Duct Cleaning Salt Lake City',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '127',
    bestRating: '5',
  },
  review: reviews.map((r) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: r.name },
    reviewRating: { '@type': 'Rating', ratingValue: r.rating },
    reviewBody: r.text,
  })),
}

export default function ReviewsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center gap-1 mb-3 text-3xl text-yellow-400">
            {[1,2,3,4,5].map((i) => <span key={i}>&#9733;</span>)}
          </div>
          <h1 className="text-4xl font-extrabold mb-3">Customer Reviews</h1>
          <p className="text-xl text-blue-100 mb-2">
            4.9 out of 5 stars from 127+ verified reviews
          </p>
          <p className="text-blue-300 text-sm">Real Salt Lake City homeowners and businesses sharing their experiences.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Summary */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Total Reviews', value: '127+' },
              { label: 'Average Rating', value: '4.9 ★' },
              { label: '5-Star Reviews', value: '94%' },
              { label: 'Recommend Us', value: '100%' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
                <p className="text-3xl font-extrabold text-blue-700">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Review grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex gap-1 mb-2">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <span key={j} className="text-yellow-400">&#9733;</span>
                  ))}
                </div>
                <p className="text-sm text-blue-600 font-medium mb-3">{r.service}</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">&ldquo;{r.text}&rdquo;</p>
                <div className="border-t border-gray-100 pt-3">
                  <p className="font-semibold text-gray-900 text-sm">{r.name}</p>
                  <p className="text-gray-400 text-xs">{r.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-blue-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-extrabold mb-3">Ready to Experience the Difference?</h2>
          <p className="text-blue-200 mb-6">Join hundreds of satisfied Salt Lake City homeowners. Get your free estimate today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:3854621032" className="bg-white text-blue-900 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              Call (385) 462-1032
            </a>
            <Link href="/contact" className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
              Request Online Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
