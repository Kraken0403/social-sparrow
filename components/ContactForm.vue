<template>
  <div class="w-full relative bg-white py-[60px] md:py-[0px]">
    <div class="w-[90%] md:max-w-[1190px] mx-auto">

      <div class="w-full bg-[#FF644B] p-[30px] md:p-[40px] rounded-[30px]">
        <h2
          class="text-[28px] md:text-[32px] font-bold text-white mb-[30px] uppercase text-center"
        >
          Fill up the form
        </h2>

        <form
          class="grid grid-cols-1 md:grid-cols-2 gap-6"
          @submit.prevent="submitForm"
        >

          <!-- Name -->
          <div>
            <label class="label">Name</label>
            <input
              v-model="form.name"
              required
              placeholder="John Smith"
              class="input"
            />
          </div>

          <!-- Email -->
          <div>
            <label class="label">Email</label>
            <input
              v-model="form.email"
              type="email"
              required
              placeholder="john.smith@email.com"
              class="input"
            />
          </div>

          <!-- Phone -->
          <div>
            <label class="label">Number</label>
            <input
              v-model="form.phone"
              required
              placeholder="+91 98765 43210"
              class="input"
            />
          </div>

          <!-- Company -->
          <div>
            <label class="label">Company</label>
            <input
              v-model="form.company"
              placeholder="Acme Corporation (optional)"
              class="input"
            />
          </div>

          <!-- Message -->
          <div class="md:col-span-2">
            <label class="label">Message</label>
            <textarea
              v-model="form.message"
              rows="5"
              placeholder="Tell us briefly what you’re looking for…"
              class="input"
            />
          </div>

          <!-- Submit -->
          <div class="md:col-span-2 text-center mt-[20px] md:mt-[30px]">
            <button
              type="submit"
              class="press-btn"
              :style="{ '--btn-color': '#ffffff', '--bg-color': '#EF1525' }"
              :disabled="loading"
            >
              <span>{{ loading ? 'Sending...' : 'Send Message' }}</span>
            </button>
          </div>

        </form>
      </div>
    </div>

    <!-- SUCCESS POPUP -->
    <div
      v-if="success"
      class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm"
    >
      <div class="bg-white rounded-2xl p-8 w-[90%] max-w-[420px] text-center">
        <h3 class="text-[22px] font-bold mb-3">Thank you!</h3>
        <p class="text-[16px] text-gray-700 mb-6">
          Thank you for contacting us. We will get back to you.
        </p>

        <button
          @click="closePopup"
          class="press-btn"
          :style="{ '--btn-color': '#EF1525', '--bg-color': '#ffffff' }"
        >
          <span>Close</span>
        </button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const loading = ref(false)
const success = ref(false)

const form = reactive({
  name: '',
  email: '',
  phone: '',
  company: '',
  message: ''
})

const submitForm = async () => {
  loading.value = true

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: form
    })

    success.value = true

    // reset form
    form.name = ''
    form.email = ''
    form.phone = ''
    form.company = ''
    form.message = ''
  } catch (e) {
    alert('Failed to send message')
  } finally {
    loading.value = false
  }
}

const closePopup = () => {
  success.value = false
}
</script>

<style scoped>
.label {
  display: block;
  font-size: 14px;
  font-weight: bold;
  color: white;
  margin-bottom: 4px;
}

/* INPUTS */
.input {
  width: 100%;
  background: #ffffff;
  color: #1a1a1a;
  font-size: 18px;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  padding: 0.75rem;
  outline: none;
}

.input:focus {
  border-color: #ffd100;
  box-shadow: 0 0 0 2px rgba(255, 209, 0, 0.4);
}

/* BUTTON */
.press-btn {
  display: inline-block;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  background-color: var(--bg-color);
  border: 2px solid var(--btn-color);
  border-radius: 9999px;
  box-shadow: 0 6px 0 var(--btn-color);
  transition: transform 0.1s ease, box-shadow 0.1s ease;
  cursor: pointer;
}

@media (min-width: 768px) {
  .press-btn {
    padding: 12px 40px;
    font-size: 1rem;
  }
}

.press-btn span {
  color: var(--btn-color);
}

.press-btn:hover {
  transform: translateY(6px);
  box-shadow: 0 0 0 var(--btn-color);
}

.press-btn:active {
  transform: translateY(6px);
  box-shadow: 0 0 0 var(--btn-color);
}

.press-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
