<template>
    <div class="w-full relative bg-white">
      <div class="max-w-[1190px] mx-auto">
        
        <div class=" w-full bg-[#FF644B] p-[40px] rounded-[30px]">
            <h2 class="text-[32px] font-bold text-[#ffffff] mb-[30px] uppercase text-center">Fill up the form</h2>

            <form class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Name -->
                <div class="col-span-1">
                    <label class="block text-[14px] font-bold text-white mb-1">Name</label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        class="w-full border text-white text-[20px] border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#FFD100]"
                    />
                </div>
        
                <!-- Email -->
                <div class="col-span-1">
                    <label class="block text-[14px] font-bold text-white mb-1">Email</label>
                    <input
                    type="email"
                    placeholder="you@example.com"
                    class="w-full border border-gray-300 text-white text-[20px] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#FFD100]"
                    />
                </div>

                <div class="col-span-1">
                    <label class="block text-[14px] font-bold text-white mb-1">Number</label>
                    <input
                        type="tel"
                        placeholder="+91-7358103456"
                        class="w-full border text-white text-[20px] border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#FFD100]"
                    />
                </div>
        
                <!-- Message (full width) -->
                <div class="col-span-1 md:col-span-2">
                    <label class="block text-[14px] font-bold text-white mb-1">Message</label>
                    <textarea
                        rows="5"
                        placeholder="Your message..."
                        class="w-full border text-white text-[20px] border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#FFD100]"
                    ></textarea>
                </div>
        
                <!-- Submit Button -->
                <div class="col-span-1 md:col-span-2 text-center mt-[30px]" >
                    <PressButton
                        text="Send Message"
                        link="/thank-you"
                        :color="'#ffffff'"
                        :bgColor="'#EF1525'"
                        />
                </div>
                </form>
        </div>
        
      </div>
    </div>
  </template>
  <script setup>
    import PressButton from '@/components/ui/PressButton.vue'
  </script>
  