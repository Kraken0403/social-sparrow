<template>
  <section ref="heroRoot" class="relative w-full min-h-[100vh] bg-[#ffd000] ">
    <div class="flex flex-col py-[100px] items-center max-w-[1190px] text-center mx-auto overflow-hidden">
      <!-- Title -->
      <AnimatedSplit
        ref="titleRef"
        tag="h1"
        wrap-class="relative z-[2] mb-[80px] mt-[40px] leading-[0.9] text-[clamp(40px,15vw,230px)] font-bold uppercase text-[#EF1525]"
        text="We Grow Brands from ‘0’ to Hero"
        :duration="1.0"
        :char-stagger="0.028"
      />

      <PressButton text="Know More" color="#EF1525" />
    </div>

    <div class="relative py-[30px] w-full bg-[#ffdd46] min-h-[100vh] rounded-t-[50%] pb-[130px]">
      <div class="text-center">
        <!-- <h2 class="text-[120px] mb-[40px] text-[#FF9900] leading-[0.9] uppercase ">Seize The Day</h2> -->
        <AnimatedSplit
          ref="seizeRef"
          tag="h2"
          wrap-class="mb-[40px] leading-[0.9] text-[clamp(36px,10vw,120px)] font-bold uppercase text-[#FF9900]"
          text="Seize The Day"
          :duration="0.9"
          :char-stagger="0.02"
        />

        <h2 class="text-center max-w-[700px] mx-auto text-[#ce630c] text-[32px] leading-[1]">
          From strategy to execution, Social Sparrow helps you connect, engage, and convert your audience—one powerful post at a time.
        </h2>
      </div>

      <div class="relative text-center mt-[60px]">

        <!-- Left small circle (parallax) -->
        <div class="circle-img parallax-circle absolute left-[10%] top-[15%]" data-speed="2.15">
          <div class="w-[170px] h-[170px] flex items-center justify-center border-[20px] border-white rounded-[50%] bg-transparent">
            <div class="w-[140px] h-[140px] flex items-center justify-center rounded-[50%] bg-[#ff0000] relative">
              <img class="rounded-[50%] w-full h-full object-cover" src="../assets/images/sample.png" alt="">
              <div class="stats-div flex gap-[10px] justify-between top-[80%] left-[20%] transform -translate-y-1/2 absolute w-auto text-left h-auto p-[10px] rounded-[12px] bg-white z-[100]">
                <ClientOnly>
                  <lord-icon
                    src="/icons/heart.json"
                    trigger="loop"
                    delay="2000"
                    :colors="'primary:#EF1525,secondary:#ffffff'"
                    class="w-[30px]"
                  ></lord-icon>
                </ClientOnly>
                <div class="counter flex items-baseline gap-0">
                  <span :ref="setCounterRef" data-target="2345" class="text-[#1a1a1a] text-[16px] font-semibold">0</span>
                  <span class="text-[16px] text-[#1a1a1a] font-semibold mr-[5px]">k</span>
                  <span class="text-[16px] text-[#1a1a1a]">Likes</span>
                </div>
              </div>
            </div>
          </div>
        </div>

         <!-- Center concentric circles (with custom classes for selection) -->
         <div class="concentric rounded-[50%] flex items-center justify-center w-[700px] h-[700px] bg-[#ffb70062] mx-auto relative">
          <div class="stats-div flex gap-[10px] justify-between top-[75%] right-[0%] transform -translate-y-1/2 absolute w-auto text-left h-auto p-[10px] rounded-[12px] bg-white z-[100]">
            <ClientOnly>
              <lord-icon
                src="/icons/heart.json"
                trigger="loop"
                delay="2000"
                :colors="'primary:#EF1525,secondary:#ffffff'"
                class="w-[30px]"
              ></lord-icon>
            </ClientOnly>
            <div class="counter flex items-baseline gap-0">
              <span :ref="setCounterRef" data-target="987" class="text-[#1a1a1a] text-[16px] font-semibold">0</span>
              <span class="text-[16px] text-[#1a1a1a] font-semibold mr-[5px]">k</span>
              <span class="text-[16px] text-[#1a1a1a]">Likes</span>
            </div>
          </div>

          <!-- mid circle -->
          <div class="concentric__mid rounded-[50%] flex items-center justify-center overflow-hidden w-[600px] h-[600px] bg-[#ef1524]/35 mx-auto">
            <!-- inner circle -->
            <div class="concentric__inner rounded-[50%] relative overflow-hidden w-[500px] h-[500px] bg-[#00B6FF] mx-auto">
              <img class="concentric__img w-full h-full object-cover" src="../assets/images/sample.png" alt="">
            </div>
          </div>
        </div>

        <!-- Right small circle (parallax) -->
        <div class="circle-img parallax-circle absolute left-[80%] top-[55%]" data-speed="1.5">
          <div class="w-[120px] h-[120px] flex items-center justify-center border-[20px] border-white rounded-[50%] bg-transparent">
            <div class="w-[90px] h-[90px] flex items-center justify-center rounded-[50%] bg-[#ff0000] relative">
              <img class="rounded-[50%] w-full h-full object-cover" src="../assets/images/sample.png" alt="">
              <div class="stats-div flex gap-[10px] justify-between top-[80%] left-[20%] transform -translate-y-1/2 absolute w-auto text-left h-auto p-[10px] rounded-[12px] bg-white z-[100]">
                <ClientOnly>
                  <lord-icon
                    src="/icons/heart.json"
                    trigger="loop"
                    delay="2000"
                    :colors="'primary:#EF1525,secondary:#ffffff'"
                    class="w-[30px]"
                  ></lord-icon>
                </ClientOnly>
                <div class="counter flex items-baseline gap-0">
                  <span :ref="setCounterRef" data-target="1560" class="text-[#1a1a1a] text-[16px] font-semibold">0</span>
                  <span class="text-[16px] text-[#1a1a1a] font-semibold mr-[5px]">k</span>
                  <span class="text-[16px] text-[#1a1a1a]">Likes</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div> <!-- /relative text-center -->
    </div> <!-- /yellow rounded section -->
  </section>
