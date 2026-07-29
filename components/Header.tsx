'use client'

import { useState } from 'react'
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

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-blue-900 text-white text-sm py-1.5">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-1">
          <span>Open 24/7 — Available Anytime</span>
          <a href="tel:3854621032" className="font-semibold hover:text-blue-200 transition-colors">
            (385) 462-1032 — Call or Text
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="AL Air Duct Cleaning Salt Lake City"
            width={200}
            height={78}
            priority
            className="h-16 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-blue-700 transition-colors">Home</Link>

          {/* Services dropdown */}
          <div className="relative group">
            <button
              className="flex items-center gap-1 hover:text-blue-700 transition-colors"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div
                className="absolute top-full left-0 w-64 bg-white border border-gray-100 rounded-lg shadow-xl py-2 z-50"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link href="/services" className="block px-4 py-2 text-blue-700 font-semibold hover:bg-blue-50">
                  All Services
                </Link>
                <hr className="my-1" />
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/about" className="hover:text-blue-700 transition-colors">About</Link>
          <Link href="/reviews" className="hover:text-blue-700 transition-colors">Reviews</Link>
          <Link href="/faq" className="hover:text-blue-700 transition-colors">FAQ</Link>
          <Link href="/blog" className="hover:text-blue-700 transition-colors">Blog</Link>
          <Link href="/contact" className="hover:text-blue-700 transition-colors">Contact</Link>
        </nav>

        {/* CTA button */}
        <a
          href="tel:3854621032"
          className="hidden md:inline-flex items-center gap-2 bg-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Free Estimate
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-3 text-sm font-medium text-gray-700">
          <Link href="/" className="block hover:text-blue-700" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link href="/services" className="block hover:text-blue-700" onClick={() => setMobileOpen(false)}>All Services</Link>
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="block pl-4 text-gray-500 hover:text-blue-700"
              onClick={() => setMobileOpen(false)}
            >
              {s.name}
            </Link>
          ))}
          <Link href="/about" className="block hover:text-blue-700" onClick={() => setMobileOpen(false)}>About</Link>
          <Link href="/reviews" className="block hover:text-blue-700" onClick={() => setMobileOpen(false)}>Reviews</Link>
          <Link href="/faq" className="block hover:text-blue-700" onClick={() => setMobileOpen(false)}>FAQ</Link>
          <Link href="/blog" className="block hover:text-blue-700" onClick={() => setMobileOpen(false)}>Blog</Link>
          <Link href="/contact" className="block hover:text-blue-700" onClick={() => setMobileOpen(false)}>Contact</Link>
          <a
            href="tel:3854621032"
            className="block bg-blue-700 text-white text-center py-3 rounded-lg font-semibold"
          >
            Call (385) 462-1032
          </a>
        </div>
      )}
    </header>
  )
}
