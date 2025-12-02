<template>
    <section
      ref="contactHero"
      class="relative h-[60vh] md:h-[85vh] w-full bg-white overflow-hidden"
    >
      <!-- Title Wrapper -->
      <div
        class="absolute top-1/2 left-1/2 w-[90%] 
               -translate-x-1/2 -translate-y-1/2
               pointer-events-none z-[1] text-center"
      >
        <h1
          class="leading-[0.9] text-[#1a1a1a] font-bold uppercase
                 text-[clamp(40px,14vw,140px)]"
        >
          Get in<br/> Touch
        </h1>
  
        <p
          class="pt-[20px] md:pt-[30px] 
                 text-[clamp(16px,3.5vw,22px)] 
                 text-[#1a1a1a]"
        >
          Let's meet up
        </p>
      </div>
    </section>
  </template>
  
  <script setup>
  // No JS needed here unless animations are added later
  </script>
  
  <style scoped>
  /* No additional styles needed */
  </style>
  