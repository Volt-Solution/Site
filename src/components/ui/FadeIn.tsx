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
