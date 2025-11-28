<template>
  <section ref="wwdRoot" class="relative py-[80px] bg-[#f3efe6]">
    <!-- Heading -->
    <div class="max-w-[1390px] mx-auto px-4 text-center mb-[65px]">
      <AnimatedSplit
        ref="titleRef"
        tag="h2"
        wrap-class="uppercase text-[62px] text-[#1a1a1a] leading-none"
        text="What We Do"
        :duration="0.9"
        :char-stagger="0.02"
      />
      <p class="mt-[20px] text-[18px] text-[#1a1a1a]">
        Why we make your brand unforgettable?
      </p>
    </div>

    <!-- 12-col × 3-row grid -->
    <div class="gridRoot max-w-[1190px] mx-auto px-4 grid grid-cols-12 grid-rows-3 gap-4">
      <!-- 1: Social Media Management (6 cols) -->
      <div class="card col-span-6 bg-[#457b9d] rounded-[20px] overflow-hidden relative py-[25px] px-[30px] cursor-pointer min-h-[280px]">
        <div class="card-overlay pointer-events-none absolute w-full h-full bg-[#1a1a1a] z-10 left-0 top-0 py-[25px] px-[30px] flex flex-col justify-between">
          <h4 class="text-[24px] leading-[1.2] text-white font-bold">Social Media Management</h4>
          <p class="text-[18px] text-white">
            We manage your brand’s social media from start to finish—strategy, posting, replying, and growing. Every platform is handled with a clear voice, consistent look, and a goal to build connection, not just numbers.
          </p>
        </div>
        <h2 class="text-[28px] text-[#1c2b42] uppercase leading-[1]">Social Media Management</h2>
        <p class="absolute right-0 top-[70%] -translate-y-1/2 rotate-90 origin-center text-[14px] font-bold text-[#1a1a1a] uppercase">
          151 Projects
        </p>
      </div>

      <!-- 2: Content Creation (3 cols) -->
      <div class="card col-span-3 bg-[#660066] rounded-[20px] overflow-hidden relative py-[25px] px-[30px] cursor-pointer min-h-[280px]">
        <div class="card-overlay pointer-events-none absolute w-full h-full bg-[#1a1a1a] z-10 left-0 top-0 py-[25px] px-[30px] flex flex-col justify-between">
          <h4 class="text-[24px] leading-[1.2] text-white font-bold">Content Creation</h4>
          <p class="text-[18px] text-white">
            Photos, videos, reels, stories, and captions tailored to your brand’s personality—planned to keep your audience engaged and wanting more.
          </p>
        </div>
        <h2 class="text-[28px] text-[#1c2b42] uppercase leading-[1]">Content Creation</h2>
        <p class="absolute right-0 top-[70%] -translate-y-1/2 rotate-90 origin-center text-[14px] font-bold text-[#1a1a1a] uppercase">
          82 Clients
        </p>
      </div>

      <!-- 3: Feed Designing (3 cols) -->
      <div class="card col-span-3 bg-[#faeabd] rounded-[20px] overflow-hidden relative py-[25px] px-[30px] cursor-pointer min-h-[280px]">
        <div class="card-overlay pointer-events-none absolute w-full h-full bg-[#1a1a1a] z-10 left-0 top-0 py-[25px] px-[30px] flex flex-col justify-between">
          <h4 class="text-[24px] leading-[1.2] text-white font-bold">Feed Designing</h4>
          <p class="text-[18px] text-white">
            We craft clean, aesthetic feeds aligned to your brand vibe—every post fits in, stands out, and tells a bigger story.
          </p>
        </div>
        <h2 class="text-[28px] text-[#1c2b42] uppercase leading-[1]">Feed Designing</h2>
        <p class="absolute right-0 top-[70%] -translate-y-1/2 rotate-90 origin-center text-[14px] font-bold text-[#1a1a1a] uppercase">
          47 Clients
        </p>
      </div>

      <!-- 4: Influencer Campaign (3 cols span 2 rows) -->
      <div class="card col-span-3 row-span-2 bg-[#aed9e0] rounded-[20px] overflow-hidden relative py-[25px] px-[30px] cursor-pointer">
        <div class="card-overlay pointer-events-none absolute w-full h-full bg-[#1a1a1a] z-10 left-0 top-0 py-[25px] px-[30px] flex flex-col justify-between">
          <h4 class="text-[24px] leading-[1.2] text-white font-bold">Influencer Campaign</h4>
          <p class="text-[18px] text-white">
            From micro to macro, we connect you with creators that fit your brand voice—briefing, coordination, and performance tracking included.
          </p>
        </div>
        <h2 class="text-[28px] text-[#1c2b42] uppercase leading-[1]">Influencer Campaign</h2>
        <p class="absolute right-0 top-[85%] -translate-y-1/2 rotate-90 origin-center text-[14px] font-bold text-[#1a1a1a] uppercase">
          76 Collabs
        </p>
      </div>

      <!-- 5: Creative Campaign Designing (4 cols) -->
      <div class="card col-span-4 bg-[#f5e1d8] rounded-[20px] overflow-hidden relative py-[25px] px-[30px] cursor-pointer min-h-[200px]">
        <div class="card-overlay pointer-events-none absolute w-full h-full bg-[#1a1a1a] z-10 left-0 top-0 py-[25px] px-[30px] flex flex-col justify-between">
          <h4 class="text-[24px] leading-[1.2] text-white font-bold">Creative Campaign Designing</h4>
          <p class="text-[18px] text-white">
            Smart, memorable campaigns—from ideation to execution—built to highlight what makes your brand different.
          </p>
        </div>
        <h2 class="text-[28px] text-[#1c2b42] uppercase leading-[1]">Creative Campaign Designing</h2>
        <p class="absolute right-0 top-[70%] -translate-y-1/2 rotate-90 origin-center text-[14px] font-bold text-[#1a1a1a] uppercase">
          64 Launches
        </p>
      </div>

      <!-- 6: Media Consultation (5 cols) -->
      <div class="card col-span-5 bg-[#ffb703] rounded-[20px] overflow-hidden relative py-[25px] px-[30px] cursor-pointer min-h-[280px]">
        <div class="card-overlay pointer-events-none absolute w-full h-full bg-[#1a1a1a] z-10 left-0 top-0 py-[25px] px-[30px] flex flex-col justify-between">
          <h4 class="text-[24px] leading-[1.2] text-white font-bold">Media Consultation</h4>
          <p class="text-[18px] text-white">
            Online or offline? We help you choose the right mix—Instagram ads, radio, cinema, billboards—based on audience, goals, and budget.
          </p>
        </div>
        <h2 class="text-[28px] text-[#1c2b42] uppercase leading-[1]">Media Consultation</h2>
        <p class="absolute right-0 top-[70%] -translate-y-1/2 rotate-90 origin-center text-[14px] font-bold text-[#1a1a1a] uppercase">
          46 Plans
        </p>
      </div>

      <!-- 7: Creative Video Promotion (9 cols starting at col 4) -->
      <div class="card col-start-4 col-span-9 bg-[#d3e4cd] rounded-[20px] overflow-hidden relative py-[25px] px-[30px] cursor-pointer min-h-[280px]">
        <div class="card-overlay pointer-events-none absolute w-full h-full bg-[#1a1a1a] z-10 left-0 top-0 py-[25px] px-[30px] flex flex-col justify-between">
          <h4 class="text-[28px] leading-[1.2] text-white font-bold">Creative Video Promotion</h4>
          <p class="text-[18px] text-white">
            Videos that entertain, inform, and sell—planned to keep viewers watching till the end without the hard‑sell feel.
          </p>
        </div>
        <h2 class="text-[28px] text-[#1c2b42] uppercase leading-[1]">Creative Video Promotion</h2>
        <p class="absolute right-0 top-[70%] -translate-y-1/2 rotate-90 origin-center text-[14px] font-bold text-[#1a1a1a] uppercase">
          112 Videos
        </p>
      </div>
    </div>

    <div class="mx-auto text-center mt-[65px]">
      <PressButton link="/services" text="Know More" color="#EF1525" />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useNuxtApp } from '#app'
