import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://blocklender.info',
      lastModified: new Date('2026-05-26'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://blocklender.info/#what-is-this',
      lastModified: new Date('2026-05-26'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://blocklender.info/#how-it-works',
      lastModified: new Date('2026-05-26'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://blocklender.info/#evidence',
      lastModified: new Date('2026-05-26'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://blocklender.info/#report',
      lastModified: new Date('2026-05-26'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://blocklender.info/privacy',
      lastModified: new Date('2026-05-26'),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: 'https://blocklender.info/legal',
      lastModified: new Date('2026-05-26'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
}
