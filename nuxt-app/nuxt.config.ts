export default defineNuxtConfig({
  compatibilityDate: '2026-06-02',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/404']
    }
  },
  app: {
    head: {
      title: 'Valentin Schecklein - Software Developer',
      meta: [
        {
          name: 'description',
          content:
            'Portfolio of Valentin Schecklein, computer science student at DHBW Karlsruhe focusing Java backend, Flutter apps, and Linux infrastructure.'
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:title', content: 'Valentin Schecklein - Software Developer' },
        {
          property: 'og:description',
          content:
            'Backend services, cross-platform apps, and self-hosted Linux infrastructure.'
        },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ]
    }
  }
})