import PressButton from '@/components/ui/PressButton.vue'
import AnimatedSplit from '~/components/AnimatedSplit.vue'

const wwdRoot = ref(null)
const titleRef = ref(null)

let titleST // ScrollTrigger for title
let cardsTL // timeline for cards

function initTitleInView() {
  const { $gsap, $scrollTrigger } = useNuxtApp()

  titleST?.kill()
  titleST = undefined

  const el = titleRef.value?.$el
  if (!el) return

  titleRef.value.setInitial?.()
  titleST = $gsap.to({}, {
    scrollTrigger: {
      trigger: el,
      start: 'top 80%',
      once: true,
      onEnter: () => titleRef.value?.play()
    }
  }).scrollTrigger

  $scrollTrigger?.refresh()
}

function initCardsInView() {
  const { $gsap, $scrollTrigger } = useNuxtApp()

  cardsTL?.scrollTrigger?.kill()
  cardsTL?.kill()
  cardsTL = undefined

  if (!wwdRoot.value) return
  const grid = wwdRoot.value.querySelector('.gridRoot')
  if (!grid) return
  const cards = Array.from(grid.querySelectorAll('.card'))
  if (!cards.length) return

  $gsap.set(cards, { opacity: 0, y: 40, willChange: 'transform, opacity' })

  cardsTL = $gsap.timeline({
    scrollTrigger: {
      trigger: grid,
      start: 'top 85%',
      once: true,
    }
  })
  cardsTL.to(cards, {
    opacity: 1,
    y: 0,
    duration: 0.7,
    ease: 'power2.out',
    stagger: { amount: 0.6, from: 'start' }
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
</script>

<style scoped lang="scss">
.card {
  transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  .card-overlay {
    top: 100%;
    transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  &:hover {
    scale: 0.98;

    .card-overlay {
      top: 0;
    }
  }
}
</style>
