<template>
  <div
    ref="root"
    class="relative w-full bg-[#d3e4cd] py-[80px] border-t-[1px] border-[#1a1a1a]"
  >
    <div
      class="w-[90%] md:max-w-[1190px] mx-auto"
    >
      <div
        class="flex flex-col md:flex-row gap-[30px] justify-between"
      >
        <!-- Title -->
        <div class="w-full md:w-[50%] text-[#1a1a1a]">
          <AnimatedSplit
            ref="titleRef"
            tag="h2"
            wrap-class="uppercase text-[32px] sm:text-[36px] md:text-[42px] leading-[1.2] text-[#1a1a1a]"
            text="Social Sparrow - Your partner in digital growth"
            :duration="0.8"
            :char-stagger="0.02"
          />
        </div>

        <!-- Paragraphs -->
        <div class="w-full md:w-[50%]">
          <p
            class="js-para text-[18px] sm:text-[20px] md:text-[22px] text-[#1a1a1a] pb-[20px] md:pb-[30px]"
          >
            At Social Sparrow, we believe in the power of smart, meaningful
            connections. We are a passionate team of digital marketers, creative
            designers, and technology enthusiasts, driven by one mission — to help
            brands soar higher in the digital world.
          </p>

          <p
            class="js-para text-[18px] sm:text-[20px] md:text-[22px] text-[#1a1a1a]"
          >
            Founded with a vision to make digital marketing accessible, strategic,
            and result-oriented for businesses of all sizes, Social Sparrow offers
            end-to-end solutions that spark conversations, build communities, and
            drive growth. Whether you’re a startup finding your wings or an
            established brand aiming to scale new heights, we tailor our strategies
            to fit your unique goals.
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
  
  let st // ScrollTrigger for cleanup
  
  onMounted(async () => {
    const { $gsap, $scrollTrigger } = useNuxtApp()
    const el = root.value
    if (!el) return
  
    // Ensure title starts hidden
    titleRef.value?.setInitial()
  
    // Paragraphs start hidden
    const paras = Array.from(el.querySelectorAll('.js-para'))
    $gsap.set(paras, { opacity: 0, y: 16 })
  
    // Build a timeline that plays both title + paragraphs together
    const tl = $gsap.timeline({ paused: true })
    tl.add(() => titleRef.value?.play(), 0)
      .to(
        paras,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.1
        },
        0.1 // starts almost together with the title
      )
  
    // Trigger once when section enters view
    st = $scrollTrigger.create({
      trigger: el,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        // wait one frame so DOM is stable
        requestAnimationFrame(() => tl.play())
      }
    })
  
    // If something shifts layout, keep ST happy
    await nextTick()
    $scrollTrigger?.refresh()
  })
  
  onBeforeUnmount(() => {
    st?.kill()
    st = undefined
  })
  </script>
  
  <style scoped>
  /* no extra styles needed */
  </style>
  