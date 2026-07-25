import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Air Duct Cleaning Blog Salt Lake City | Tips, Guides & Expert Advice',
  description: 'Expert air duct cleaning tips, pricing guides, and indoor air quality advice for Salt Lake City homeowners. Learn when to clean ducts, costs, and health benefits.',
  alternates: { canonical: 'https://saltlakecity.alairductcleaning.com/blog' },
}

const posts = [
  {
    slug: 'air-duct-cleaning-cost-salt-lake-city',
    title: 'Air Duct Cleaning Cost in Salt Lake City: 2026 Complete Pricing Guide',
    excerpt: 'How much does air duct cleaning cost in SLC? We break down average prices, what affects cost, and how to avoid getting ripped off.',
    date: 'July 2026',
    readTime: '10 min read',
  },
  {
    slug: 'signs-air-ducts-need-cleaning-slc',
    title: '8 Warning Signs Your Salt Lake City Home Needs Air Duct Cleaning Now',
    excerpt: 'Most homeowners miss these early warning signs of dirty ductwork. Learn what to look for before it becomes a health or HVAC problem.',
    date: 'July 2026',
    readTime: '8 min read',
  },
  {
    slug: 'how-often-clean-air-ducts-utah',
    title: 'How Often Should You Clean Air Ducts in Utah? (Expert Recommendation)',
    excerpt: "Utah's unique climate — inversions, wildfire smoke, and dry desert air — means SLC homeowners need to clean ducts more often than most.",
    date: 'July 2026',
    readTime: '7 min read',
  },
  {
    slug: 'air-duct-cleaning-allergies-utah',
    title: 'Does Air Duct Cleaning Help with Allergies in Salt Lake City?',
    excerpt: "Salt Lake City consistently ranks among the worst US cities for allergy sufferers. Here's how clean ducts can make a real difference.",
    date: 'July 2026',
    readTime: '9 min read',
  },
  {
    slug: 'dryer-vent-cleaning-fire-prevention-slc',
    title: 'Dryer Vent Cleaning in Salt Lake City: How It Prevents House Fires',
    excerpt: 'Clogged dryer vents cause 2,900+ house fires every year in the US. Learn why this overlooked maintenance task is critical for SLC homeowners.',
    date: 'July 2026',
    readTime: '8 min read',
  },
]

export default function BlogPage() {
  return (
    <div className="bg-white">
      <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-4">Air Duct Cleaning Blog</h1>
          <p className="text-xl text-blue-100">Expert tips, guides, and advice for Salt Lake City homeowners</p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="flex gap-3 text-sm text-gray-500 mb-3">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                <Link href={'/blog/' + post.slug} className="hover:text-blue-700 transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link href={'/blog/' + post.slug} className="text-blue-700 font-semibold hover:underline text-sm">
                Read full article →
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Ready for Cleaner Air?</h2>
          <p className="text-gray-600 mb-4">Get a free estimate from Salt Lake City's top-rated air duct cleaning company.</p>
          <Link href="/contact" className="inline-block bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
            Get My Free Estimate
          </Link>
        </div>
      </div>
    </div>
  )
}
