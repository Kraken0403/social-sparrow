<template>
  <section ref="rootRef" class="relative w-full bg-[#aed9e0] md:py-[130px] py-[60px]">
    <div class="text-center md:max-w-[1190px] max-w-[90%] mx-auto">
      <!-- Title animates like WWD via AnimatedSplit -->
      <AnimatedSplit
        ref="titleRef"
        tag="h2"
        wrap-class="uppercase  text-[clamp(36px,8vw,62px)]  text-[#1a1a1a] leading-[1]"
        text="Testimonials"
        :duration="0.9"
        :char-stagger="0.02"
      />

      <div class="mt-[65px] t-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[40px] px-0">
        <div
          v-for="test in testimonials"
          :key="test.name"
          class="t-card relative border-[1px] border-[#1a1a1a] rounded-[45px] overflow-hidden py-[40px] px-[40px] md:py-[60px] md:px-[60px] shadow-[0_8px_0_0_rgba(0,0,0,0.8)]"
          :class="test.bg"
        >

          <!-- quote -->
          <span class="quote">"</span>
          <p class="text-[18px] text-left text-[#1a1a1a]">{{ test.quote }}</p>
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
    name: 'Samir Virani',
    title: 'CEO and Founder',
    quote: "Social Sparrow & Nishi have been outstanding with their hard work and creativity in social media marketing. Truly impressed with their results and highly recommend everyone to sign up with them!",
    photo: '/images/john-smith.jpg',
    linkedin: '#',
    bg: 'bg-[#ffb703]',
  },
  {
    name: 'Chirag, Arcanis Shoes',
    title: 'Director of Operations',
    quote:
      'Ever since Social Sparrow got on board for handling our social media pages, there has been significant increase in customer reach and leads generation, all of it Combining with consistency and dedication, Social Sparrow has been a significant asset to our digital marketing journey',
    photo: '/images/jane-doe.jpg',
    linkedin: '#',
    bg: 'bg-[#457b9d]',
  },
  {
    name: 'Michael Brown',
    title: 'Senior SEO Specialist',
    quote:
      'I honestly had no idea how to manage my social media. I used to post randomly and hope for the best. Social Sparrow took over and sorted everything, planning, posting, even captions. My page finally looks neat, regular, and honestly… stress-free.',
    photo: '/images/michael-brown.jpg',
    linkedin: '#',
    bg: 'bg-[#ffb703]',
  },
  {
    name: 'Emily Johnson',
    title: 'PPC Manager',
    quote:
      "What I really appreciate about Social Sparrow is their ideas. They don’t give the same trend-following stuff from the market. They come up with concepts I had never even thought of, and such strategies that actually work for my audience. My page finally feels different, in a good way.",
    photo: '/images/emily-johnson.jpg',
    linkedin: '#',
    bg: 'bg-[#457b9d]',
  },
  {
    name: 'Brian Williams',
    title: 'Social Media Specialist',
    quote:
      "I was genuinely scared to be on camera but my field demanded it. Even small videos felt impossible. But the Social Sparrow team was so patient, they guided me, hyped me up, and made it feel normal. It had been really easy for me since then, and it’s helping me retain the trust that that my clients have on me.",
    photo: '/images/brian-williams.jpg',
    linkedin: '#',
    bg: 'bg-[#ffb703]',
  },
  {
    name: 'Sarah Kim',
    title: 'Content Creator',
    quote:
     "Working with Social Sparrow has been super easy. They understand what I want even when I can’t explain it properly. Their initial consultation was so crisp! Their team is quick, clear, and honestly very supportive. It feels like they actually care about my brand, not just the work.",
    photo: '/images/sarah-kim.jpg',
    linkedin: '#',
    bg: 'bg-[#457b9d]',
  },
]
</script>

<style scoped>
/* layout via Tailwind */
.quote {
  font-size: 92px;
  line-height: 0.9;
}
</style>
