<template>
  <section ref="aboutHero" class="about-hero" @mousemove="handleMouseMove">
    <!-- Title -->
    <div class="about-title">
      <!-- Animated title -->
      <AnimatedSplit
        ref="titleRef"
        :text="'ABOUT US'"
        tag="h1"
        class="relative z-[2] leading-[0.9] text-[clamp(40px,15vw,140px)] font-bold"
        :duration="0.9"
        :char-stagger="0.028"
        :autoplay="false"  
      />
      <!-- Animated subtitle -->
      <AnimatedSplit
        ref="subtitleRef"
        :text="'We turn casual thoughts into full-blown strategies.'"
        tag="p"
        class="subtitle-split"
        :duration="0.7"
        :char-stagger="0.02"
        :autoplay="false"   
      />
    </div>

    <!-- TEXT TAGS (map #1) -->
    <div
      v-for="(tag, i) in tags"
      :key="'tag-'+i"
      class="tagline"
      :style="{ left: unit(tag.x), top: unit(tag.y) }"
    >
      {{ tag.text }}
    </div>

    <!-- GIF ITEMS (map #2) -->
    <img
      v-for="(g, i) in gifItems"
      :key="'gif-'+i"
      class="gif-item"
      :src="g.src"
      alt=""
      aria-hidden="true"
      loading="lazy"
      :style="{
        left: unit(g.x),
        top: unit(g.y),
        width: sizeUnit(g.size),
        height: sizeUnit(g.size)
      }"
    />
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import gsap from 'gsap'
import AnimatedSplit from '@/components/AnimatedSplit.vue'

import gif1 from '@/assets/images/1.gif'
import gif2 from '@/assets/images/2.gif'
import gif3 from '@/assets/images/3.gif'
import gif4 from '@/assets/images/4.gif'

const aboutHero = ref(null)

/* ---------- AnimatedSplit control (single source of truth) ---------- */
const titleRef = ref(null)
const subtitleRef = ref(null)

let lastRunAt = 0
function runSplits() {
  const now = performance.now()
  if (now - lastRunAt < 250) return // debounce accidental double fires
  lastRunAt = now

  nextTick(() => {
    titleRef.value?.setInitial()
    subtitleRef.value?.setInitial()
    requestAnimationFrame(() => {
      titleRef.value?.play()
      setTimeout(() => subtitleRef.value?.play(), 100)
    })
  })
}

function onPageEnter() {
  // fired by layout after overlay reveal (and once on initial load)
  runSplits()
}

onMounted(() => {
  // DO NOT manually start here; rely on ss:page-enter to avoid double run
  document.addEventListener('ss:page-enter', onPageEnter)
})

onBeforeUnmount(() => {
  document.removeEventListener('ss:page-enter', onPageEnter)
})

/* ------------ helpers ------------ */
const unit = (v) => (typeof v === 'number' ? `${v}px` : v)
const sizeUnit = (v) => (typeof v === 'number' ? `${v}px` : v)
function toPxXY(item, rect) {
  const toPx = (val, size) =>
    typeof val === 'string' && val.trim().endsWith('%')
      ? (parseFloat(val) / 100) * size
      : Number(val)
  return { x: toPx(item.x, rect.width), y: toPx(item.y, rect.height) }
}

/* ------------ TEXT TAG MAP (#1) ------------ */
const tags = [
  { text: 'Marketing',               x: '6%',   y: '10%' },
  { text: 'Ad Production',           x: '22%',  y: '14%' },
  { text: 'Public Relations',        x: '38%',  y: '9%'  },
  { text: 'Content Management',      x: '56%',  y: '13%' },
  { text: 'Brand Strategy',          x: '74%',  y: '8%'  },
  { text: 'KPI Tracking',            x: '88%',  y: '12%' },
  { text: 'Affiliate Marketing',     x: '12%',  y: '28%' },
  { text: 'Influencer Marketing',    x: '30%',  y: '24%' },
  { text: 'Creative Direction',      x: '48%',  y: '26%' },
  { text: 'Media Buying',            x: '66%',  y: '22%' },
  { text: 'A/B Testing',             x: '84%',  y: '27%' },
  { text: 'Business Collaboration',  x: '8%',   y: '44%' },
  { text: 'YouTube Marketing',       x: '26%',  y: '48%' },
  { text: 'Social Media Mgmt',       x: '44%',  y: '42%' },
  { text: 'Paid Social',             x: '62%',  y: '46%' },
  { text: 'SEO + Content',           x: '80%',  y: '40%' },
  { text: 'Email Flows',             x: '14%',  y: '62%' },
  { text: 'CRO & Funnels',           x: '32%',  y: '58%' },
  { text: 'Analytics',               x: '50%',  y: '64%' },
  { text: 'Community',               x: '68%',  y: '60%' },
  { text: 'UGC Programs',            x: '86%',  y: '62%' },
  { text: 'Event Activations',       x: '10%',  y: '80%' },
  { text: 'Brand Partnerships',      x: '28%',  y: '84%' },
  { text: 'Press Kits',              x: '46%',  y: '78%' },
  { text: 'Sponsorships',            x: '64%',  y: '83%' },
  { text: 'Product Seeding',         x: '82%',  y: '78%' },
]

/* ------------ GIF MAP (#2) ------------ */
const gifItems = [
  { src: gif1, x: '25%', y: '75%', size: 200 },
  { src: gif2, x: '20%', y: '35%', size: 200 },
  { src: gif3, x: '50%', y: '50%', size: 200 },
  { src: gif4, x: '85%', y: '65%', size: 230 },
]

/* ------------ proximity reveal (text + gifs) ------------ */
const tagTimeouts = new Map()
const gifTimeouts = new Map()

const handleMouseMove = (e) => {
  if (!aboutHero.value) return
  const rect = aboutHero.value.getBoundingClientRect()
  const mouseX = e.clientX - rect.left
  const mouseY = e.clientY - rect.top

  // TEXT TAGS
  const tagEls = aboutHero.value.querySelectorAll('.tagline')
  tagEls.forEach((el, i) => {
    const { x, y } = toPxXY(tags[i], rect)
    const dist = Math.hypot(x - mouseX, y - mouseY)
    if (dist < 130 && !el.dataset.active) {
      el.dataset.active = 'true'
      gsap.fromTo(el, { opacity: 0, scale: 0.82, y: 8 }, { opacity: 1, scale: 1, y: 0, duration: 0.28, ease: 'power2.out' })
      clearTimeout(tagTimeouts.get(el))
      const t = setTimeout(() => {
        gsap.to(el, { opacity: 0, scale: 0.86, y: -6, duration: 0.28, ease: 'power2.in' })
        el.dataset.active = ''
      }, 2400)
      tagTimeouts.set(el, t)
    }
  })

  // GIF ITEMS
  const gifEls = aboutHero.value.querySelectorAll('.gif-item')
  gifEls.forEach((el, i) => {
    const { x, y } = toPxXY(gifItems[i], rect)
    const dist = Math.hypot(x - mouseX, y - mouseY)
    if (dist < 150 && !el.dataset.active) {
      el.dataset.active = 'true'
      gsap.fromTo(el, { opacity: 0, scale: 0.8, y: 10, rotate: -6 }, { opacity: 1, scale: 1, y: 0, rotate: 0, duration: 0.32, ease: 'power2.out' })
      clearTimeout(gifTimeouts.get(el))
      const t = setTimeout(() => {
        gsap.to(el, { opacity: 0, scale: 0.85, y: -8, rotate: 4, duration: 0.3, ease: 'power2.in' })
        el.dataset.active = ''
      }, 2200)
      gifTimeouts.set(el, t)
    }
  })
}

onBeforeUnmount(() => {
  tagTimeouts.forEach((t) => clearTimeout(t))
  gifTimeouts.forEach((t) => clearTimeout(t))
  tagTimeouts.clear()
  gifTimeouts.clear()
})
</script>

<style scoped>
.about-hero {
  position: relative;
  height: 100vh;
  /* background: #ebff57; */
  background: #d3e4cd;
  overflow: hidden;
}

/* Title wrapper in center */
.about-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -52%);
  pointer-events: none;
  z-index: 1;
  text-align: center;
  line-height: 1.12;
}

/* AnimatedSplit title/subtitle sizes/colors */
.title-split {
  font-size: clamp(80px, 14vw, 220px);
  font-weight: 800;
  color: #1a1a1a;
}
.subtitle-split {
  font-size: clamp(16px, 2vw, 22px);
  margin-top: 8px;
  color: #1a1a1a;
}

/* text tag */
.tagline {
  position: absolute;
  opacity: 0;
  transform: scale(0.82);
  background: #fff;
  padding: 6px 10px;
  border-radius: 10px;
  color: #111;
  font-size: clamp(14px, 1.6vw, 22px);
  white-space: nowrap;
  pointer-events: none;
  z-index: 2;
  box-shadow: 0 8px 20px rgba(17, 17, 17, 0.08);
  will-change: transform, opacity;
}

/* floating gif */
.gif-item {
  position: absolute;
  opacity: 0;
  transform: scale(0.85);
  pointer-events: none;
  z-index: 2;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 10px 26px rgba(17, 17, 17, 0.14);
  will-change: transform, opacity;
}
</style>
