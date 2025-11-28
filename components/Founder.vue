<template>
    <div ref="root" class="w-full py-[80px] bg-[#ffb703]">
      <div class="max-w-[1190px] mx-auto">
        <div class="flex gap-[30px] justify-between">
          <!-- Media (left) -->
          <div class="w-[50%] text-[#1a1a1a]">
            <div ref="mediaRef" class="bg-round relative h-[100%] w-[100%] flex justify-between items-center">
              <div class="absolute z-[1] w-[300px] h-[300px] bg-[#ebff57] rounded-[50%]"></div>
              <!-- <div class="absolute  top-[50%] left-[50%]  w-[320px] h-[320px] bg-[#FFB800] rounded-[50%]"></div> -->
              <img class="rounded-[20px] z-[5] w-[100%]" src="../assets/images/nishi.jpg" alt="">
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
              If Social Sparrow had a human form, it would be Nishi Tekchandani, because who else can juggle madness and marketing with the same energy? She’s allergic to boring work, obsessed with good ideas, and somehow always right about what will look better. 
            </p>
            <p class="js-para text-[22px] text-[#1a1a1a]">
              She brings the kind of creative energy that makes everything fall perfectly into place. Working with her feels effortless, but the ideas & results? Always sharp, always intentional.
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
  