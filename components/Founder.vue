<template>
    <div ref="root" class="w-full py-[80px] bg-[#ffb703]">
      <div class="max-w-[1190px] mx-auto">
        <div class="flex gap-[30px] justify-between">
          <!-- Media (left) -->
          <div class="w-[50%] text-[#1a1a1a]">
            <div ref="mediaRef" class="bg-round relative h-[100%] w-[100%] flex justify-between items-center">
              <div class="absolute z-[1] w-[300px] h-[300px] bg-[#ebff57] rounded-[50%]"></div>
              <!-- <div class="absolute  top-[50%] left-[50%]  w-[320px] h-[320px] bg-[#FFB800] rounded-[50%]"></div> -->
              <img class="z-[5]" src="../assets/images/sample.png" alt="">
            </div>
          </div>
  
          <!-- Copy (right) -->
          <div class="w-[50%] text-[#1a1a1a]">
            <AnimatedSplit
              ref="titleRef"
              tag="h2"
              wrap-class="uppercase text-[60px] leading-[1.2] pb-[30px] text-[#1a1a1a]"
              text="Our Founder"
              :duration="0.8"
              :char-stagger="0.02"
            />
  
            <p class="js-para text-[22px] text-[#1a1a1a] pb-[30px]">
              At Social Sparrow, we believe in the power of smart, meaningful connections. We are a passionate team of digital marketers, creative designers, and technology enthusiasts, driven by one mission — to help brands soar higher in the digital world.
            </p>
            <p class="js-para text-[22px] text-[#1a1a1a]">
              Founded with a vision to make digital marketing accessible, strategic, and result-oriented for businesses of all sizes, Social Sparrow offers end-to-end solutions that spark conversations, build communities, and drive growth. Whether you’re a startup finding your wings or an established brand aiming to scale new heights, we tailor our strategies to fit your unique goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
  import { useNuxtApp } from '#app'
  import AnimatedSplit from '~/components/AnimatedSplit.vue'
  
  const root = ref(null)
  const titleRef = ref(null)
  const mediaRef = ref(null)
  
  let st // ScrollTrigger instance
  
  onMounted(async () => {
    const { $gsap, $scrollTrigger } = useNuxtApp()
    const el = root.value
    if (!el) return
  
    // Ensure initial hidden states
    titleRef.value?.setInitial()
    const paras = Array.from(el.querySelectorAll('.js-para'))
    $gsap.set(paras, { opacity: 0, y: 16 })
    if (mediaRef.value) $gsap.set(mediaRef.value, { opacity: 0, y: 12, scale: 0.98 })
  
    // Timeline: title + paragraphs + media together
    const tl = $gsap.timeline({ paused: true })
    tl.add(() => titleRef.value?.play(), 0)
      .to(
        paras,
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', stagger: 0.1 },
        0.1
      )
      .to(
        mediaRef.value || {},
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power3.out' },
        0.05
      )
  
    // Trigger once when entering viewport
    st = $scrollTrigger.create({
      trigger: el,
      start: 'top 80%',
      once: true,
      onEnter: () => requestAnimationFrame(() => tl.play())
    })
  
    await nextTick()
    $scrollTrigger?.refresh()
  })
  
  onBeforeUnmount(() => {
    st?.kill()
    st = undefined
  })
  </script>
  
  <style scoped>
  /* No extra styles needed */
  </style>
  