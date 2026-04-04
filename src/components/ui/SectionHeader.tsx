import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  align?: 'left' | 'center'
  theme?: 'light' | 'dark'
}

export default function SectionHeader({
  eyebrow,
  title,
  align = 'center',
  theme = 'light'
}: SectionHeaderProps) {
  return (
    <div className={cn('mb-12 md:mb-16 max-w-3xl', align === 'center' ? 'mx-auto text-center' : 'text-left')}>
      {eyebrow && (
        <span className="block text-sm font-bold tracking-wider uppercase text-blue-brand mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className={cn('text-h2 whitespace-pre-line', theme === 'dark' ? 'text-white' : 'text-navy')}>
        {title}
      </h2>
    </div>
  )
}
