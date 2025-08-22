<!-- ~/layouts/default.vue -->
<template>
  <div class="min-h-screen flex flex-col">
    <!-- Fixed navbar (your existing component) -->
    <div ref="navWrap" class="will-change-transform z-[100]">
      <Navbar />
    </div>

    <!-- Page outlet -->
    <main class="flex-1">
      <NuxtPage />
    </main>

    <!-- Overlay page transition -->
    <RouteOverlay ref="overlay" />
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted } from 'vue'
import { useRouter } from '#imports'
import gsap from 'gsap'
import Navbar from '~/components/Navbar.vue'
import RouteOverlay from '~/components/RouteOverlay.vue'
import { useNuxtApp } from '#app'

const router = useRouter()
const overlay = ref(null)
const { $lenis } = useNuxtApp()

async function animatePageIn() {
  await nextTick()
  const els = gsap.utils.toArray('[data-anim]')
  if (!els.length) return
  gsap.from(els, {
    opacity: 0, y: 20, duration: 0.6, ease: 'power2.out', stagger: 0.06, clearProps: 'all'
  })
}

function restoreScrollTopImmediate() {
  if ($lenis) {
    $lenis.scrollTo(0, { immediate: true })
    $lenis.raf(performance.now())
  } else {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }
}

/* NEW: broadcast a page-enter event for components like AnimatedSplit */
function firePageEnter() {
  document.dispatchEvent(new CustomEvent('ss:page-enter'))
}

onMounted(() => {
  router.beforeEach(async () => {
    if ($lenis?.stop) $lenis.stop()
    await overlay.value?.inCover()
    return true
  })

  router.afterEach(async () => {
    await nextTick()
    restoreScrollTopImmediate()
    await overlay.value?.outReveal()

    /* IMPORTANT: tell AnimatedSplit components to (re)run now */
    firePageEnter()

    await animatePageIn()
    if ($lenis?.start) $lenis.start()
  })

  /* Also fire once on first paint (for initial load / hard refresh) */
  requestAnimationFrame(() => firePageEnter())
})
</script>


<style scoped>
/* optional: slight fade on nav while overlay covers (feels snappier) */
</style>
