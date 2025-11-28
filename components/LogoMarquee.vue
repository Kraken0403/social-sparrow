<template>
    <section class="logo-marquee py-[80px]">
      <h2 class="title">50+ HAPPY CLIENTS</h2>
  
      <!-- <div class="logo-wrapper">

        <div ref="row1" class="logo-row">
          <div class="row-content">
            <img v-for="(logo, i) in logos" :key="'top-' + i" :src="logo" class="logo" />
          </div>
        </div>


        <div ref="row2" class="logo-row">
          <div class="row-content reverse">
            <img v-for="(logo, i) in logos" :key="'bottom-' + i" :src="logo" class="logo" />
          </div>
        </div>
      </div> -->
    </section>
  </template>
  
  <script setup>
  // import { ref, onMounted } from 'vue'
  // import gsap from 'gsap'
  // import ScrollTrigger from 'gsap/ScrollTrigger'
  
  // gsap.registerPlugin(ScrollTrigger)
  
  // const row1 = ref(null)
  // const row2 = ref(null)
  
  // const logos = [
  //   'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
  //   'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
  //   'https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg',
  //   'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  //   'https://upload.wikimedia.org/wikipedia/commons/a/a7/Font_Awesome_5_brands_google.svg',
  //   'https://upload.wikimedia.org/wikipedia/commons/0/0b/Microsoft_logo.svg',
  //   'https://upload.wikimedia.org/wikipedia/commons/9/96/Twitter_bird_logo_2012.svg',
  //   'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
  //   'https://upload.wikimedia.org/wikipedia/commons/c/c9/YouTube_play_button_icon_%282013-2017%29.svg',
  //   'https://upload.wikimedia.org/wikipedia/commons/e/e8/TikTok_logo.svg'
  // ]
  
  // onMounted(() => {
  //   const row1Content = row1.value.querySelector('.row-content')
  //   const row2Content = row2.value.querySelector('.row-content')
  
  //   gsap.to(row1Content, {
  //     xPercent: -15,
  //     ease: 'none',
  //     scrollTrigger: {
  //       trigger: row1.value,
  //       start: 'top bottom',
  //       end: 'bottom top',
  //       scrub: true
  //     }
  //   })
  
  //   gsap.to(row2Content, {
  //     xPercent: 15,
  //     ease: 'none',
  //     scrollTrigger: {
  //       trigger: row2.value,
  //       start: 'top bottom',
  //       end: 'bottom top',
  //       scrub: true
  //     }
  //   })
  // })
  </script>
  
  <style scoped>
  .logo-marquee {
    background-color: #111;
    /* padding: 4rem 0; */
    overflow: hidden;
    text-align: center;
  }
  
  .title {
    color: white;
    margin-bottom: 60px;
    font-size: 1.25rem;
    /* font-weight: bold; */
    letter-spacing: 0.15em;
  }
  
  .logo-wrapper {
    display: flex;
    flex-direction: column;
    gap: 60px;
    align-items: center;
    max-width: 100%;
  }
  
  .logo-row {
    width: 100%;
    overflow: hidden;
    position: relative;
  }
  
  .row-content {
    display: flex;
    gap: 60px;
    justify-content: center;
    will-change: transform;
  }
  
  .row-content.reverse {
    flex-direction: row-reverse;
  }
  
  .logo {
    height: 60px;
    filter: brightness(0) invert(1);
    opacity: 0.85;
    transition: opacity 0.3s ease;
  }
  .logo:hover {
    opacity: 1;
  }
  </style>
  