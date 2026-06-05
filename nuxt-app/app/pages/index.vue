<script setup lang="ts">
const lang = ref<'en' | 'de'>('en')
const activeProject = ref(0)
const openFaq = ref(0)

const githubUrl = 'https://github.com/herzblutnord'
const linkedinUrl = 'https://www.linkedin.com/in/valentin-s-a8951816b/'
const contactEmail = 'v.schecklein@proton.me'
const runtimeConfig = useRuntimeConfig()
const siteUrl = computed(() => String(runtimeConfig.public.siteUrl || 'https://valentins.dev').replace(/\/$/, ''))
const canonicalUrl = computed(() => `${siteUrl.value}/`)
const profileImageUrl = computed(() => `${siteUrl.value}/img/profilbild4.webp`)

const content = {
  en: {
    languageLabel: 'Language',
    nav: {
      about: 'About',
      work: 'Work',
      skills: 'Skills',
      faq: 'FAQ',
      contact: 'Contact'
    },
    hero: {
      eyebrow: 'Computer Science student at DHBW Karlsruhe',
      name: 'VALENTIN SCHECKLEIN',
      role: 'SOFTWARE, DEVOPS AND INFRASTRUCTURE',
      based: 'Based in Germany',
      status: 'Finishing my degree in October 2026. Open to software development, DevOps and infrastructure roles.',
      resume: 'Download CV',
      scroll: 'Keep scrolling'
    },
    about: {
      heading: "HELLO, I'M VALENTIN.",
      subheading: 'SOFTWARE, DEVOPS AND INFRASTRUCTURE',
      location: 'Based in Karlsruhe, Germany',
      storyTitle: 'Profile',
      paragraphs: [
        'DHBW Karlsruhe runs a cooperative degree programme, which means I have been working full-time in IT alongside my studies since 2022. By the time I graduate in October 2026 I will have around four years of professional experience.',
        'My expirience covers backend services, cross-platform apps, CI/CD pipelines and Linux server operations. I have shipped web apps, Android builds and Nuxt SSR deployments through GitHub Actions and GitLab CI. I use AI coding tools from multiple providers daily for writing, reviewing and debugging code.'
      ],
      stats: [
        { value: 'DHBW', label: 'Computer Science' },
        { value: 'Java', label: 'Coding' },
        { value: 'Linux', label: 'Server & DevOps' },
        { value: 'CI/CD', label: 'Pipelines & deployment' }
      ]
    },
    work: {
      heading: 'FEATURED WORK',
      intro: 'A selection of projects covering backend services, cross-platform apps, CI/CD and infrastructure.',
      live: 'View details',
      repo: 'Repository'
    },
    skills: {
      heading: 'SKILLS',
      intro: 'Technologies I have used in projects, coursework, work and my own infrastructure.',
      groups: [
        {
          title: 'Backend',
          text: 'Java backend services with Spring Boot, REST APIs, authentication, database migrations, and tests.',
          tags: ['Java', 'Spring Boot', 'REST APIs', 'JWT', 'Flyway', 'Maven', 'JUnit', 'PostgreSQL']
        },
        {
          title: 'Frontend',
          text: 'Flutter apps for Android and web, including PWA deployments and API integration.',
          tags: ['Flutter', 'Dart', 'Android', 'PWA', 'Vue', 'Nuxt', 'HTML', 'CSS']
        },
        {
          title: 'Infrastructure',
          text: 'Ubuntu VPS operations: nginx, TLS, SSH hardening, systemd services, and routine maintenance.',
          tags: ['Linux', 'Ubuntu', 'Arch', 'nginx', 'systemd', 'Certbot', 'WireGuard', 'Fail2Ban', 'SSH']
        },
        {
          title: 'CI/CD & Deployment',
          text: 'Pipelines for web, Android and Nuxt SSR deployments. Covered pipeline quality and security assessment as part of a Software Quality module at DHBW.',
          tags: ['GitHub Actions', 'GitLab CI', 'Android deployment', 'Nuxt SSR', 'Git', 'GitHub', 'GitLab', 'IntelliJ IDEA', 'WebStorm', 'PowerShell']
        },
        {
          title: 'AI tooling',
          text: 'Daily use of AI coding tools from multiple providers. Codex as the main tool, others chosen depending on the task. Code review, debugging and analysis are where most of the value comes from.',
          tags: ['Codex', 'AI-assisted coding', 'LLM tooling', 'code analysis']
        }
      ]
    },
    faq: {
      heading: 'FREQUENTLY ASKED QUESTIONS',
      items: [
        {
          q: 'What kind of role are you looking for?',
          a: 'A full-time role after graduation. I am equally open to software development, DevOps, CI/CD and infrastructure-focused positions. The work matters more than the exact title.'
        },
        {
          q: 'What have you built outside of university?',
          a: 'DHBW is a dual study programme, so I have been working in IT full-time alongside my degree since 2022. Outside of that I have built and maintained real things: a Java and Flutter project, PostgreSQL databases, CI/CD pipelines, and a VPS running several public-facing services.'
        },
        {
          q: 'Do you have server and deployment experience?',
          a: 'Yes. I run an Ubuntu VPS with nginx, TLS via Certbot, SSH hardening, Fail2Ban, WireGuard, systemd services and regular backups. I have also set up and maintained CI/CD pipelines for web, Android and Nuxt SSR deployments using GitHub Actions and GitLab CI.'
        },
        {
          q: 'Can I see code examples?',
          a: 'My GitHub has selected Java, Flutter, and infrastructure projects. I am cleaning up and documenting the most relevant ones for applications.'
        },
        {
          q: 'Which languages do you speak?',
          a: 'German, English, and Russian fluently. I also speak some Japanese.'
        }
      ]
    },
    contact: {
      heading: "LET'S TALK",
      text: 'Finishing my degree in October 2026 and looking for a full-time role in software development, DevOps or infrastructure. If my profile looks like a fit, get in touch.',
      email: 'Email',
      github: 'GitHub',
      linkedin: 'LinkedIn'
    }
  },
  de: {
    languageLabel: 'Sprache',
    nav: {
      about: 'Profil',
      work: 'Projekte',
      skills: 'Skills',
      faq: 'FAQ',
      contact: 'Kontakt'
    },
    hero: {
      eyebrow: 'Informatik-Student an der DHBW Karlsruhe',
      name: 'VALENTIN SCHECKLEIN',
      role: 'SOFTWARE, DEVOPS UND INFRASTRUKTUR',
      based: 'Aus Deutschland',
      status: 'Abschluss im Oktober 2026. Offen für Softwareentwicklung, DevOps und Infrastruktur.',
      resume: 'Lebenslauf laden',
      scroll: 'Weiter scrollen'
    },
    about: {
      heading: 'HALLO, ICH BIN VALENTIN.',
      subheading: 'SOFTWARE, DEVOPS UND INFRASTRUKTUR',
      location: 'Aus Karlsruhe',
      storyTitle: 'Profil',
      paragraphs: [
        'Die DHBW Karlsruhe ist eine Duale Hochschule, was bedeutet, dass ich seit 2022 neben meinem Studium durchgehend in einer Unternehmens IT gearbeitet habe. Wenn ich im Oktober 2026 abschließe, bringe ich rund vier Jahre Berufserfahrung mit.',
        'Mein Erfahrungsbereich umfasst Backend-Services, Cross-Platform-Apps, CI/CD-Pipelines und Linux-basierte Serverinfrastruktur. Ich habe Web-Apps, Android-Builds und Nuxt-SSR-Apps über GitHub Actions und GitLab CI deployed. KI-gestützte Entwicklungstools nutze ich täglich, mit Modellen verschiedener Anbieter je nach Aufgabe.'
      ],
      stats: [
        { value: 'DHBW', label: 'Informatik' },
        { value: 'Java', label: 'Programmieren' },
        { value: 'Linux', label: 'Server & DevOps' },
        { value: 'CI/CD', label: 'Pipelines & Deployment' }
      ]
    },
    work: {
      heading: 'AUSGEWÄHLTE PROJEKTE',
      intro: 'Eine Auswahl von Projekten aus Backend-Services, Cross-Platform-Apps, CI/CD und Infrastruktur.',
      live: 'Details ansehen',
      repo: 'Repository'
    },
    skills: {
      heading: 'SKILLS',
      intro: 'Technologien, die ich in Projekten, im Studium, im Job und in eigener Infrastruktur genutzt habe.',
      groups: [
        {
          title: 'Backend',
          text: 'Java-Backend-Services mit Spring Boot, REST APIs, Authentifizierung, Datenbankmigrationen und Tests.',
          tags: ['Java', 'Spring Boot', 'REST APIs', 'JWT', 'Flyway', 'Maven', 'JUnit', 'PostgreSQL']
        },
        {
          title: 'Frontend',
          text: 'Flutter-Apps für Android und Web, inklusive PWA-Deployment und API-Anbindung.',
          tags: ['Flutter', 'Dart', 'Android', 'PWA', 'Vue', 'Nuxt', 'HTML', 'CSS']
        },
        {
          title: 'Infrastruktur',
          text: 'Ubuntu-VPS-Betrieb: nginx, TLS, SSH-Härtung, systemd-Services und regelmäßige Wartung.',
          tags: ['Linux', 'Ubuntu', 'Arch', 'nginx', 'systemd', 'Certbot', 'WireGuard', 'Fail2Ban', 'SSH']
        },
        {
          title: 'CI/CD & Deployment',
          text: 'Pipelines für Web-, Android- und Nuxt-SSR-Deployments. Qualität und Sicherheit von CI/CD-Pipelines waren Schwerpunkt im Modul Softwarequalität an der DHBW.',
          tags: ['GitHub Actions', 'GitLab CI', 'Android-Deployment', 'Nuxt SSR', 'Git', 'GitHub', 'GitLab', 'IntelliJ IDEA', 'WebStorm', 'PowerShell']
        },
        {
          title: 'KI-Tools',
          text: 'Tägliche Nutzung von KI-gestützten Entwicklungstools verschiedener Anbieter. Codex als Haupt-Tool, andere je nach Aufgabe. Code-Reviews, Debugging und Analyse sind die häufigsten Anwendungsfälle.',
          tags: ['Codex', 'KI-gestützte Entwicklung', 'LLM-Tooling', 'Code-Analyse']
        }
      ]
    },
    faq: {
      heading: 'HÄUFIGE FRAGEN',
      items: [
        {
          q: 'Welche Stelle suchst du?',
          a: 'Eine Vollzeitstelle nach dem Abschluss. Ich bin gleichermaßen offen für Softwareentwicklung, DevOps, CI/CD und infrastrukturbezogene Rollen. Die Arbeit selbst ist mir wichtiger als der genaue Titel.'
        },
        {
          q: 'Was hast du außerhalb der Uni gebaut?',
          a: 'Die DHBW ist eine Duale Hochschule, also habe ich seit 2022 neben dem Studium in Vollzeit in einem IT-Unternehmen gearbeitet. Daneben habe ich echte Sachen gebaut und betrieben: ein Java-und-Flutter-Projekt, PostgreSQL-Datenbanken, CI/CD-Pipelines und einen VPS mit mehreren öffentlich erreichbaren Diensten.'
        },
        {
          q: 'Hast du Erfahrung mit Servern und Deployment?',
          a: 'Ja. Ich betreibe einen Ubuntu-VPS mit nginx, TLS via Certbot, SSH-Härtung, Fail2Ban, WireGuard, systemd-Services und regelmäßigen Backups. Dazu habe ich CI/CD-Pipelines für Web-, Android- und Nuxt-SSR-Deployments via GitHub Actions und GitLab CI aufgesetzt und gewartet.'
        },
        {
          q: 'Kann man Codebeispiele sehen?',
          a: 'Auf meinem GitHub gibt es ausgewählte Java-, Flutter- und Infrastrukturprojekte. Ich bereite gerade die relevantesten Repositories für Bewerbungen auf.'
        },
        {
          q: 'Welche Sprachen sprichst du?',
          a: 'Deutsch, Englisch und Russisch fließend. Dazu etwas Japanisch.'
        }
      ]
    },
    contact: {
      heading: 'LASS UNS REDEN',
      text: 'Ich schließe mein Studium im Oktober 2026 ab und suche eine Vollzeitstelle in Softwareentwicklung, DevOps oder Infrastruktur. Wenn mein Profil passt, meld dich.',
      email: 'E-Mail',
      github: 'GitHub',
      linkedin: 'LinkedIn'
    }
  }
}

