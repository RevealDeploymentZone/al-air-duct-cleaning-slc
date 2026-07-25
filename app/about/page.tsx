import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us | AL Air Duct Cleaning Salt Lake City',
  description:
    'Learn about AL Air Duct Cleaning SLC — Salt Lake City\'s locally owned, NADCA-certified air duct cleaning company with 10+ years experience and 127+ 5-star reviews.',
  alternates: { canonical: 'https://saltlakecity.alairductcleaning.com/about' },
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-4">About AL Air Duct Cleaning SLC</h1>
          <p className="text-xl text-blue-100">
            Salt Lake City&apos;s locally owned, NADCA-certified air duct and HVAC cleaning specialists. Serving our community since 2014.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-10">

          <div className="prose-custom">
            <h2>Our Story</h2>
            <p>
              AL Air Duct Cleaning was founded in Salt Lake City in 2014 with a simple mission: provide genuinely effective, honest air duct cleaning services to Salt Lake Valley homeowners and businesses at a fair price. Our founder started in the HVAC industry and saw firsthand how much of a difference clean ductwork made to families — particularly those struggling with allergies, asthma, and the respiratory challenges unique to Salt Lake City&apos;s valley geography and its notorious winter inversions.
            </p>
            <p>
              What began as a one-truck operation serving the Millcreek and Murray area has grown into a full-service company covering all of Salt Lake County and surrounding communities — but we&apos;ve never lost sight of the personal, neighborhood-level service that made us who we are. We&apos;re not a national franchise. We don&apos;t have upsell quotas. We&apos;re your neighbors, and we treat your home the way we&apos;d want someone to treat ours.
            </p>

            <h2>Why We&apos;re Different</h2>
            <p>
              The duct cleaning industry, unfortunately, has a significant number of companies using low-powered equipment and deceptive pricing to extract money from homeowners without delivering real results. You&apos;ve probably seen the $49 duct cleaning specials — and if you&apos;ve tried one, you know they don&apos;t actually clean your ducts.
            </p>
            <p>
              AL Air Duct Cleaning was built in direct opposition to that model. Every job we do:
            </p>
            <ul>
              <li>Uses truck-mounted, industrial-strength vacuum equipment capable of genuine source-removal cleaning</li>
              <li>Meets or exceeds NADCA ACR (Assessment, Cleaning, and Restoration) standards</li>
              <li>Includes photographic documentation before and after service</li>
              <li>Comes with transparent, all-inclusive pricing — no surprise fees</li>
              <li>Is backed by a 100% satisfaction guarantee</li>
            </ul>
            <p>
              Our 4.9-star rating across 127+ verified reviews isn&apos;t something we manufactured — it&apos;s the natural result of consistently doing quality work and treating every customer with honesty and respect.
            </p>

            <h2>Our Certifications and Training</h2>
            <p>
              All AL Air Duct Cleaning technicians hold current NADCA (National Air Duct Cleaners Association) certification. NADCA membership requires ongoing training and adherence to a strict professional code of ethics. We also carry full general liability insurance and workers&apos; compensation coverage, protecting both our team and your property.
            </p>

            <h2>Our Equipment</h2>
            <p>
              We invest in the best equipment available because it&apos;s what the job requires. Our truck-mounted vacuum systems generate over 10,000 CFM of suction — dramatically more powerful than the portable units used by lower-quality services. We use rotary brush systems, compressed air agitation tools, HEPA-filter vacuums for mold remediation, and inspection cameras for documentation. This equipment investment is why our cleaning actually works — not just looks like work.
            </p>

            <h2>Community Commitment</h2>
            <p>
              As a locally owned Salt Lake City business, we&apos;re invested in this community in more than just a business sense. We live here, our kids go to school here, and we breathe the same air you do. That&apos;s part of why we care so much about indoor air quality — we see the health impact of pollution in our valley every winter, and we know that clean home ductwork is one of the most meaningful things a family can do for their indoor air quality.
            </p>
            <p>
              We support several local organizations focused on pediatric respiratory health and environmental quality in the Salt Lake Valley, because we believe cleaner air for our entire community — indoors and out — matters.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-gray-200">
            {[
              { num: '2014', label: 'Founded' },
              { num: '1,500+', label: 'Customers Served' },
              { num: '4.9 ★', label: 'Average Rating' },
              { num: '100%', label: 'Satisfaction Guarantee' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-extrabold text-blue-700">{s.num}</p>
                <p className="text-sm text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Ready to Experience the AL Difference?</h2>
            <p className="text-gray-600 mb-6">
              Get your free, no-obligation estimate today. We respond within 1 hour during business hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:3854621032" className="bg-blue-700 text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors">
                Call (385) 462-1032
              </a>
              <Link href="/contact" className="border-2 border-blue-700 text-blue-700 font-bold px-8 py-3 rounded-lg hover:bg-blue-700 hover:text-white transition-colors">
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
