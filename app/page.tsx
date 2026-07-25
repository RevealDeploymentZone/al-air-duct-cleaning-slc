import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'AL Air Duct Cleaning Salt Lake City | #1 Duct & HVAC Cleaning',
  description:
    'Salt Lake City\'s top-rated air duct cleaning service. We clean residential & commercial ducts, dryer vents, HVAC systems, and remove mold. 4.9★ | (385) 462-1032.',
  alternates: { canonical: 'https://saltlakecity.alairductcleaning.com' },
}

const services = [
  {
    title: 'Air Duct Cleaning',
    desc: 'Deep cleaning of your entire duct network to remove years of dust, allergens, and debris — improving air quality and system efficiency.',
    href: '/services/air-duct-cleaning',
    icon: '💨',
  },
  {
    title: 'Dryer Vent Cleaning',
    desc: 'Remove dangerous lint buildup from your dryer vent to prevent house fires and cut drying time by up to 30%.',
    href: '/services/dryer-vent-cleaning',
    icon: '🔥',
  },
  {
    title: 'HVAC Cleaning',
    desc: 'Comprehensive cleaning of your entire HVAC system — coils, blower, drain pan, and more — for peak performance.',
    href: '/services/hvac-cleaning',
    icon: '❄️',
  },
  {
    title: 'Residential Duct Cleaning',
    desc: 'Specialized home duct cleaning designed to protect your family, pets, and allergy sufferers from indoor air pollutants.',
    href: '/services/residential-air-duct-cleaning',
    icon: '🏠',
  },
  {
    title: 'Commercial Duct Cleaning',
    desc: 'Professional large-scale duct cleaning for offices, restaurants, retail stores, and multi-unit buildings in Salt Lake City.',
    href: '/services/commercial-air-duct-cleaning',
    icon: '🏢',
  },
  {
    title: 'Sanitization & Deodorization',
    desc: 'EPA-approved antimicrobial treatment that kills bacteria, viruses, and mold spores while eliminating persistent odors.',
    href: '/services/sanitization-deodorization',
    icon: '✨',
  },
  {
    title: 'Mold Inspection & Removal',
    desc: 'Thorough mold detection and safe removal from your ductwork, stopping spore circulation throughout your home.',
    href: '/services/mold-inspection-removal',
    icon: '🔬',
  },
]

