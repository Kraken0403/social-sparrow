<template>
  <nav
    ref="navEl"
    class="fixed top-[8px] left-0 right-0 mx-auto w-[98%] rounded-[8px]
           z-50 bg-[#f5f5f5]/70 backdrop-blur-md shadow-lg will-change-transform"
  >
    <div class="max-w-full mx-auto px-[30px] py-[15px] flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/">
        <img class="w-[200px]" src="../assets/images/svg-logo.svg" alt="Logo">
      </NuxtLink>

      <!-- Desktop Nav Links (always flex to avoid lg: issues) -->
      <div class="flex items-center space-x-[45px]">
        <NuxtLink
          to="/"
          class="nav-link text-lg text-[#1a1a1a]"
          :class="{ 'active-link': route.path === '/' }"
        >Home</NuxtLink>

        <NuxtLink
          to="/about"
          class="nav-link text-lg text-[#1a1a1a]"
          :class="{ 'active-link': route.path === '/about' }"
        >About</NuxtLink>

        <NuxtLink
          to="/services"
          class="nav-link text-lg text-[#1a1a1a]"
          :class="{ 'active-link': route.path === '/services' }"
        >Services</NuxtLink>

        <div
          class="bg-[#1a1a1a] rounded-[8px] w-[100px] h-[45px] flex justify-center items-center
                 transition-colors duration-300 hover:bg-[#333]"
        >
          <NuxtLink
            to="/contact"
            class="text-lg text-white"
            :class="{ 'active-link-btn': route.path === '/contact' }"
          >Contact</NuxtLink>
        </div>
      </div>

      <!-- Hamburger (hidden on large screens anyway; keep as-is) -->
      <button
        @click="toggleMenu"
        aria-label="Toggle menu"
        class="lg:hidden focus:outline-none z-50"
      >
        <svg v-if="!open" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </nav>

  <!-- Mobile Menu -->
  <div
    v-show="open"
    ref="menuPanel"
    style="transform: translateX(100%)"
    class="fixed top-0 right-0 h-full w-64 bg-white/90 backdrop-blur-md z-40 px-6 py-4 lg:hidden"
  >
    <button @click="toggleMenu" aria-label="Close menu" class="self-end mb-6 focus:outline-none">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800" fill="none"
           viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>
    <nav class="flex flex-col space-y-4">
      <NuxtLink to="/" @click="toggleMenu" class="nav-link text-lg text-[#1a1a1a]" :class="{ 'active-link': route.path === '/' }">Home</NuxtLink>
      <NuxtLink to="/about" @click="toggleMenu" class="nav-link text-lg text-[#1a1a1a]" :class="{ 'active-link': route.path === '/about' }">About</NuxtLink>
      <NuxtLink to="/services" @click="toggleMenu" class="nav-link text-lg text-[#1a1a1a]" :class="{ 'active-link': route.path === '/services' }">Services</NuxtLink>
      <NuxtLink to="/contact" @click="toggleMenu" class="nav-link text-lg text-[#1a1a1a]" :class="{ 'active-link': route.path === '/contact' }">Contact</NuxtLink>
    </nav>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { useNuxtApp, useRoute } from '#app'

const open = ref(false)
const menuPanel = ref(null)
const navEl = ref(null)
const { $gsap, $lenis } = useNuxtApp()
const route = useRoute()

function openMenu() {
  open.value = true
  nextTick(() => {
    if (menuPanel.value) {
      $gsap.fromTo(menuPanel.value, { x: '100%' }, { x: '0%', duration: 0.5, ease: 'power2.out' })
    }
  })
}
function closeMenu() {
  if (menuPanel.value) {
    $gsap.to(menuPanel.value, {
      x: '100%',
      duration: 0.4,
      ease: 'power2.in',
      onComplete: () => { open.value = false }
    })
  }
}
function toggleMenu() { open.value ? closeMenu() : openMenu() }

/* Keep nav visually fixed with Lenis by cancelling translateY only */
let offLenis
onMounted(() => {
  if (!$lenis || !navEl.value) return
  const startY = $lenis.scroll || 0
  navEl.value.style.transform = `translateY(${startY}px)`
  const onScroll = ({ scroll }) => {
    navEl.value.style.transform = `translateY(${scroll}px)`
  }
  $lenis.on('scroll', onScroll)
  offLenis = () => $lenis.off('scroll', onScroll)
})
onBeforeUnmount(() => { offLenis && offLenis() })
</script>

<style scoped>
.nav-link {
  position: relative;
  transition: color 0.3s ease;
}
.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -4px;
  height: 2px;
  width: 0;
  background: #1a1a1a;
  transition: width 0.3s ease;
}
.nav-link:hover::after { width: 100%; }
.active-link { color: #EF1525; font-weight: 600; }
.active-link-btn { text-decoration: underline; }
</style>
