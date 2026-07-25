import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Dryer Vent Cleaning Salt Lake City | Fire Prevention & Efficiency',
  description:
    'Professional dryer vent cleaning in Salt Lake City, UT. Prevent house fires, reduce drying time 30%, and lower energy bills. NADCA-certified. Call (385) 462-1032 for a free estimate.',
  keywords: [
    'dryer vent cleaning salt lake city',
    'dryer vent cleaning Utah',
    'dryer lint removal SLC',
    'dryer vent cleaning near me',
    'dryer fire prevention Salt Lake City',
  ],
  alternates: { canonical: 'https://saltlakecity.alairductcleaning.com/services/dryer-vent-cleaning' },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Dryer Vent Cleaning',
  provider: {
    '@type': 'LocalBusiness',
    name: 'AL Air Duct Cleaning Salt Lake City',
    telephone: '+13854621032',
    address: { '@type': 'PostalAddress', addressLocality: 'Salt Lake City', addressRegion: 'UT' },
  },
  areaServed: 'Salt Lake City, UT',
  description: 'Professional dryer vent cleaning service to remove lint buildup, prevent house fires, and improve dryer efficiency in Salt Lake City, Utah.',
}

export default function DryerVentCleaningPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-r from-orange-800 to-red-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-orange-200 mb-4">
            <Link href="/" className="hover:text-white">Home</Link> &rsaquo;{' '}
            <Link href="/services" className="hover:text-white">Services</Link> &rsaquo;{' '}
            <span className="text-white">Dryer Vent Cleaning</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-red-600/50 border border-red-400/30 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            &#9888; Fire Safety Alert
          </div>
          <h1 className="text-4xl font-extrabold mb-4">Dryer Vent Cleaning in Salt Lake City, Utah</h1>
          <p className="text-xl text-orange-100 mb-6">
            Clogged dryer vents cause 2,900+ house fires every year in the U.S. Don&apos;t let your home be one of them. Our professional dryer vent cleaning removes dangerous lint buildup, restores airflow, and can cut your drying time by up to 30%.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="tel:3854621032" className="bg-white text-red-900 font-bold px-6 py-3 rounded-lg hover:bg-orange-50 transition-colors">
              Call (385) 462-1032
            </a>
            <Link href="/contact" className="border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
              Book Online
            </Link>
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          <article className="lg:col-span-2 prose-custom">

            <h2>The Hidden Fire Hazard in Your Laundry Room</h2>
            <p>
              Your clothes dryer is one of the hardest-working appliances in your home — and one of the most overlooked when it comes to maintenance. Every load of laundry produces lint, and while your lint trap catches some of it, a significant amount passes through and accumulates inside the dryer vent duct that exhausts to the outside of your home.
            </p>
            <p>
              According to the <strong>U.S. Fire Administration</strong>, clothes dryers cause approximately <strong>2,900 residential fires annually</strong>, resulting in 5 deaths, 100 injuries, and $35 million in property damage. The leading cause? Failure to clean the dryer vent. In Salt Lake City, where many homes were built decades ago with long, winding dryer vent configurations, this risk is even more pronounced.
            </p>
            <p>
              Lint is extremely flammable. When it builds up in your vent duct and the dryer runs, the combination of heat, restricted airflow, and combustible material creates ideal conditions for a fire. The danger is compounded by the fact that many dryer vent fires start inside the wall or attic where homeowners can&apos;t see them — giving fires time to spread before anyone notices.
            </p>

            <h2>Warning Signs Your Dryer Vent Needs Cleaning</h2>
            <p>
              Your dryer gives you warning signals when the vent is becoming dangerously clogged. If you notice any of these, schedule a cleaning immediately:
            </p>
            <ul>
              <li><strong>Clothes take longer than one cycle to fully dry</strong> — This is the most common and obvious sign. A normal load should dry in 30-45 minutes; if it&apos;s taking longer, restricted airflow is the likely cause.</li>
              <li><strong>The dryer feels very hot to the touch</strong> — When airflow is blocked, heat backs up into the dryer drum and cabinet. If your dryer feels unusually hot on the outside, lint buildup is trapping heat.</li>
              <li><strong>Burning smell during operation</strong> — Any burning odor from your dryer or laundry area is a serious red flag. Do not ignore it. Stop using the dryer and call us immediately.</li>
              <li><strong>Visible lint around the exterior vent flap</strong> — If you can see lint accumulating around the outside exhaust vent on your home&apos;s exterior, the duct is significantly clogged.</li>
              <li><strong>The laundry room feels humid or hot while the dryer runs</strong> — Warm, moist air that should be exhausting outside is backing up into your home instead.</li>
              <li><strong>The dryer shuts off before the cycle ends</strong> — Modern dryers have thermal fuses that cut power when overheating occurs. Repeated shutoffs indicate a serious blockage.</li>
              <li><strong>It&apos;s been more than 12 months since your last cleaning</strong> — Even without obvious symptoms, annual cleaning is essential for households doing multiple loads per week.</li>
            </ul>

            <h2>Our Dryer Vent Cleaning Process</h2>
            <p>
              AL Air Duct Cleaning uses professional rotary brush systems and high-powered vacuum equipment specifically designed for dryer vent applications. Here&apos;s what our process looks like:
            </p>

            <h3>1. Inspection and Assessment</h3>
            <p>
              We start by inspecting the dryer vent system from both the interior (behind the dryer) and the exterior exhaust cap. We check the vent route, assess the level of blockage, and look for any structural issues like improper flex duct, excessive bends, or damaged sections that need repair.
            </p>

            <h3>2. Disconnecting the Dryer</h3>
            <p>
              We safely disconnect your dryer from the wall so we have full access to the duct connection. This allows us to clean the entire vent run from end to end — not just the accessible portions.
            </p>

            <h3>3. Rotary Brush Cleaning</h3>
            <p>
              Our technician feeds a rotary brush system through the vent duct from the exterior exhaust point. These specialized brushes are designed for dryer vent systems and effectively dislodge compacted lint from the duct walls. We work section by section until the entire vent run is clear.
            </p>

            <h3>4. High-Powered Vacuum Extraction</h3>
            <p>
              As the brush loosens lint, our powerful vacuum system extracts the material from the duct, ensuring it doesn&apos;t pile up or create secondary blockages. All extracted debris is collected and removed from your property.
            </p>

            <h3>5. Exterior Cap Inspection and Cleaning</h3>
            <p>
              The exterior vent cap — the flap on the outside of your home where hot air exhausts — is removed, cleaned thoroughly, and inspected for proper operation. Bird nests, ice buildup, and lint accumulation around the flap are common blockage sources that we address.
            </p>

            <h3>6. Airflow Verification</h3>
            <p>
              Before we finish, we verify proper airflow using an anemometer to confirm that air is moving freely from the dryer to the exterior vent. We also reconnect the dryer and run a quick test cycle to confirm everything is working correctly.
            </p>

            <h2>How Often Should You Clean Your Dryer Vent?</h2>
            <p>
              The right cleaning frequency depends on how much laundry your household does and the length/configuration of your vent run:
            </p>
            <ul>
              <li><strong>Once a year:</strong> Recommended minimum for average households (4-6 loads per week)</li>
              <li><strong>Every 6 months:</strong> For large families or households doing 7+ loads per week</li>
              <li><strong>Every 3-6 months:</strong> For homes with long vent runs (over 25 feet) or multiple bends</li>
              <li><strong>Immediately:</strong> If you notice any warning signs listed above</li>
            </ul>
            <p>
              In addition to professional cleaning, clean your dryer&apos;s lint screen after every load. This simple habit significantly slows the rate of duct accumulation.
            </p>

            <h2>Energy Savings From a Clean Dryer Vent</h2>
            <p>
              Beyond fire prevention, a clean dryer vent pays for itself in energy savings. When airflow is restricted, your dryer runs longer and works harder to achieve the same results. Studies show that a clogged dryer vent can <strong>increase drying time by 50% or more</strong> and raise energy consumption proportionally.
            </p>
            <p>
              After a professional cleaning, most homeowners report clothes drying in a single, shorter cycle — saving an estimated $18 to $24 per month in electricity or gas costs for heavy-use households. Over a year, that&apos;s more than enough to offset the cost of the cleaning service.
            </p>

            <h2>Dryer Vent Repair and Rerouting</h2>
            <p>
              Sometimes cleaning alone isn&apos;t enough. If your dryer vent has issues like foil accordion flex duct (which sags and collects lint), improper pitch, excessive bends, or exceeds the maximum allowed run length, we can discuss options for upgrading or rerouting your vent system. A properly configured rigid or semi-rigid metal duct system dramatically reduces cleaning frequency and fire risk.
            </p>

            <h2>Dryer Vent Cleaning for Apartments and Multi-Unit Buildings</h2>
            <p>
              Property managers throughout Salt Lake City trust AL Air Duct Cleaning for multi-unit dryer vent maintenance. We can efficiently service entire apartment buildings and condo complexes with flexible scheduling to minimize tenant disruption. Regular dryer vent cleaning is a critical liability management measure for landlords.
            </p>

            <h2>Serving All of Salt Lake Valley</h2>
            <p>
              We provide dryer vent cleaning services across Salt Lake City and surrounding communities including West Valley City, Sandy, South Jordan, Murray, Millcreek, Draper, Holladay, Cottonwood Heights, Taylorsville, Midvale, West Jordan, Herriman, Riverton, and Bluffdale.
            </p>

            <h2>Frequently Asked Questions</h2>

            <h3>Can I clean my own dryer vent?</h3>
            <p>
              Store-bought dryer vent cleaning kits can remove some lint from the duct, but they typically cannot fully clean the entire run, especially around bends. Professional equipment is far more thorough and includes verification of proper airflow. For safety-critical cleaning, professional service is strongly recommended.
            </p>

            <h3>How long does dryer vent cleaning take?</h3>
            <p>
              Most residential dryer vent cleanings take 45 minutes to 90 minutes. Longer vent runs or heavily clogged systems may take up to 2 hours.
            </p>

            <h3>My dryer works fine — do I really need this service?</h3>
            <p>
              Yes. Many dryer vent fires start before the dryer shows obvious performance problems. The lint inside the vent can ignite even when airflow seems adequate. Annual cleaning is a low-cost fire prevention measure, not just a maintenance convenience.
            </p>

          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-orange-50 border border-orange-100 rounded-xl p-6 sticky top-28">
              <h3 className="text-lg font-bold text-orange-900 mb-4">Schedule a Cleaning</h3>
              <ContactForm defaultService="Dryer Vent Cleaning" />
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="font-bold text-red-800 mb-2">Fire Risk Warning</h3>
              <p className="text-sm text-red-700 leading-relaxed">
                If your dryer takes multiple cycles to dry clothes or you smell burning, stop using it immediately and call us at <a href="tel:3854621032" className="font-bold">(385) 462-1032</a>.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">Service Highlights</h3>
              <ul className="text-sm space-y-2 text-gray-600">
                <li className="flex items-start gap-2"><span className="text-orange-500 mt-0.5">&#10003;</span> Rotary brush system</li>
                <li className="flex items-start gap-2"><span className="text-orange-500 mt-0.5">&#10003;</span> Full vent run cleaned</li>
                <li className="flex items-start gap-2"><span className="text-orange-500 mt-0.5">&#10003;</span> Exterior cap cleaned & inspected</li>
                <li className="flex items-start gap-2"><span className="text-orange-500 mt-0.5">&#10003;</span> Airflow verified post-cleaning</li>
                <li className="flex items-start gap-2"><span className="text-orange-500 mt-0.5">&#10003;</span> 45-90 min service time</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">Related Services</h3>
              <ul className="text-sm space-y-2">
                <li><Link href="/services/air-duct-cleaning" className="text-blue-600 hover:underline">Air Duct Cleaning</Link></li>
                <li><Link href="/services/hvac-cleaning" className="text-blue-600 hover:underline">HVAC Cleaning</Link></li>
                <li><Link href="/services/sanitization-deodorization" className="text-blue-600 hover:underline">Sanitization & Deodorization</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
