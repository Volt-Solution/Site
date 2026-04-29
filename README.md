# Volt Solution — Site Institucional

Site institucional da [Volt Solution](https://voltsolution.com.br), plataforma de IoT para monitoramento de utilidades em hotéis.

## Stack

- **Next.js 16** (App Router, output estático)
- React 19, TypeScript 5
- Tailwind CSS v4, Framer Motion
- Fonte proprietária: Vogie

## Desenvolvimento

```bash
npm install
npm run dev       # http://localhost:3000
```

## Build

```bash
npm run build     # gera site estático em /out
npm run start     # serve /out localmente
```

## Outros comandos

```bash
npm run typecheck  # verificação de tipos
npm run lint       # ESLint
```

## Estrutura

```
src/
  app/                         # App Router
    layout.tsx                 # root layout e metadados
    page.tsx                   # home (compõe as seções)
    contato/
    politica-de-privacidade/
    robots.ts / sitemap.ts
  components/
    layout/   Header, Footer
    sections/ Hero, Services, Cases, Clients, Problems,
              Solution, Differentials, MeasureCare, CTASection
    ui/       FadeIn, ContactForm, CookieBanner
  lib/
    constants.ts   # todo o conteúdo editável (textos, dados, links)
    icons.ts       # mapeamento lucide-react
    utils.ts       # cn()
public/
  fonts/     Vogie (woff2)
  images/    logo, hero, clientes, cases
```

## Observações

- Site 100% estático — sem servidor, sem API routes.
- Todo conteúdo editável está em `src/lib/constants.ts`.
- Fontes carregadas via `@font-face` em `globals.css` (não usa `next/font`).
- Tailwind v4 — sem `tailwind.config.*`, configuração via PostCSS.
