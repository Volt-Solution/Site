# Especificações Técnicas — Novo Site Volt Solution

> Documento de referência para implementação. Cada seção, componente, comportamento e detalhe técnico estão descritos aqui. Leia antes de começar.

---

## ÍNDICE

1. Stack Tecnológica e Setup
2. Design System (cores, tipografia, espaçamento)
3. Estrutura de Arquivos
4. Etapa 1 — Inicialização do Projeto
5. Etapa 2 — Design System e Globals
6. Etapa 3 — Layout Base (Header + Footer)
7. Etapa 4 — Componentes da Homepage
8. Etapa 5 — Página de Contato
9. Etapa 6 — Responsividade
10. Etapa 7 — Animações com Framer Motion
11. Etapa 8 — SEO e Metadata
12. Etapa 9 — Build e Deploy
13. Checklist de Verificação

---

## 1. STACK TECNOLÓGICA E SETUP

### Dependências Principais

| Pacote | Versão | Motivo |
|---|---|---|
| `next` | 15.x | Framework — App Router, SSG, otimização de imagens |
| `react` | 19.x | Biblioteca UI |
| `react-dom` | 19.x | Renderização |
| `typescript` | 5.x | Tipagem estática |
| `tailwindcss` | 4.x | Utility-first CSS |
| `framer-motion` | 11.x | Animações declarativas |
| `@vercel/analytics` | — | NÃO USAR (sem Vercel) |

### Dependências de Desenvolvimento

| Pacote | Motivo |
|---|---|
| `@types/node` | Tipos Node.js |
| `@types/react` | Tipos React |
| `@types/react-dom` | Tipos React DOM |
| `eslint` | Linting |
| `eslint-config-next` | Regras Next.js |

### Comando de Inicialização

```bash
npx create-next-app@latest . \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --no-import-alias
```

Em seguida:
```bash
npm install framer-motion
```

### Configuração Node

Mínimo Node 18.17.0 (compatível com Next.js 15).

---

## 2. DESIGN SYSTEM

### 2.1 Paleta de Cores

Definidas como variáveis CSS em `globals.css` e como tokens Tailwind em `tailwind.config.ts`.

```css
/* globals.css */
:root {
  --color-navy: #030342;
  --color-navy-light: #0A0A5C;
  --color-blue: #0081E6;
  --color-blue-hover: #006BBE;
  --color-stone: #898989;
  --color-white: #FFFFFF;
  --color-off-white: #F7F7F9;
  --color-border: #E5E5E7;
}
```

```typescript
// tailwind.config.ts
const config = {
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#030342',
          light: '#0A0A5C',
        },
        blue: {
          brand: '#0081E6',
          hover: '#006BBE',
        },
        stone: '#898989',
        'off-white': '#F7F7F9',
      },
    },
  },
}
```

### 2.2 Tipografia

**Fontes:** `Outfit` (headings) e `Inter` (body). Carregadas via `next/font/google` no `layout.tsx`.

```typescript
// src/app/layout.tsx
import { Inter, Outfit } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  weight: ['300', '400', '600', '700'],
})
```

**Escala tipográfica no Tailwind:**

```css
/* globals.css — custom classes */
.text-display {
  font-family: var(--font-outfit);
  font-size: clamp(2.25rem, 5vw, 4rem);    /* 36px → 64px */
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.text-h2 {
  font-family: var(--font-outfit);
  font-size: clamp(1.75rem, 3vw, 2.75rem); /* 28px → 44px */
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.01em;
}

.text-h3 {
  font-family: var(--font-outfit);
  font-size: clamp(1.1rem, 2vw, 1.5rem);   /* 18px → 24px */
  font-weight: 600;
  line-height: 1.3;
}

.text-body-lg {
  font-family: var(--font-inter);
  font-size: 1.125rem;                      /* 18px */
  line-height: 1.7;
}

.text-body {
  font-family: var(--font-inter);
  font-size: 1rem;                          /* 16px */
  line-height: 1.6;
}

.text-caption {
  font-family: var(--font-inter);
  font-size: 0.875rem;                      /* 14px */
  line-height: 1.5;
  color: var(--color-stone);
}
```

### 2.3 Espaçamento e Layout

**Container máximo:** 1200px, padding horizontal 24px (mobile) / 48px (tablet) / 80px (desktop).

