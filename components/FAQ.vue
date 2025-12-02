<template>
    <div class=" relative w-full bg-white md:py-[80px] py-[60px]" >
        <div class="border-[1px] border-[#000] md:max-w-[1190px] max-w-[90%] p-[30px] mx-auto flex flex-col md:flex-row w-full h-auto bg-white rounded-[16px] overflow-hidden">
            <!-- Sidebar -->
            <div class="w-[100%] md:w-[45%] md:p-6 p-2 bg-white">
                <h2 class=" text-[clamp(36px,8vw,62px)] font-black mb-8 leading-none">FAQs.</h2>
        
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
            <div class=" rounded-[16px]w-[100%] md:w-[55%] p-8 lg:p-12 bg-[#ffc800] flex justify-center">
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
      question: 'What exactly does Social Sparrow📸 do?',
      answer: `We turn brands into conversations. From social media to shoots, product styling to strategy & designs, we don’t just “manage,” we create noise that gets remembered.`
    },
    {
      question: 'Do you only handle social media?',
      answer: 'Nope. Social Sparrow📸 is a full nest of 24+ services. Social media is just one branch, we also do design, campaigns, events, and more.'
    },
    {
      question: 'Can small businesses work with you?',
      answer: 'Absolutely. Whether you’re a one-person hustle or a giant enterprise, we build ideas that fit your budget and your brand’s voice.'
    },
    {
      question: 'How soon will I see results?',
      answer: 'Think of us like planting seeds. 🌱 Some results show fast (hello engagement!) and some take a little nurturing (sales, community). We promise: it’s always worth the wait.'
    },
    {
      question: 'Why the name Social Sparrow📸?',
      answer: 'Social Sparrow📸 was born out of quirk, creativity, and connection. The name comes from something personal, but it stuck because sparrows are known for being social, adaptable, and always buzzing with energy. That’s exactly how our team works with brands.'
    },
    {
      question: 'How do you stand out from the rest?',
      answer: 'We don’t try to shout the loudest, we sing the right tune. Every brand gets its own rhythm, we just help you play it louder and prouder.'
    }
  ])
  
  const activeIndex = ref(0)
  </script>
  
  <style scoped>
  /* Optional: Add custom scroll or responsive tweaks */
  </style>
  