const reviews = [
  {
    name: 'Sarah M.',
    location: 'Salt Lake City',
    text: 'Amazing service! They arrived on time, explained everything, and our home smells so much fresher. I could tell the difference immediately.',
    rating: 5,
  },
  {
    name: 'David K.',
    location: 'Sandy, UT',
    text: 'They found mold in two of our ducts that we had no idea about. Cleaned everything professionally. Worth every penny for peace of mind.',
    rating: 5,
  },
  {
    name: 'Jennifer L.',
    location: 'Draper, UT',
    text: 'Reduced my energy bill noticeably after their HVAC cleaning. My allergies are much better too. Highly recommend to anyone in SLC.',
    rating: 5,
  },
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://saltlakecity.alairductcleaning.com',
  name: 'AL Air Duct Cleaning Salt Lake City',
  image: 'https://saltlakecity.alairductcleaning.com/og-image.jpg',
  url: 'https://saltlakecity.alairductcleaning.com',
  telephone: '+13854621032',
  email: 'info@alairductcleaning.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Salt Lake City',
    addressRegion: 'UT',
    postalCode: '84101',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 40.7608,
    longitude: -111.891,
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '07:00', closes: '19:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '08:00', closes: '17:00' },
  ],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '127' },
  priceRange: '$$',
  servesCuisine: undefined,
  description: 'Professional air duct cleaning, dryer vent cleaning, HVAC cleaning, and mold removal services in Salt Lake City, Utah.',
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-700/50 border border-blue-500/30 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <span className="text-yellow-400">&#9733;</span>
              4.9/5 Stars — 127+ Verified Reviews
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-5">
              Salt Lake City&apos;s Most Trusted Air Duct Cleaning Service
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Breathe cleaner. Live healthier. We remove years of dust, allergens, mold, and debris from your ductwork using professional-grade equipment — guaranteed results or your money back.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:3854621032"
                className="bg-white text-blue-900 font-bold px-7 py-3.5 rounded-lg hover:bg-blue-50 transition-colors text-base"
              >
                Call (385) 462-1032
              </a>
              <Link
                href="/contact"
                className="border-2 border-white text-white font-bold px-7 py-3.5 rounded-lg hover:bg-white/10 transition-colors text-base"
              >
                Get Free Estimate
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 mt-8 text-sm text-blue-200">
              <span className="flex items-center gap-1.5"><span className="text-green-400">&#10003;</span> Licensed & Insured</span>
              <span className="flex items-center gap-1.5"><span className="text-green-400">&#10003;</span> 10+ Years Experience</span>
              <span className="flex items-center gap-1.5"><span className="text-green-400">&#10003;</span> Same-Day Available</span>
              <span className="flex items-center gap-1.5"><span className="text-green-400">&#10003;</span> 100% Satisfaction Guarantee</span>
            </div>
          </div>

          {/* Quick quote form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h2 className="text-gray-900 text-xl font-bold mb-1">Get Your Free Estimate</h2>
            <p className="text-gray-500 text-sm mb-6">No obligation. We respond within 1 hour.</p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-950 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: '1,500+', label: 'Homes & Businesses Served' },
            { num: '10+', label: 'Years of Experience' },
            { num: '4.9★', label: 'Average Rating' },
            { num: '100%', label: 'Satisfaction Guarantee' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-extrabold text-blue-300">{stat.num}</p>
              <p className="text-sm text-blue-200 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Our Services in Salt Lake City</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From standard residential duct cleaning to commercial HVAC maintenance and mold remediation — we do it all with certified technicians and advanced equipment.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all group"
              >
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-blue-600 text-sm font-semibold mt-4 group-hover:gap-2 transition-all">
                  Learn more <span>&#8594;</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Why Salt Lake City Homeowners Choose AL Air Duct Cleaning</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              With SLC&apos;s unique air quality challenges — valley inversions, high particulate levels, and cold winters — your indoor air quality deserves professional attention.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Certified NADCA Technicians', desc: 'All our technicians are trained and certified by the National Air Duct Cleaners Association (NADCA) — the gold standard in the industry.' },
              { title: 'Truck-Mounted Vacuum Systems', desc: 'We use powerful truck-mounted negative pressure systems that extract contaminants without spreading them back into your home.' },
              { title: 'Before & After Documentation', desc: 'We photograph your ducts before and after cleaning so you can see exactly what was removed and verify the results yourself.' },
              { title: 'Transparent, Upfront Pricing', desc: 'No hidden fees, no bait-and-switch. You get a clear quote before we start, and that\'s what you pay — period.' },
              { title: 'Locally Owned & Operated', desc: 'We\'re your neighbors, not a national franchise. We care about SLC families and stand behind every job with our satisfaction guarantee.' },
              { title: 'Same-Day Appointments', desc: 'We understand air quality issues can\'t wait. Call before noon and we\'ll often get to you the same day across the Salt Lake Valley.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">What Our Customers Say</h2>
            <p className="text-gray-600">4.9 stars across 127+ verified reviews in Salt Lake City</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">&#9733;</span>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">&ldquo;{r.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{r.name}</p>
                  <p className="text-gray-400 text-xs">{r.location}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/reviews" className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:underline">
              Read all 127 reviews &#8594;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-blue-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-4">Ready for Cleaner Air in Your Home?</h2>
          <p className="text-blue-200 text-lg mb-8">
            Get a free estimate today. Most jobs are completed in 2-4 hours with zero mess left behind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:3854621032"
              className="bg-white text-blue-900 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors text-lg"
            >
              Call (385) 462-1032
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-lg"
            >
              Request Online Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 px-4 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Serving All of Salt Lake County & Surrounding Areas</h2>
          <p className="text-gray-600 text-sm">
            Salt Lake City &bull; West Valley City &bull; Sandy &bull; South Jordan &bull; Murray &bull; Millcreek &bull; Draper &bull; Holladay &bull; Cottonwood Heights &bull; Taylorsville &bull; Midvale &bull; West Jordan &bull; Herriman &bull; Riverton &bull; Bluffdale
          </p>
        </div>
      </section>
    </>
  )
}
