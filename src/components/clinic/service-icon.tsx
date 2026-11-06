'use client'

import type { ComponentType } from 'react'
import {
  Activity, Building2, Circle, Dna, Dumbbell, Ear, Eye, Feather, Flower2, Footprints, Gem,
  Heart, Layers, Lightbulb, Microscope, Repeat, Ruler, ScanFace, Scale, Scissors, Search,
  ShieldAlert, Smile, Sparkles, Sprout, Stethoscope, Syringe, Timer, User, Waves, Wrench, Zap,
} from 'lucide-react'

type IconType = ComponentType<{ className?: string; strokeWidth?: number }>

/**
 * Maps the emoji kept in the content data to one consistent line-icon set.
 * Unknown emoji (or a missing export) falls back to Sparkles, so a page never breaks.
 */
const ICONS: Record<string, IconType | undefined> = {
  '🦷': Smile, '✨': Sparkles, '🛠️': Wrench, '⚡': Zap, '⏳': Timer, '⏱️': Timer,
  '👁️': Eye, '👀': Eye, '👃': ScanFace, '👂': Ear, '💋': Heart, '🦢': Feather, '🪞': ScanFace,
  '🪨': Gem, '😊': Smile, '🧬': Dna, '🎗️': Heart, '🧑‍⚕️': Stethoscope, '🌀': Waves, '💪': Dumbbell,
  '🦵': Footprints, '🍑': Activity, '🌸': Flower2, '💉': Syringe, '🩺': Stethoscope, '♂️': User,
  '📏': Ruler, '🌱': Sprout, '🧔': User, '🪶': Feather, '🎈': Circle, '🔁': Repeat, '⚖️': Scale,
  '💇': Scissors, '💎': Gem, '💫': Sparkles, '🕊️': Feather,
  '🏥': Building2, '📐': Ruler, '🔬': Microscope, '💡': Lightbulb, '⚠️': ShieldAlert,
  '👤': User, '🔍': Search,
}

export function ServiceIcon({
  emoji,
  className = 'h-5 w-5',
}: {
  emoji: string
  className?: string
}) {
  const Icon = ICONS[emoji] ?? ICONS[emoji.replace(/️/g, '')] ?? Sparkles
  return <Icon className={className} strokeWidth={1.6} aria-hidden />
}

/** Branded cover for a service card: a calm panel with one line icon instead of a stock photo */
export function ServiceCover({ emoji, label, image }: { emoji: string; label: string; image?: string }) {
  if (image) {
    return (
      <div aria-hidden className="-mx-6 -mt-6 mb-6 aspect-[3/2] w-[calc(100%+3rem)] overflow-hidden border-b border-border">
        <img src={image} alt="" width={1200} height={800} loading="lazy" className="h-full w-full object-cover" />
      </div>
    )
  }
  return (
    <div
      aria-hidden
      className="-mx-6 -mt-6 mb-6 flex aspect-video w-[calc(100%+3rem)] flex-col items-center justify-center gap-3 border-b border-border bg-gradient-to-br from-accent to-secondary"
    >
      <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/50 bg-card text-gold-2 shadow-sm">
        <ServiceIcon emoji={emoji} className="h-7 w-7" />
      </span>
      <span className="px-4 text-center text-[11px] font-semibold tracking-[0.18em] text-muted-foreground" dir="ltr">
        {label}
      </span>
    </div>
  )
}
