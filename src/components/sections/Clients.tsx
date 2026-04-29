'use client'
import Image from 'next/image'
import { CLIENTS } from '@/lib/constants'
import FadeIn from '../ui/FadeIn'

export default function Clients() {
  return (
    <section className="py-16 md:py-20 border-y" style={{ backgroundColor: 'var(--color-bone)', borderColor: 'var(--color-sand-deep)' }}>
      <div className="container-site">
        <FadeIn>
          <p className="eyebrow text-stone/60 text-center mb-10">
            Confiado pelos principais hotéis e resorts do Brasil
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
            {CLIENTS.map((client) => (
              <div
                key={client.name}
                className="relative h-10 md:h-12 brightness-0 opacity-40 hover:opacity-70 transition-opacity duration-300"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={300}
                  height={100}
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
