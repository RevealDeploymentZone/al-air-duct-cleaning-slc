import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'All Services | Air Duct, HVAC & Dryer Vent Cleaning Salt Lake City',
  description:
    'Complete air duct cleaning services in Salt Lake City: residential & commercial duct cleaning, HVAC cleaning, dryer vent cleaning, sanitization, and mold removal. Call (385) 462-1032.',
  alternates: { canonical: 'https://saltlakecity.alairductcleaning.com/services' },
}

const services = [
  {
    title: 'Air Duct Cleaning',
    desc: 'Complete source-removal cleaning of your entire duct network using NADCA-certified methods. Removes years of dust, allergens, and debris.',
    href: '/services/air-duct-cleaning',
    icon: '💨',
    badge: 'Most Popular',
  },
  {
    title: 'Dryer Vent Cleaning',
    desc: 'Remove dangerous lint buildup from your dryer vent to prevent house fires, reduce drying time, and lower energy bills.',
    href: '/services/dryer-vent-cleaning',
    icon: '🔥',
    badge: 'Fire Safety',
  },
  {
    title: 'HVAC Cleaning',
    desc: 'Comprehensive cleaning of evaporator coils, blower motors, drain pans, heat exchangers, and all air handler components.',
    href: '/services/hvac-cleaning',
    icon: '❄️',
    badge: null,
  },
  {
    title: 'Residential Duct Cleaning',
    desc: 'Specialized home cleaning designed for families, pet owners, allergy sufferers, and new homeowners moving into a property.',
    href: '/services/residential-air-duct-cleaning',
    icon: '🏠',
    badge: null,
  },
  {
    title: 'Commercial Duct Cleaning',
    desc: 'Professional commercial-scale duct cleaning for offices, restaurants, schools, healthcare facilities, and multi-unit properties.',
    href: '/services/commercial-air-duct-cleaning',
    icon: '🏢',
    badge: null,
  },
  {
    title: 'Sanitization & Deodorization',
    desc: 'EPA-approved antimicrobial treatment that kills bacteria, viruses, and mold spores, and eliminates pet, smoke, and musty odors permanently.',
    href: '/services/sanitization-deodorization',
    icon: '✨',
    badge: 'Add-On Available',
  },
  {
    title: 'Mold Inspection & Removal',
    desc: 'Thorough mold detection and safe remediation from your ductwork using HEPA equipment and EPA-registered treatments.',
    href: '/services/mold-inspection-removal',
    icon: '🔬',
    badge: 'Health Critical',
  },
]

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-4">Our Services in Salt Lake City</h1>
          <p className="text-xl text-blue-100 mb-6">
            From standard residential duct cleaning to commercial HVAC maintenance and emergency mold remediation — we provide the full range of indoor air quality services Salt Lake City homes and businesses need.
          </p>
          <a href="tel:3854621032" className="inline-block bg-white text-blue-900 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
            Call (385) 462-1032 for Free Estimate
          </a>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all group relative"
              >
                {s.badge && (
                  <span className="absolute top-4 right-4 bg-blue-100 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-full">
                    {s.badge}
                  </span>
                )}
                <div className="text-4xl mb-4">{s.icon}</div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">{s.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-blue-600 text-sm font-semibold group-hover:gap-2 transition-all">
                  Learn more & get a quote <span>&#8594;</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-blue-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-extrabold mb-3">Not Sure Which Service You Need?</h2>
          <p className="text-blue-200 mb-6">Call us and describe what you&apos;re experiencing — we&apos;ll recommend the right service for your situation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:3854621032" className="bg-white text-blue-900 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              Call (385) 462-1032
            </a>
            <Link href="/contact" className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
