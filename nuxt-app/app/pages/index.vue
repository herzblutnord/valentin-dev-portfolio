<script setup lang="ts">
const lang = ref<'en' | 'de'>('en')
const activeProject = ref(0)
const openFaq = ref(0)

const githubUrl = 'https://github.com/herzblutnord'
const contactEmail = 'v.schecklein@proton.me'

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
      role: 'SOFTWARE AND INFRASTRUCTURE',
      based: 'Based in Germany',
      status: 'Finishing my degree and looking for my first full-time role.',
      resume: 'Download CV',
      scroll: 'Keep scrolling'
    },
    about: {
      heading: "HELLO, I'M VALENTIN.",
      subheading: 'PRACTICAL FOCUS ON SOFTWARE AND INFRASTRUCTURE',
      location: 'Based near Karlsruhe, Germany',
      storyTitle: 'Profile',
      paragraphs: [
        'Wrapping up my computer science degree at DHBW Karlsruhe. My work has covered backend services, mobile and web apps, databases, authentication, deployment, and Linux-based server operations.',
        'On the technical side, I have spent most of my time with Java and Spring Boot, Flutter and Dart, PostgreSQL, REST APIs, nginx, systemd, and running a VPS. I like building things that are easy to maintain and actually useful.'
      ],
      stats: [
        { value: 'DHBW', label: 'Computer Science' },
        { value: 'Java', label: 'Backend focus' },
        { value: 'Linux', label: 'Server operations' },
        { value: 'Flutter', label: 'Apps and PWA' }
      ]
    },
    work: {
      heading: 'FEATURED WORK',
      intro: 'A selection of projects covering backend development, infrastructure, and deployment.',
      live: 'View details',
      repo: 'Repository'
    },
    skills: {
      heading: 'SKILLS',
      intro: 'Technologies I have used in projects, coursework, and my own infrastructure.',
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
          title: 'Tooling',
          text: 'Version control, CI/CD pipelines, IDEs, and general development tooling.',
          tags: ['Git', 'GitHub', 'GitHub Actions', 'GitLab CI', 'IntelliJ IDEA', 'WebStorm', 'PowerShell', 'Codex']
        }
      ]
    },
    faq: {
      heading: 'FREQUENTLY ASKED QUESTIONS',
      items: [
        {
          q: 'What kind of role are you looking for?',
          a: 'A full-time role after graduation. I am open to backend, full-stack, Flutter, platform work, or anything infrastructure-adjacent. If the work is interesting and the team is good, I want to hear about it.'
        },
        {
          q: 'What have you built outside of university?',
          a: 'Alongside university, I have built and maintained real things: a Java and Flutter project, PostgreSQL databases, and a VPS running several public-facing services.'
        },
        {
          q: 'Do you have server and deployment experience?',
          a: 'Yes. I run an Ubuntu VPS with nginx, TLS certificates via Certbot, SSH hardening, Fail2Ban, WireGuard, systemd services, and regular backups.'
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
      text: 'Finishing my degree and looking for my first full-time role. If my profile looks like a fit, get in touch.',
      email: 'Email',
      github: 'GitHub',
      linkedin: 'LinkedIn placeholder'
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
      role: 'SOFTWARE UND INFRASTRUKTUR',
      based: 'Aus Deutschland',
      status: 'Kurz vor dem Abschluss, auf der Suche nach meiner ersten Vollzeitstelle.',
      resume: 'Lebenslauf laden',
      scroll: 'Weiter scrollen'
    },
    about: {
      heading: 'HALLO, ICH BIN VALENTIN.',
      subheading: 'PRAXISFOKUS AUF SOFTWARE UND INFRASTRUKTUR',
      location: 'Aus der Nähe von Karlsruhe',
      storyTitle: 'Profil',
      paragraphs: [
        'Ich schließe mein Informatikstudium an der DHBW Karlsruhe ab. Praktisch habe ich vor allem an Backend-Services, mobilen und Web-Apps, Datenbanken, Authentifizierung, Deployment und Linux-basierter Serverinfrastruktur gearbeitet.',
        'Technisch bin ich am meisten zu Hause in Java und Spring Boot, Flutter und Dart, PostgreSQL, REST APIs, nginx, systemd und dem Betrieb eines VPS. Systeme, die wartbar und im Alltag nützlich sind, gefallen mir.'
      ],
      stats: [
        { value: 'DHBW', label: 'Informatik' },
        { value: 'Java', label: 'Backend-Fokus' },
        { value: 'Linux', label: 'Serverbetrieb' },
        { value: 'Flutter', label: 'Apps und PWA' }
      ]
    },
    work: {
      heading: 'AUSGEWÄHLTE PROJEKTE',
      intro: 'Eine Auswahl von Projekten aus Backend-Entwicklung, Infrastruktur und Deployment.',
      live: 'Details ansehen',
      repo: 'Repository'
    },
    skills: {
      heading: 'SKILLS',
      intro: 'Technologien, die ich in Projekten, im Studium und in eigener Infrastruktur genutzt habe.',
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
          title: 'Tooling',
          text: 'Versionsverwaltung, CI/CD-Pipelines, IDEs und allgemeines Entwicklungs-Tooling.',
          tags: ['Git', 'GitHub', 'GitHub Actions', 'GitLab CI', 'IntelliJ IDEA', 'WebStorm', 'PowerShell', 'Codex']
        }
      ]
    },
    faq: {
      heading: 'HÄUFIGE FRAGEN',
      items: [
        {
          q: 'Welche Stelle suchst du?',
          a: 'Eine Vollzeitstelle nach dem Abschluss. Ich bin offen für Backend-, Full-Stack-, Flutter-, plattformnahe oder infrastrukturnahe Tätigkeiten. Wenn die Arbeit interessant ist und das Team passt, bin ich dabei.'
        },
        {
          q: 'Was hast du außerhalb der Uni gebaut?',
          a: 'Neben dem Studium habe ich echte Sachen gebaut und betrieben: ein Java-und-Flutter-Projekt, PostgreSQL-Datenbanken und einen VPS mit mehreren öffentlich erreichbaren Diensten.'
        },
        {
          q: 'Hast du Erfahrung mit Servern und Deployment?',
          a: 'Ja. Ich betreibe einen Ubuntu-VPS mit nginx, TLS-Zertifikaten via Certbot, SSH-Härtung, Fail2Ban, WireGuard, systemd-Services und regelmäßigen Backups.'
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
      text: 'Ich schließe mein Studium ab und suche meine erste Vollzeitstelle. Wenn mein Profil passt, meld dich.',
      email: 'E-Mail',
      github: 'GitHub',
      linkedin: 'LinkedIn Platzhalter'
    }
  }
}

