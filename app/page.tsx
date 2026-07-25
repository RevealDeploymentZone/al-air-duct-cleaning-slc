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

      {/* About AL Air Duct Cleaning */}
      <section className="py-20 px-4 bg-white" id="about-us">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">About Our Company</span>
              <h2 className="text-3xl font-extrabold text-gray-900 mt-2 mb-5">
                Salt Lake City&apos;s Locally Owned Air Duct Cleaning Experts
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                AL Air Duct Cleaning has proudly served Salt Lake City families and businesses for over a decade. Our company was founded by local homeowners who understood firsthand the unique air quality challenges of living in the Salt Lake Valley — from winter temperature inversions trapping pollutants, to summer wildfire smoke, to the constant accumulation of dust and allergens inside residential ductwork.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                What started as a small team committed to honest, thorough service has grown into one of the most trusted air duct cleaning companies across Salt Lake County. We&apos;ve built our reputation job by job, family by family — never cutting corners, never surprising customers with hidden fees, and always standing behind every clean with our 100% satisfaction guarantee.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Unlike national franchise chains that send subcontractors, every AL Air Duct Cleaning technician is a direct employee. Each team member is background-checked, drug-tested, and extensively trained to the standards set by the{' '}
                <a
                  href="https://www.nadca.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-medium"
                >
                  National Air Duct Cleaners Association (NADCA)
                </a>
                {' '}— the industry&apos;s gold standard for professional duct cleaning. We invest in the latest truck-mounted vacuum systems, high-definition inspection cameras, and EPA-registered sanitization treatments to ensure every job meets the highest quality benchmarks.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We are proud to be a locally owned and operated business that reinvests in the Salt Lake Valley community. When you choose AL Air Duct Cleaning, you&apos;re not just getting cleaner air — you&apos;re supporting a local business that genuinely cares about the health and well-being of every family in our community.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-sm"
                >
                  Learn More About Us &#8594;
                </Link>
                <Link
                  href="/reviews"
                  className="inline-flex items-center gap-2 border border-blue-200 text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm"
                >
                  Read Our Reviews &#8594;
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { title: 'NADCA-Certified Technicians', desc: 'All staff certified by the National Air Duct Cleaners Association — the highest credential in the industry.' },
                { title: 'Licensed, Bonded & Insured', desc: 'Fully covered for residential and commercial work across Salt Lake County and surrounding areas.' },
                { title: '10+ Years Serving Salt Lake Valley', desc: 'A decade of experience cleaning homes and businesses in SLC, Sandy, Draper, Murray, and beyond.' },
                { title: '100% Satisfaction Guarantee', desc: 'If you\'re not fully satisfied with our work, we\'ll come back and make it right at no charge.' },
                { title: 'Transparent, Upfront Pricing', desc: 'You get a clear written quote before we start. No surprise charges, no upsells, no hidden fees — ever.' },
                { title: 'Before & After Photo Documentation', desc: 'We provide photographic proof of every clean so you can verify the results with your own eyes.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{item.title}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SLC Air Quality Section */}
      <section className="py-20 px-4 bg-blue-950 text-white" id="slc-air-quality">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-blue-300 font-semibold text-sm uppercase tracking-widest">Why It Matters Here</span>
              <h2 className="text-3xl font-extrabold mt-2 mb-5">
                Salt Lake City&apos;s Air Quality Challenge — And What You Can Do Indoors
              </h2>
              <p className="text-blue-100 leading-relaxed mb-4">
                Salt Lake City regularly ranks among the most polluted cities in the United States during winter months. The Salt Lake Valley&apos;s unique geography — surrounded by the Wasatch Range to the east and the Oquirrh Mountains to the west — makes it especially vulnerable to temperature inversions. During these events, a layer of warm air traps cold air and pollutants close to the ground, pushing{' '}
                <a
                  href="https://www.epa.gov/pm-pollution/particulate-matter-pm-basics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:underline font-medium"
                >
                  fine particulate matter (PM2.5)
                </a>
                {' '}levels to dangerous concentrations for days or weeks at a time.
              </p>
              <p className="text-blue-100 leading-relaxed mb-4">
                But here&apos;s what many Salt Lake residents don&apos;t realize: according to the{' '}
                <a
                  href="https://www.epa.gov/report-environment/indoor-air-quality"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:underline font-medium"
                >
                  U.S. Environmental Protection Agency (EPA)
                </a>
                , indoor air can be 2 to 5 times more polluted than outdoor air. Every time your HVAC system runs during an inversion event, it draws outside contaminants into your duct system. Combined with the everyday accumulation of dust, pet dander, pollen, mold spores, and cooking particles, your ducts can become a reservoir of pollutants circulating through your home around the clock.
              </p>
              <p className="text-blue-100 leading-relaxed mb-4">
                For families with children, elderly residents, or anyone dealing with asthma or allergies, this invisible buildup poses real health risks. The{' '}
                <a
                  href="https://www.lung.org/clean-air/indoor-air"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-300 hover:underline font-medium"
                >
                  American Lung Association
                </a>
                {' '}identifies indoor air quality as a top environmental health priority, particularly in regions with known outdoor air challenges like Utah&apos;s Wasatch Front.
              </p>
              <p className="text-blue-100 leading-relaxed">
                Professional air duct cleaning removes the accumulated contaminants from your duct system, reducing the pollutant load that recirculates through your home every time the heat or air conditioning runs. Combined with our{' '}
                <Link href="/services/sanitization-deodorization" className="text-blue-300 hover:underline font-medium">
                  EPA-registered sanitization service
                </Link>
                , we can dramatically improve the quality of the air your family breathes every day.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-blue-900 rounded-2xl p-6 border border-blue-800">
                <h3 className="text-lg font-bold mb-4 text-white">Signs Your Ducts Need Cleaning</h3>
                <ul className="space-y-3 text-blue-100 text-sm">
                  {[
                    'Visible dust or debris inside duct openings or on registers',
                    'Musty or stale odor when the HVAC system runs',
                    'Unusual increase in dust accumulation throughout your home',
                    'Family members experiencing worsened allergy or asthma symptoms indoors',
                    'Recent home renovation, construction, or remodeling work',
                    'Moving into a home with unknown duct cleaning history',
                    'Evidence of rodent, insect, or pest infestation in ductwork',
                    'Higher-than-expected energy bills without a clear explanation',
                  ].map((sign) => (
                    <li key={sign} className="flex items-start gap-2.5">
                      <span className="text-blue-400 font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                      <span>{sign}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-blue-900 rounded-2xl p-6 border border-blue-800">
                <h3 className="text-lg font-bold mb-3 text-white">How Often Should You Clean Your Ducts?</h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-3">
                  NADCA recommends having your air ducts professionally inspected every year and cleaned every 3–5 years for most homes. However, Salt Lake City homes may benefit from more frequent cleaning due to inversion-season particulate buildup.
                </p>
                <ul className="text-blue-100 text-sm space-y-1.5">
                  <li><span className="font-semibold text-white">Homes with pets:</span> Every 2–3 years</li>
                  <li><span className="font-semibold text-white">Households with allergy sufferers:</span> Every 2–3 years</li>
                  <li><span className="font-semibold text-white">After renovation/construction:</span> Immediately</li>
                  <li><span className="font-semibold text-white">Commercial properties:</span> Annually</li>
                </ul>
                <div className="mt-4">
                  <Link
                    href="/faq"
                    className="text-blue-300 hover:underline text-sm font-semibold"
                  >
                    See all FAQs &#8594;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7-Step Process */}
      <section className="py-20 px-4 bg-gray-50" id="our-process">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">How We Work</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2 mb-4">
              Our 7-Step Professional Duct Cleaning Process
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Every AL Air Duct Cleaning job follows our proven, systematic process — developed over 10+ years of professional duct cleaning in Salt Lake City.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Free Inspection',
                desc: 'We begin with a full visual inspection using HD cameras to assess contamination levels, identify mold, and detect any structural issues inside your ductwork.',
              },
              {
                step: '02',
                title: 'Home Protection',
                desc: 'Floor coverings are laid, furniture is protected, and all supply and return registers are sealed to contain debris during the cleaning process.',
              },
              {
                step: '03',
                title: 'Negative Pressure Setup',
                desc: 'Our truck-mounted vacuum system connects to your main trunk line, creating powerful negative pressure throughout the entire duct network — nothing escapes into your living space.',
              },
              {
                step: '04',
                title: 'Agitation & Dislodgement',
                desc: 'Rotary brushes, compressed air whips, and pneumatic tools break loose hardened dust and debris from duct walls, pushing it all toward the collection point.',
              },
              {
                step: '05',
                title: 'HVAC Component Cleaning',
                desc: 'We clean your air handler, evaporator coils, blower motor, and drain pan — critical components that harbor bacteria and restrict airflow when neglected.',
              },
              {
                step: '06',
                title: 'Sanitization Treatment',
                desc: 'Upon request, we apply EPA-registered antimicrobial treatments throughout your duct system, eliminating bacteria, mold spores, and odor-causing organisms.',
              },
              {
                step: '07',
                title: 'Final Inspection & Documentation',
                desc: 'A post-clean camera inspection confirms thorough results. We provide before-and-after photo documentation so you can see exactly what was removed.',
              },
              {
                step: '08',
                title: 'Clean, No-Mess Departure',
                desc: 'We remove all equipment, floor covers, and debris. We leave your home exactly as we found it — only with dramatically cleaner air inside your ducts.',
              },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 relative">
                <span className="text-5xl font-extrabold text-blue-100 absolute top-4 right-4 leading-none select-none">{item.step}</span>
                <h3 className="font-bold text-gray-900 mb-2 relative z-10">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition-colors"
            >
              Schedule Your Cleaning Today &#8594;
            </Link>
          </div>
        </div>
      </section>

      {/* Health Benefits */}
      <section className="py-20 px-4 bg-white" id="health-benefits">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">Health & Home Benefits</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2 mb-4">
              What Clean Air Ducts Mean for Your Salt Lake City Home
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Professional duct cleaning delivers measurable improvements to your home&apos;s health, comfort, and energy efficiency.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🫁',
                title: 'Better Indoor Air Quality',
                desc: 'Removing accumulated dust, mold spores, pollen, pet dander, and bacteria from your ducts directly reduces the concentration of airborne pollutants in your living spaces. Families report noticeably fresher air after cleaning.',
              },
              {
                icon: '🤧',
                title: 'Reduced Allergy & Asthma Symptoms',
                desc: 'For the millions of Utahns who suffer from seasonal allergies and respiratory conditions, clean ducts mean fewer triggers circulating through your home. Many customers report significant symptom relief after a thorough cleaning.',
              },
              {
                icon: '💡',
                title: 'Lower Energy Bills',
                desc: 'Dust and debris buildup restricts airflow in your HVAC system, forcing it to work harder and consume more energy. Clean ducts allow your system to operate at peak efficiency, often reducing heating and cooling costs by 20-30%.',
              },
              {
                icon: '🏠',
                title: 'Extended HVAC System Life',
                desc: 'Dirty ducts force your furnace and air conditioner to strain against restricted airflow. Regular cleaning reduces wear and tear on motors, coils, and components — extending the life of your HVAC system and delaying costly replacements.',
              },
              {
                icon: '🛡️',
                title: 'Mold Prevention & Removal',
                desc: 'Utah\'s temperature swings create condensation inside ductwork, which can foster mold growth. Our cleaning and sanitization services eliminate existing mold and create conditions that discourage future growth in your duct system.',
              },
              {
                icon: '🔥',
                title: 'Dryer Fire Prevention',
                desc: 'Clogged dryer vents are the leading cause of residential dryer fires in the United States. Our dryer vent cleaning removes dangerous lint buildup, dramatically reducing fire risk while cutting drying time and energy use.',
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex-shrink-0 text-3xl">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1.5">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-blue-50 rounded-2xl p-8 text-center border border-blue-100">
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
              Ready to experience the difference clean ducts make? AL Air Duct Cleaning offers free estimates with no obligation. Most residential jobs are completed in just 2–4 hours, and our technicians leave your home spotless.{' '}
              <Link href="/contact" className="text-blue-700 font-bold hover:underline">
                Request your free estimate today
              </Link>{' '}
              or{' '}
              <a href="tel:3854621032" className="text-blue-700 font-bold hover:underline">
                call us at (385) 462-1032
              </a>.
            </p>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-16 px-4 bg-gray-50" id="service-areas">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
              Air Duct Cleaning Across All of Salt Lake Valley
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We proudly serve homeowners and businesses throughout Salt Lake County and surrounding communities. No matter where you are in the valley, our team can be at your door — often the same day.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { area: 'Salt Lake City', desc: 'Our home base — serving all SLC neighborhoods from the Avenues to Rose Park.' },
              { area: 'Sandy & Draper', desc: 'Covering South Valley communities including Alta Canyon, Draper Hills, and Suncrest.' },
              { area: 'Murray & Millcreek', desc: 'Fast same-day availability for Murray, Millcreek, and Holladay residents.' },
              { area: 'West Valley & Taylorsville', desc: 'Full-service duct cleaning for West Valley City and Taylorsville homes and businesses.' },
              { area: 'South Jordan & Herriman', desc: 'Serving fast-growing South Valley communities with flexible scheduling.' },
              { area: 'Midvale, Riverton & Bluffdale', desc: 'Comprehensive residential and commercial duct cleaning for mid-valley neighborhoods.' },
            ].map((item) => (
              <div key={item.area} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-blue-900 mb-1">{item.area}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-6 text-sm text-gray-500">
            Don&apos;t see your area? <a href="tel:3854621032" className="text-blue-600 hover:underline font-medium">Call us at (385) 462-1032</a> — we likely serve your neighborhood too.
          </p>
        </div>
      </section>
    </>
  )
}
