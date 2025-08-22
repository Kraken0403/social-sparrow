<!-- ~/components/RouteOverlay.vue -->
<template>
    <div ref="el" class="route-overlay pointer-events-none"></div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import gsap from 'gsap'
  
  const el = ref(null)
  
  // expose controls to parent (layout)
  function inCover() {
    // from bottom -> cover screen
    return gsap.to(el.value, {
      yPercent: 0,
      duration: 0.55,
      ease: 'power2.out'
    }).then(() => {})
  }
  function outReveal() {
    // back down -> reveal new page
    return gsap.to(el.value, {
      yPercent: 150,
      duration: 0.55,
      ease: 'power2.in'
    }).then(() => {})
  }
  
  defineExpose({ inCover, outReveal })
  
  onMounted(() => {
    // start hidden (off screen bottom)
    gsap.set(el.value, { yPercent: 100 })
  })
  </script>
  
  <style scoped>
  .route-overlay {
    position: fixed;
    inset: 0;
    background: rgb(235, 235, 235); /* nearly black */
    z-index: 9999;
    /* border-radius: 3000px 3000px 0 0; */
  }
  </style>
  