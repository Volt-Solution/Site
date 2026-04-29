# volt-site

Site institucional da Volt Solution — plataforma de IoT para monitoramento de utilidades em hotéis.

## Stack

- **Next.js 16.2.2** com output estático (`next build` → `/out`)
- React 19, TypeScript 5, Tailwind CSS v4, Framer Motion
- Sem testes automatizados

## Comandos

```bash
npm run dev        # servidor de desenvolvimento
npm run build      # gera /out (site estático)
npm run start      # serve /out localmente (npx serve)
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
```

## Estrutura

```
src/
  app/                        # App Router (Next.js)
    layout.tsx                # root layout, fontes, metadados globais
    page.tsx                  # home — compõe as seções
    contato/                  # página de contato
    politica-de-privacidade/
    robots.ts / sitemap.ts    # geração automática
  components/
    layout/     Header.tsx Footer.tsx
    sections/   Hero, Services, Cases, Clients, Problems, Solution,
                Differentials, MeasureCare, CTASection
    ui/         FadeIn, ContactForm, CookieBanner
  lib/
    constants.ts   # todas as strings/dados de conteúdo (contato, serviços, cases, clientes)
    icons.ts       # mapeamento de nomes → componentes lucide-react
    utils.ts       # cn() (clsx + tailwind-merge)
public/
  fonts/           # Vogie (woff2), fonte proprietária da marca
  images/          # logo, hero-bg, logos de clientes e cases
```

## Gotchas

- `output: 'export'` + `images: { unoptimized: true }` — `<Image>` do Next sem otimização; `trailingSlash: true` obrigatório.
- Todo conteúdo editável está em `src/lib/constants.ts` — não duplicar strings nos componentes.
- Fontes Vogie são carregadas via `@font-face` em `globals.css`, não via `next/font`.
- Tailwind v4 usa PostCSS plugin (`@tailwindcss/postcss`) — sem `tailwind.config.*`.
- Next.js 16 pode ter APIs distintas do 14/15 — consulte `node_modules/next/dist/docs/` antes de usar APIs novas.
