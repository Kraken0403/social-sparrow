import { defineNuxtPlugin } from '#app'
import lottie from 'lottie-web'
import { defineElement } from '@lordicon/element'

export default defineNuxtPlugin(() => {
  // define the custom element globally
  defineElement(lottie.loadAnimation)
})
