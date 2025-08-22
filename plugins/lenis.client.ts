// ~/plugins/lenis.client.ts
import { defineNuxtPlugin } from '#app'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const KEY = 'ss_scrollY'

export default defineNuxtPlugin((nuxtApp) => {
  const w = window as any

  const lenis: InstanceType<typeof Lenis> =
    w.__lenis || new Lenis({
      duration: 1.1,
      smoothWheel: true,
      smoothTouch: false,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

  w.__lenis = lenis

  if (!w.__lenisGsapHook) {
    const raf = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)
    w.__lenisGsapHook = raf
  }

  // Save scroll on every Lenis tick + keep ST in sync
  lenis.on('scroll', ({ scroll }: any) => {
    ScrollTrigger.update()
    sessionStorage.setItem(KEY, String(Math.max(0, Math.floor(scroll || 0))))
  })

  // Extra safety on page lifecycle
  const stash = () => {
    const y = (lenis as any)?.scroll ?? window.scrollY ?? 0
    sessionStorage.setItem(KEY, String(Math.max(0, Math.floor(y))))
  }
  window.addEventListener('visibilitychange', () => { if (document.hidden) stash() })
  window.addEventListener('pagehide', stash)
  window.addEventListener('beforeunload', stash)

  document.documentElement.style.scrollBehavior = 'auto'
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual'

  // Restore instantly via Lenis, then refresh ST
  const restoreScrollNow = (y?: number) => {
    const saved = typeof y === 'number'
      ? y
      : Number(sessionStorage.getItem(KEY) || 0)

    const max = Math.max(
      0,
      (document.documentElement.scrollHeight || document.body.scrollHeight) - window.innerHeight
    )
    const target = Math.min(max, Math.max(0, saved))

    lenis.scrollTo(target, { immediate: true })
    lenis.raf(performance.now())
    ScrollTrigger.refresh()

    return target
  }

  // Provide (single source of truth)
  nuxtApp.provide('lenis', lenis)
  nuxtApp.provide('restoreScrollNow', restoreScrollNow)
})
