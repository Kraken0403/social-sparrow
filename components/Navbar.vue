<template>
  <nav
    ref="navEl"
    class="fixed top-[8px] left-0 right-0 mx-auto w-[98%] rounded-[8px]
           z-[100] bg-[#f5f5f5]/70 backdrop-blur-md shadow-lg will-change-transform"
  >
    <div class="max-w-full mx-auto px-[30px] py-[15px] flex items-center justify-between">
      
      <!-- Logo -->
      <NuxtLink to="/">
        <img class="w-[160px] md:w-[200px]" src="../assets/images/svg-logo.svg" alt="Logo">
      </NuxtLink>

      <!-- Desktop Nav -->
      <div class="hidden lg:flex items-center space-x-[45px]">
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

      <!-- Hamburger -->
      <button
        @click="toggleMenu"
        aria-label="Toggle menu"
        class="lg:hidden focus:outline-none z-[100]"
      >
        <!-- Hamburger -->
        <svg v-if="!open" xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
        </svg>

        <!-- Cross -->
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </nav>

  <!-- MOBILE SLIDE-IN MENU -->
  <Teleport to="body">
  <div
    v-if="open"
    ref="menuPanel"
    class="fixed inset-0 z-[9999] bg-[#EF1525]
           flex flex-col justify-center items-center lg:hidden"
  >

    <!-- CLOSE ICON -->
    <button
      @click="toggleMenu"
      aria-label="Close menu"
      class="absolute top-[20px] right-[20px] text-white z-[10000]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

    <!-- MENU -->
    <nav class="flex flex-col space-y-[40px] text-center">
      <NuxtLink to="/" @click="toggleMenu" class="text-white font-bold uppercase">
        <h2 class="text-[32px]">Home</h2>
      </NuxtLink>
      <NuxtLink to="/about" @click="toggleMenu" class="text-white font-bold uppercase">
        <h2 class="text-[32px]">About</h2>
      </NuxtLink>
      <NuxtLink to="/services" @click="toggleMenu" class="text-white font-bold uppercase">
        <h2 class="text-[32px]">Services</h2>
      </NuxtLink>
      <NuxtLink to="/contact" @click="toggleMenu" class="text-white font-bold uppercase">
        <h2 class="text-[32px]">Contact</h2>
      </NuxtLink>
    </nav>

  </div>
</Teleport>


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
  $lenis?.stop()

  nextTick(() => {
    $gsap.fromTo(
      menuPanel.value,
      { xPercent: 100 },
      { xPercent: 0, duration: 0.45, ease: 'power2.out' }
    )
  })
}

function closeMenu() {
  $gsap.to(menuPanel.value, {
    xPercent: 100,
    duration: 0.4,
    ease: 'power2.in',
    onComplete: () => {
      open.value = false
      $lenis?.start()
    }
  })
}

function toggleMenu() {
  open.value ? closeMenu() : openMenu()
}

/* Lenis keep navbar fixed */
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

onBeforeUnmount(() => {
  offLenis && offLenis()
})
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
.nav-link:hover::after {
  width: 100%;
}
.active-link {
  color: rgb(2 48 71 / var(--tw-text-opacity, 1));
  font-weight: 600;
}
.active-link-btn {
  text-decoration: underline;
}
</style>
