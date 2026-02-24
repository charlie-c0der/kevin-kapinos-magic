<template>
  <a href="#main-content" class="skip-nav">Skip to main content</a>
  <nav class="navbar" :class="{ 'navbar--scrolled': isScrolled }">
    <div class="container">
      <div class="navbar__content">
        <router-link to="/" class="navbar__brand">
          <span class="brand-text">Kevin Kapinos</span>
          <span class="brand-subtitle">Magician</span>
        </router-link>
        
        <div class="navbar__links" :class="{ 'navbar__links--open': isMenuOpen }">
          <router-link to="/" class="navbar__link" @click="closeMenu">Home</router-link>
          <router-link to="/about" class="navbar__link" @click="closeMenu">About</router-link>
          <router-link to="/performances" class="navbar__link" @click="closeMenu">Performances</router-link>
          <router-link to="/mentalism" class="navbar__link" @click="closeMenu">Mentalism</router-link>
          <router-link to="/testimonials" class="navbar__link" @click="closeMenu">Testimonials</router-link>
          <router-link to="/contact" class="navbar__link" @click="closeMenu">Contact</router-link>
        </div>
        
        <div class="navbar__cta">
          <ThemeToggle />
          <router-link to="/contact" class="btn btn-primary navbar__book-btn">
            Book Performance
          </router-link>
        </div>
        
        <button 
          class="navbar__toggle" 
          :class="{ 'navbar__toggle--active': isMenuOpen }"
          @click="toggleMenu"
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import ThemeToggle from './ThemeToggle.vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)
const route = useRoute()

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
.skip-nav {
  position: absolute;
  top: -40px;
  left: 6px;
  background: var(--accent-purple);
  color: white;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
  z-index: 10000;
  transition: top 0.3s;
  
  &:focus {
    top: 6px;
  }
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 0;
  background: rgba(10, 11, 21, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &--scrolled {
    padding: 0.75rem 0;
    background: rgba(10, 11, 21, 0.95);
    border-bottom-color: rgba(96, 165, 250, 0.2);
  }
}

.navbar__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar__brand {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: var(--text-primary);
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
}

.brand-text {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  background: linear-gradient(135deg, var(--text-primary), var(--text-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.brand-subtitle {
  font-size: 0.8rem;
  font-weight: 400;
  color: var(--accent-silver);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: -2px;
}

.navbar__links {
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: rgba(10, 11, 21, 0.98);
    backdrop-filter: blur(20px);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding: 2rem 0;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    
    &--open {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    }
  }
}

.navbar__link {
  text-decoration: none;
  color: var(--text-secondary);
  font-weight: 500;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  position: relative;
  transition: all 0.3s ease;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--accent-purple), var(--text-accent));
    transition: width 0.3s ease;
  }
  
  &:hover, &.router-link-active {
    color: var(--text-primary);
    
    &::after {
      width: 100%;
    }
  }
  
  @media (max-width: 768px) {
    padding: 0.5rem 0;
    font-size: 1rem;
  }
}

.navbar__cta {
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: 768px) {
    display: none;
  }
}

.navbar__book-btn {
  font-size: 0.9rem;
  padding: 0.6rem 1.5rem;
  border-radius: 30px;
}

.navbar__toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  gap: 4px;
  
  span {
    width: 25px;
    height: 2px;
    background: var(--text-primary);
    transition: all 0.3s ease;
    transform-origin: center;
  }
  
  &--active {
    span:nth-child(1) {
      transform: rotate(45deg) translate(6px, 6px);
    }
    
    span:nth-child(2) {
      opacity: 0;
    }
    
    span:nth-child(3) {
      transform: rotate(-45deg) translate(6px, -6px);
    }
  }
  
  @media (max-width: 768px) {
    display: flex;
  }
}
</style>