const projects = computed(() => [
  {
    title: 'Verhåårm',
    subtitle:
        lang.value === 'en'
            ? 'Club administration app with a Spring Boot backend and Flutter frontend.'
            : 'Vereinsverwaltung mit Spring-Boot-Backend und Flutter-Frontend.',
    image: '/img/project-verhaarm.svg',
    tags: ['Java', 'Spring Boot', 'Flutter', 'PostgreSQL', 'JWT', 'Firebase', 'Flyway', 'nginx'],
    details:
        lang.value === 'en'
            ? [
              'JWT auth with access/refresh tokens, roles, and audit logging',
              'Push notifications via Firebase and Web Push',
              'Flutter: GoRouter, reactive state, camera upload, PDF handling',
              'VPS deployment with nginx, systemd, PostgreSQL, and Flyway'
            ]
            : [
              'JWT-Auth mit Access/Refresh-Tokens, Rollen und Audit-Logging',
              'Push-Benachrichtigungen via Firebase und Web Push',
              'Flutter: GoRouter, reaktiver State, Kamera-Upload, PDF-Handling',
              'VPS-Deployment mit nginx, systemd, PostgreSQL und Flyway'
            ],
    links: [
      {
        label: lang.value === 'en' ? 'App repository' : 'App-Repository',
        url: 'https://github.com/herzsoft-org/verhaaarm-app'
      },
      {
        label: lang.value === 'en' ? 'Backend repository' : 'Backend-Repository',
        url: 'https://github.com/herzsoft-org/verhaaarm-backend'
      }
    ]
  },
  {
    title: lang.value === 'en' ? 'Personal server infrastructure' : 'Eigene Serverinfrastruktur',
    subtitle:
        lang.value === 'en'
            ? 'Self-hosted Ubuntu server for public and private services.'
            : 'Selbst gehosteter Ubuntu-Server für öffentliche und private Dienste.',
    image: '/img/project-vps.svg',
    tags: ['Linux', 'Ubuntu', 'nginx', 'systemd', 'WireGuard', 'Fail2Ban', 'Certbot'],
    details:
        lang.value === 'en'
            ? [
              'nginx reverse proxy with TLS for websites and web apps',
              'Self-hosted kanban, streaming, and internal tools',
              'SSH hardening, Fail2Ban, WireGuard, firewall, backups'
            ]
            : [
              'nginx als Reverse Proxy mit TLS für Websites und Web-Apps',
              'Self-hosted Kanban, Streaming und interne Tools',
              'SSH-Härtung, Fail2Ban, WireGuard, Firewall, Backups'
            ],
    links: []
  }
])