```css
.container-site {
  width: 100%;
  max-width: 1200px;
  margin-inline: auto;
  padding-inline: clamp(1.5rem, 5vw, 5rem);
}
```

**Espaçamento de seções:**
- `section-padding`: `padding-block: clamp(4rem, 8vw, 7rem)` — espaçamento generoso, respira

**Gap padrão para grids:** 32px (2rem) desktop / 24px mobile.

### 2.4 Bordas e Sombras

```css
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-xl: 24px;

--shadow-card: 0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.06);
--shadow-card-hover: 0 4px 12px rgba(0,0,0,0.08), 0 12px 32px rgba(0,0,0,0.10);
```

### 2.5 Breakpoints

```typescript
// Tailwind padrão — usar consistentemente
// sm:  640px
// md:  768px
// lg:  1024px
// xl:  1280px
```

Regra: desenvolver mobile-first. Estilos base = mobile. Prefixos `md:` e `lg:` para expandir.

---

## 3. ESTRUTURA DE ARQUIVOS

```
/
├── public/
│   ├── images/
│   │   ├── logo.svg              (versão escura — para fundo branco)
│   │   ├── logo-white.svg        (versão branca — para fundo navy)
│   │   ├── hero-bg.jpg           (imagem de resort — fornecida pelo cliente)
│   │   ├── clients/
│   │   │   ├── marriott.svg
│   │   │   ├── renaissance.svg
│   │   │   ├── salinas.svg
│   │   │   ├── japaratinga.svg
│   │   │   └── vila-dos-corais.svg
│   │   └── cases/
│   │       ├── case-1.jpg
│   │       ├── case-2.jpg
│   │       └── case-3.jpg
│   ├── favicon.ico
│   ├── favicon-16.png
│   ├── favicon-32.png
│   └── og-image.jpg              (1200x630px para Open Graph)
├── src/
│   ├── app/
│   │   ├── layout.tsx            (layout raiz)
│   │   ├── page.tsx              (homepage — compõe as seções)
│   │   ├── contato/
│   │   │   └── page.tsx          (página de contato)
│   │   └── globals.css           (Tailwind + variáveis + classes utilitárias)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx        (navbar fixa com scroll behavior)
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Problems.tsx
│   │   │   ├── Solution.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Differentials.tsx
│   │   │   ├── Cases.tsx
│   │   │   ├── Clients.tsx
│   │   │   └── CTASection.tsx
│   │   └── ui/
│   │       ├── Button.tsx        (componente reutilizável)
│   │       ├── SectionHeader.tsx (título + subtítulo de seção)
│   │       ├── FadeIn.tsx        (wrapper de animação)
│   │       └── ContactForm.tsx
│   └── lib/
│       ├── constants.ts          (dados: serviços, clientes, cases, nav links)
│       └── utils.ts              (funções utilitárias — cn(), formatPhone())
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
└── .eslintrc.json
```

---

## 4. ETAPA 1 — INICIALIZAÇÃO DO PROJETO

### 4.1 Passos

```bash
# 1. Inicializar Next.js
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --no-import-alias

# 2. Instalar dependências adicionais
npm install framer-motion

# 3. Criar estrutura de pastas
mkdir -p public/images/clients public/images/cases
mkdir -p src/components/layout src/components/sections src/components/ui
mkdir -p src/lib
mkdir -p src/app/contato
```

### 4.2 `next.config.ts`

```typescript
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',          // Gera site estático (pasta /out)
  trailingSlash: true,       // Compatibilidade com servidores Apache/Nginx
  images: {
    unoptimized: true,       // Necessário para export estático
  },
}

export default nextConfig
```

**Nota:** `output: 'export'` gera HTML/CSS/JS puro na pasta `/out` após `npm run build`. Funciona em qualquer servidor sem Node.js.

### 4.3 `src/lib/utils.ts`

```typescript
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

*Nota: instalar `clsx` e `tailwind-merge` com `npm install clsx tailwind-merge`*

### 4.4 `src/lib/constants.ts`

```typescript
export const NAV_LINKS = [
  { label: 'Soluções', href: '/#solucoes' },
  { label: 'Cases', href: '/#cases' },
  { label: 'Sobre', href: '/#sobre' },
  { label: 'Contato', href: '/contato' },
]

