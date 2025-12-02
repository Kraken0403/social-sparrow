/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app.vue',
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*.vue',
    './pages/**/*.{vue,js,ts,jsx,tsx}',
    './sections/**/*.{vue,js,ts,jsx,tsx}', // 👈 add this
    './plugins/**/*.{js,ts}',              // (optional) if you use classes in plugins
  ],
  theme: {
    extend: {},
  },
}
