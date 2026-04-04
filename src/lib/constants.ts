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
  { name: 'Amarante', logo: '/images/clients/amarante.svg' },
  { name: 'GAV Resorts', logo: '/images/clients/gav.svg' },
  { name: 'Renaissance', logo: '/images/clients/renaissance.svg' },
  { name: 'Westin', logo: '/images/clients/westin.svg' },
]

export const CASES = [
  {
    id: 'case-1',
    client: 'Resort Salinas Maragogi — Maragogi, AL',
    logo: '/images/cases/case-1.jpg',
    problem: 'Consumo de água 35% acima da média do setor sem identificação da causa.',
    solution: 'Instalação de medidores em 12 pontos críticos com monitoramento em tempo real e alertas automáticos para a equipe de manutenção.',
    result: 'Identificação de vazamento em tubulação de recirculação de água quente. Redução de 28% no consumo nos 60 dias seguintes à instalação.',
    metric: '−28%',
    metricLabel: 'consumo de água',
  },
  {
    id: 'case-2',
    client: 'Renaissance Hotel — São Paulo, SP',
    logo: '/images/cases/case-2.jpg',
    problem: 'Picos invisíveis de consumo de energia gerando contas mensais até 40% mais caras.',
    solution: 'Medição setorizada nos chillers de ar-condicionado e painéis de distribuição, integrando alertas de consumo fora do padrão ao dashboard de utilidades.',
    result: 'Identificação imediata de chillers operando em 100% da capacidade durante a madrugada em alas vazias. Retorno sobre o investimento (ROI) em 45 dias.',
    metric: '−40%',
    metricLabel: 'na fatura de energia',
  },
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