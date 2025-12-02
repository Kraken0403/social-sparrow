<template>
  <div>
    <!-- Preloader -->
    <Preloader v-if="showPreloader" @done="handlePreloaderDone" />

    <div
      :class="[
        showPreloader ? 'opacity-0 pointer-events-none' : 'opacity-100',
        'transition-opacity duration-500 ease-out'
      ]"
    >
      <HomeHero />
      <WWD />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>

    <!-- Scroll to Top Button -->
    <button
      v-show="showScrollTop"
      @click="scrollToTop"
      class="fixed bottom-6 cursor-pointer right-6 z-50 bg-[#570000] text-white p-3 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300"
      aria-label="Scroll to top"
    >
      ▲
    </button>
  </div>
</template>

<script setup>
import { useEventBus } from '@vueuse/core'
import { ref, nextTick, onMounted, onUnmounted } from 'vue'
import { useNuxtApp } from '#app'

import Preloader from '~/components/Preloader.vue'
import HomeHero from '~/components/HomeHero.vue'
import WWD from '~/components/WWD.vue'
import Testimonials from '~/components/Testimonials.vue'
import FAQ from '~/components/FAQ.vue'
import Footer from '~/components/Footer.vue'

/* --------------------------------------------------
   STATE
-------------------------------------------------- */
const showPreloader = ref(true)
const showScrollTop = ref(false)
const { $restoreScrollNow } = useNuxtApp()

/* --------------------------------------------------
   EVENT BUS (HomeHero listens to this)
-------------------------------------------------- */
const preloaderDoneBus = useEventBus('preloaderDone')

/* --------------------------------------------------
   PRELOADER DONE — emit event here
-------------------------------------------------- */
async function handlePreloaderDone() {
  await nextTick()

  requestAnimationFrame(() => {
    $restoreScrollNow?.() // restore scroll + refresh scrolltrigger
    showPreloader.value = false

    preloaderDoneBus.emit()  // 🔥 HomeHero will now start counters
  })
}

/* --------------------------------------------------
   SCROLL TO TOP BUTTON
-------------------------------------------------- */
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function handleScroll() {
  showScrollTop.value = window.scrollY > 300
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
button[aria-label="Scroll to top"] {
  font-size: 20px;
  line-height: 1;
}
</style>
