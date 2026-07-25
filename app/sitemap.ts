import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://saltlakecity.alairductcleaning.com'

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/services/air-duct-cleaning`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/services/dryer-vent-cleaning`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services/hvac-cleaning`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services/residential-air-duct-cleaning`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/services/commercial-air-duct-cleaning`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/services/sanitization-deodorization`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/services/mold-inspection-removal`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/reviews`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: \`\${baseUrl}/blog\`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: \`\${baseUrl}/blog/air-duct-cleaning-cost-salt-lake-city\`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: \`\${baseUrl}/blog/signs-air-ducts-need-cleaning-slc\`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: \`\${baseUrl}/blog/how-often-clean-air-ducts-utah\`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: \`\${baseUrl}/blog/air-duct-cleaning-allergies-utah\`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: \`\${baseUrl}/blog/dryer-vent-cleaning-fire-prevention-slc\`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
  ]
}
