<template>
  <main class="site-shell error-page">
    <header class="topbar">
      <a class="brand" href="/">Valentin Schecklein</a>
      <nav class="nav-links" aria-label="Main navigation">
        <a href="/">Home</a>
        <span>/</span>
        <a href="/#work">Works</a>
        <span>/</span>
        <a href="/#contact">Contact</a>
      </nav>
    </header>

    <section class="error-card panel-light">
      <p class="pixel error-code">404</p>
      <h1 class="pixel">Page Not Found</h1>
      <p>The page you are looking for might have been moved, renamed, or is temporarily unavailable.</p>
      <a class="button button-dark" href="/">← Go back to Homepage</a>
    </section>
  </main>
</template>

<style scoped>
.error-page {
  min-height: 100vh;
}

.error-card {
  display: grid;
  min-height: 70vh;
  place-items: center;
  padding: clamp(48px, 8vw, 120px);
  text-align: center;
  border-radius: var(--radius);
}

.error-code {
  margin: 0;
  font-size: clamp(7rem, 18vw, 18rem);
}

.error-card h1 {
  margin: 0;
  font-size: clamp(2.2rem, 5vw, 5.8rem);
}

.error-card p:not(.error-code) {
  max-width: 520px;
  margin: 18px 0 32px;
  color: var(--muted);
  font-weight: 700;
}
</style>