export const SERVICES = [
  {
    id: 'reservatorio',
    icon: 'droplet',
    title: 'Nível de Reservatório',
    description: 'Alertas antes que o abastecimento seja comprometido.',
  },
  {
    id: 'energia',
    icon: 'zap',
    title: 'Consumo de Energia',
    description: 'Identificação de picos e análise de eficiência energética.',
  },
  {
    id: 'temperatura',
    icon: 'thermometer',
    title: 'Temperatura e Umidade',
    description: 'Controle de ambientes críticos e áreas de hóspedes.',
  },
  {
    id: 'ar',
    icon: 'wind',
    title: 'Qualidade do Ar (CO₂)',
    description: 'Monitoramento para ambientes fechados e salas de eventos.',
  },
  {
    id: 'agua',
    icon: 'waves',
    title: 'Consumo de Água',
    description: 'Detecção de vazamentos e relatórios de uso por setor.',
  },
  {
    id: 'pressao',
    icon: 'gauge',
    title: 'Pressão Hidráulica',
    description: 'Integridade da rede hídrica e sistema de combate a incêndio.',
  },
  {
    id: 'iluminacao',
    icon: 'lightbulb',
    title: 'Iluminação Inteligente',
    description: 'Controle e eficiência energética nas áreas comuns.',
  },
  {
    id: 'automacao',
    icon: 'cpu',
    title: 'Automação',
    description: 'Ações automáticas configuradas por parâmetros operacionais.',
  },
]

export const CLIENTS = [
  { name: 'Marriott International', logo: '/images/clients/marriott.svg' },
  { name: 'Renaissance', logo: '/images/clients/renaissance.svg' },
  { name: 'Salinas Maragogi', logo: '/images/clients/salinas.svg' },
  { name: 'Japaratinga Lounge Resort', logo: '/images/clients/japaratinga.svg' },
  { name: 'Vila dos Corais', logo: '/images/clients/vila-dos-corais.svg' },
]

export const CASES = [
  {
    id: 'case-1',
    client: 'Resort em Maragogi, AL',         // substituir pelo nome real
    logo: '/images/cases/case-1.jpg',
    problem: 'Consumo de água 35% acima da média do setor sem identificação da causa.',
    solution: 'Instalação de medidores em 12 pontos com alertas automáticos.',
    result: 'Redução de 28% no consumo nos 60 dias seguintes à instalação.',
    metric: '−28%',
    metricLabel: 'consumo de água',
  },
  // Adicionar cases reais aqui
]

export const DIFFERENTIALS = [
  {
    icon: 'settings-2',
    title: 'Solução Personalizada',
    description: 'Cada instalação é projetada para a estrutura do seu hotel. Não vendemos produto de prateleira.',
  },
  {
    icon: 'shield-check',
    title: 'Hardware Nacional Certificado',
    description: 'Equipamentos fabricados no Brasil, certificados pela ANATEL. Suporte local, reposição rápida.',
  },
  {
    icon: 'plug-2',
    title: 'API com Integrações',
    description: 'API própria que conecta com sistemas de gestão, Telegram, Slack e ferramentas de BI.',
  },
  {
    icon: 'badge-check',
    title: 'Certificação ISO 9001',
    description: 'Processos auditados e certificados. Qualidade garantida do projeto ao suporte.',
  },
]
```

---

## 5. ETAPA 2 — GLOBALS E LAYOUT RAIZ

### 5.1 `src/app/globals.css`

```css
@import "tailwindcss";

@theme {
  --font-family-sans: var(--font-inter), system-ui, sans-serif;
  --font-family-display: var(--font-outfit), system-ui, sans-serif;

  --color-navy: #030342;
  --color-navy-light: #0A0A5C;
  --color-blue: #0081E6;
  --color-blue-hover: #006BBE;
  --color-stone: #898989;
  --color-off-white: #F7F7F9;
  --color-border: #E5E5E7;

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
}

*, *::before, *::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-family-sans);
  color: var(--color-navy);
  background-color: white;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Utility classes */
.container-site {
  width: 100%;
  max-width: 1200px;
  margin-inline: auto;
  padding-inline: clamp(1.5rem, 5vw, 5rem);
}

