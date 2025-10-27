import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Suvartha Ministries UK',
    short_name: 'Suvartha UK',
    description: 'Welcome to Suvartha Ministries UK - Spreading the Gospel since 1925',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0f766e',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon.ico',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/apple-icon.ico',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  }
}