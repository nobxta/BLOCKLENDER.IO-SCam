import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastMod = new Date('2026-05-27')

  return [
    {
      url: 'https://blocklender.info',
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://blocklender.info/privacy',
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: 'https://blocklender.info/legal',
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://blocklender.info/sitemap-page',
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ]
}
