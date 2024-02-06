export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'Default Next.js Template',
  description:
    'A template built to easily start with server-rendered React app development with Next.js.',
  mainNav: [
    {
      title: 'Home',
      href: '/'
    }
  ],
  links: {
    twitter: 'https://twitter.com/shadcn',
    github: 'https://github.com/shadcn/ui',
    docs: 'https://ui.shadcn.com'
  }
}
