<template>
  <div class="banner bg-[#1a1a1a] md:py-[130px] py-[60px] text-center md:h-[70vh] h-auto flex-col items-center justify-center">
    <h1 class="text-center text-white  text-[clamp(40px,9vw,90px)]  uppercase leading-[1.2] mb-[30px]">Come Talk<br/> to us</h1>
    <PressButton link="/contact" text="Contact Us" color="#EF1525" bgColor="#ffffff"/>
  </div>
    <footer class="bg-[#1a1a1a] text-white text-sm py-8 px-6 md:px-12 border-t-[1px] border-[#ffffff45]">
      <div class="flex md:flex-row flex-col gap-8 justify-center items-center md:items-end md:justify-between">
        <!-- Left: Logo + Name -->
        <div class="lg:w-[20%] flex justify-center md:justify-start">
          <img src="../assets/images/svg-logo.svg" alt="Social Sparrow" class="md:h-14 sm:h-8" />
          <!-- <p class="mt-2 font-semibold text-white">Social Sparrow</p> -->
        </div>
  
        <!-- Center: Navigation & Legal Info -->
        <div class="lg:w-[60%] w-[90%] flex-1 flex flex-col justify-center md:justify-start items-center md:items-center gap-4 text-sm ">
          <!-- Top Nav Links -->
          <div class="flex flex-wrap justify-center align-middle md:justify-center gap-2 md:gap-4">
            <a href="#" class="hover:underline">About us</a><span>·</span>
            <!-- <a href="#" class="hover:underline">Studios</a><span>·</span> -->
            <a href="#" class="hover:underline">Services</a><span>·</span>
            <a href="#" class="hover:underline">Our Work</a><span>·</span>
            <a href="#" class="hover:underline">Contact Us</a>

          </div>
  
          <!-- Bottom Copyright & Policies -->
          <div class="flex flex-wrap justify-center md:justify-center text-gray-400 gap-2 md:gap-4">
            <span>© 2025 Social Sparrow. All rights reserved.</span><span>·</span>
            <a href="#" class="hover:underline">Terms of use</a><span>·</span>
            <a href="#" class="hover:underline">Privacy and cookie policy</a><span>·</span>
            <a href="#" class="hover:underline">Manage cookies</a>
          </div>
        </div>
  
        <!-- Right: Careers + Credit -->
        <div class="flex lg:w-[20%] flex-col items-center md:items-end text-right gap-2 whitespace-nowrap">
          <!-- <a href="#" class="hover:underline text-white">Careers</a> -->
          <a href="https://novagram.com" target="_blank" class="text-sm text-gray-400 hover:underline">Website by Logion Solutions</a>
        </div>
      </div>
    </footer>
  </template>
  <script setup>
    import PressButton from '~/components/ui/PressButton.vue';

  </script>