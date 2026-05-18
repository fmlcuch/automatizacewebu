# automatizacewebu.cz

Statický firemní web v Astro pro GitHub Pages. Projekt obsahuje vícestránkový web, blog přes Astro Content Collections, landing pages služeb a formuláře napojené na Make.com webhook.

## Použitý stack

- Astro (SSG)
- Tailwind CSS
- `@tailwindcss/typography`
- Astro Content Collections
- GitHub Pages

## Instalace

```bash
npm install
```

## Lokální vývoj

```bash
npm run dev
```

Vývojový server poběží standardně na `http://localhost:4321`.

## Produkční build

```bash
npm run build
```

Výstup se vygeneruje do složky `dist/`.

## Kontrola typů a Astro konfigurace

```bash
npm run check
```

## Deploy na GitHub Pages

1. Nahrajte projekt do GitHub repozitáře.
2. V GitHubu otevřete `Settings > Pages`.
3. Jako source nastavte `GitHub Actions`.
4. Push do větve `main` automaticky spustí workflow v `.github/workflows/deploy.yml`.
5. Pokud používáte vlastní doménu, soubor `public/CNAME` už je připravený pro `automatizacewebu.cz`.

## Důležitá konfigurace

### `astro.config.mjs`

- `site` je nastavené na `https://automatizacewebu.cz`
- `base` je nastavené na `/`
- `output` je nastavené na `static`

Pokud budete nasazovat bez vlastní domény na GitHub Pages subpath typu `username.github.io/repozitar`, upravte:

- `site`
- `base`
- `public/CNAME` případně odeberte

## Správa blogu

Články najdete ve složce:

```txt
src/content/blog/
```

Každý článek je Markdown soubor s frontmatterem definovaným v:

```txt
src/content/config.ts
```

Povinná pole:

- `title`
- `description`
- `publishDate`
- `author`
- `image`
- `imageAlt`
- `tags`
- `draft`

Chcete-li skrýt článek ze seznamů a výpisů, nastavte:

```yaml
draft: true
```

## Kde měnit webhook URL

Make webhook placeholder je aktuálně nastaven na:

```txt
https://hook.eu1.make.com/example
```

Najdete ho v těchto souborech:

- `src/pages/kontakt.astro`
- `src/pages/dekujeme.astro`
- `src/components/ServiceOrderForm.astro`

## SEO a technické poznámky

- Globální metadata a JSON-LD jsou v `src/layouts/Layout.astro`
- Sitemap generuje endpoint `src/pages/sitemap.xml.ts`
- `robots.txt` je v `public/robots.txt`
- OG obrázek je v `public/og-image.jpg`
- Navigace, footer a sticky mobile CTA jsou v `src/components/`
- Zásady ochrany osobních údajů jsou na `src/pages/ochrana-osobnich-udaju.astro`

## Obsah formulářů

Formuláře používají:

- HTML validaci
- `required` pole
- honeypot proti spamu
- async odeslání přes `fetch`
- loading, success a error stav
- redirect na `/dekujeme` u kontaktního formuláře

## Doporučený provozní postup

1. Doplnit reálné firemní údaje.
2. Vyměnit Make webhook URL.
3. Ověřit GitHub Pages doménu a DNS.
4. Spustit `npm run build` a `npm run check`.
