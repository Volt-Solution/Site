import { Droplets, Zap, Thermometer, Fan, Waves, Gauge, Activity, Cpu, Settings2, ShieldCheck, Plug2, BadgeCheck } from 'lucide-react'
import type { ElementType } from 'react'

export const iconMap = {
  droplet: Droplets,
  zap: Zap,
  thermometer: Thermometer,
  wind: Fan,
  waves: Waves,
  gauge: Gauge,
  lightbulb: Activity,
  cpu: Cpu,
  'settings-2': Settings2,
  'shield-check': ShieldCheck,
  'plug-2': Plug2,
  'badge-check': BadgeCheck,
} satisfies Record<string, ElementType>

export type IconName = keyof typeof iconMap
