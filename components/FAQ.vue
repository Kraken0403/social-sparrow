<template>
    <div class=" relative w-full bg-white py-[80px]" >
        <div class="border-[1px] border-[#000] max-w-[1190px] p-[30px] mx-auto flex flex-row lg:flex-row w-full h-auto bg-white rounded-[16px] overflow-hidden">
            <!-- Sidebar -->
            <div class="w-full lg:w-[35%] p-6 bg-white">
                <h2 class="text-[120px] lg:text-[120px] font-black mb-8 leading-none">FAQs.</h2>
        
                <div class="space-y-4">
                <button
                    v-for="(item, index) in faqs"
                    :key="index"
                    @click="activeIndex = index"
                    class="w-full text-left px-4 py-4 rounded-md font-semibold transition-all duration-200"
                    :class="{
                    'bg-black text-white': activeIndex === index,
                    'bg-[#f8f9f8] hover:bg-[#e4e4e4]': activeIndex !== index
                    }"
                >
                    {{ item.question }}
                </button>
                </div>
            </div>
  
            <!-- Answer Panel -->
            <div class=" rounded-[16px] w-full lg:w-[65%] p-8 lg:p-12 bg-[#ffc800] flex justify-center">
                <p class="text-lg lg:text-xl leading-relaxed max-w-2xl text-black">
                {{ faqs[activeIndex].answer }}
                </p>
            </div>
    </div>
    </div>
    
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const faqs = ref([
    {
      question: 'What is social sparrow',
      answer: `Social Sparrow is a technology company that provides logistics services to both vendors and consumers. This potentially allows food vendors to deliver meals seamlessly while also providing consumers with an easy platform to order meals from their favourite restaurants in their city.`
    },
    {
      question: 'Demo question',
      answer: 'This is a placeholder answer for the demo question.'
    },
    {
      question: 'Demo question',
      answer: 'This is a placeholder answer for the demo question.'
    },
    {
      question: 'Demo question',
      answer: 'This is a placeholder answer for the demo question.'
    },
    {
      question: 'Demo question',
      answer: 'This is a placeholder answer for the demo question.'
    },
    {
      question: 'Demo question',
      answer: 'This is a placeholder answer for the demo question.'
    }
  ])
  
  const activeIndex = ref(0)
  </script>
  
  <style scoped>
  /* Optional: Add custom scroll or responsive tweaks */
  </style>
  