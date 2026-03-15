import type { MetadataRoute } from 'next';
import { getAllCategorySlugs } from '@/lib/projects-data';

const BASE_URL = 'https://www.baiaustin.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${BASE_URL}/history`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.8 },
    { url: `${BASE_URL}/services`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.9 },
    { url: `${BASE_URL}/projects`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${BASE_URL}/team`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.7 },
  ];

  const projectRoutes = getAllCategorySlugs().map((slug) => ({
    url: `${BASE_URL}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
