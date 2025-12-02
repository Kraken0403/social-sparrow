<template>
  <section ref="heroRoot" class="relative w-full min-h-[100vh] bg-[#ffb703] ">
    <div class="flex flex-col md:py-[130px] py-[60px] items-center max-w-[1190px] text-center mx-auto overflow-hidden">
      <!-- Title -->
      <AnimatedSplit
        ref="titleRef"
        tag="h1"
        wrap-class="relative z-[2] mt-[70px] mb-[30px] md:mb-[80px] md:mt-[40px] leading-[0.9] 
                     text-[clamp(40px,11vw,120px)] font-bold uppercase 
                     text-[#023047]"
        text="Your brand has a voice. We make sure it’s heard."
        :duration="1.0"
        :char-stagger="0.028"
      />

      <PressButton link="/about" text="Know More" color="#EF1525" />
    </div>

    <div class="relative pt-[60px] pb-[60px] md:pt-[130px] md:pb-[130px] w-full bg-[#ffdd46] min-h-[100vh] yellow-section">

      <div class="text-center">
        <AnimatedSplit
          ref="seizeRef"
          tag="h2"
          wrap-class="mb-[40px] mx-auto leading-[0.9] 
                      text-[clamp(36px,8vw,62px)] font-bold uppercase 
                      text-[#023047] w-[70%]"
          text="we don’t just manage brands, we give them wings. 🪶"
          :duration="0.9"
          :char-stagger="0.02"
        />

        <p class="text-center max-w-[90%] md:max-w-[700px] mx-auto text-[#2e5369] 
                  text-[20px] sm:text-[22px] md:text-[26px]
                  leading-[1.1] font-bold">
          Think of us as your creative partner who dreams with you, plans for you, 
          and executes like magic. From scroll-stopping content to out of the box 
          designs, campaigns & experiences, we make sure your brand doesn’t just 
          show up, it shows off.
        </p>
      </div>

      <div class="relative text-center mt-[60px]">

        <!-- LEFT CIRCLE (hidden on mobile) -->
        <div class="circle-wrapper absolute left-[10%] top-[15%] hidden md:block">
          <div class="circle-img parallax-circle" data-speed="2.15">
            <div class="w-[170px] h-[170px] 
                        sm:w-[150px] sm:h-[150px] 
                        md:w-[170px] md:h-[170px]
                        flex items-center justify-center 
                        border-[20px] border-white rounded-full">
              <!-- make this wrapper relative so stats can absolutely position without being clipped -->
              <div class="relative w-full h-full flex items-center justify-center">
                <!-- IMAGE CIRCLE ONLY is overflow-hidden -->
                <div class="w-[120px] h-[120px] 
                            sm:w-[120px] sm:h-[120px] 
                            md:w-[140px] md:h-[140px]
                            rounded-full bg-[#ff0000] overflow-hidden">
                  <img class="rounded-full w-full h-full object-cover" 
                       src="../assets/images/nishi-2.jpg" alt="">
                </div>

                <!-- STATS: now sibling of image, NOT inside overflow-hidden -->
                <div class="stats-div flex gap-[10px] items-center
                            absolute top-[85%] left-1/4 
                            -translate-y-1/2 bg-white p-[10px] rounded-[12px] z-[10]">
                  <ClientOnly>
                    <lord-icon
                      src="/icons/heart.json"
                      trigger="loop"
                      delay="2000"
                      :colors="'primary:#EF1525,secondary:#ffffff'"
                      class="w-[28px]"
                    ></lord-icon>
                  </ClientOnly>

                  <div class="counter flex items-baseline gap-0">
                    <span :ref="setCounterRef" data-target="2345" 
                          class="text-[#1a1a1a] text-[16px] font-semibold">0</span>
                    <span class="text-[16px] font-semibold mr-[5px]">k</span>
                    <span class="text-[16px]">Likes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- CENTER CONCENTRIC (mobile-first sizing) -->
        <div class="concentric rounded-full flex items-center justify-center
                    w-[260px] h-[260px]
                    sm:w-[320px] sm:h-[320px]
                    md:w-[520px] md:h-[520px]
                    lg:w-[700px] lg:h-[700px]
                    bg-[#ffb70062] mx-auto relative">

          <div class="stats-div flex gap-[10px] items-center
                      absolute top-[75%] right-0 
                      -translate-y-1/2 bg-white p-[10px] rounded-[12px] z-[10]">
            <ClientOnly>
              <lord-icon
                src="/icons/heart.json"
                trigger="loop"
                delay="2000"
                :colors="'primary:#EF1525,secondary:#ffffff'"
                class="w-[28px]"
              ></lord-icon>
            </ClientOnly>

            <div class="counter flex items-baseline gap-0">
              <span :ref="setCounterRef" data-target="987" 
                    class="text-[#1a1a1a] text-[16px] font-semibold">0</span>
              <span class="text-[16px] font-semibold mr-[5px]">k</span>
              <span class="text-[16px]">Likes</span>
            </div>
          </div>

          <!-- MID -->
          <div class="concentric__mid rounded-full flex items-center justify-center overflow-hidden
                      w-[220px] h-[220px]
                      sm:w-[280px] sm:h-[280px]
                      md:w-[450px] md:h-[450px]
                      lg:w-[600px] lg:h-[600px]
                      bg-[#ef1524]/35">
            
            <!-- INNER -->
            <div class="concentric__inner rounded-full overflow-hidden relative
                        w-[180px] h-[180px]
                        sm:w-[240px] sm:h-[240px]
                        md:w-[360px] md:h-[360px]
                        lg:w-[500px] lg:h-[500px]
                        bg-[#00B6FF]">

              <img class="concentric__img w-full h-full object-cover"
                   src="../assets/images/nishi.jpg" alt="">
            </div>
          </div>
        </div>

        <!-- RIGHT CIRCLE (hidden on mobile) -->
        <div class="circle-wrapper absolute left-[80%] top-[55%] hidden md:block lg:block">
          <div class="circle-img parallax-circle" data-speed="1.5">
            <div class="w-[120px] h-[120px] 
                        sm:w-[110px] sm:h-[110px]
                        md:w-[120px] md:h-[120px]
                        flex items-center justify-center 
                        border-[20px] border-white rounded-full">
              
              <!-- relative wrapper to position stats -->
              <div class="relative w-full h-full flex items-center justify-center">
                <!-- IMAGE CIRCLE ONLY is overflow-hidden -->
                <div class="w-[90px] h-[90px] 
                            sm:w-[85px] sm:h-[85px]
                            md:w-[90px] md:h-[90px]
                            rounded-full bg-[#ff0000] overflow-hidden">

                  <img class="rounded-full w-full h-full object-cover"
                       src="../assets/images/nishi-3.jpg" alt="">
                </div>

                <!-- STATS moved out of overflow-hidden -->
                <div class="stats-div flex gap-[10px] items-center
                            absolute top-[85%] left-1/4 
                            -translate-y-1/2 bg-white p-[10px] rounded-[12px] z-[10]">
                  <ClientOnly>
                    <lord-icon
                      src="/icons/heart.json"
                      trigger="loop"
                      delay="2000"
                      :colors="'primary:#EF1525,secondary:#ffffff'"
                      class="w-[28px]"
                    ></lord-icon>
                  </ClientOnly>

                  <div class="counter flex items-baseline gap-0">
                    <span :ref="setCounterRef" data-target="1560" 
                          class="text-[#1a1a1a] text-[16px] font-semibold">0</span>
                    <span class="text-[16px] font-semibold mr-[5px]">k</span>
                    <span class="text-[16px]">Likes</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div> <!-- relative -->
    </div> <!-- yellow-section -->
  </section>
</template>


<script setup>
import { useEventBus } from '@vueuse/core'
import { ref, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { useNuxtApp } from '#app'
import PressButton from '@/components/ui/PressButton.vue'
import AnimatedSplit from '~/components/AnimatedSplit.vue'
import { useIntroState } from '~/composables/useIntroState'

/* --------------------------------------------------
   EVENT BUS (Preloader Done)
-------------------------------------------------- */
const preloaderDoneBus = useEventBus('preloaderDone')


/* --------------------------------------------------
   TITLE ANIMATION AFTER INTRO
-------------------------------------------------- */
const titleRef = ref(null)
const { isIntroDone, introKey } = useIntroState()

function runTitle() {
  nextTick(() => {
    titleRef.value?.setInitial()
    requestAnimationFrame(() => titleRef.value?.play())
  })
}

watch(isIntroDone, (v) => { if (v) runTitle() })
watch(introKey, () => runTitle())
onMounted(() => { if (isIntroDone.value) runTitle() })


/* --------------------------------------------------
   H2 ANIMATION WHEN IN VIEW
-------------------------------------------------- */
const seizeRef = ref(null)
let seizeST = null

function initSeizeInView() {
  const { $gsap, $scrollTrigger } = useNuxtApp()

  if (seizeST) {
    seizeST.kill()
    seizeST = null
  }

  const el = seizeRef.value?.$el
  if (!el) return

  seizeRef.value?.setInitial()

  seizeST = $gsap.to({}, {
    scrollTrigger: {
      trigger: el,
      start: 'top 80%',
      once: true,
      onEnter: () => requestAnimationFrame(() => seizeRef.value?.play()),
      // markers: true
    }
  }).scrollTrigger

  $scrollTrigger?.refresh()
}


/* --------------------------------------------------
   COUNTERS (Start ONLY when visible AND after preloader)
-------------------------------------------------- */
let observer = null
const counterEls = []

function setCounterRef(el) {
  if (el) counterEls.push(el)
}

function animateCount(el, to, duration = 1200) {
  const from = 0
  const start = performance.now()

  function tick(now) {
    const t = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - t, 3)
    el.textContent = Math.floor(from + (to - from) * eased).toLocaleString()
    if (t < 1) requestAnimationFrame(tick)
  }

  requestAnimationFrame(tick)
}


/* --------------------------------------------------
   PARALLAX SIDE CIRCLES
-------------------------------------------------- */
const heroRoot = ref(null)
let circleTriggers = []

function initParallaxCircles() {
  const { $gsap, $scrollTrigger } = useNuxtApp()

  circleTriggers.forEach(t => t?.kill())
  circleTriggers = []

  const els = Array.from(
    heroRoot.value?.querySelectorAll('.circle-wrapper .parallax-circle') || []
  )
  if (!els.length) return

  els.forEach((node) => {
    const speed = parseFloat(node.getAttribute('data-speed') || '1.25')

    const tween = $gsap.to(node, {
      y: () => -window.innerHeight * 0.28 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: node,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    })

    circleTriggers.push(tween.scrollTrigger)
  })

  $scrollTrigger?.refresh()
}


/* --------------------------------------------------
   FIX FOR TAILWIND WIDTH/HEIGHT OVERRIDE
-------------------------------------------------- */
function forceTailwindSizes(el) {
  if (!el) return
  el.style.width = ''
  el.style.height = ''
  el.style.maxWidth = ''
  el.style.maxHeight = ''
}


/* --------------------------------------------------
   CONCENTRIC CIRCLE INTRO
-------------------------------------------------- */
let concentricTL = null

function initConcentricIntro() {
  const { $gsap, $scrollTrigger } = useNuxtApp()

  if (concentricTL) {
    concentricTL.scrollTrigger?.kill()
    concentricTL.kill()
    concentricTL = null
  }

  if (!heroRoot.value) return

  const outer = heroRoot.value.querySelector('.concentric')
  const mid = outer?.querySelector('.concentric__mid')
  const inner = outer?.querySelector('.concentric__inner')
  const img = outer?.querySelector('.concentric__img')

  if (!outer || !mid || !inner || !img) return

  $gsap.set([outer, mid, inner, img], {
    transformOrigin: '50% 50%',
    scale: 0.6,
    opacity: 0,
    willChange: 'transform, opacity'
  })

  requestAnimationFrame(() => {
    forceTailwindSizes(outer)
    forceTailwindSizes(mid)
    forceTailwindSizes(inner)
    forceTailwindSizes(img)
  })

  concentricTL = $gsap.timeline({
    scrollTrigger: {
      trigger: outer,
      start: 'top 75%',
      once: true,
    }
  })

  concentricTL.to(outer, {
    scale: 1,
    opacity: 1,
    duration: 0.9,
    ease: 'elastic.out(1, 0.5)'
  })

  concentricTL
    .to([mid, inner], {
      scale: 1,
      opacity: 1,
      duration: 0.7,
      ease: 'back.out(1.6)',
      stagger: 0.12
    }, '-=0.25')
    .fromTo(img,
      { opacity: 0, scale: 1.06 },
      { opacity: 1, scale: 1, duration: 0.6, ease: 'power2.out' },
      '<'
    )

  $scrollTrigger?.refresh()
}


/* --------------------------------------------------
   MOUNT — WAIT FOR PRELOADER BEFORE ANYTHING
-------------------------------------------------- */
onMounted(() => {
  preloaderDoneBus.on(() => {
    // COUNTERS — only after preloader + only when visible
    if (counterEls.length) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target
            animateCount(el, Number(el.dataset.target || '0'))
            observer.unobserve(el)
          }
        })
      }, { threshold: 0.4 })

      counterEls.forEach((el) => observer.observe(el))
    }

    // Other animations
    initParallaxCircles()
    initSeizeInView()
    initConcentricIntro()
  })
})


/* --------------------------------------------------
   CLEANUP
-------------------------------------------------- */
onBeforeUnmount(() => {
  if (observer) {
    counterEls.forEach((el) => observer.unobserve(el))
    observer.disconnect()
  }

  circleTriggers.forEach(t => t?.kill())
  circleTriggers = []

  seizeST?.kill()
  seizeST = null

  concentricTL?.scrollTrigger?.kill()
  concentricTL?.kill()
  concentricTL = null
})
</script>


<style>
.parallax-circle { will-change: transform; }

.yellow-section {
  border-top-left-radius: 0%;
  border-top-right-radius: 0%;
}

@media (min-width: 768px) {
  .yellow-section {
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
  }
}
</style>
