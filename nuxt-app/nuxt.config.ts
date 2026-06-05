const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || 'https://valentins.dev'
const buildId = process.env.GITHUB_SHA?.slice(0, 7) || 'local'

export default defineNuxtConfig({
  compatibilityDate: '2026-06-02',
  devtools: { enabled: true },

  modules: ['@nuxt/image', '@nuxtjs/sitemap'],

  css: ['~/assets/css/main.css'],

  features: {
    inlineStyles: true
  },

  runtimeConfig: {
    public: {
      siteUrl,
      buildId,
      buildTime: process.env.BUILD_TIME || ''
    }
  },

  site: {
    url: siteUrl,
    name: 'Valentin Schecklein',
    description: 'Personal tech portfolio of Valentin Schecklein.',
    defaultLocale: 'en'
  },

  image: {
    quality: 80,
    format: ['webp', 'avif'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },

  sitemap: {
    urls: ['/'],
    exclude: ['/404'],
    defaults: {
      changefreq: 'monthly',
      priority: 1
    },
    discoverImages: false,
    zeroRuntime: true,
    xsl: false,
    credits: false
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/404', '/sitemap.xml']
    }
  },

  routeRules: {
    '/': {
      prerender: true
    },

    '/_nuxt/**': {
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    },

    '/_ipx/**': {
      headers: {
        'Cache-Control': 'public, max-age=604800, immutable'
      }
    },

    '/img/**': {
      headers: {
        'Cache-Control': 'public, max-age=2592000, immutable'
      }
    },

    '/fonts/**': {
      headers: {
        'Cache-Control': 'public, max-age=604800'
      }
    }
  },

  app: {
    head: {
      title: 'Valentin Schecklein | Software Developer',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ]
    }
  }
})