</template>

<script setup>
import { ref, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { useNuxtApp } from '#app'
import PressButton from '@/components/ui/PressButton.vue'
import AnimatedSplit from '~/components/AnimatedSplit.vue'
import { useIntroState } from '~/composables/useIntroState'

/** ---------- Animated title control (after preloader) ---------- */
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

/** ---------- Animate "Seize The Day" when in view ---------- */
const seizeRef = ref(null)
let seizeST // ScrollTrigger instance for cleanup

function initSeizeInView() {
  const { $gsap, $scrollTrigger } = useNuxtApp()

  seizeST?.kill()
  seizeST = undefined

  const triggerEl = seizeRef.value?.$el
  if (!triggerEl) return

  seizeRef.value?.setInitial()

  seizeST = $gsap.to({}, {
    scrollTrigger: {
      trigger: triggerEl,
      start: 'top 80%',
      once: true,
      onEnter: () => requestAnimationFrame(() => seizeRef.value?.play()),
    }
  }).scrollTrigger

  $scrollTrigger?.refresh()
}

/** ---------- Counters (intersection once) ---------- */
let observer
const counterEls = []
function setCounterRef(el) { if (el) counterEls.push(el) }
function animateCount(el, to, duration = 1200) {
  const from = 0
  const start = performance.now()
  function tick(now) {
    const t = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - t, 3) // easeOutCubic
    el.textContent = Math.floor(from + (to - from) * eased).toLocaleString()
    if (t < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

/** ---------- PARALLAX: faster-scroll side circles ---------- */
const heroRoot = ref(null)
let circleTriggers = []

function initParallaxCircles() {
  const { $gsap, $scrollTrigger } = useNuxtApp()

  circleTriggers.forEach(t => t?.kill())
  circleTriggers = []

  const els = Array.from(heroRoot.value?.querySelectorAll('.parallax-circle') || [])
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
        // markers: true,
      }
    })
    circleTriggers.push(tween.scrollTrigger)
  })

  $scrollTrigger?.refresh()
}

/** ---------- CONCENTRIC CIRCLES INTRO (bouncy then stagger) ---------- */
let concentricTL

function initConcentricIntro() {
  const { $gsap, $scrollTrigger } = useNuxtApp()

  concentricTL?.scrollTrigger?.kill()
  concentricTL?.kill()
  concentricTL = undefined

  if (!heroRoot.value) { $scrollTrigger?.refresh(); return }

  // Use custom classes (no Tailwind selectors)
  const outer = heroRoot.value.querySelector('.concentric')
  const mid   = outer?.querySelector('.concentric__mid')
  const inner = outer?.querySelector('.concentric__inner')
  const img   = outer?.querySelector('.concentric__img')

  if (!outer || !mid || !inner || !img) { $scrollTrigger?.refresh(); return }

  // Initial hidden state to avoid flicker
  $gsap.set([outer, mid, inner, img], {
    transformOrigin: '50% 50%',
    scale: 0.6,
    opacity: 0,
    willChange: 'transform, opacity'
  })

  // Build timeline that fires when outer is in view
  concentricTL = $gsap.timeline({
    scrollTrigger: {
      trigger: outer,
      start: 'top 75%',
      once: true,
      // markers: true,
    }
  })

  // 1) Backmost (outer) bouncy pop
  concentricTL.to(outer, {
    scale: 1,
    opacity: 1,
    duration: 0.9,
    ease: 'elastic.out(1, 0.5)'
  })

  // 2) Then mid + inner + image with a slight stagger
  concentricTL
    .to([mid, inner], {
      scale: 1,
      opacity: 1,
      duration: 0.7,
      ease: 'back.out(1.6)',
      stagger: 0.12
    }, '-=0.25')
    .fromTo(img, { opacity: 0, scale: 1.06 }, {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: 'power2.out'
    }, '<')

  $scrollTrigger?.refresh()
}

/** ---------- OPTIONAL: change Lenis speed/feel at runtime ---------- */
function setScrollFeel({ duration, wheelMultiplier, touchMultiplier } = {}) {
  const { $lenis } = useNuxtApp()
  if (!$lenis) return
  if (typeof duration === 'number') $lenis.options.duration = duration
  if (typeof wheelMultiplier === 'number') $lenis.options.wheelMultiplier = wheelMultiplier
  if (typeof touchMultiplier === 'number') $lenis.options.touchMultiplier = touchMultiplier
  $lenis.raf(performance.now())
}

/** ---------- Mount / Unmount ---------- */
onMounted(() => {
  // init counters
  if (counterEls.length) {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target
          const target = Number(el.dataset.target || '0')
          animateCount(el, target, 1200)
          observer.unobserve(el)
        }
      })
    }, { threshold: 0.4 })
    counterEls.forEach((el) => observer.observe(el))
  }

  // init parallax, H2 in-view, and concentric intro
  initParallaxCircles()
  initSeizeInView()
  initConcentricIntro()
})

onBeforeUnmount(() => {
  if (observer) {
    counterEls.forEach((el) => observer.unobserve(el))
    observer.disconnect()
  }
  circleTriggers.forEach(t => t?.kill())
  circleTriggers = []
  seizeST?.kill()
  seizeST = undefined
  concentricTL?.scrollTrigger?.kill()
  concentricTL?.kill()
  concentricTL = undefined
})
</script>

<style scoped>
.parallax-circle { will-change: transform; }
</style>
