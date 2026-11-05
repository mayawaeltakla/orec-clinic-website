/** Orec signature: a thin gold rule with a small diamond — the clinic's gold touch. */
export function Ornament({ className = '' }: { className?: string }) {
  return (
    <div className={`mx-auto mt-5 flex items-center justify-center gap-3 ${className}`} aria-hidden>
      <span className="h-px w-14 bg-gradient-to-l from-gold/70 to-transparent sm:w-20" />
      <span className="h-2 w-2 rotate-45 border border-gold bg-gold/30" />
      <span className="h-px w-14 bg-gradient-to-r from-gold/70 to-transparent sm:w-20" />
    </div>
  )
}
