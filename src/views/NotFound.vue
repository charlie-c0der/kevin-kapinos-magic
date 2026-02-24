<template>
  <div class="not-found">
    <div class="container">
      <div class="not-found-content">
        <div class="error-visual">
          <div class="floating-cards">
            <div class="card card-1">🂡</div>
            <div class="card card-2">🂢</div>
            <div class="card card-3">🂣</div>
            <div class="card card-4">🂤</div>
          </div>
          <div class="error-number">404</div>
          <div class="magic-text">*poof*</div>
        </div>
        
        <div class="error-message">
          <h1>Page Not Found</h1>
          <p>This page seems to have vanished into thin air—like a really good magic trick. 
             Unfortunately, unlike my performances, I can't make it reappear.</p>
          
          <div class="error-actions">
            <router-link to="/" class="btn btn-primary">
              Return to Homepage
            </router-link>
            <router-link to="/contact" class="btn btn-secondary">
              Contact Kevin
            </router-link>
          </div>
          
          <div class="helpful-links">
            <p>Looking for something specific?</p>
            <div class="link-grid">
              <router-link to="/about">About Kevin</router-link>
              <router-link to="/performances">Performance Types</router-link>
              <router-link to="/mentalism">What is Mentalism?</router-link>
              <router-link to="/testimonials">Testimonials</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { useSEO } from '../composables/useSEO'

useSEO({
  title: 'Page Not Found | Kevin Kapinos Magic',
  description: 'This page seems to have vanished like a magic trick. Return to Kevin Kapinos\' homepage to explore close-up magic and mentalism services.',
  path: '/404'
})

onMounted(() => {
  // Animate floating cards
  gsap.to('.card', {
    y: -20,
    rotation: 360,
    duration: 3,
    repeat: -1,
    yoyo: true,
    stagger: 0.5,
    ease: 'power2.inOut'
  })
  
  // Fade in content
  gsap.from('.not-found-content > *', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power3.out'
  })
  
  // Magic text animation
  gsap.to('.magic-text', {
    opacity: 0.3,
    scale: 1.2,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'power2.inOut'
  })
})
</script>

<style lang="scss" scoped>
.not-found {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  background: linear-gradient(135deg, var(--primary-dark) 0%, var(--secondary-dark) 100%);
}

.not-found-content {
  text-align: center;
  max-width: 600px;
}

.error-visual {
  position: relative;
  margin-bottom: 3rem;
}

.floating-cards {
  position: relative;
  height: 100px;
  margin-bottom: 2rem;
  
  .card {
    position: absolute;
    font-size: 2rem;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    
    &.card-1 { transform: translate(-80px, -50%); }
    &.card-2 { transform: translate(-30px, -50%); }
    &.card-3 { transform: translate(20px, -50%); }
    &.card-4 { transform: translate(70px, -50%); }
    
    @media (max-width: 480px) {
      font-size: 1.5rem;
      &.card-1 { transform: translate(-60px, -50%); }
      &.card-2 { transform: translate(-20px, -50%); }
      &.card-3 { transform: translate(20px, -50%); }
      &.card-4 { transform: translate(60px, -50%); }
    }
  }
}

.error-number {
  font-family: 'Playfair Display', serif;
  font-size: clamp(4rem, 12vw, 8rem);
  font-weight: 700;
  background: linear-gradient(135deg, var(--accent-purple), var(--text-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: 1rem;
}

.magic-text {
  font-style: italic;
  color: var(--text-accent);
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.error-message {
  h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2rem, 4vw, 2.5rem);
    margin-bottom: 1.5rem;
    color: var(--text-primary);
  }
  
  p {
    color: var(--text-secondary);
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: 3rem;
  }
}

.error-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.helpful-links {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-lg);
  padding: 2rem;
  
  p {
    color: var(--text-primary);
    font-weight: 600;
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }
  
  .link-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
    
    a {
      color: var(--text-accent);
      text-decoration: none;
      padding: 0.8rem 1rem;
      background: rgba(96, 165, 250, 0.1);
      border: 1px solid rgba(96, 165, 250, 0.2);
      border-radius: var(--radius-md);
      transition: all 0.3s ease;
      font-size: 0.9rem;
      
      &:hover {
        background: rgba(96, 165, 250, 0.2);
        border-color: rgba(96, 165, 250, 0.4);
        transform: translateY(-2px);
      }
    }
  }
}

@media (max-width: 768px) {
  .helpful-links .link-grid {
    grid-template-columns: 1fr;
  }
  
  .error-actions {
    flex-direction: column;
    align-items: center;
    
    .btn {
      width: 100%;
      max-width: 300px;
    }
  }
}
</style>