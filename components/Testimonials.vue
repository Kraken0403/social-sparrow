<template>
  <section ref="rootRef" class="relative w-full bg-[#75C0FE] py-[80px]">
    <div class="text-center max-w-[1190px] mx-auto">
      <!-- Title animates like WWD via AnimatedSplit -->
      <AnimatedSplit
        ref="titleRef"
        tag="h2"
        wrap-class="uppercase text-[120px] text-[#1a1a1a] leading-[1]"
        text="Testimonials"
        :duration="0.9"
        :char-stagger="0.02"
      />

      <div class="mt-[65px] t-grid grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-[40px] px-0">
        <div
          v-for="test in testimonials"
          :key="test.name"
          class="t-card relative border-[1px] border-[#1a1a1a] rounded-[45px] overflow-hidden py-[60px] px-[60px] shadow-[0_8px_0_0_rgba(0,0,0,0.8)]"
          :class="test.bg"
        >
          <!-- headshot -->
          <div class="card-header flex items-center justify-between">
            <div class="headshot flex items-center gap-[15px]">
              <img :src="test.photo" alt="" class="w-[48px] h-[48px] border-1 rounded-[100%] object-cover" />
              <div>
                <h3 class="text-[22px] font-bold text-[#1a1a1a] text-left">{{ test.name }}</h3>
                <p class="text-sm text-[#1a1a1a] text-left">{{ test.title }}</p>
              </div>
            </div>

            <!-- LinkedIn icon -->
            <a :href="test.linkedin" target="_blank" class="">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 fill-black" viewBox="0 0 24 24">
                <path
                  d="M4.98 3.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zm.02 4.5H2v14h6v-14H5zm7.5 0h-2v14h6v-7c0-3-4-2.75-4 0v7h2v-7c0-1.5 2-1.5 2 0v7h2v-7c0-3-4-2.75-4 0v7h2V8z"
                />
              </svg>
            </a>
          </div>

          <!-- divider -->
          <hr class="my-[30px] border-t border-[#1a1a1a]" />

          <!-- quote -->
          <p class="text-[16px] text-left text-[#1a1a1a]">{{ test.quote }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useNuxtApp } from '#app'
import AnimatedSplit from '~/components/AnimatedSplit.vue'

const rootRef = ref(null)
const titleRef = ref(null)

let titleST // ScrollTrigger instance for title
let cardsTL // GSAP timeline for cards

function initTitleInView() {
  const { $gsap, $scrollTrigger } = useNuxtApp()

  // cleanup first
  titleST?.kill()
  titleST = undefined

  const el = titleRef.value?.$el
  if (!el) return

  // ensure hidden state before entering
  titleRef.value?.setInitial?.()

  // animate when heading enters viewport
  titleST = $gsap
    .to({}, {
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        once: true,
        onEnter: () => titleRef.value?.play(),
      },
    })
    .scrollTrigger

  $scrollTrigger?.refresh()
}

function initCardsInView() {
  const { $gsap, $scrollTrigger } = useNuxtApp()

  // cleanup
  cardsTL?.scrollTrigger?.kill()
  cardsTL?.kill()
  cardsTL = undefined

  if (!rootRef.value) return
  const grid = rootRef.value.querySelector('.t-grid')
  if (!grid) return
  const cards = Array.from(grid.querySelectorAll('.t-card'))
  if (!cards.length) return

  // initial state to avoid flicker
  $gsap.set(cards, {
    opacity: 0,
    y: 40,
    willChange: 'transform, opacity',
  })

  // stagger in when grid hits viewport
  cardsTL = $gsap.timeline({
    scrollTrigger: {
      trigger: grid,
      start: 'top 85%',
      once: true,
      // markers: true,
    },
  })

  cardsTL.to(cards, {
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: 'power2.out',
    stagger: {
      amount: 0.6,
      from: 'start',
    },
  })

  $scrollTrigger?.refresh()
}

onMounted(() => {
  initTitleInView()
  initCardsInView()
})

onBeforeUnmount(() => {
  titleST?.kill()
  titleST = undefined
  cardsTL?.scrollTrigger?.kill()
  cardsTL?.kill()
  cardsTL = undefined
})

const testimonials = [
  {
    name: 'John Smith',
    title: 'CEO and Founder',
    quote: 'Our engagement tripled in months. Social Sparrow made it happen.',
    photo: '/images/john-smith.jpg',
    linkedin: '#',
    bg: 'bg-[#FFC501]',
  },
  {
    name: 'Jane Doe',
    title: 'Director of Operations',
    quote:
      '7+ years of experience in project management and team leadership. Strong organizational and communication skills.',
    photo: '/images/jane-doe.jpg',
    linkedin: '#',
    bg: 'bg-[#00C2FF]',
  },
  {
    name: 'Michael Brown',
    title: 'Senior SEO Specialist',
    quote:
      '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization.',
    photo: '/images/michael-brown.jpg',
    linkedin: '#',
    bg: 'bg-[#FFC501]',
  },
  {
    name: 'Emily Johnson',
    title: 'PPC Manager',
    quote:
      '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis.',
    photo: '/images/emily-johnson.jpg',
    linkedin: '#',
    bg: 'bg-[#00C2FF]',
  },
  {
    name: 'Brian Williams',
    title: 'Social Media Specialist',
    quote:
      '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement.',
    photo: '/images/brian-williams.jpg',
    linkedin: '#',
    bg: 'bg-[#FFC501]',
  },
  {
    name: 'Sarah Kim',
    title: 'Content Creator',
    quote:
      '2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries.',
    photo: '/images/sarah-kim.jpg',
    linkedin: '#',
    bg: 'bg-[#00C2FF]',
  },
]
</script>

<style scoped>
/* layout via Tailwind */
</style>
