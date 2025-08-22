<template>
  <transition name="fade" appear>
    <div
      v-if="visible"
      class="fixed inset-0 z-[2147483647] w-screen h-screen overflow-hidden"
      aria-label="Loading"
    >
      <!-- Fullscreen overlay with a heart-shaped HOLE -->
      <svg
        ref="svgEl"
        class="absolute inset-0 block w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <mask
            :id="maskId"
            x="0" y="0" width="100" height="100"
            maskUnits="userSpaceOnUse"
          >
            <!-- White = overlay is visible -->
            <rect x="0" y="0" width="100" height="100" fill="white" />
            <!-- Black = the hole (heart). We animate this group with GSAP -->
            <g ref="heartGroup">
              <!-- Heart path centered around (50,50) in the 100x100 viewBox -->
              <path
                d="M50 70 C30 60, 20 45, 25 35 C30 25, 45 28, 50 35 C55 28, 70 25, 75 35 C80 45, 70 60, 50 70 Z"
                fill="black"
                shape-rendering="geometricPrecision"
              />
            </g>
          </mask>
        </defs>

        <!-- The dark overlay (covers full screen) -->
        <rect
          x="0" y="0" width="100" height="100"
          :fill="overlayColor"
          :mask="`url(#${maskId})`"
        />
      </svg>

      <!-- Centered greetings above the overlay -->
      <div class="absolute inset-0 flex items-center justify-center pointer-events-none z-[1]">
        <div
          ref="greetText"
          class="inline-block px-4 py-2 text-white/95 text-[clamp(24px,6vw,64px)] font-semibold leading-tight tracking-tight text-center"
          style="will-change: transform, opacity"
        >
          {{ currentGreeting }}
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { useIntroState } from '~/composables/useIntroState'

const emit = defineEmits(['done'])

/* -------- CONFIG -------- */
const overlayColor   = '#EF1525'
const greetings      = ['Hello', 'नमस्ते', 'Hola', 'Bonjour']
const greetingIn     = 0.20
const greetingHold   = 0.50
const greetingOut    = 0.20
const gapBetween     = 0.08

/* -------- STATE / REFS -------- */
const visible         = ref(true)
const currentGreeting = ref('')
const svgEl           = ref(null)
const heartGroup      = ref(null)
const greetText       = ref(null)
const maskId          = 'heartCutoutMask-' + Math.random().toString(36).slice(2)

/* Shared intro state (used elsewhere in your app) */
const { introKey, isIntroDone } = useIntroState()

/* -------- TIMELINE -------- */
function buildTimeline () {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  // Prep: lock scroll; center & shrink the heart
  tl.add(() => {
    document.documentElement.classList.add('overflow-hidden')
    gsap.set(heartGroup.value, {
      transformOrigin: '50% 50%', // center of the 100x100 viewBox
      transformBox: 'view-box',
      scale: 0,                   // start invisible
    })
  })

  // Greetings sequence (centered text)
  greetings.forEach((word, i) => {
    tl.add(() => { currentGreeting.value = word })
      .fromTo(greetText.value, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: greetingIn })
      .to(greetText.value, { opacity: 1, duration: greetingHold })
      .to(greetText.value, { y: -18, opacity: 0, duration: greetingOut, ease: 'power2.in' })
      .to({}, { duration: i === greetings.length - 1 ? 0.1 : gapBetween })
  })

  // Heart: appear small, pulse, then grow to reveal everything
  tl.to(heartGroup.value, { scale: 0.28, duration: 0.25, ease: 'power2.out' })
    .to({}, { duration: 0.22 })
    // two gentle beats
    .to(heartGroup.value, { scale: 0.33, duration: 0.14, ease: 'power1.inOut' })
    .to(heartGroup.value, { scale: 0.26, duration: 0.14, ease: 'power1.inOut' })
    .to(heartGroup.value, { scale: 0.36, duration: 0.14, ease: 'power1.inOut' })
    .to(heartGroup.value, { scale: 0.30, duration: 0.14, ease: 'power1.inOut' })
    // slight lift (visual taste)
    .to(heartGroup.value, { yPercent: -1.5, duration: 0.18, ease: 'power2.out' })
    // explode to reveal: in a 100x100 viewBox, ~8× cleanly clears the screen
    .to(heartGroup.value, { scale: 8, duration: 0.95, ease: 'power3.in', force3D: true })

  // Cleanup + shared state signal
  tl.add(() => {
    visible.value = false
    document.documentElement.classList.remove('overflow-hidden')
    isIntroDone.value = true
    introKey.value++
    emit('done')
  })

  return tl
}

onMounted(async () => {
  await nextTick()
  buildTimeline()
})
</script>

<style scoped>
/* Transition: show instantly on first paint; only fade out when leaving */
.fade-enter-active { transition: none; }
.fade-enter-from  { opacity: 1; }

.fade-leave-active { transition: opacity .35s ease; }
.fade-leave-to     { opacity: 0; }
</style>
