<template>
  <div>
    <!-- Preloader -->
    <Preloader v-if="showPreloader" @done="handlePreloaderDone" />
    <div :class="[
      showPreloader ? 'opacity-0 pointer-events-none' : 'opacity-100',
      'transition-opacity duration-500 ease-out'
    ]">
      <HomeHero />
      <WWD />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { useNuxtApp } from '#app'
import Preloader from '~/components/Preloader.vue'
import HomeHero from '~/components/HomeHero.vue'
import WWD from '~/components/WWD.vue'
import Testimonials from '~/components/Testimonials.vue'
import FAQ from '~/components/FAQ.vue'
import Footer from '~/components/Footer.vue'

const showPreloader = ref(true)
const { $restoreScrollNow } = useNuxtApp()

async function handlePreloaderDone() {
  await nextTick()
  requestAnimationFrame(() => {
    $restoreScrollNow?.() // jump instantly & refresh ScrollTrigger
    showPreloader.value = false
  })
}
</script>





<style scoped>
/* Optional: make transitions smoother if needed */
</style>
