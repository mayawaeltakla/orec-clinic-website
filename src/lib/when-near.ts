/**
 * Resolves when the element with `id` is near the viewport (or after an idle fallback).
 * Used to defer loading + hydrating below-the-fold client sections: their server-rendered HTML
 * stays in the page (SEO, no layout shift) while their JavaScript waits until it is needed.
 * On the server it resolves immediately, so SSR output is unchanged.
 */
export function whenNear(id: string, margin = 500, fallbackMs = 9000): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve()
  return new Promise((resolve) => {
    let done = false
    let io: IntersectionObserver | undefined
    let timer: ReturnType<typeof setTimeout> | undefined
    const go = () => {
      if (done) return
      done = true
      io?.disconnect()
      if (timer) clearTimeout(timer)
      resolve()
    }
    const el = document.getElementById(id)
    if (!el || !('IntersectionObserver' in window)) return go()
    io = new IntersectionObserver((entries) => entries.some((e) => e.isIntersecting) && go(), { rootMargin: `${margin}px 0px` })
    io.observe(el)
    // Even if the visitor never scrolls, hydrate during idle time a few seconds after load
    timer = setTimeout(() => {
      const ric = (window as unknown as { requestIdleCallback?: (cb: () => void) => void }).requestIdleCallback
      ric ? ric(go) : go()
    }, fallbackMs)
  })
}