const projects = computed(() => [
  {
    title: lang.value === 'en' ? 'Verhåårm administration system' : 'Verhåårm Verwaltungssystem',
    subtitle:
        lang.value === 'en'
            ? 'An administration system with a Spring Boot backend and a Flutter frontend.'
            : 'Verwaltungssystem mit Spring-Boot-Backend und Flutter-Frontend.',
    image: '/img/project-verhaarm.svg',
    tags: ['Java', 'Spring Boot', 'Flutter', 'PostgreSQL', 'JWT', 'Flyway'],
    details:
        lang.value === 'en'
            ? ['REST API and database-backed workflows', 'Flutter app for Android and web', 'Authentication, roles, deployments, and maintenance']
            : ['REST API und datenbankgestützte Workflows', 'Flutter-App für Android und Web', 'Authentifizierung, Rollen, Deployments und Wartung'],
    url: githubUrl
  },
  {
    title: lang.value === 'en' ? 'Self-hosted VPS infrastructure' : 'Self-hosted VPS-Infrastruktur',
    subtitle:
        lang.value === 'en'
            ? 'Linux-based services for communication, collaboration, streaming, and web hosting.'
            : 'Linux-basierte Dienste für Kommunikation, Zusammenarbeit, Streaming und Webhosting.',
    image: '/img/project-vps.svg',
    tags: ['Ubuntu', 'nginx', 'systemd', 'WireGuard', 'Fail2Ban', 'Certbot'],
    details:
        lang.value === 'en'
            ? ['Reverse proxy and TLS setup', 'Secure SSH access and firewall rules', 'Service operations, updates, and troubleshooting']
            : ['Reverse Proxy und TLS-Setup', 'Sicherer SSH-Zugriff und Firewall-Regeln', 'Servicebetrieb, Updates und Troubleshooting'],
    url: githubUrl
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

useHead(() => ({
  htmlAttrs: {
    lang: lang.value
  },
  title:
      lang.value === 'en'
          ? 'Valentin Schecklein - Software Developer'
          : 'Valentin Schecklein - Softwareentwickler',
  meta: [
    {
      name: 'description',
      content:
          lang.value === 'en'
              ? 'Portfolio of Valentin Schecklein, computer science student at DHBW Karlsruhe and software developer.'
              : 'Portfolio von Valentin Schecklein, Informatik-Student an der DHBW Karlsruhe und Softwareentwickler.'
    }
  ]
}))
</script>

<template>
  <main class="site-shell">
    <header class="topbar" aria-label="Main navigation">
      <a class="brand" href="#top" aria-label="Go to top">Valentin Schecklein</a>

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
          <span aria-hidden="true">🇬🇧</span>
          EN
        </button>
        <button :class="{ active: lang === 'de' }" type="button" @click="setLanguage('de')">
          <span aria-hidden="true">🇩🇪</span>
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
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
        <a :href="`mailto:${contactEmail}`">Email</a>
      </div>

      <div class="hero-meta">
        <p class="hero-location">{{ t.hero.based }}</p>
        <p class="hero-status">{{ t.hero.status }}</p>
      </div>

      <img
          class="hero-portrait"
          src="/img/smoking4.png"
          alt="Portrait of Valentin Schecklein."
      >

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
        <img src="/img/profilbild2.png" alt="">
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
              <a class="button button-light" :href="project.url" target="_blank" rel="noreferrer">
                {{ t.work.repo }}
                <span aria-hidden="true">↗</span>
              </a>
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
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">{{ t.contact.linkedin }}</a>
      </div>
    </footer>
  </main>
</template>
