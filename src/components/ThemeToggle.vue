<template>
  <button 
    @click="toggleTheme"
    class="theme-toggle"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <svg v-if="isDark" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M10 1V3M10 17V19M19 10H17M3 10H1M16.364 3.636L14.95 5.05M5.05 14.95L3.636 16.364M16.364 16.364L14.95 14.95M5.05 5.05L3.636 3.636" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
    <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isDark = ref(true)

const toggleTheme = () => {
  isDark.value = !isDark.value
  updateTheme()
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

const updateTheme = () => {
  if (isDark.value) {
    document.documentElement.classList.remove('light-theme')
    document.documentElement.classList.add('dark-theme')
  } else {
    document.documentElement.classList.remove('dark-theme')
    document.documentElement.classList.add('light-theme')
  }
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
  } else {
    // Default to user's system preference
    isDark.value = !window.matchMedia('(prefers-color-scheme: light)').matches
  }
  updateTheme()
})
</script>

<style lang="scss" scoped>
.theme-toggle {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.4);
  }
  
  svg {
    transition: all 0.3s ease;
  }
  
  &:hover svg {
    transform: scale(1.1);
  }
}
</style>