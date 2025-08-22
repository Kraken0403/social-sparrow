<template>
    <component :is="tag" ref="root" :class="wrapClass">
      <!-- Word wrapper with 1em tall clip box -->
      <span v-for="(letters, wi) in words" :key="`w-${wi}`" class="inline-block align-top">
        <span class="word-clip">
          <span class="word inline-block">
            <span
              v-for="(ch, ci) in letters"
              :key="`c-${wi}-${ci}`"
              class="char inline-block"
            >{{ ch }}</span>
          </span>
        </span>
        <!-- natural space after each word -->
        <span class="inline-block" aria-hidden="true">&nbsp;</span>
      </span>
  
      <span class="sr-only">{{ text }}</span>
    </component>
  </template>
  
  <script setup>
  import { ref, computed, nextTick, onMounted } from 'vue'
  import { useNuxtApp } from '#app'
  
  const props = defineProps({
    text: { type: String, required: true },
    tag: { type: String, default: 'h1' },
    wrapClass: { type: String, default: 'leading-[1.05] tracking-tight' },
    duration: { type: Number, default: 0.9 },
    charStagger: { type: Number, default: 0.02 },
    ease: { type: String, default: 'power3.out' }
  })
  
  const root = ref(null)
  // split per word -> array of chars
  const words = computed(() => props.text.split(' ').map(w => Array.from(w)))
  
  async function setInitial() {
    await nextTick()
    const { $gsap } = useNuxtApp()
    const chars = root.value?.querySelectorAll('.char')
    if (!chars?.length) return
    // start hidden below the clip (1em tall)
    $gsap.killTweensOf(chars)
    $gsap.set(chars, { y: '1em', opacity: 0 })
  }
  
  async function play() {
    await setInitial()
    const { $gsap } = useNuxtApp()
    const chars = root.value?.querySelectorAll('.char')
    if (!chars?.length) return
    // animate up into the 1em clip
    requestAnimationFrame(() => {
      $gsap.to(chars, {
        y: '0em',
        opacity: 1,
        duration: props.duration,
        stagger: props.charStagger,
        ease: props.ease,
        clearProps: 'transform' // keep opacity:1 so it doesn’t vanish after
      })
    })
  }
  
  onMounted(setInitial)
  defineExpose({ play, setInitial })
  </script>
  
  <style scoped>
  /* The clip: exactly one line tall, hides overflow, aligns nicely */
  .word-clip {
    display: inline-block;
    overflow: hidden;
    height: 0.9em;
    line-height: 0.9;
    vertical-align: top;
  }
  
  .char {
    will-change: transform, opacity;
  }
  </style>
  