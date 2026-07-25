import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FAQ | Air Duct Cleaning Questions — AL Air Duct Cleaning SLC',
  description:
    'Answers to common questions about air duct cleaning, dryer vent cleaning, HVAC maintenance, and indoor air quality in Salt Lake City, UT. Call (385) 462-1032.',
  alternates: { canonical: 'https://saltlakecity.alairductcleaning.com/faq' },
}

const faqs = [
  {
    q: 'How do I know if my air ducts need cleaning?',
    a: 'Common signs include visible dust puffing out of registers when the HVAC turns on, dust accumulating on furniture unusually fast, musty or stale odors when the system runs, unexplained allergy symptoms at home, or if it\'s been more than 5 years since your last cleaning (or never been cleaned at all). If you\'ve recently had renovations, moved into a new home, or experienced water damage, cleaning is also highly recommended.',
  },
  {
    q: 'How often should air ducts be cleaned?',
    a: 'The EPA and NADCA recommend air duct inspection every 2 years and cleaning every 3 to 5 years for most homes. In Salt Lake City, we recommend every 2 to 3 years given the valley\'s high particulate levels from temperature inversions. Homes with pets, heavy allergy sufferers, or young children benefit from more frequent cleaning.',
  },
  {
    q: 'Does air duct cleaning actually make a difference?',
    a: 'Yes, when performed correctly using the NADCA source-removal method. You\'ll notice less dust on furniture, fresher-smelling air from vents, and many customers report reduced allergy and asthma symptoms. There\'s also a measurable energy efficiency benefit — dirty ducts restrict airflow and make your HVAC work harder. Be aware that not all "duct cleaning" services are equal; low-cost services using portable vacuums are far less effective than professional source-removal cleaning.',
  },
  {
    q: 'How long does air duct cleaning take?',
    a: 'For a standard residential home, plan for 2 to 4 hours. Larger homes with more vent locations may take 3 to 5 hours. We always give you a time estimate before we begin, and we never rush the job — thoroughness is more important than speed.',
  },
  {
    q: 'Will my house get dusty during the cleaning?',
    a: 'No. Our process uses negative pressure throughout — we connect our truck-mounted vacuum to your main duct trunk before any agitation begins, ensuring that dislodged debris flows into our collection unit rather than into your living space. Most customers are surprised by how clean their home stays during and after the process.',
  },
  {
    q: 'Do I need to be home for the duct cleaning?',
    a: 'Yes, we ask that an adult be present for the duration of the service. We like to show you what we found before and after cleaning, answer any questions, and make sure you\'re fully satisfied before we leave.',
  },
  {
    q: 'What is the difference between air duct cleaning and HVAC cleaning?',
    a: 'Air duct cleaning focuses on the ductwork — the network of tubes that distribute conditioned air throughout your home. HVAC cleaning covers the equipment itself — the furnace, air handler, evaporator coils, blower motor, drain pan, and condenser. Both are important. We recommend doing them together when possible for maximum benefit. Many customers add HVAC component cleaning to their standard duct cleaning service.',
  },
  {
    q: 'How much does air duct cleaning cost in Salt Lake City?',
    a: 'Most residential jobs in Salt Lake City range from $299 to $599 depending on home size, number of vents, and contamination level. We always provide a clear, written quote before starting. Be wary of very cheap offers ($49-$99) — these typically use inadequate equipment and upsell aggressively once in your home. Professional source-removal cleaning requires industrial equipment and simply cannot be done properly at those prices.',
  },
  {
    q: 'Is there any way to prepare for the cleaning?',
    a: 'The main thing is to ensure clear access to your furnace/air handler unit and all vent registers throughout the home. You don\'t need to move furniture or cover belongings — just make sure our technician can reach each vent location. It\'s also helpful to know if you have any known mold issues or concerns we should look out for.',
  },
  {
    q: 'Do you offer dryer vent cleaning separately from duct cleaning?',
    a: 'Yes. Dryer vent cleaning is a separate service from air duct cleaning. We strongly recommend having it done annually regardless of your duct cleaning schedule, as clogged dryer vents are a leading cause of house fires. Many customers book both services together for convenience and to save on the service call.',
  },
  {
    q: 'What if mold is found in my ducts?',
    a: 'If we discover mold during our inspection or cleaning, we\'ll show you photographic evidence, explain the extent of contamination, and recommend appropriate remediation. Minor surface mold can typically be addressed with our cleaning and EPA-approved antimicrobial sanitization treatment. Extensive mold growth may require more comprehensive remediation. We\'ll give you an honest assessment and a clear plan.',
  },
  {
    q: 'Do you serve my area in Salt Lake County?',
    a: 'We serve Salt Lake City and all surrounding communities including West Valley City, Sandy, South Jordan, Murray, Millcreek, Draper, Holladay, Cottonwood Heights, Taylorsville, Midvale, West Jordan, Herriman, Riverton, and Bluffdale. Not sure if we cover your area? Just call us at (385) 462-1032.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-blue-100">
            Everything you need to know about air duct cleaning, dryer vent cleaning, and HVAC maintenance in Salt Lake City.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden group"
            >
              <summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-semibold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                <span>{faq.q}</span>
                <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 pt-2 text-gray-600 leading-relaxed text-sm border-t border-gray-100">
                {faq.a}
              </div>
            </details>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-blue-900 mb-3">Still Have Questions?</h2>
          <p className="text-blue-700 mb-6">
            Our team is happy to answer any question about your specific situation. Call us or send a message and we&apos;ll get back to you within the hour.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:3854621032" className="bg-blue-700 text-white font-bold px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors">
              Call (385) 462-1032
            </a>
            <Link href="/contact" className="border-2 border-blue-700 text-blue-700 font-bold px-6 py-3 rounded-lg hover:bg-blue-700 hover:text-white transition-colors">
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
