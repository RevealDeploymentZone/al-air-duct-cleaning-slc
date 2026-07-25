import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Air Duct Cleaning Salt Lake City | Professional Duct Cleaning Services',
  description:
    'Professional air duct cleaning in Salt Lake City, UT. Remove dust, allergens, mold spores & debris from your entire duct system. NADCA-certified. Free estimates. Call (385) 462-1032.',
  keywords: [
    'air duct cleaning salt lake city',
    'duct cleaning SLC',
    'air duct cleaning Utah',
    'professional duct cleaning Salt Lake City',
    'duct cleaning near me SLC',
  ],
  alternates: { canonical: 'https://saltlakecity.alairductcleaning.com/services/air-duct-cleaning' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How often should I get my air ducts cleaned in Salt Lake City?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The EPA and NADCA recommend having your air ducts inspected and cleaned every 3 to 5 years for most homes. In Salt Lake City, due to high inversion events and valley dust, we recommend every 2 to 3 years for allergy sufferers or homes with pets.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does air duct cleaning take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard residential air duct cleaning in Salt Lake City takes 2 to 4 hours depending on the size of your home and number of vents. Commercial properties may take longer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will air duct cleaning reduce my energy bill?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. A clean duct system allows your HVAC to move air more efficiently, which can reduce energy consumption by 20 to 40%. You\'ll notice lower utility bills and a system that heats or cools more evenly.',
      },
    },
  ],
}

