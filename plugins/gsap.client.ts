// ~/plugins/gsap.client.ts
import { defineNuxtPlugin } from '#app'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register any GSAP plugins you need:
gsap.registerPlugin(ScrollTrigger)

export default defineNuxtPlugin((nuxtApp) => {
  // You can also attach other plugins here, e.g. Draggable, Observer, etc.
  return {
    provide: {
      gsap,
      // If you want ScrollTrigger separately:
      scrollTrigger: ScrollTrigger
    }
  }
})
