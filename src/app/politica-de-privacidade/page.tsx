import type { Metadata } from 'next'
import FadeIn from '@/components/ui/FadeIn'

export const metadata: Metadata = {
  title: 'Política de Privacidade — Volt Solution',
  description: 'Saiba como a Volt Solution coleta, usa e protege seus dados pessoais conforme a LGPD.',
  robots: 'noindex',
}

const LAST_UPDATED = '28 de abril de 2026'

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="border-t border-sand-deep pt-10 mt-10">
    <h2 className="text-h3 text-navy mb-4">{title}</h2>
    <div className="text-body text-stone space-y-4 leading-relaxed">{children}</div>
  </div>
)

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-deep relative overflow-hidden pt-40 pb-20">
        <div className="grid-bg" aria-hidden />
        <div className="container-site relative z-10">
          <FadeIn>
            <span className="eyebrow text-bone/55 mb-6 block">Legal · LGPD</span>
            <h1 className="text-h2 text-white max-w-xl">
              Política de<br />
              <span className="font-light text-white/45">Privacidade.</span>
            </h1>
            <p className="text-body text-white/45 mt-4">
              Última atualização: {LAST_UPDATED}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bone)' }}>
        <div className="container-site max-w-3xl">
          <FadeIn>
            <p className="text-body-lg text-stone">
              A Volt Solution (&ldquo;nós&rdquo;, &ldquo;nossa empresa&rdquo;) está comprometida com a
              proteção dos seus dados pessoais. Esta Política descreve como coletamos,
              usamos, armazenamos e protegemos suas informações, em conformidade com a
              Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).
            </p>

            <Section title="1. Controlador dos Dados">
              <p>
                <strong className="text-navy font-medium">Volt Solution Ltda.</strong><br />
                E-mail: <a href="mailto:contato@voltsolution.com.br" className="text-navy hover:text-stone transition-colors underline underline-offset-2">contato@voltsolution.com.br</a><br />
                Telefone: +55 (81) 98699-6968
              </p>
              <p>
                Para solicitações relacionadas aos seus dados pessoais, entre em contato
                pelos canais acima.
              </p>
            </Section>

            <Section title="2. Dados Coletados">
              <p>Coletamos os seguintes dados, exclusivamente quando você nos fornece voluntariamente por meio do formulário de contato:</p>
              <ul className="list-none flex flex-col gap-2 mt-2">
                {[
                  'Nome completo',
                  'Empresa e cargo',
                  'Endereço de e-mail',
                  'Número de telefone',
                  'Conteúdo da mensagem enviada',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-stone mt-2.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Quando você consente com cookies de analytics, também coletamos dados de
                navegação de forma anonimizada: páginas visitadas, tempo de sessão,
                localização geográfica aproximada (país/estado) e tipo de dispositivo.
                Esses dados não permitem sua identificação individual.
              </p>
            </Section>

            <Section title="3. Finalidade e Base Legal">
              <p>Utilizamos seus dados para:</p>
              <ul className="list-none flex flex-col gap-3 mt-2">
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-stone mt-2.5 shrink-0" />
                  <span><strong className="text-navy font-medium">Responder sua solicitação</strong> — base legal: execução de contrato ou procedimentos preliminares (art. 7º, V, LGPD).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-stone mt-2.5 shrink-0" />
                  <span><strong className="text-navy font-medium">Contato comercial posterior</strong> — base legal: legítimo interesse (art. 7º, IX, LGPD), limitado a comunicações relevantes ao seu contato.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-stone mt-2.5 shrink-0" />
                  <span><strong className="text-navy font-medium">Analytics e melhoria do site</strong> — base legal: consentimento (art. 7º, I, LGPD), concedido por meio do banner de cookies.</span>
                </li>
              </ul>
            </Section>

            <Section title="4. Compartilhamento com Terceiros">
              <p>
                Seus dados podem ser processados pelos seguintes serviços de terceiros,
                estritamente para as finalidades descritas:
              </p>
              <ul className="list-none flex flex-col gap-3 mt-2">
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-stone mt-2.5 shrink-0" />
                  <span><strong className="text-navy font-medium">Formspree</strong> — processamento e entrega de mensagens do formulário de contato. Política de privacidade disponível em formspree.io/legal/privacy-policy.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-stone mt-2.5 shrink-0" />
                  <span><strong className="text-navy font-medium">Google Analytics</strong> (somente com seu consentimento) — análise de tráfego anonimizado. Os dados são processados conforme a Política de Privacidade do Google.</span>
                </li>
              </ul>
              <p className="mt-4">
                Não vendemos, alugamos ou cedemos seus dados pessoais a terceiros para
                fins de marketing.
              </p>
            </Section>

            <Section title="5. Retenção dos Dados">
              <p>
                Os dados coletados via formulário são retidos pelo período necessário ao
                atendimento da sua solicitação e, se houver relacionamento comercial,
                pelo prazo legal aplicável (art. 12, LGPD). Dados de analytics anonimizados
                seguem o período de retenção configurado no Google Analytics (padrão: 14 meses).
              </p>
              <p>
                Após o prazo, os dados são excluídos ou anonimizados de forma definitiva.
              </p>
            </Section>

            <Section title="6. Cookies">
              <p>
                Utilizamos dois tipos de cookies:
              </p>
              <ul className="list-none flex flex-col gap-3 mt-2">
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-stone mt-2.5 shrink-0" />
                  <span><strong className="text-navy font-medium">Cookies essenciais</strong> — necessários para o funcionamento básico do site (armazenamento da preferência de cookies). Não requerem consentimento.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-stone mt-2.5 shrink-0" />
                  <span><strong className="text-navy font-medium">Cookies de analytics</strong> — utilizados para medir o desempenho do site e entender o comportamento de navegação. Ativados somente com seu consentimento explícito.</span>
                </li>
              </ul>
              <p className="mt-4">
                Você pode revogar seu consentimento a qualquer momento limpando os dados
                do navegador ou acessando as configurações de cookies da sua preferência.
              </p>
            </Section>

            <Section title="7. Seus Direitos">
              <p>
                Conforme a LGPD (art. 18), você tem o direito de:
              </p>
              <ul className="list-none flex flex-col gap-2 mt-2">
                {[
                  'Confirmar se tratamos seus dados',
                  'Acessar os dados que temos sobre você',
                  'Corrigir dados incompletos, inexatos ou desatualizados',
                  'Solicitar anonimização, bloqueio ou eliminação dos dados',
                  'Solicitar a portabilidade dos dados',
                  'Revogar o consentimento a qualquer momento',
                  'Opor-se ao tratamento com base em legítimo interesse',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-stone mt-2.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Para exercer qualquer um desses direitos, entre em contato pelo e-mail{' '}
                <a
                  href="mailto:contato@voltsolution.com.br"
                  className="text-navy hover:text-stone transition-colors underline underline-offset-2"
                >
                  contato@voltsolution.com.br
                </a>
                . Responderemos em até 15 dias úteis.
              </p>
            </Section>

            <Section title="8. Segurança">
              <p>
                Adotamos medidas técnicas e organizacionais adequadas para proteger seus
                dados contra acesso não autorizado, alteração, divulgação ou destruição,
                incluindo transmissão criptografada (HTTPS) e controle de acesso restrito
                aos dados coletados.
              </p>
            </Section>

            <Section title="9. Alterações a esta Política">
              <p>
                Podemos atualizar esta Política periodicamente. A data de &ldquo;última
                atualização&rdquo; no topo desta página reflete a versão vigente. Em caso de
                alterações relevantes, notificaremos por e-mail os usuários cujos dados
                estamos tratando.
              </p>
            </Section>

            <div className="border-t border-sand-deep pt-10 mt-10">
              <p className="text-caption">
                Volt Solution Ltda. · contato@voltsolution.com.br · +55 (81) 98699-6968<br />
                Esta política foi elaborada em conformidade com a Lei nº 13.709/2018 (LGPD).
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