const t = computed(() => content[lang.value])
const cvHref = computed(() =>
    lang.value === 'en'
        ? '/files/valentin-schecklein-cv-en.pdf'
        : '/files/valentin-schecklein-lebenslauf-de.pdf'
)
const cvDownloadName = computed(() =>
    lang.value === 'en'
        ? 'valentin-schecklein-cv-en.pdf'
        : 'valentin-schecklein-lebenslauf-de.pdf'
)

const setLanguage = (next: 'en' | 'de') => {
  lang.value = next

  if (import.meta.client) {
    localStorage.setItem('portfolio-language', next)
  }
}

onMounted(() => {
  const saved = localStorage.getItem('portfolio-language')

  if (saved === 'de' || saved === 'en') {
    lang.value = saved
  }
})

const pageTitle = computed(() =>
    lang.value === 'en'
        ? 'Valentin Schecklein | Software Developer'
        : 'Valentin Schecklein | Softwareentwickler'
)
const pageDescription = computed(() =>
    lang.value === 'en'
        ? 'Portfolio of Valentin Schecklein, a Computer Science student focused on Java backends, Flutter apps, Linux infrastructure, backend services, and self-hosted systems.'
        : 'Portfolio von Valentin Schecklein, Informatik-Student mit Fokus auf Java-Backends, Flutter-Apps, Linux-Infrastruktur, Backend-Services und selbst gehostete Systeme.'
)
const ogDescription = computed(() =>
    lang.value === 'en'
        ? 'Selected software projects, backend development, Flutter apps, DevOps, and Linux infrastructure.'
        : 'Ausgewählte Softwareprojekte, Backend-Entwicklung, Flutter-Apps, DevOps und Linux-Infrastruktur.'
)

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: pageTitle,
  ogDescription,
  ogImage: profileImageUrl,
  ogUrl: canonicalUrl,
  twitterCard: 'summary_large_image',
  twitterTitle: pageTitle,
  twitterDescription: ogDescription,
  twitterImage: profileImageUrl
})

