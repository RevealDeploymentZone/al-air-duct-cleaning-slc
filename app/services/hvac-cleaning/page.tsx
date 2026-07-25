import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'HVAC Cleaning Salt Lake City | Furnace & AC System Cleaning',
  description:
    'Professional HVAC cleaning in Salt Lake City, UT. Clean coils, blower motors, drain pans & more. Extend your system\'s life and cut energy bills by up to 40%. Call (385) 462-1032.',
  keywords: [
    'HVAC cleaning salt lake city',
    'furnace cleaning SLC',
    'AC cleaning Salt Lake City',
    'HVAC maintenance Utah',
    'air handler cleaning SLC',
  ],
  alternates: { canonical: 'https://saltlakecity.alairductcleaning.com/services/hvac-cleaning' },
}

export default function HVACCleaningPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-cyan-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-blue-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link> &rsaquo;{' '}
            <Link href="/services" className="hover:text-white">Services</Link> &rsaquo;{' '}
            <span className="text-white">HVAC Cleaning</span>
          </nav>
          <h1 className="text-4xl font-extrabold mb-4">HVAC Cleaning Salt Lake City, Utah</h1>
          <p className="text-xl text-blue-100 mb-6">
            A dirty HVAC system can consume up to 40% more energy than a clean one. Our comprehensive HVAC cleaning service covers every component — from evaporator coils to blower motors to drain pans — extending your system&apos;s lifespan and dramatically improving efficiency.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="tel:3854621032" className="bg-white text-blue-900 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              Call (385) 462-1032
            </a>
            <Link href="/contact" className="border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
              Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          <article className="lg:col-span-2 prose-custom">

            <h2>Why HVAC Cleaning Is Critical in Salt Lake City</h2>
            <p>
              Salt Lake City experiences some of the most extreme seasonal temperature swings in the country. Summers regularly push into the 90s and 100s Fahrenheit, while winters routinely drop below freezing with heavy snow. Your HVAC system works around the clock for much of the year — and all that operation takes a toll.
            </p>
            <p>
              Most homeowners focus on changing air filters, but filter maintenance alone is not sufficient. Over time, dust, biological growth, mineral deposits, and debris accumulate on the internal components of your heating and cooling system in ways that filters simply cannot prevent. This contamination reduces efficiency, degrades air quality, and shortens the life of your equipment.
            </p>
            <p>
              The EPA estimates that HVAC systems operating with dirty components use <strong>25 to 40% more energy</strong> than clean systems. In Utah&apos;s climate, where systems run hard during both summer cooling and winter heating seasons, that energy penalty adds up to real money on your utility bills — month after month, year after year.
            </p>

            <h2>Components We Clean</h2>
            <p>
              Our comprehensive HVAC cleaning service covers every major component of your heating, ventilation, and air conditioning system. Unlike companies that clean only the ductwork, we address the source of many contamination problems — the equipment itself.
            </p>

            <h3>Evaporator Coils (Indoor Coil)</h3>
            <p>
              The evaporator coil is the component inside your air handler that cools the air as it passes through. Because it operates in a cold, humid environment, it&apos;s a magnet for dust, mold, and biological growth. A heavily fouled evaporator coil can reduce cooling capacity by 30% or more, causing your system to struggle even during moderate summer temperatures.
            </p>
            <p>
              We use foaming coil cleaner and low-pressure rinsing to thoroughly clean the coil fins without damaging them. The result is restored heat transfer efficiency and significantly improved cooling performance.
            </p>

            <h3>Condenser Coils (Outdoor Unit)</h3>
            <p>
              The outdoor condenser unit must reject heat to the outside air to work properly. When its coils are coated with cottonwood fluff, grass clippings, insects, and dirt — common in Salt Lake City during spring and summer — heat rejection becomes inefficient. This causes higher operating pressures, reduced cooling output, and premature compressor failure.
            </p>
            <p>
              We clean your outdoor coils with appropriate detergents and rinse thoroughly, restoring proper heat exchange and protecting your compressor — the most expensive component in your AC system.
            </p>

            <h3>Blower Motor and Wheel</h3>
            <p>
              The blower fan circulates conditioned air throughout your home. Over time, the squirrel-cage blower wheel accumulates thick layers of dust and debris on its blades. Even a thin coating significantly unbalances the wheel and reduces airflow — which means your thermostat keeps calling for more conditioning while the system struggles to deliver it.
            </p>
            <p>
              We remove, clean, and reinstall the blower wheel when necessary, or perform in-place cleaning for less severe buildup. A clean blower can restore airflow to factory specifications and dramatically reduce noise.
            </p>

            <h3>Drain Pan and Condensate Line</h3>
            <p>
              The condensate drain pan collects moisture that drips from the evaporator coil. This pan is a prime location for mold and bacterial growth — a warm, wet environment with organic material. When the drain line becomes clogged with algae or debris, water backs up and can overflow into your home, causing water damage and creating ideal conditions for widespread mold growth.
            </p>
            <p>
              We clean the drain pan, treat it with an algaecide to prevent future growth, and flush the condensate line clear to ensure proper drainage.
            </p>

            <h3>Heat Exchanger (Gas Furnaces)</h3>
            <p>
              For gas furnaces, the heat exchanger is the component that transfers heat from combustion gases to your home&apos;s air. A cracked or dirty heat exchanger is both an efficiency problem and a safety risk — cracks can allow carbon monoxide to enter your home&apos;s airstream. We inspect and clean the heat exchanger surfaces as part of our furnace cleaning service and alert you to any damage requiring repair.
            </p>

            <h3>Air Handler Cabinet</h3>
            <p>
              The inside of your air handler cabinet accumulates debris that bypasses the filter — including fine particles, insulation fibers, and biological growth. We clean all interior cabinet surfaces, improving hygiene and preventing contamination from recirculating into your home.
            </p>

            <h3>Supply and Return Plenums</h3>
            <p>
              The supply and return plenums are the large duct boxes directly connected to your furnace or air handler. These sections see the highest air velocities and often accumulate significant contamination. We clean both plenums as part of every HVAC cleaning service.
            </p>

            <h2>Benefits of Regular HVAC Cleaning</h2>
            <p>
              Investing in annual or biannual HVAC cleaning delivers measurable returns across multiple areas:
            </p>
            <ul>
              <li><strong>Lower energy bills:</strong> Restored component efficiency can reduce energy consumption by 20-40%, translating to hundreds of dollars saved annually.</li>
              <li><strong>Extended equipment lifespan:</strong> Properly maintained HVAC systems routinely last 15-20 years; neglected systems often fail within 8-12 years. Regular cleaning can add 5-10 years to your system&apos;s life.</li>
              <li><strong>Improved air quality:</strong> Cleaning mold, bacteria, and biological growth from your HVAC components removes a major source of airborne contaminants.</li>
              <li><strong>Fewer emergency repairs:</strong> Most HVAC component failures are preceded by neglect and contamination buildup. Clean systems simply break down less often.</li>
              <li><strong>More consistent temperatures:</strong> A clean system moves air more efficiently, eliminating hot and cold spots throughout your home.</li>
              <li><strong>Reduced carbon footprint:</strong> A more efficient system consumes less fuel and electricity, lowering your environmental impact.</li>
            </ul>

            <h2>When Should You Schedule HVAC Cleaning?</h2>
            <p>
              We recommend scheduling HVAC cleaning service during the spring (before cooling season) or fall (before heating season) when demand for service is lower and technician availability is highest. However, some situations call for immediate service regardless of timing:
            </p>
            <ul>
              <li>You&apos;ve purchased a home and don&apos;t know the maintenance history</li>
              <li>Your energy bills have increased without explanation</li>
              <li>Your system takes unusually long to heat or cool your home</li>
              <li>You&apos;ve noticed musty or burning odors from your vents</li>
              <li>It&apos;s been more than 2 years since your last cleaning</li>
              <li>You&apos;ve had water damage or flooding in your home</li>
              <li>You&apos;ve experienced pest infiltration in your HVAC area</li>
            </ul>

            <h2>HVAC Cleaning vs. HVAC Tune-Up: What&apos;s the Difference?</h2>
            <p>
              These services complement each other but address different things. An HVAC <em>tune-up</em> performed by an HVAC technician focuses on checking refrigerant levels, testing electrical components, lubricating moving parts, and verifying system operation. An HVAC <em>cleaning</em> focuses on removing physical contamination from components.
            </p>
            <p>
              For optimal performance, both services should be part of your annual maintenance routine. Many Salt Lake City homeowners schedule our cleaning in the spring alongside their annual HVAC tune-up from their HVAC contractor.
            </p>

            <h2>Commercial HVAC Cleaning</h2>
            <p>
              We also serve commercial and industrial properties throughout the Salt Lake Valley. Commercial HVAC systems accumulate contamination faster due to higher traffic, more variable occupancy, and often larger duct systems. We have the equipment and experience to service rooftop units, large air handlers, and complex multi-zone commercial HVAC systems. Contact us for a custom commercial quote.
            </p>

            <h2>Frequently Asked Questions</h2>

            <h3>How often should I have my HVAC system cleaned?</h3>
            <p>
              For most Salt Lake City homes, we recommend a full HVAC cleaning every 1-2 years depending on system age, household size, and whether pets or allergy sufferers are present. Annual cleaning is ideal for maximum efficiency and air quality.
            </p>

            <h3>Will HVAC cleaning void my warranty?</h3>
            <p>
              No — in fact, most HVAC manufacturer warranties require regular maintenance to remain valid. Professional cleaning by a qualified technician satisfies this requirement. We can provide documentation of service for your records.
            </p>

            <h3>Can HVAC cleaning fix my system&apos;s performance issues?</h3>
            <p>
              It depends on the cause. If reduced performance is due to contamination buildup — dirty coils, clogged blower, fouled heat exchanger — cleaning will restore performance. If there are mechanical or refrigerant issues, you&apos;ll also need HVAC repair service. We&apos;ll tell you honestly what we find.
            </p>

          </article>

          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 sticky top-28">
              <h3 className="text-lg font-bold text-blue-900 mb-4">Get a Free Estimate</h3>
              <ContactForm defaultService="HVAC Cleaning" />
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">We Clean These Components</h3>
              <ul className="text-sm space-y-2 text-gray-600">
                {['Evaporator coils', 'Condenser coils', 'Blower motor & wheel', 'Drain pan & condensate line', 'Heat exchanger', 'Air handler cabinet', 'Supply & return plenums'].map((item) => (
                  <li key={item} className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">&#10003;</span> {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">Related Services</h3>
              <ul className="text-sm space-y-2">
                <li><Link href="/services/air-duct-cleaning" className="text-blue-600 hover:underline">Air Duct Cleaning</Link></li>
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