.section-padding {
  padding-block: clamp(4rem, 8vw, 7rem);
}
```

### 5.2 `src/app/layout.tsx`

```typescript
import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  weight: ['300', '400', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Volt Solution — Telemetria para Hotéis e Resorts de Luxo',
  description: 'Monitoramento em tempo real de água, energia, temperatura e clima para hotéis e resorts de alto padrão. Solução personalizada com hardware certificado ANATEL.',
  keywords: 'telemetria hotelaria, monitoramento IoT hotel, gestão de utilidades resort, Volt Solution',
  openGraph: {
    title: 'Volt Solution — Telemetria para Hotéis e Resorts de Luxo',
    description: 'Monitoramento em tempo real para hotéis e resorts de alto padrão.',
    url: 'https://voltsolution.com.br',
    siteName: 'Volt Solution',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'pt_BR',
    type: 'website',
  },
  robots: 'index, follow',
  metadataBase: new URL('https://voltsolution.com.br'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

---

## 6. ETAPA 3 — HEADER E FOOTER

### 6.1 `src/components/layout/Header.tsx`

**Comportamento:**
- Posição: `fixed` no topo
- Scroll behavior: fundo transparente quando no topo (sobre o hero) → fundo branco com sombra sutil após scroll de 50px
- Mobile: hamburger menu que abre drawer lateral ou dropdown

**Estrutura visual:**
```
[Logo]                    [Home] [Soluções] [Cases] [Sobre]   [Agendar Demo →]
```

**Detalhes de implementação:**
- Usar `useState` para controlar estado do scroll (`isScrolled`)
- Usar `useEffect` + `window.addEventListener('scroll', ...)` para detectar posição
- Limpar o event listener no cleanup do useEffect
- CTA "Agendar Demo" → botão com fundo `#0081E6`, hover `#006BBE`, texto branco
- Logo: importar SVG — versão escura quando scrolled/mobile, versão branca quando sobre hero
- Transição: `transition-all duration-300` no container do header
- Altura: 80px desktop / 64px mobile
- z-index: 50

**Mobile (< 768px):**
- Hamburguer: 3 linhas, animação para X ao abrir
- Menu: dropdown abaixo do header com fundo branco, links em lista vertical
- Fechar ao clicar em link ou fora do menu

### 6.2 `src/components/layout/Footer.tsx`

**Layout (3 colunas desktop, stack mobile):**

```
Col 1 (logo + tagline):
  [Logo branco]
  "Especialistas em telemetria para hotelaria de luxo."
  [Instagram] [LinkedIn]

Col 2 (navegação):
  Links: Home · Soluções · Cases · Sobre · Contato · Política de Privacidade

Col 3 (contato):
  (81) 98699-6968
  contato@voltsolution.com.br
  [Badge ISO 9001 — clicável]

Rodapé inferior:
  © 2025 Volt Solution. Todos os direitos reservados.
```

**Visual:** Background `#030342`, texto branco/stone.

---

## 7. ETAPA 4 — COMPONENTES DA HOMEPAGE

### 7.1 `src/app/page.tsx`

```typescript
import Hero from '@/components/sections/Hero'
import Problems from '@/components/sections/Problems'
import Solution from '@/components/sections/Solution'
import Services from '@/components/sections/Services'
import Differentials from '@/components/sections/Differentials'
import Cases from '@/components/sections/Cases'
import Clients from '@/components/sections/Clients'
import CTASection from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problems />
      <Solution />
      <Services />
      <Differentials />
      <Cases />
      <Clients />
      <CTASection />
    </>
  )
}
```

---

### 7.2 `src/components/sections/Hero.tsx`

**Layout:** Full viewport height (`100svh`). Background `#030342`.

**Elementos visuais:**
- Imagem de fundo (resort de luxo) com `position: absolute`, `object-fit: cover`, `opacity: 0.18`
- Gradiente overlay: `linear-gradient(to bottom, rgba(3,3,66,0.7) 0%, rgba(3,3,66,0.95) 100%)`
- Conteúdo centralizado na tela com `flex items-center`

**Estrutura de conteúdo:**
```
[Badge pill: "● Especialistas em hotelaria de luxo"]
[H1: "Telemetria de precisão\npara hotéis e resorts\nde alto padrão."]
[Body: descrição em 2 linhas]
[Botões: "Agendar demonstração →" | "Ver como funciona ↓"]
[Separador horizontal sutil]
[Logos de clientes com legenda "Confiado por líderes do setor hoteleiro"]
```

**Badge:** pill com borda `1px solid rgba(0,129,230,0.5)`, texto `#0081E6`, background `rgba(0,129,230,0.08)`, padding `4px 14px`, border-radius 999px.

**H1:** fonte `Outfit`, weight 700, `clamp(2.2rem, 5vw, 4rem)`, cor branca. Quebrar em 3 linhas manualmente com `<br />` ou `white-space: pre-line`.

**Botão primário:**
- Background `#0081E6`, hover `#006BBE`
- Padding `14px 32px`, border-radius `var(--radius-md)`
- Texto branco, weight 600, 16px
- Transição `transition-colors duration-200`

**Botão secundário:**
- Background transparente, borda `1.5px solid rgba(255,255,255,0.4)`
- Hover: borda branca, background `rgba(255,255,255,0.06)`
- Mesmo padding e border-radius

**Logos de clientes:**
- `display: flex`, gap 32px, `flex-wrap: wrap`, `align-items: center`
- Imagens em branco com `filter: brightness(0) invert(1)`, opacidade 60%
- Hover: opacidade 100%, transição suave
- Acima: texto pequeno em stone/cinza "Confiado por líderes do setor hoteleiro"

**Next/Image:**
- Background image: `<Image fill alt="" priority quality={85} />`
- Logos: `<Image width={120} height={40} alt={client.name} />`

---

### 7.3 `src/components/sections/Problems.tsx`

**Layout:** Background `#F7F7F9`, section-padding.

**Header:** `SectionHeader` component com:
- Eyebrow: "O problema que resolvemos" (pequeno, `#0081E6`, uppercase, letra spacing)
- H2: "Sua equipe descobre o problema antes ou depois do hóspede?"
- Alinhamento: center

**Grid:** `grid grid-cols-1 md:grid-cols-2 gap-6`

**Card structure:**
```
[Ícone — 48x48px, circle com background rgba(0,129,230,0.08), ícone #0081E6]
[Título — H3, navy]
[Descrição narrativa — body, stone]
```

**Border:** `border-l-2 border-blue-brand` (borda esquerda colorida) — detalhe de refinamento

**Dados (hardcoded no componente ou importado de constants.ts):**

| Ícone | Título | Descrição |
|---|---|---|
| Droplet | Reservatório crítico | "O nível caiu abaixo do mínimo durante um final de semana de alta ocupação. Ninguém recebeu alerta." |
| Zap | Pico de consumo invisível | "A conta de energia veio 40% acima. Sem telemetria, ninguém sabia qual equipamento era responsável." |
| Thermometer | Temperatura fora do padrão | "O ar-condicionado de uma ala operou 4 horas fora do range ideal. Hóspedes reclamaram antes da manutenção." |
| Droplets | Vazamento silencioso | "Pequeno vazamento custou R$ 18.000 antes de ser detectado na conta mensal de água." |

---

### 7.4 `src/components/sections/Solution.tsx`

**Layout:** Background branco, section-padding.

**Header:** `SectionHeader` com H2: "Da coleta ao insight em tempo real"

**3 passos — Layout desktop:** timeline horizontal com linha conectora.
**3 passos — Layout mobile:** stack vertical com linha conectora à esquerda.

**Estrutura de cada passo:**
```
[Círculo numerado — 48px, background navy, número branco Outfit 700]
[Linha conectora — background #0081E6, espessura 2px]
[Ícone — 32px, cor #0081E6]
[Título — H3, navy]
[Descrição — body, stone]
```

**Linha conectora:** `::after` pseudo-element ou `div` separado com `flex-1 h-0.5 bg-blue-brand` (desktop) / `w-0.5 flex-1 bg-blue-brand` (mobile).

**Passos:**
1. **Coleta** — "Sensores autônomos instalados sem interromper a operação. Hardware 100% brasileiro, certificado pela ANATEL."
2. **Processamento** — "Dados transmitidos para servidores AWS com criptografia, disponibilidade 99,9% e histórico completo."
3. **Visibilidade** — "Dashboard personalizado com alertas por WhatsApp, SMS ou e-mail. Sua equipe age antes que o problema impacte o hóspede."

---

### 7.5 `src/components/sections/Services.tsx`

**id da seção:** `id="solucoes"` — para anchor no menu

**Layout:** Background `#030342`, section-padding. Texto branco.

**Header:** `SectionHeader` variante dark com H2 branco: "Tudo que sua operação precisa monitorar"

**Grid:** `grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6`

**Card:**
```
[Ícone — 40px, cor #0081E6]
[Título — H3, branco]
[Descrição — caption, rgba(255,255,255,0.65)]
```

**Card visual:** background `rgba(255,255,255,0.04)`, borda `1px solid rgba(255,255,255,0.08)`, border-radius `var(--radius-lg)`, padding `24px`.

**Hover:** borda `rgba(0,129,230,0.4)`, background `rgba(0,129,230,0.06)`, transição `transition-all duration-200`.

**Ícones:** usar biblioteca `lucide-react` (`npm install lucide-react`).

---

### 7.6 `src/components/sections/Differentials.tsx`

**Layout:** Background branco, section-padding.

**Header:** H2: "Por que a Volt Solution, e não uma plataforma genérica?"

**Grid:** `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8`

**Card:**
```
[Número decorativo — 01/02/03/04, Outfit 300, 80px, cor rgba(3,3,66,0.06)]
[Ícone — 32px, cor #0081E6]
[Título — H3, navy]
[Descrição — body, stone]
```

**Visual:** sem borda, apenas espaçamento. Número decorativo posicionado `absolute top-0 right-0` dentro do card com `position: relative`.

---

### 7.7 `src/components/sections/Cases.tsx`

**id da seção:** `id="cases"`

**Layout:** Background `#F7F7F9`, section-padding.

**Header:** H2: "Resultados reais em operações reais"

**Cards (máximo 3):** layout em coluna única, cada card é horizontal (foto + texto lado a lado em desktop, stack em mobile).

**Card structure:**
```
[Imagem — 40% width, object-cover, border-radius esquerdo]
[Conteúdo — 60% width, padding 32px]
  [Cliente — caption uppercase, #0081E6]
  [Problema — body, navy, com ícone ⚠️ ou marcador]
  [Solução — body, navy]
  [Resultado — H3 grande, #0081E6 para a métrica, body para o label]
```

**Destaque da métrica:** o número (ex: "−28%") em `Outfit 700`, 48px, `#0081E6`. Abaixo, o label em caption.

**Placeholder note:** adicionar comentário no código `// TODO: Substituir pelos dados reais fornecidos pelo cliente`

---

### 7.8 `src/components/sections/Clients.tsx`

**Layout:** Background branco, padding vertical menor (`py-16`).

**Copy acima dos logos:** "Confiado pelos principais hotéis e resorts do Brasil" — caption centralizado, stone.

**Logos:** `flex flex-wrap justify-center items-center gap-8 md:gap-16`

**Cada logo:** `<Image>` com `filter: grayscale(100%)`, opacidade 45%.
**Hover:** `filter: grayscale(0%)`, opacidade 100%, transição `transition-all duration-300`.

**Tamanho:** altura máxima 40px, largura automática.

---

### 7.9 `src/components/sections/CTASection.tsx`

**Layout:** Background `#030342`, section-padding, text-center.

**Conteúdo:**
```
[H2 branco: "Qual é o custo de não saber o que está acontecendo na sua operação?"]
[Body rgba(255,255,255,0.75): "Em 30 minutos, mostramos como a Volt Solution pode ser implementada no seu hotel e quanto você pode economizar no primeiro ano."]
[Botões lado a lado:]
  [Agendar demonstração gratuita →]  (filled, #0081E6)
  [Falar pelo WhatsApp]              (ghost, borda branca)
[Selos: ISO 9001 · Hardware ANATEL · Nuvem AWS]  (caption, stone, separados por ·)
```

**WhatsApp link:** `https://api.whatsapp.com/send/?phone=5581986996968&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Volt%20Solution.`

---

## 8. ETAPA 5 — PÁGINA DE CONTATO

### 8.1 `src/app/contato/page.tsx`

**Layout:** 2 colunas desktop (info + formulário), stack mobile.

**Coluna esquerda (informações):**
```
H1: "Fale com um especialista"
Body: "Preencha o formulário ou nos chame diretamente. Retornamos em até 1 dia útil."

[Ícone + Telefone] +55 (81) 98699-6968
[Ícone + Email] contato@voltsolution.com.br
[Ícone + LinkedIn] /company/voltsolution
[Botão WhatsApp verde] "Chamar no WhatsApp"
```

**Coluna direita (formulário):**

```
Campos:
- Nome Completo *
- Empresa *
- Cargo
- Telefone
- E-mail *
- Mensagem (textarea, 4 rows)
- [Enviar mensagem →] (botão filled)
```

**Integração:** Formspree (`https://formspree.io/f/YOUR_FORM_ID`). Usar `fetch` com `method: POST`, `Content-Type: application/json`. Mostrar estado de sucesso/erro no componente.

**Honeypot anti-spam:** adicionar campo `<input type="text" name="_gotcha" style="display:none" />` — Formspree ignora automaticamente.

**Estado do formulário:**
```typescript
type FormState = 'idle' | 'submitting' | 'success' | 'error'
```

**Após envio com sucesso:** substituir formulário por mensagem de sucesso com ícone check e instrução ("Em breve um especialista entrará em contato.").

---

## 9. ETAPA 6 — RESPONSIVIDADE

### Regras Gerais

- Desenvolver todas as seções mobile-first
- Testar em 320px (iPhone SE), 375px, 768px (tablet), 1024px, 1280px, 1440px
- Nenhum elemento deve ter overflow horizontal em mobile

### Checklist por Seção

**Hero:**
- Mobile: H1 em 2.2rem, botões em coluna (`flex-col`), logos em scroll horizontal ou wrapping
- Tablet: H1 em 3rem, botões em linha

**Problems:**
- Mobile: 1 coluna
- Tablet+: 2 colunas

**Solution:**
- Mobile: timeline vertical (linha à esquerda, conteúdo à direita)
- Desktop: timeline horizontal

**Services:**
- Mobile: 2 colunas
- Desktop: 4 colunas

**Differentials:**
- Mobile: 1 coluna
- Tablet: 2 colunas
- Desktop: 4 colunas

**Cases:**
- Mobile: foto full-width, texto abaixo
- Desktop: foto e texto lado a lado (40/60)

**Header Mobile:**
- Hamburger menu
- Logo centralizado ou à esquerda
- CTA "Agendar Demo" visível no drawer

---

## 10. ETAPA 7 — ANIMAÇÕES COM FRAMER MOTION

### Regra Geral

Todas as animações devem:
1. Ser sutis (não chamar mais atenção que o conteúdo)
2. Respeitar `prefers-reduced-motion` via `useReducedMotion()`
3. Usar `viewport: { once: true }` — animar apenas uma vez, não repetir ao scroll

### 10.1 `src/components/ui/FadeIn.tsx`

Wrapper reutilizável para fade-in ao entrar na viewport:

```typescript
'use client'
import { motion, useReducedMotion } from 'framer-motion'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  className?: string
}

export default function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  className,
}: FadeInProps) {
  const shouldReduce = useReducedMotion()

  const directionMap = {
    up: { y: 24 },
    down: { y: -24 },
    left: { x: 24 },
    right: { x: -24 },
    none: {},
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...directionMap[direction] }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: shouldReduce ? 0 : 0.5,
          delay: shouldReduce ? 0 : delay,
          ease: [0.21, 0.47, 0.32, 0.98],
        },
      }}
      viewport={{ once: true, margin: '-50px' }}
    >
      {children}
    </motion.div>
  )
}
```

**Uso:**
```tsx
<FadeIn delay={0.1}>
  <Card />
</FadeIn>
```

### 10.2 Stagger em Listas

Para cards em grid (Problems, Services, etc.):

```typescript
'use client'
import { motion, useReducedMotion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }
  }
}

// Uso:
<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="grid grid-cols-2 md:grid-cols-4 gap-6"
>
  {items.map(item => (
    <motion.div key={item.id} variants={itemVariants}>
      <Card {...item} />
    </motion.div>
  ))}
</motion.div>
```

### 10.3 Hero — Animação de Entrada

```typescript
// Sequência: badge → H1 → body → botões → logos
// delays: 0 → 0.1 → 0.25 → 0.4 → 0.6
```

### 10.4 Hover em Cards

```typescript
<motion.div
  whileHover={{ y: -4, transition: { duration: 0.2 } }}
  className="card-base"
>
```

### 10.5 Botões

```typescript
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  transition={{ duration: 0.15 }}
>
```

---

## 11. ETAPA 8 — SEO E METADATA

### 11.1 Metadata Base (`layout.tsx`)

Já definida na Etapa 5.2. Verificar:
- `title` com keyword principal
- `description` com 155-160 caracteres
- `og:image` 1200x630px criada antes do deploy
- `metadataBase` com URL de produção

### 11.2 Metadata por Página

**Homepage:** herdar do layout (já cobre)

**Contato:**
```typescript
export const metadata: Metadata = {
  title: 'Contato — Volt Solution',
  description: 'Fale com um especialista da Volt Solution. Agende uma demonstração gratuita para hotéis e resorts.',
}
```

### 11.3 JSON-LD (Schema.org)

Adicionar no `layout.tsx`:

```typescript
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Volt Solution',
  url: 'https://voltsolution.com.br',
  logo: 'https://voltsolution.com.br/images/logo.svg',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+55-81-98699-6968',
    contactType: 'sales',
    areaServed: 'BR',
    availableLanguage: 'Portuguese',
  },
}

// No <head>:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>
```

### 11.4 Sitemap

Criar `src/app/sitemap.ts`:

```typescript
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://voltsolution.com.br',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://voltsolution.com.br/contato',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
  ]
}
```

### 11.5 Robots.txt

```typescript
// src/app/robots.ts
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://voltsolution.com.br/sitemap.xml',
  }
}
```

---

## 12. ETAPA 9 — BUILD E DEPLOY

### 12.1 Build

```bash
npm run build
```

Gera a pasta `/out` com HTML/CSS/JS estáticos.

**Verificar antes do build:**
- Todas as imagens em `/public` estão presentes
- `FORMSPREE_ID` atualizado no formulário de contato
- URL de produção correta no `metadata.metadataBase` e `sitemap`
- `next.config.ts` tem `output: 'export'` e `images: { unoptimized: true }`

### 12.2 Deploy no Servidor Atual

A pasta `/out` pode ser servida diretamente por Apache ou Nginx.

**Para Apache** — criar ou editar `.htaccess` na raiz:
```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^(.*)$ /$1.html [L,QSA]
```

**Para Nginx** — bloco de configuração:
```nginx
location / {
  try_files $uri $uri/ $uri.html =404;
}
```

### 12.3 Script de Deploy

```bash
# Build local, enviar para servidor via rsync
npm run build
rsync -avz --delete ./out/ usuario@servidor:/var/www/voltsolution.com.br/
```

---

## 13. CHECKLIST DE VERIFICAÇÃO

### Funcional
- [ ] Todos os links de navegação funcionam (anchors e páginas)
- [ ] CTA "Agendar demonstração" redireciona para formulário ou WhatsApp
- [ ] Botão WhatsApp abre no número correto com mensagem pré-definida
- [ ] Formulário de contato envia e mostra feedback de sucesso/erro
- [ ] Header muda visual ao scrollar (transparente → branco)
- [ ] Menu mobile abre e fecha corretamente
- [ ] Smooth scroll funcionando para anchors

### Visual
- [ ] Nenhum overflow horizontal em mobile (320px, 375px)
- [ ] Imagens carregam sem quebrar layout
- [ ] Logos de clientes aparecem com grayscale e hover colorido
- [ ] Tipografia consistente em todos os breakpoints
- [ ] Contraste WCAG AA em todos os textos

### Performance (Lighthouse)
- [ ] Performance ≥ 95
- [ ] Accessibility ≥ 95
- [ ] Best Practices ≥ 95
- [ ] SEO ≥ 95
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] CLS (Cumulative Layout Shift) < 0.1
- [ ] FID (First Input Delay) < 100ms

### SEO
- [ ] `<title>` único em cada página
- [ ] Meta description em cada página
- [ ] Open Graph image (1200x630) presente e correta
- [ ] JSON-LD de Organization no layout
- [ ] Sitemap.xml acessível em /sitemap.xml
- [ ] Robots.txt acessível em /robots.txt
- [ ] Todas as imagens com atributo `alt` descritivo

### Conteúdo
- [ ] Cases substituídos pelos dados reais fornecidos pelo cliente
- [ ] Logos de clientes são arquivos reais (não placeholders)
- [ ] Número de telefone e email corretos
- [ ] Link de WhatsApp com número correto
