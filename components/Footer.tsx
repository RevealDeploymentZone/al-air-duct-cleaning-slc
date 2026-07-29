import Link from 'next/link'
import Image from 'next/image'

const services = [
  { name: 'Air Duct Cleaning', href: '/services/air-duct-cleaning' },
  { name: 'Dryer Vent Cleaning', href: '/services/dryer-vent-cleaning' },
  { name: 'HVAC Cleaning', href: '/services/hvac-cleaning' },
  { name: 'Residential Duct Cleaning', href: '/services/residential-air-duct-cleaning' },
  { name: 'Commercial Duct Cleaning', href: '/services/commercial-air-duct-cleaning' },
  { name: 'Sanitization & Deodorization', href: '/services/sanitization-deodorization' },
  { name: 'Mold Inspection & Removal', href: '/services/mold-inspection-removal' },
]

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'All Services', href: '/services' },
  { name: 'Customer Reviews', href: '/reviews' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Sitemap', href: '/sitemap.xml' },
]

const serviceAreas = [
  'Salt Lake City', 'West Valley City', 'Sandy', 'South Jordan',
  'Murray', 'Millcreek', 'Draper', 'Holladay', 'Cottonwood Heights', 'Taylorsville',
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <Link href="/" className="inline-block mb-4">
            <Image
              src="/logo.svg"
              alt="AL Air Duct Cleaning Salt Lake City"
              width={180}
              height={70}
              className="h-14 w-auto brightness-0 invert"
            />
          </Link>
          <p className="text-sm leading-relaxed mb-4">
            Salt Lake City&apos;s trusted air duct and HVAC cleaning specialists. Breathing cleaner air starts here.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="https://www.facebook.com/alairductcleaningslc" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
              className="w-9 h-9 bg-gray-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            <a href="https://www.google.com/maps/search/AL+Air+Duct+Cleaning+Salt+Lake+City+UT" target="_blank" rel="noopener noreferrer" aria-label="Google Reviews"
              className="w-9 h-9 bg-gray-700 hover:bg-red-500 rounded-full flex items-center justify-center transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 110-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.969 9.969 0 0012.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z"/>
              </svg>
            </a>
            <a href="https://www.yelp.com/search?find_desc=AL+Air+Duct+Cleaning&find_loc=Salt+Lake+City%2C+UT" target="_blank" rel="noopener noreferrer" aria-label="Yelp"
              className="w-9 h-9 bg-gray-700 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20.16 12.594l-4.995 1.452c-.68.198-1.227-.226-1.02-.9l1.452-4.995c.207-.674.887-.88 1.476-.472l3.543 2.543c.59.408.224 1.174-.456 1.372zM12.984 5.783l.837 5.132c.114.697-.414 1.183-1.015.87l-4.572-2.405c-.601-.314-.67-1.063-.081-1.515l3.735-2.728c.59-.452 1.34-.18 1.096.646z"/>
              </svg>
            </a>
          </div>
          {/* External credibility links */}
          <div className="mt-5 space-y-1.5 text-xs">
            <a href="https://www.nadca.com" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors">
              <span>&#x2713;</span> NADCA Certified Member
            </a>
            <a href="https://www.epa.gov/indoor-air-quality-iaq" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors">
              <span>&#x2713;</span> EPA Indoor Air Quality Guidelines
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-bold text-base mb-4 uppercase tracking-wide">Our Services</h3>
          <ul className="space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <span className="text-blue-500">&#x2192;</span>
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold text-base mb-4 uppercase tracking-wide">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <span className="text-blue-500">&#x2192;</span>
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + Hours */}
        <div>
          <h3 className="text-white font-bold text-base mb-4 uppercase tracking-wide">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 mt-0.5 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:3854621032" className="hover:text-blue-400 transition-colors">(385) 462-1032</a>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 mt-0.5 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:info@alairductcleaning.com" className="hover:text-blue-400 transition-colors">
                info@alairductcleaning.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 mt-0.5 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <a href="https://www.google.com/maps/search/Salt+Lake+City+UT" target="_blank" rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors">Salt Lake City, UT &amp; Surrounding Areas</a>
            </li>
          </ul>

          <div className="mt-5">
            <h4 className="text-white font-semibold text-sm mb-2">Business Hours</h4>
            <p className="text-sm">Open 24 Hours, 7 Days a Week</p>
          </div>

          <div className="mt-5 text-xs text-gray-600">
            <p className="font-semibold text-gray-400 mb-2">Service Areas:</p>
            <p>{serviceAreas.join(' · ')}</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} AL Air Duct Cleaning SLC. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-gray-300 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
