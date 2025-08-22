<template>
  <section ref="servicesHero" class="relative services-hero w-full">
    <div class="services-title">
      <!-- Animated Title -->
      <AnimatedSplit
        ref="titleRef"
        :text="'Our Services'"
        tag="h1"
        class="title-split"
        :duration="0.9"
        :char-stagger="0.028"
        :autoplay="false"
      />
      <!-- Animated Subtitle -->
      <AnimatedSplit
        ref="subtitleRef"
        :text="'Check us out and what we do'"
        tag="p"
        class="subtitle-split"
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

/* Single source of truth for starting the splits */
let lastRunAt = 0
function runSplits() {
  const now = performance.now()
  if (now - lastRunAt < 250) return // debounce duplicate fires
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
  // called after overlay reveal + also once on first paint from layout
  runSplits()
}

onMounted(() => {
  document.addEventListener('ss:page-enter', onPageEnter)
})

onBeforeUnmount(() => {
  document.removeEventListener('ss:page-enter', onPageEnter)
})
</script>

<style scoped>
.services-hero {
  position: relative;
  height: 85vh;
  background: #897bff; /* tweak as needed */
  overflow: hidden;
}

.services-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 1;
  text-align: center;
}

/* Sizes/weights for AnimatedSplit nodes */
.title-split {
  font-size: clamp(56px, 12vw, 220px);
  line-height: 0.9;
  text-transform: uppercase;
  font-weight: 800;
  color: #1a1a1a;
}
.subtitle-split {
  padding-top: 30px;
  font-size: clamp(16px, 2vw, 22px);
  color: #1a1a1a;
}
</style>
