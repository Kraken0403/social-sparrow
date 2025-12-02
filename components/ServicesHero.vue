<template>
  <section
    ref="servicesHero"
    class="
      relative w-full overflow-hidden
      h-[60vh] md:h-[75vh] lg:h-[100vh]
      bg-[#457b9d]
    "
  >
    <!-- Centered Title Block -->
    <div
      class="
        absolute top-1/2 left-1/2 
        -translate-x-1/2 -translate-y-1/2 
        pointer-events-none z-[1] 
        text-center w-[90%]
      "
    >
      <!-- Animated Title -->
      <AnimatedSplit
        ref="titleRef"
        :text="'Our Services'"
        tag="h1"
        class="
          leading-[0.9] 
          uppercase
          text-[clamp(40px,15vw,140px)]
          font-extrabold 
          text-[#1a1a1a]
        "
        :duration="0.9"
        :char-stagger="0.028"
        :autoplay="false"
      />

      <!-- Animated Subtitle -->
      <AnimatedSplit
        ref="subtitleRef"
        :text="'Check us out and what we do'"
        tag="p"
        class="
          pt-[20px] 
          text-[clamp(16px,2vw,22px)] 
          text-[#1a1a1a]
        "
        :duration="0.7"
        :char-stagger="0.02"
        :autoplay="false"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import AnimatedSplit from '@/components/AnimatedSplit.vue'

const servicesHero = ref(null)
const titleRef = ref(null)
const subtitleRef = ref(null)

let lastRunAt = 0
function runSplits() {
  const now = performance.now()
  if (now - lastRunAt < 250) return
  lastRunAt = now

  nextTick(() => {
    titleRef.value?.setInitial()
    subtitleRef.value?.setInitial()
    requestAnimationFrame(() => {
      titleRef.value?.play()
      setTimeout(() => subtitleRef.value?.play(), 100)
    })
  })
}

function onPageEnter() {
  runSplits()
}

onMounted(() => {
  document.addEventListener('ss:page-enter', onPageEnter)
})

onBeforeUnmount(() => {
  document.removeEventListener('ss:page-enter', onPageEnter)
})
</script>

<!-- No style tag needed -->
