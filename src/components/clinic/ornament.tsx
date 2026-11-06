/** OREC signature: a thin champagne rule with a small diamond — the clinic's subtle gold touch. */
export function Ornament({ className = '' }: { className?: string }) {
  return (
    <div className={`mx-auto mt-5 flex items-center justify-center gap-3 ${className}`} aria-hidden>
      <span className="h-px w-14 sm:w-20" style={{ background: 'linear-gradient(to left, var(--champagne), transparent)' }} />
      <span className="h-1.5 w-1.5 rotate-45" style={{ background: 'var(--champagne)' }} />
      <span className="h-px w-14 sm:w-20" style={{ background: 'linear-gradient(to right, var(--champagne), transparent)' }} />
    </div>
  )
}
