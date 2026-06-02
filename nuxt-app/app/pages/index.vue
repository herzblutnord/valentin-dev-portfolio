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
      role: 'SOFTWARE DEVELOPER',
      based: 'Based in Germany',
      status: 'Graduating soon. Open to full-time roles.',
      resume: 'Download CV',
      scroll: 'Keep scrolling'
    },
    about: {
      heading: 'VALENTIN SCHECKLEIN',
      subheading: 'SOFTWARE DEVELOPER WITH PRACTICAL FOCUS',
      location: 'Based near Karlsruhe, Germany',
      storyTitle: 'Profile',
      paragraphs: [
        'I am finishing my computer science degree at DHBW Karlsruhe and focus on practical software work: backend services, mobile and web apps, databases, authentication, deployment, and Linux-based infrastructure.',
        'My strongest areas are Java and Spring Boot, Flutter and Dart, PostgreSQL, REST APIs, nginx, systemd, Git workflows, and secure VPS operations. I like systems that are understandable, maintainable, and useful in daily work.'
      ],
      stats: [
        { value: 'DHBW', label: 'Computer Science' },
        { value: 'Java', label: 'Backend focus' },
        { value: 'Linux', label: 'Server operations' },
        { value: 'Flutter', label: 'Apps and PWA' }
      ]
    },
    work: {
      heading: 'FEATURED WORKS',
      intro: 'Selected work that shows software development, infrastructure, deployment, and practical problem solving.',
      live: 'View details',
      repo: 'Repository'
    },
    skills: {
      heading: 'BEST SKILLS',
      intro: 'A compact overview of the technologies I can explain, use, and show in projects or infrastructure work.',
      groups: [
        {
          title: 'Backend',
          text: 'Java services, REST APIs, authentication, database migrations, tests, and maintainable project structure.',
          tags: ['Java', 'Spring Boot', 'REST APIs', 'JWT', 'Flyway', 'Maven', 'JUnit', 'PostgreSQL']
        },
        {
          title: 'Frontend',
          text: 'Flutter apps for Android and web, PWA workflows, UI implementation, and API integration.',
          tags: ['Flutter', 'Dart', 'Android', 'PWA', 'Vue', 'Nuxt', 'HTML', 'CSS']
        },
        {
          title: 'Infrastructure',
          text: 'Linux servers, reverse proxies, TLS, secure remote access, service management, and troubleshooting.',
          tags: ['Linux', 'Ubuntu', 'Arch', 'nginx', 'systemd', 'Certbot', 'WireGuard', 'Fail2Ban', 'SSH']
        },
        {
          title: 'Tooling',
          text: 'Daily development workflows, version control, CI/CD, IDEs, documentation, and task automation.',
          tags: ['Git', 'GitHub', 'GitHub Actions', 'GitLab CI', 'IntelliJ IDEA', 'WebStorm', 'PowerShell', 'Codex']
        }
      ]
    },
    faq: {
      heading: 'FREQUENTLY ASKED QUESTIONS',
      items: [
        {
          q: 'What kind of role are you looking for?',
          a: 'A full-time software role after graduation. Backend, full-stack, Flutter, platform-adjacent, and infrastructure-leaning roles are all interesting to me.'
        },
        {
          q: 'What makes your profile practical?',
          a: 'I combine university work with real systems: Java backend development, Flutter apps, PostgreSQL, Git workflows, and a VPS running multiple public services.'
        },
        {
          q: 'Do you have server and deployment experience?',
          a: 'Yes. I run Linux services with nginx, TLS certificates, systemd, SSH, Fail2Ban, WireGuard, backups, and regular maintenance on an Ubuntu VPS.'
        },
        {
          q: 'Can I see code examples?',
          a: 'My GitHub contains selected Java, Flutter, and infrastructure-related work. I am currently cleaning up and documenting the most relevant repositories for applications.'
        },
        {
          q: 'Which languages do you speak?',
          a: 'German, English, and Russian fluently. I also speak some Japanese.'
        }
      ]
    },
    contact: {
      heading: 'LET US TALK',
      text: 'I am preparing for graduation and looking for a full-time role. Send me a message if my profile fits your team.',
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
      eyebrow: 'Wirtschaftsinformatik-Student an der DHBW Karlsruhe',
      name: 'VALENTIN SCHECKLEIN',
      role: 'SOFTWARE DEVELOPER',
      based: 'Aus Deutschland',
      status: 'Bald mit dem Studium fertig. Offen für Vollzeitstellen.',
      resume: 'Lebenslauf laden',
      scroll: 'Weiter scrollen'
    },
    about: {
      heading: 'VALENTIN SCHECKLEIN',
      subheading: 'SOFTWAREENTWICKLER MIT PRAXISFOKUS',
      location: 'Aus der Nähe von Karlsruhe',
      storyTitle: 'Profil',
      paragraphs: [
        'Ich schließe bald mein Studium der Wirtschaftsinformatik an der DHBW Karlsruhe ab. Mein Fokus liegt auf praktischer Softwareentwicklung: Backend-Services, mobile und Web-Apps, Datenbanken, Authentifizierung, Deployment und Linux-basierte Infrastruktur.',
        'Meine stärksten Bereiche sind Java und Spring Boot, Flutter und Dart, PostgreSQL, REST APIs, nginx, systemd, Git-Workflows und der sichere Betrieb eines VPS. Ich mag Systeme, die verständlich, wartbar und im Alltag nützlich sind.'
      ],
      stats: [
        { value: 'DHBW', label: 'Wirtschaftsinformatik' },
        { value: 'Java', label: 'Backend-Fokus' },
        { value: 'Linux', label: 'Serverbetrieb' },
        { value: 'Flutter', label: 'Apps und PWA' }
      ]
    },
    work: {
      heading: 'AUSGEWÄHLTE PROJEKTE',
      intro: 'Ausgewählte Arbeiten mit Fokus auf Softwareentwicklung, Infrastruktur, Deployment und praktische Problemlösung.',
      live: 'Details ansehen',
      repo: 'Repository'
    },
    skills: {
      heading: 'BESTE SKILLS',
      intro: 'Ein kompakter Überblick über Technologien, die ich in Projekten oder im Infrastruktur-Betrieb nutze und erklären kann.',
      groups: [
        {
          title: 'Backend',
          text: 'Java-Services, REST APIs, Authentifizierung, Datenbankmigrationen, Tests und wartbare Projektstruktur.',
          tags: ['Java', 'Spring Boot', 'REST APIs', 'JWT', 'Flyway', 'Maven', 'JUnit', 'PostgreSQL']
        },
        {
          title: 'Frontend',
          text: 'Flutter-Apps für Android und Web, PWA-Workflows, UI-Umsetzung und API-Anbindung.',
          tags: ['Flutter', 'Dart', 'Android', 'PWA', 'Vue', 'Nuxt', 'HTML', 'CSS']
        },
        {
          title: 'Infrastruktur',
          text: 'Linux-Server, Reverse Proxies, TLS, sicherer Fernzugriff, Serviceverwaltung und Troubleshooting.',
          tags: ['Linux', 'Ubuntu', 'Arch', 'nginx', 'systemd', 'Certbot', 'WireGuard', 'Fail2Ban', 'SSH']
        },
        {
          title: 'Tooling',
          text: 'Tägliche Entwicklungsabläufe, Versionsverwaltung, CI/CD, IDEs, Dokumentation und Aufgabenautomatisierung.',
          tags: ['Git', 'GitHub', 'GitHub Actions', 'GitLab CI', 'IntelliJ IDEA', 'WebStorm', 'PowerShell', 'Codex']
        }
      ]
    },
    faq: {
      heading: 'HÄUFIGE FRAGEN',
      items: [
        {
          q: 'Welche Stelle suchst du?',
          a: 'Eine Vollzeitstelle nach dem Studium. Backend, Full-Stack, Flutter, platform-nahe Entwicklung und infra-nahe Rollen passen gut zu meinem Profil.'
        },
        {
          q: 'Was macht dein Profil praxisnah?',
          a: 'Ich verbinde Studium mit echten Systemen: Java-Backendentwicklung, Flutter-Apps, PostgreSQL, Git-Workflows und ein VPS mit mehreren öffentlich erreichbaren Diensten.'
        },
        {
          q: 'Hast du Erfahrung mit Servern und Deployment?',
          a: 'Ja. Ich betreibe Linux-Dienste mit nginx, TLS-Zertifikaten, systemd, SSH, Fail2Ban, WireGuard, Backups und regelmäßiger Wartung auf einem Ubuntu-VPS.'
        },
        {
          q: 'Kann man Codebeispiele sehen?',
          a: 'Auf meinem GitHub gibt es ausgewählte Java-, Flutter- und Infrastrukturprojekte. Ich bereite gerade die wichtigsten Repositories für Bewerbungen auf.'
        },
        {
          q: 'Welche Sprachen sprichst du?',
          a: 'Deutsch, Englisch und Russisch fließend. Dazu etwas Japanisch.'
        }
      ]
    },
    contact: {
      heading: 'LASS UNS SPRECHEN',
      text: 'Ich bereite mich auf meinen Studienabschluss vor und suche eine Vollzeitstelle. Schreib mir, wenn mein Profil zu deinem Team passt.',
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
            ? 'Custom administration system with Spring Boot backend and Flutter frontend.'
            : 'Eigenes Verwaltungssystem mit Spring-Boot-Backend und Flutter-Frontend.',
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
  },
  {
    title: lang.value === 'en' ? 'Java and Flutter projects' : 'Java- und Flutter-Projekte',
    subtitle:
        lang.value === 'en'
            ? 'Smaller tools, app features, experiments, and university-related work.'
            : 'Kleinere Tools, App-Features, Experimente und studienbezogene Arbeiten.',
    image: '/img/project-github.svg',
    tags: ['Java', 'Flutter', 'Dart', 'Git', 'GitHub', 'Linux'],
    details:
        lang.value === 'en'
            ? ['Readable READMEs and documented setup steps', 'Code cleanup for public application portfolio', 'Practical focus over demo-only code']
            : ['Lesbare READMEs und dokumentierte Setup-Schritte', 'Code-Cleanup für ein öffentliches Bewerbungsportfolio', 'Praktischer Fokus statt reiner Demo-Code'],
    url: githubUrl
  }
])

const t = computed(() => content[lang.value])

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
              : 'Portfolio von Valentin Schecklein, Wirtschaftsinformatik-Student an der DHBW Karlsruhe und Softwareentwickler.'
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

        <a class="button button-dark" href="/files/resume-en.pdf" download>
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

          <a class="button button-outline" href="/files/resume-en.pdf" download>
            {{ t.hero.resume }}
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      <div class="profile-visual" aria-hidden="true">
        <div class="profile-visual-label">
          {{ t.hero.role }}
        </div>
        <img src="/img/smoking4.png" alt="">
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
