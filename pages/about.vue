<template>
  <div>
    <AboutHero />
    <AboutContent />
    <!-- <LogoMarquee /> -->
    <WWD />
    <Founder />
    <Footer />

    <!-- Scroll to Top Button -->
    <button
      v-show="showScrollTop"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 cursor-pointer z-50 bg-[#570000] text-white p-3 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300"
      aria-label="Scroll to top"
    >
      ▲
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import AboutHero from '~/components/AboutHero.vue'
import AboutContent from '~/components/AboutContent.vue'
import LogoMarquee from '~/components/LogoMarquee.vue'
import Founder from '~/components/Founder.vue'
import WWD from '~/components/WWD.vue'
import Footer from '~/components/Footer.vue'

const showScrollTop = ref(false)

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
