import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://suvarthaministries.org.uk';
  
  const routes = [
    { path: '', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/suvartha/last', priority: 0.8, changeFrequency: 'monthly' as const },
  ];

  return routes.map(route => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}