useHead(() => ({
  htmlAttrs: {
    lang: lang.value
  },
  link: [
    {
      rel: 'canonical',
      href: canonicalUrl.value
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Person',
            '@id': `${canonicalUrl.value}#person`,
            name: 'Valentin Schecklein',
            url: canonicalUrl.value,
            image: profileImageUrl.value,
            jobTitle: lang.value === 'en' ? 'Computer Science student and software developer' : 'Informatik-Student und Softwareentwickler',
            description: pageDescription.value,
            sameAs: [
              githubUrl,
              linkedinUrl
            ]
          },
          {
            '@type': 'WebSite',
            '@id': `${canonicalUrl.value}#website`,
            name: 'Valentin Schecklein',
            url: canonicalUrl.value,
            description: pageDescription.value,
            inLanguage: lang.value
          }
        ]
      })
    }
  ]
}))
</script>

<template>
  <main class="site-shell">
    <header class="topbar" aria-label="Main navigation">
      <a class="brand" href="#" aria-label="Go to top">Valentin Schecklein</a>

      <nav class="nav-links" aria-label="Section navigation">
        <a href="#about">{{ t.nav.about }}</a>
        <span>/</span>
        <a href="#work">{{ t.nav.work }}</a>
        <span>/</span>
        <a href="#skills">{{ t.nav.skills }}</a>
        <span>/</span>
        <a href="#faq">{{ t.nav.faq }}</a>
        <span>/</span>
        <a href="#contact">{{ t.nav.contact }}</a>
      </nav>

      <div class="language-switch" :aria-label="t.languageLabel">
        <button :class="{ active: lang === 'en' }" type="button" @click="setLanguage('en')">
          <img
              class="flag-icon"
              src="/img/flag-gb.svg"
              alt=""
              aria-hidden="true"
              width="20"
              height="14"
          >
          EN
        </button>
        <button :class="{ active: lang === 'de' }" type="button" @click="setLanguage('de')">
          <img
              class="flag-icon"
              src="/img/flag-de.svg"
              alt=""
              aria-hidden="true"
              width="20"
              height="14"
          >
          DE
        </button>
      </div>
    </header>

    <section id="top" class="hero-card panel-light" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="hero-eyebrow">{{ t.hero.eyebrow }}</p>

        <h1 id="hero-title" class="pixel hero-title">
          <span>{{ t.hero.name }}</span>
          <span>{{ t.hero.role }}</span>
        </h1>
      </div>

      <div class="hero-links" aria-label="Profile links">
        <a :href="githubUrl" target="_blank" rel="noreferrer">GitHub</a>
        <a :href="linkedinUrl" target="_blank" rel="noreferrer">LinkedIn</a>
        <a :href="`mailto:${contactEmail}`">Email</a>
      </div>

      <div class="hero-meta">
        <p class="hero-location">{{ t.hero.based }}</p>
        <p class="hero-status">{{ t.hero.status }}</p>
      </div>

      <NuxtImg
          class="hero-portrait"
          src="/img/smoking4.webp"
          alt="Portrait of Valentin Schecklein"
          width="1287"
          height="1222"
          sizes="280px sm:390px md:460px lg:575px"
          format="webp"
          quality="85"
          :preload="{ fetchPriority: 'high' }"
      />

      <div class="hero-bottom">
        <a class="scroll-hint" href="#about" aria-label="Scroll to about section">
          <span>{{ t.hero.scroll }}</span>
          <span aria-hidden="true">↓</span>
        </a>

        <a class="button button-dark" :href="cvHref" :download="cvDownloadName">
          {{ t.hero.resume }}
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>

    <section id="about" class="profile-intro panel-light" aria-labelledby="profile-title">
      <div class="profile-copy">
        <p class="profile-eyebrow">{{ t.hero.eyebrow }}</p>

        <h1 id="profile-title" class="pixel profile-title">
          <span>{{ t.about.heading }}</span>
          <span>{{ t.about.subheading }}</span>
        </h1>

        <p class="profile-location">{{ t.about.location }}</p>

        <div class="profile-text">
          <p v-for="paragraph in t.about.paragraphs" :key="paragraph">
            {{ paragraph }}
          </p>
        </div>

        <div class="profile-actions">
          <a class="button button-dark" :href="githubUrl" target="_blank" rel="noreferrer">
            GitHub
            <span aria-hidden="true">↗</span>
          </a>

          <a class="button button-outline" :href="`mailto:${contactEmail}`">
            Email
            <span aria-hidden="true">↗</span>
          </a>

          <a class="button button-outline" :href="cvHref" :download="cvDownloadName">
            {{ t.hero.resume }}
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      <div class="profile-visual" aria-hidden="true">
        <div class="profile-visual-label">
          {{ t.hero.role }}
        </div>
        <NuxtImg
            src="/img/profilbild4.webp"
            alt=""
            width="3456"
            height="5184"
            sizes="280px sm:360px md:460px lg:520px"
            format="webp"
            quality="80"
            loading="lazy"
        />
      </div>

      <div class="profile-stats" aria-label="Profile highlights">
        <div v-for="stat in t.about.stats" :key="stat.label" class="profile-stat">
          <strong class="pixel">{{ stat.value }}</strong>
          <span>{{ stat.label }}</span>
        </div>
      </div>
    </section>

    <section id="work" class="work-section panel-dark section-space" aria-labelledby="work-title">
      <div class="section-kicker">
        <h2 id="work-title" class="pixel section-title">{{ t.work.heading }}</h2>
        <p>{{ t.work.intro }}</p>
      </div>

      <div class="project-list">
        <article
            v-for="(project, index) in projects"
            :key="project.title"
            class="project-row"
            :class="{ open: activeProject === index }"
        >
          <button class="project-trigger" type="button" @click="activeProject = index">
            <span>{{ index + 1 }}.</span>
            <span>{{ project.title }}</span>
          </button>

          <div v-show="activeProject === index" class="project-detail">
            <div class="project-text">
              <h3>{{ project.subtitle }}</h3>
              <ul>
                <li v-for="detail in project.details" :key="detail">{{ detail }}</li>
              </ul>
              <div class="tag-row">
                <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
              </div>
              <div v-if="project.links.length" class="project-links">
                <a
                    v-for="link in project.links"
                    :key="link.url"
                    class="button button-light"
                    :href="link.url"
                    target="_blank"
                    rel="noreferrer"
                >
                  {{ link.label }}
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <img class="project-image" :src="project.image" :alt="project.title">
          </div>
        </article>
      </div>
    </section>

    <section id="skills" class="skills-section panel-light section-space" aria-labelledby="skills-title">
      <div class="section-kicker compact">
        <h2 id="skills-title" class="pixel section-title">{{ t.skills.heading }}</h2>
        <p>{{ t.skills.intro }}</p>
      </div>

      <div class="skill-grid">
        <article v-for="group in t.skills.groups" :key="group.title" class="skill-card">
          <h3 class="pixel">{{ group.title }}</h3>
          <p>{{ group.text }}</p>
          <div class="tag-row">
            <span v-for="tag in group.tags" :key="tag">{{ tag }}</span>
          </div>
        </article>
      </div>
    </section>

    <section id="faq" class="faq-section section-space" aria-labelledby="faq-title">
      <h2 id="faq-title" class="pixel section-title">{{ t.faq.heading }}</h2>

      <div class="faq-list">
        <article v-for="(item, index) in t.faq.items" :key="item.q" class="faq-item">
          <button type="button" @click="openFaq = openFaq === index ? -1 : index">
            <span>{{ item.q }}</span>
            <span aria-hidden="true">{{ openFaq === index ? '−' : '+' }}</span>
          </button>
          <p v-show="openFaq === index">{{ item.a }}</p>
        </article>
      </div>
    </section>

    <footer id="contact" class="footer panel-dark" aria-labelledby="contact-title">
      <h2 id="contact-title" class="pixel section-title">{{ t.contact.heading }}</h2>
      <p>{{ t.contact.text }}</p>

      <div class="footer-links">
        <a :href="`mailto:${contactEmail}`">{{ t.contact.email }}</a>
        <a :href="githubUrl" target="_blank" rel="noreferrer">{{ t.contact.github }}</a>
        <a :href="linkedinUrl" target="_blank" rel="noreferrer">{{ t.contact.linkedin }}</a>
      </div>
    </footer>
  </main>
</template>
