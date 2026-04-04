'use client'
import Image from 'next/image'
import { CLIENTS } from '@/lib/constants'
import FadeIn from '../ui/FadeIn'

export default function Clients() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-site text-center">
        <FadeIn>
          <p className="text-caption text-stone mb-10">
            Confiado pelos principais hotéis e resorts do Brasil
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {CLIENTS.map((client, index) => (
              <div
                key={index}
                className="relative h-12 md:h-[70px] brightness-0 opacity-[0.55] hover:brightness-100 hover:opacity-100 transition-all duration-300"
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