export default function AirDuctCleaningPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-blue-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link> &rsaquo;{' '}
            <Link href="/services" className="hover:text-white">Services</Link> &rsaquo;{' '}
            <span className="text-white">Air Duct Cleaning</span>
          </nav>
          <h1 className="text-4xl font-extrabold mb-4">Air Duct Cleaning Salt Lake City, Utah</h1>
          <p className="text-xl text-blue-100 mb-6">
            Professional, NADCA-certified air duct cleaning that removes years of built-up dust, allergens, pet dander, mold spores, and debris from your entire duct system — so you and your family can breathe easier starting today.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="tel:3854621032" className="bg-white text-blue-900 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              Call (385) 462-1032
            </a>
            <Link href="/contact" className="border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
              Free Online Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Main content + form */}

      {/* Related Services */}
      <section className="py-14 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2 text-center">Related Services</h2>
          <p className="text-gray-500 text-sm text-center mb-6">
            Customers who booked this service also found these helpful.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            <Link href="/services/hvac-cleaning"
              className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-100 hover:border-blue-300 hover:shadow transition-all text-sm font-medium text-gray-700 hover:text-blue-700">
              <span className="text-xl">❄️</span> HVAC Cleaning
            </Link>
            <Link href="/services/dryer-vent-cleaning"
              className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-100 hover:border-blue-300 hover:shadow transition-all text-sm font-medium text-gray-700 hover:text-blue-700">
              <span className="text-xl">🔥</span> Dryer Vent Cleaning
            </Link>
            <Link href="/services/sanitization-deodorization"
              className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-100 hover:border-blue-300 hover:shadow transition-all text-sm font-medium text-gray-700 hover:text-blue-700">
              <span className="text-xl">✨</span> Sanitization & Deodorization
            </Link>
            <Link href="/services/mold-inspection-removal"
              className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-100 hover:border-blue-300 hover:shadow transition-all text-sm font-medium text-gray-700 hover:text-blue-700">
              <span className="text-xl">🔬</span> Mold Inspection & Removal
            </Link>
          </div>
          <div className="text-center">
            <Link href="/services" className="text-blue-600 text-sm font-semibold hover:text-blue-800 underline">
              View All Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">

          {/* Article content */}
          <article className="lg:col-span-2 prose-custom">
            <h2>Why Air Duct Cleaning Matters in Salt Lake City</h2>
            <p>
              Salt Lake City sits in a natural bowl surrounded by the Wasatch and Oquirrh mountain ranges. This unique geography creates a phenomenon called a <strong>temperature inversion</strong> — a condition where cold, polluted air gets trapped beneath warmer air, concentrating particulates, vehicle exhaust, smoke, and industrial emissions at ground level. According to the Utah Division of Air Quality, Salt Lake City regularly ranks among the worst cities in the nation for fine particulate matter (PM2.5) during winter months.
            </p>
            <p>
              What does that mean for your home? Every time your heating or cooling system runs, it pulls outside air through your filtration system and circulates it through your ductwork. Over months and years, a significant amount of that outdoor pollution makes its way inside your ducts — where it mixes with indoor contaminants like <strong>pet dander, dead skin cells, dust mites, mold spores, and volatile organic compounds (VOCs)</strong> shed by furniture, carpet, and building materials.
            </p>
            <p>
              The result is a duct system that can become a breeding ground for airborne pollutants that your HVAC fan continuously recirculates through every room of your home. For families with children, the elderly, or anyone with asthma or allergies, this represents a serious and often overlooked health hazard.
            </p>

            <h2>What&apos;s Really Hiding in Your Ducts?</h2>
            <p>
              Most homeowners are surprised when they see what our technicians extract during a professional cleaning. In our years of serving Salt Lake City, here&apos;s what we commonly find:
            </p>
            <ul>
              <li><strong>Accumulated dust and debris:</strong> Often measured in pounds, not ounces. It coats the inside of supply and return ducts like insulation.</li>
              <li><strong>Pet hair and dander:</strong> Even if pets are no longer in the home, their dander can persist in ducts for years.</li>
              <li><strong>Mold spores and mycotoxins:</strong> Utah&apos;s dry climate doesn&apos;t prevent mold — it just means mold often grows unseen in cool, dark duct sections.</li>
              <li><strong>Rodent and insect droppings:</strong> More common than you&apos;d think, especially in older homes or those with crawl spaces.</li>
              <li><strong>Construction debris:</strong> If you&apos;ve had remodeling done, drywall dust and insulation fibers can infiltrate your duct system.</li>
              <li><strong>Dead insects:</strong> Spiders, beetles, and other insects find their way into return ducts and die there, adding biological contaminants to circulating air.</li>
              <li><strong>Bacteria and viruses:</strong> Studies have shown ductwork can harbor pathogenic microorganisms, especially in humid sections near humidifiers or air handlers.</li>
            </ul>

            <h2>Our Air Duct Cleaning Process</h2>
            <p>
              Unlike some companies that simply vacuum accessible areas with a shop vac, AL Air Duct Cleaning uses a comprehensive, <strong>source-removal</strong> methodology that meets or exceeds NADCA ACR standards — the gold standard in the air duct cleaning industry.
            </p>

            <h3>Step 1: Full System Inspection</h3>
            <p>
              Our certified technician begins with a thorough inspection of your entire HVAC system and ductwork. We use camera inspection equipment when needed to document the condition inside your ducts before and after cleaning. This is your proof of work — you see exactly what we found and what we removed.
            </p>

            <h3>Step 2: Negative Pressure Setup</h3>
            <p>
              We connect our truck-mounted, industrial-strength vacuum system directly to your main duct trunk line. This creates negative pressure throughout the entire duct network, ensuring that when we dislodge contaminants, they travel toward the vacuum rather than into your living space. Our equipment generates 10,000+ CFM of suction — dramatically more powerful than portable units some competitors use.
            </p>

            <h3>Step 3: Agitation of Supply and Return Ducts</h3>
            <p>
              With negative pressure established, our technician uses specialized rotary brush systems and compressed air whips to mechanically agitate the inside surfaces of every supply and return duct branch. This dislodges debris that has bonded to duct walls over years of service. The loosened material is immediately pulled into our vacuum collection system.
            </p>

            <h3>Step 4: Register and Grille Cleaning</h3>
            <p>
              Every supply and return register and grille is removed, cleaned, and sanitized individually before being reinstalled. These are often heavily contaminated areas that standard cleaning overlooks.
            </p>

            <h3>Step 5: Air Handler and Plenum Cleaning</h3>
            <p>
              We also clean the air handler unit, the blower assembly, and the supply and return plenums — the large boxes directly connected to your furnace or air conditioner. These areas accumulate particularly heavy contamination and are critical to overall system cleanliness.
            </p>

            <h3>Step 6: Optional Sanitization</h3>
            <p>
              After mechanical cleaning, we offer an EPA-registered antimicrobial sanitization treatment that kills remaining bacteria, mold spores, and viruses. This treatment also leaves an inhibitor coating that helps prevent future microbial growth for several months.
            </p>

            <h2>Health Benefits of Professional Air Duct Cleaning</h2>
            <p>
              The health case for clean ductwork is well-established. The EPA notes that indoor air can be 2 to 5 times more polluted than outdoor air — and in Salt Lake City&apos;s inversion season, that ratio can be even higher. Here&apos;s what homeowners consistently report after our cleaning:
            </p>
            <ul>
              <li>Reduced allergy and asthma symptoms, especially during spring and fall</li>
              <li>Less frequent dusting needed throughout the home</li>
              <li>Improved sleep quality due to cleaner breathing air in bedrooms</li>
              <li>Children and elderly family members experiencing fewer respiratory issues</li>
              <li>Reduction in unpleasant musty or stale odors in the home</li>
              <li>Peace of mind knowing biological contaminants have been removed</li>
            </ul>

            <h2>Energy Efficiency Benefits</h2>
            <p>
              Beyond health, clean ducts translate directly to lower utility bills. When duct walls are coated with debris, airflow is restricted. Your HVAC system has to work harder and run longer to achieve the same temperature — using more gas or electricity to do it. The U.S. Department of Energy estimates that <strong>25 to 40% of energy used for heating or cooling is wasted</strong> due to poorly maintained systems.
            </p>
            <p>
              After our cleaning, many Salt Lake City customers report a noticeable improvement in how quickly their home reaches the set temperature, along with measurable reductions in monthly utility costs.
            </p>

            <h2>Signs Your Ducts Need Cleaning Now</h2>
            <p>Don&apos;t wait for a problem to become severe. Watch for these common warning signs:</p>
            <ul>
              <li>Visible dust puffing out of registers when your system turns on</li>
              <li>Dust accumulating on furniture faster than usual</li>
              <li>Musty, stale, or foul odors when the HVAC runs</li>
              <li>Household members experiencing unexplained allergy flare-ups at home</li>
              <li>You&apos;ve never had your ducts cleaned (or it&apos;s been more than 5 years)</li>
              <li>Recent remodeling, construction, or water damage in your home</li>
              <li>You&apos;ve moved into a new home and don&apos;t know the cleaning history</li>
              <li>You have pets that shed heavily</li>
            </ul>

            <h2>How Much Does Air Duct Cleaning Cost in Salt Lake City?</h2>
            <p>
              Pricing varies depending on your home&apos;s size, the number of vents, accessibility, and the level of contamination. Most residential jobs in the Salt Lake City area range from $299 to $599. We always provide a transparent, written quote before starting any work — and our price includes the full source-removal process, not just a surface vacuum.
            </p>
            <p>
              <strong>Be wary of $49 or $99 duct cleaning specials.</strong> These typically use low-powered portable vacuums, skip entire sections of the duct system, and upsell heavily once they&apos;re in your home. Professional source-removal cleaning requires industrial equipment and takes 2 to 4 hours — it simply cannot be done properly at those prices.
            </p>

            <h2>Service Areas</h2>
            <p>
              We provide air duct cleaning throughout the Salt Lake Valley, including Salt Lake City, West Valley City, Sandy, South Jordan, Murray, Millcreek, Draper, Holladay, Cottonwood Heights, Taylorsville, Midvale, West Jordan, Herriman, Riverton, and Bluffdale. Not sure if we serve your area? Call us and we&apos;ll let you know right away.
            </p>

            {/* FAQ */}
            <h2>Frequently Asked Questions</h2>

            <h3>How often should I get my air ducts cleaned?</h3>
            <p>
              The National Air Duct Cleaners Association (NADCA) recommends inspection every 2 years and cleaning every 3 to 5 years for average households. In Salt Lake City, we recommend every 2 to 3 years given the valley&apos;s air quality challenges — and more frequently if you have pets, allergies, or young children.
            </p>

            <h3>Is duct cleaning disruptive? Will my house get dusty?</h3>
            <p>
              No — because we establish negative pressure before any agitation begins, contaminants travel into our collection system rather than into your home. Most customers are surprised at how clean their home stays during and after the process.
            </p>

            <h3>Can duct cleaning help with mold problems?</h3>
            <p>
              Yes. If mold is present in your ducts, our mechanical cleaning combined with EPA-approved antimicrobial sanitization can eliminate it. We also offer dedicated <Link href="/services/mold-inspection-removal">mold inspection and removal services</Link> for more severe cases.
            </p>

            <h3>Do I need to be home during the cleaning?</h3>
            <p>
              Yes, we ask that an adult be present during the service so we can show you the before and after results and answer any questions. The process takes 2 to 4 hours.
            </p>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 sticky top-28">
              <h3 className="text-lg font-bold text-blue-900 mb-4">Get a Free Estimate</h3>
              <ContactForm defaultService="Air Duct Cleaning" />
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">Quick Facts</h3>
              <ul className="text-sm space-y-2 text-gray-600">
                <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#10003;</span> Duration: 2-4 hours</li>
                <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#10003;</span> NADCA-certified technicians</li>
                <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#10003;</span> Truck-mounted vacuum system</li>
                <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#10003;</span> Before & after photos provided</li>
                <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#10003;</span> 100% satisfaction guarantee</li>
                <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#10003;</span> Same-day available</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">Related Services</h3>
              <ul className="text-sm space-y-2">
                <li><Link href="/services/dryer-vent-cleaning" className="text-blue-600 hover:underline">Dryer Vent Cleaning</Link></li>
                <li><Link href="/services/hvac-cleaning" className="text-blue-600 hover:underline">HVAC Cleaning</Link></li>
                <li><Link href="/services/sanitization-deodorization" className="text-blue-600 hover:underline">Sanitization & Deodorization</Link></li>
                <li><Link href="/services/mold-inspection-removal" className="text-blue-600 hover:underline">Mold Inspection & Removal</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
