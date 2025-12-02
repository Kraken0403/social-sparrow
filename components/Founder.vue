<template>
  <div ref="root" class="w-full py-[80px] bg-[#ffb703]">
    <div class="w-[90%] md:max-w-[1190px] mx-auto">
      <div class="flex flex-col md:flex-row gap-[30px] justify-between">

        <!-- Media (left) -->
        <div class="w-full md:w-[50%] text-[#1a1a1a]">
          <div
            ref="mediaRef"
            class="bg-round relative h-full w-full flex justify-between items-center"
          >
            <div class="absolute z-[1] w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] md:w-[300px] md:h-[300px] bg-[#ebff57] rounded-[50%]"></div>

            <img
              class="rounded-[20px] z-[5] w-full"
              src="../assets/images/nishi.jpg"
              alt=""
            />
          </div>
        </div>

        <!-- Copy (right) -->
        <div class="w-full md:w-[50%] text-[#1a1a1a] mt-[40px] md:mt-0">
          <AnimatedSplit
            ref="titleRef"
            tag="h2"
            wrap-class="uppercase text-[40px] sm:text-[48px] md:text-[60px] leading-[1.2] pb-[20px] md:pb-[30px] text-[#1a1a1a]"
            text="Our Founder"
            :duration="0.8"
            :char-stagger="0.02"
          />

          <p class="js-para text-[18px] sm:text-[20px] md:text-[22px] text-[#1a1a1a] pb-[20px] md:pb-[30px]">
            If Social Sparrow had a human form, it would be Nishi Tekchandani,
            because who else can juggle madness and marketing with the same energy?
            She’s allergic to boring work, obsessed with good ideas, and somehow
            always right about what will look better.
          </p>

          <p class="js-para text-[18px] sm:text-[20px] md:text-[22px] text-[#1a1a1a]">
            She brings the kind of creative energy that makes everything fall
            perfectly into place. Working with her feels effortless, but the ideas &
            results? Always sharp, always intentional.
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
  