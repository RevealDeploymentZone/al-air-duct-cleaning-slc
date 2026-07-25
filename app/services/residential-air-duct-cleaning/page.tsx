import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Residential Air Duct Cleaning Salt Lake City | Home Duct Cleaning',
  description:
    'Residential air duct cleaning in Salt Lake City, UT. Protect your family from allergens, dust, pet dander & mold. NADCA-certified technicians. Free estimates. Call (385) 462-1032.',
  keywords: [
    'residential air duct cleaning salt lake city',
    'home duct cleaning SLC',
    'house air duct cleaning Utah',
    'residential duct cleaning near me',
    'home HVAC duct cleaning Salt Lake City',
  ],
  alternates: { canonical: 'https://saltlakecity.alairductcleaning.com/services/residential-air-duct-cleaning' },
}

export default function ResidentialAirDuctPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-green-800 to-teal-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-green-200 mb-4">
            <Link href="/" className="hover:text-white">Home</Link> &rsaquo;{' '}
            <Link href="/services" className="hover:text-white">Services</Link> &rsaquo;{' '}
            <span className="text-white">Residential Air Duct Cleaning</span>
          </nav>
          <h1 className="text-4xl font-extrabold mb-4">Residential Air Duct Cleaning in Salt Lake City, Utah</h1>
          <p className="text-xl text-green-100 mb-6">
            Your family spends 90% of their time indoors. The air circulating through your home&apos;s ductwork directly impacts their health, comfort, and wellbeing. Our residential duct cleaning service is designed specifically for families — thorough, safe, and proven to make a real difference.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="tel:3854621032" className="bg-white text-green-900 font-bold px-6 py-3 rounded-lg hover:bg-green-50 transition-colors">
              Call (385) 462-1032
            </a>
            <Link href="/contact" className="border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
              Free Home Estimate
            </Link>
          </div>
        </div>
      </section>


      {/* Related Services */}
      <section className="py-14 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2 text-center">Related Services</h2>
          <p className="text-gray-500 text-sm text-center mb-6">
            Customers who booked this service also found these helpful.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            <Link href="/services/air-duct-cleaning"
              className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-100 hover:border-blue-300 hover:shadow transition-all text-sm font-medium text-gray-700 hover:text-blue-700">
              <span className="text-xl">💨</span> Air Duct Cleaning
            </Link>
            <Link href="/services/dryer-vent-cleaning"
              className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-100 hover:border-blue-300 hover:shadow transition-all text-sm font-medium text-gray-700 hover:text-blue-700">
              <span className="text-xl">🔥</span> Dryer Vent Cleaning
            </Link>
            <Link href="/services/mold-inspection-removal"
              className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-100 hover:border-blue-300 hover:shadow transition-all text-sm font-medium text-gray-700 hover:text-blue-700">
              <span className="text-xl">🔬</span> Mold Inspection & Removal
            </Link>
            <Link href="/services/sanitization-deodorization"
              className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 shadow-sm border border-gray-100 hover:border-blue-300 hover:shadow transition-all text-sm font-medium text-gray-700 hover:text-blue-700">
              <span className="text-xl">✨</span> Sanitization & Deodorization
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
          <article className="lg:col-span-2 prose-custom">

            <h2>Your Home&apos;s Air Quality Is More Important Than You Think</h2>
            <p>
              The average American family spends approximately 90% of their time indoors, according to the EPA. And in Salt Lake City — where valley inversions create some of the worst outdoor air quality in the nation — many residents close their windows and rely on their HVAC system to provide clean, comfortable air year-round.
            </p>
            <p>
              But here&apos;s the problem: your HVAC system doesn&apos;t create clean air — it circulates whatever is already in your home. Over months and years, your ductwork becomes a repository for dust, allergens, pet dander, mold spores, bacteria, dead insects, and other contaminants that your system recirculates through every room, every time it runs.
            </p>
            <p>
              The result? Indoor air that the EPA says can be <strong>2 to 5 times more polluted than outdoor air</strong> — even during the worst SLC inversion events. For families with young children, elderly members, allergy sufferers, or anyone with asthma, this represents a genuine and daily health concern.
            </p>

            <h2>Who Benefits Most From Residential Duct Cleaning?</h2>
            <p>
              While every home benefits from periodic duct cleaning, certain households in Salt Lake City see the most dramatic improvements:
            </p>

            <h3>Families With Young Children</h3>
            <p>
              Children&apos;s respiratory systems are still developing, making them more vulnerable to airborne contaminants than adults. Children breathe in 50% more air per pound of body weight than adults — and they spend more time on the floor, closer to low-level dust and allergens. Clean ductwork means cleaner air at the level where your children breathe, sleep, and play. Many parents report significant reductions in children&apos;s respiratory symptoms, ear infections, and nighttime coughing after having their ducts professionally cleaned.
            </p>

            <h3>Pet Owners</h3>
            <p>
              Pets are wonderful companions, but they&apos;re hard on your duct system. Pet hair, dander, and the biological material that accompanies it accumulate in ductwork far faster than in pet-free homes. If you have dogs or cats — especially breeds that shed heavily — your ducts likely need cleaning every 12 to 18 months. We&apos;ve extracted truly remarkable amounts of pet hair from homes in the Salt Lake Valley, and the homeowners uniformly notice a difference in air quality immediately afterward.
            </p>

            <h3>Allergy and Asthma Sufferers</h3>
            <p>
              Utah&apos;s unique combination of high pollen counts in spring, valley inversions in winter, and dry summer conditions creates year-round allergy challenges. If your symptoms are worst at home — and especially if they seem to worsen when your HVAC system runs — contaminated ductwork may be a primary trigger. Common duct allergens include dust mite fragments and droppings, mold spores, cockroach allergens, pollen that has accumulated over seasons, and pet dander even in homes that no longer have pets (it persists for years).
            </p>

            <h3>New Homeowners</h3>
            <p>
              When you buy a home, you inherit the duct cleaning history — or lack thereof — of everyone who lived there before you. We recommend every new homeowner have their ductwork inspected and cleaned before moving in. You don&apos;t know what the previous occupants had in their home, and starting fresh with clean ducts protects your family from day one.
            </p>

            <h3>Recently Remodeled Homes</h3>
            <p>
              Construction and remodeling projects generate enormous amounts of drywall dust, insulation fibers, sawdust, and other fine particles that infiltrate your ductwork even with the vents covered. This debris is not just aesthetically unpleasant — some insulation materials and adhesives can be harmful when inhaled over time. If you&apos;ve had significant remodeling done, duct cleaning should be part of your post-construction cleanup.
            </p>

            <h2>Our Residential Cleaning Process</h2>
            <p>
              We clean residential duct systems using the NADCA source-removal methodology — the same professional standard used by the best duct cleaning companies in the country. Here&apos;s what happens when our technician visits your home:
            </p>

            <h3>Pre-Service Inspection</h3>
            <p>
              We begin with a thorough walkthrough to count all supply and return vents, assess the ductwork layout, check for any visible signs of mold or damage, and document the condition of your system before we start. We photograph the interior of representative duct sections so you can see what we found — not just take our word for it.
            </p>

            <h3>System Preparation</h3>
            <p>
              We protect your home by laying drop cloths as needed and ensuring our equipment setup minimizes disruption. All furniture and belongings near vent locations stay in place — our process doesn&apos;t require you to clear a room.
            </p>

            <h3>Negative Pressure Establishment</h3>
            <p>
              Our truck-mounted vacuum unit connects to your main duct trunk line via a large-diameter hose, pulling the entire duct system into negative pressure. This crucial step ensures that when debris is dislodged, it moves toward our collection unit rather than into your living space.
            </p>

            <h3>Agitation and Extraction</h3>
            <p>
              With negative pressure established, our technician systematically works through every duct branch, using rotary brush systems and compressed air tools to dislodge and extract contamination. Every supply duct and return duct in your home receives individual attention — we don&apos;t skip branches or leave sections untreated.
            </p>

            <h3>Register and Grille Service</h3>
            <p>
              Every supply and return register is removed, cleaned, and sanitized. These are often the most visibly contaminated components, and cleaning them completely eliminates the dusty residue that many homeowners notice building up around their vents.
            </p>

            <h3>Final Inspection and Walkthrough</h3>
            <p>
              After cleaning, we perform a post-cleaning inspection and show you the results — including before and after photos. We answer any questions you have about maintaining good air quality going forward, including filter recommendations, optimal replacement schedules, and signs to watch for.
            </p>

            <h2>Safe for Children, Pets, and Sensitive Individuals</h2>
            <p>
              Every product we use during our residential cleaning service is safe for children, pets, and individuals with chemical sensitivities. Our antimicrobial sanitization treatments — offered as an optional add-on — use EPA-registered agents that are non-toxic after application and dry clear without residue or odor.
            </p>
            <p>
              We recommend that during the service, children and pets stay in a different part of the house from where we&apos;re actively working — not because of hazardous materials, but simply because the equipment is loud and the process involves some temporary dust disruption in the immediate work area.
            </p>

            <h2>How Much Does Residential Duct Cleaning Cost in Salt Lake City?</h2>
            <p>
              Pricing for residential duct cleaning in Salt Lake City varies based on the size of your home, the number of vents, and the level of contamination. As a general guide:
            </p>
            <ul>
              <li><strong>Small homes (up to 1,500 sq ft):</strong> $299 – $399</li>
              <li><strong>Medium homes (1,500 – 2,500 sq ft):</strong> $399 – $499</li>
              <li><strong>Large homes (2,500+ sq ft):</strong> $499 – $699+</li>
            </ul>
            <p>
              We provide a clear, written quote before starting work based on an assessment of your specific home. The quote includes full source-removal cleaning of all ducts — there are no hidden fees or surprise add-ons.
            </p>

            <h2>What to Expect After Your Cleaning</h2>
            <p>
              Most homeowners notice the difference within the first 24 to 48 hours after their duct cleaning. Common improvements include less dust on furniture surfaces, reduced allergy and asthma symptoms, fresher-smelling air from vents, more even heating and cooling throughout the home, and a general sense of cleaner, lighter air.
            </p>
            <p>
              To maintain these results, we recommend replacing your air filter every 1 to 3 months (depending on filter type and household conditions), scheduling professional cleaning every 3 to 5 years, and keeping your home vacuumed regularly to reduce the amount of debris that enters your duct system.
            </p>

            <h2>Serving Salt Lake City Families Since 2014</h2>
            <p>
              AL Air Duct Cleaning SLC has served thousands of families throughout Salt Lake City and the surrounding valley. We&apos;re locally owned and operated, NADCA-certified, and committed to the health and comfort of the community we live and work in. Our 4.9-star rating across 127+ reviews reflects our commitment to doing the job right — not just doing it fast.
            </p>

            <h2>Frequently Asked Questions About Residential Duct Cleaning</h2>

            <h3>Is duct cleaning messy? Will my house get dusty?</h3>
            <p>
              No. Our negative pressure system ensures that dislodged contaminants travel into our vacuum collection unit rather than into your living space. The process is clean and tidy, and we leave your home in the same or better condition than we found it.
            </p>

            <h3>Do I need to prepare anything before the technician arrives?</h3>
            <p>
              Just make sure the area around your furnace and air handler is accessible, and that you can locate and provide access to all vent locations throughout the home. You don&apos;t need to move furniture or cover belongings.
            </p>

            <h3>How long does residential duct cleaning take?</h3>
            <p>
              For an average Salt Lake City home, plan for 2 to 3 hours. Larger homes with more vent locations may take 3 to 4 hours.
            </p>

          </article>

          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-green-50 border border-green-100 rounded-xl p-6 sticky top-28">
              <h3 className="text-lg font-bold text-green-900 mb-4">Free Home Estimate</h3>
              <ContactForm defaultService="Residential Air Duct Cleaning" />
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">Perfect For</h3>
              <ul className="text-sm space-y-2 text-gray-600">
                {['Families with young children', 'Pet owners', 'Allergy & asthma sufferers', 'New homeowners', 'Post-remodel cleanup', 'Elderly residents'].map((item) => (
                  <li key={item} className="flex items-start gap-2"><span className="text-green-500 mt-0.5">&#10003;</span> {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">Related Services</h3>
              <ul className="text-sm space-y-2">
                <li><Link href="/services/air-duct-cleaning" className="text-blue-600 hover:underline">Air Duct Cleaning</Link></li>
                <li><Link href="/services/dryer-vent-cleaning" className="text-blue-600 hover:underline">Dryer Vent Cleaning</Link></li>
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
