<template>
  <div class="banner bg-[#1a1a1a] py-[80px] text-center h-[70vh] flex-col items-center justify-center">
    <h1 class="text-center text-white text-[120px] uppercase leading-[120px] mb-[30px]">Come Talk <br/>to us</h1>
    <PressButton text="Contact Us" color="#EF1525" bgColor="#ffffff"/>
  </div>
    <footer class="bg-[#1a1a1a] text-white text-sm py-8 px-6 md:px-12 border-t-[1px] border-[#ffffff45]">
      <div class="flex flex-row gap-8 items-end md:justify-between">
        <!-- Left: Logo + Name -->
        <div>
          <img src="../assets/images/svg-logo.svg" alt="Social Sparrow" class="h-8" />
          <!-- <p class="mt-2 font-semibold text-white">Social Sparrow</p> -->
        </div>
  
        <!-- Center: Navigation & Legal Info -->
        <div class="flex-1 flex flex-col items-start md:items-center gap-4 text-sm">
          <!-- Top Nav Links -->
          <div class="flex flex-wrap justify-start md:justify-center gap-2 md:gap-4">
            <a href="#" class="hover:underline">About us</a><span>·</span>
            <!-- <a href="#" class="hover:underline">Studios</a><span>·</span> -->
            <a href="#" class="hover:underline">Services</a><span>·</span>
            <a href="#" class="hover:underline">Our Work</a><span>·</span>
            <a href="#" class="hover:underline">Contact Us</a><span>·</span>

          </div>
  
          <!-- Bottom Copyright & Policies -->
          <div class="flex flex-wrap justify-start md:justify-center text-gray-400 gap-2 md:gap-4">
            <span>© 2025 Social Sparrow. All rights reserved.</span><span>·</span>
            <a href="#" class="hover:underline">Terms of use</a><span>·</span>
            <a href="#" class="hover:underline">Privacy and cookie policy</a><span>·</span>
            <a href="#" class="hover:underline">Manage cookies</a>
          </div>
        </div>
  
        <!-- Right: Careers + Credit -->
        <div class="flex flex-col items-end text-right gap-2 whitespace-nowrap">
          <!-- <a href="#" class="hover:underline text-white">Careers</a> -->
          <a href="https://novagram.com" target="_blank" class="text-sm text-gray-400 hover:underline">Website by Logion Solutions</a>
        </div>
      </div>
    </footer>
  </template>
  <script setup>
    import PressButton from '~/components/ui/PressButton.vue';

  </script>