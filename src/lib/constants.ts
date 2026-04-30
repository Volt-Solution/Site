import type { IconName } from './icons'

export const CONTACT = {
  PHONE_DISPLAY: '(81) 98699-6968',
  PHONE_HREF: 'tel:+5581986996968',
  PHONE_INTL: '+55-81-98699-6968',
  EMAIL: 'contato@voltsolution.com.br',
  WHATSAPP_URL:
    'https://api.whatsapp.com/send/?phone=5581986996968&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20Volt%20Solution.',
  LINKEDIN_URL: 'https://linkedin.com/company/voltsolution',
} as const

export const NAV_LINKS = [
  { label: 'Soluções', href: '/#solucoes' },
  { label: 'Cases', href: '/#cases' },
  { label: 'Sobre', href: '/#sobre' },
] as const

export const HERO = {
  LABEL: 'Telemetria avançada para eficiência operacional',
  TITLE_WHITE: 'Controle sua operação.',
  TITLE_GRAY: 'Garanta a máxima experiência do hóspede.',
  SUBTEXT:
    'Otimizamos a operação de hotéis e resorts de alto padrão. Com inteligência de dados e sensores IoT sem fio de mínima intervenção, sua engenharia monitora recursos como água, gás e energia nos bastidores.',
} as const

export const MOVES = [
  {
    number: '01',
    title: 'Coleta silenciosa',
    description:
      'Sensores autônomos instalados sem interromper a operação. O hóspede não vê — sua engenharia, sim.',
  },
  {
    number: '02',
    title: 'Inteligência de dados',
    description:
      'Dados criptografados em nuvem com 99,9% de disponibilidade. Histórico completo, leitura em segundos, padrões aprendidos',
  },
  {
    number: '03',
    title: 'Ação antes do hóspede',
    description:
      'Dashboard personalizado, alertas no WhatsApp, Telegram e mais. O problema vira tarefa antes de virar reclamação.',
  },
] as const

type ServiceItem = { id: string; icon: IconName; title: string; description: string }

export const SERVICES: ServiceItem[] = [
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
    id: 'gas',
    icon: 'flame',
    title: 'Consumo de Gás',
    description: 'Monitoramento e detecção de padrões anômalos de consumo.',
  },
  {
    id: 'automacao',
    icon: 'cpu',
    title: 'Automação',
    description: 'Ações automáticas configuradas por parâmetros operacionais.',
  },
]

export const CLIENTS = [
  { name: 'Amarante', logo: '/images/clients/amarante.svg' },
  { name: 'GAV Resorts', logo: '/images/clients/gav.svg' },
  { name: 'Renaissance', logo: '/images/clients/renaissance.svg' },
  { name: 'Westin', logo: '/images/clients/westin.svg' },
] as const

export const CASES = [
  {
    id: 'case-1',
    client: 'Resort Salinas Maragogi — Maragogi, AL',
    logo: '/images/cases/case-1.jpg',
    problem: 'Consumo de água 35% acima da média do setor sem identificação da causa.',
    solution:
      'Instalação de medidores em 12 pontos críticos com monitoramento em tempo real e alertas automáticos para a equipe de manutenção.',
    result:
      'Identificação de vazamento em tubulação de recirculação de água quente. Redução de 28% no consumo nos 60 dias seguintes à instalação.',
    metric: '−28%',
    metricLabel: 'consumo de água',
    metricDetail: '12 pontos · 60 dias',
  },
  {
    id: 'case-2',
    client: 'Renaissance Hotel — São Paulo, SP',
    logo: '/images/cases/case-2.jpg',
    problem: 'Picos invisíveis de consumo de energia gerando contas mensais até 40% mais caras.',
    solution:
      'Medição setorizada nos chillers de ar-condicionado e painéis de distribuição, integrando alertas de consumo fora do padrão ao dashboard de utilidades.',
    result:
      'Identificação imediata de chillers operando em 100% da capacidade durante a madrugada em alas vazias. Retorno sobre o investimento (ROI) em 45 dias.',
    metric: '−40%',
    metricLabel: 'na fatura de energia',
    metricDetail: 'ROI em 45 dias',
  },
] as const

type DifferentialItem = { icon: IconName; title: string; description: string }

export const DIFFERENTIALS: DifferentialItem[] = [
  {
    icon: 'settings-2',
    title: 'Solução Personalizada',
    description:
      'Cada instalação é projetada para a estrutura do seu hotel. Não vendemos produto de prateleira.',
  },
  {
    icon: 'shield-check',
    title: 'Hardware homologados',
    description:
      'Equipamentos testados e validados. Fornecedores confiáveis e com rápido suporte.',
  },
  {
    icon: 'plug-2',
    title: 'API com Integrações',
    description:
      'API própria que conecta com sistemas de gestão, Whatsapp, Telegram e ferramentas de BI.',
  },
  {
    icon: 'badge-check',
    title: 'Certificação ISO 9001',
    description: 'Processos auditados e certificados. Qualidade garantida do projeto ao suporte.',
  },
]

export const PROBLEMS = [
  {
    icon: 'droplet' as const,
    title: 'Reservatório abaixo do nível mínimo.',
    description:
      'A queda ocorreu durante a alta ocupação. Os hóspedes ficaram sem água nas suítes antes de qualquer alerta chegar à manutenção.',
  },
  {
    icon: 'zap' as const,
    title: 'Pico invisível na fatura do mês.',
    description:
      'A conta veio 40% acima e ninguém soube qual setor foi responsável.',
  },
  {
    icon: 'thermometer' as const,
    title: 'Câmara fria fora da temperatura ideal.',
    description:
      'A perda de temperatura ocorreu durante a madrugada. Insumos premium estragaram antes da engenharia ser alertada.',
  },
  {
    icon: 'waves' as const,
    title: 'Vazamento silencioso de R$ 18 mil.',
    description: 'Pequena falha na tubulação de água só apareceu na conta mensal.',
  },
]
