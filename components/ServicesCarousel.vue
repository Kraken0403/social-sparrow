<template>
    <div class="carousel-wrapper">
      <div ref="row" class="carousel-row">
        <div
          class="carousel-item"
          v-for="(img, i) in images"
          :key="'a-' + i"
        >
          <img :src="img" />
        </div>
  
        <!-- Copy again for seamless infinite loop -->
        <div
          class="carousel-item"
          v-for="(img, i) in images"
          :key="'b-' + i"
        >
          <img :src="img" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import gsap from "gsap";
  import one from '~/assets/images/1s.jpg'
  import two from '~/assets/images/2s.png'
  import three from '~/assets/images/3s.png'
  import four from '~/assets/images/4s.jpg'
  import five  from '~/assets/images/5s.png'
  import six from '~/assets/images/6s.png'
  import seven from '~/assets/images/7s.png'
//   import eight from '~/assets/images/8s.png'
  import nine from '~/assets/images/9s.jpeg'
  import ten from '~/assets/images/10s.png'
  const images = [
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
 
    nine,
    ten
    // add all yours here
  ];
  
  const row = ref(null);
  
  onMounted(() => {
    const SPEED = 50; // smaller = slower, bigger = faster
  
    const totalWidth = row.value.scrollWidth / 2;
  
    gsap.set(row.value, { x: 0 });
  
    gsap.to(row.value, {
      x: -totalWidth,
      ease: "none",
      duration: SPEED,
      repeat: -1,
      onRepeat: () => {
        gsap.set(row.value, { x: 0 });
      },
    });
  });
  </script>
  
  <style scoped>
  .carousel-wrapper {
  width: 100%;
  overflow: hidden;
  padding: 40px 0;     /* more breathing room */
  background: #457b9d;
}

.carousel-row {
  display: flex;
  gap: 60px;           /* more spacing between items */
  align-items: center;
}

/* Bigger images */
.carousel-item img {
  height: 320px;
  max-width: 450px;
  object-fit: cover;
  border-radius: 20px;
  flex-shrink: 0;
}


/* Extra: If you want really BIG hero style */
@media (min-width: 1024px) {
.carousel-item img {
  height: 320px;
  max-width: 450px;
  object-fit: cover;
  border-radius: 20px;
  flex-shrink: 0;
}

}

  </style>
  