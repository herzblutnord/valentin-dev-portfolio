# valentin.dev portfolio

A Nuxt portfolio website for Valentin Schecklein.

The site is bilingual with English as the default language and a small EN/DE language switch in the header. It is built as a static Nuxt site and can be hosted directly through nginx on your existing VPS.

## Folder layout

```text
valentin-dev-portfolio/
├── nuxt-app/                  # Nuxt project opened in WebStorm
├── deploy/                    # nginx configs for the VPS
└── .github/workflows/         # manual GitHub Actions deployment
```

## Local development

```bash
cd nuxt-app
npm install
npm run dev
```

Open the local URL printed by Nuxt.


## Nuxt 4 notes

This project uses the Nuxt 4 app directory structure:

```text
nuxt-app/app/pages/index.vue
nuxt-app/app/assets/css/main.css
nuxt-app/app/app.vue
```

If you already ran `npm install` with the earlier Nuxt 3 package file, reset the local install before installing again:

```bash
cd nuxt-app
rm -rf node_modules package-lock.json .nuxt .output
npm install
```

The old `unplugin-vue-router` warning came from the older Nuxt dependency tree. The updated package uses Nuxt 4.

## Static build

```bash
cd nuxt-app
npm run generate
```

The generated static site is written to:

```text
nuxt-app/.output/public
```

## Replace these placeholders

### Portrait

Replace this file with your own transparent portrait:

```text
nuxt-app/public/img/portrait-placeholder.svg
```

Recommended final name if you want to keep the placeholder too:

```text
nuxt-app/public/img/portrait.png
```

Then change both image references in `nuxt-app/app/pages/index.vue` from:

```text
/img/portrait-placeholder.svg
```

to:

```text
/img/portrait.png
```

Use a transparent PNG or WebP cutout. A black and white portrait works best with the current design.

### CV PDFs

Put your CV files here:

```text
nuxt-app/public/files/resume-en.pdf
nuxt-app/public/files/lebenslauf-de.pdf
```

The current button points to `resume-en.pdf`. The button now uses `resume-en.pdf` in English and `lebenslauf-de.pdf` in German.

### Contact data

In `nuxt-app/app/pages/index.vue`, replace:

```ts
const contactEmail = 'hello@valentin.dev'
```

Also replace the LinkedIn placeholder link when you have your final profile URL.

## VPS setup for valentin.dev

### 1. DNS

Set DNS records for the domain:

```text
A     valentin.dev       -> your VPS IPv4
AAAA  valentin.dev       -> your VPS IPv6, optional
CNAME www                -> valentin.dev, optional
```

Use `www` only if you want `www.valentin.dev` to work too.

### 2. Create the web root

Run on the VPS:

```bash
sudo mkdir -p /var/www/valentin.dev/html
sudo chown -R herz:www-data /var/www/valentin.dev
sudo chmod -R 775 /var/www/valentin.dev
```

Replace `herz` with the deploy user if needed.

### 3. First nginx config before certificates exist

Copy the HTTP-only config:

```bash
sudo cp deploy/nginx-valentin.dev.http-only.conf /etc/nginx/sites-available/valentin.dev
sudo ln -s /etc/nginx/sites-available/valentin.dev /etc/nginx/sites-enabled/valentin.dev
sudo nginx -t
sudo systemctl reload nginx
```

### 4. Create the certificate

For root domain plus www:

```bash
sudo certbot --nginx -d valentin.dev -d www.valentin.dev
```

For root domain only:

```bash
sudo certbot --nginx -d valentin.dev
```

### 5. Final nginx config

After Certbot created the certificates, use the final HTTPS config:

```bash
sudo cp deploy/nginx-valentin.dev.conf /etc/nginx/sites-available/valentin.dev
sudo nginx -t
sudo systemctl reload nginx
```

## GitHub Actions deployment

The included workflow is manual and deploys the generated static site through rsync.

Create these GitHub repository secrets:

```text
SSH_PRIVATE_KEY
VPS_HOST
VPS_PORT
VPS_USER
```

Then run:

```text
Actions -> Deploy valentin.dev portfolio -> Run workflow
```

The workflow deploys:

```text
nuxt-app/.output/public/
```

to:

```text
/var/www/valentin.dev/html/
```

## Content structure

Main content is in:

```text
nuxt-app/app/pages/index.vue
```

Most styling is in:

```text
nuxt-app/app/assets/css/main.css
```

Project preview placeholders are in:

```text
nuxt-app/public/img/
```

## Notes

- English is the default language.
- The selected language is stored in local storage.
- The page uses a static build, so no Node service is required on the VPS.
- The design uses system fonts and CSS only. No external font provider is loaded.
