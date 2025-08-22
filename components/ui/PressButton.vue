<template>
    <NuxtLink :to="link" class="press-btn " :style="{ '--btn-color': color, '--bg-color': bgColor }">
        <span>
            {{ text }}
        </span>
    </NuxtLink>
  </template>
  
  <script setup>
  const props = defineProps({
    /** Background / border / shadow color (any valid CSS color) */
    color: {
      type: String,
      default: '#ff4081'
    },
    /** Button text */
    text: {
      type: String,
      required: true
    },
    /** Destination route or URL */
    link: {
      type: String,
      default: '/'
    },
    bgColor: {
      type: String,
      default: '#ffffff'
    }
  })
  </script>
  
  <style scoped>
  .press-btn {
    display: inline-block;
    padding: 12px 40px;
    font-size: 1rem;
    font-weight: 600;
    color: #fff;
    background-color: var(--bg-color);
    border: 2px solid var(--btn-color);
    border-radius: 9999px;
    box-shadow: 0 6px 0 var(--btn-color);
    transition: transform 0.1s ease, box-shadow 0.1s ease;
    text-align: center;
    text-decoration: none;
  }

  span {
    color: var(--btn-color);
  }
  .press-btn:hover {
    transform: translateY(6px);
    box-shadow: 0 0px 0 var(--btn-color);
  }
  .press-btn:active {
    transform: translateY(6px);
    box-shadow: 0 0 0 var(--btn-color);
  }
  </style>
  