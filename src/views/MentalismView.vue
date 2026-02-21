<template>
  <div class="mentalism">
    <!-- Hero Section -->
    <section class="mentalism-hero section">
      <div class="container">
        <div class="hero-content">
          <span class="section-label">The Art</span>
          <h1>What is <span class="accent">Mentalism</span>?</h1>
          <p class="hero-description">
            Beyond the sleight of hand and card tricks, mentalism takes the performance 
            into your mind. It lives in the space between what you think is private 
            and what you unknowingly reveal.
          </p>
        </div>
      </div>
    </section>

    <!-- The Experience -->
    <section class="experience section">
      <div class="container">
        <div class="section-header">
          <h2>What It Feels Like</h2>
          <p>Every performance is a conversation between what you believe is possible 
             and what you're about to witness.</p>
        </div>
        
        <div class="experience-grid">
          <div class="experience-card">
            <div class="card-accent"></div>
            <h3>A Thought Revealed</h3>
            <p>You think of something - a word, a memory, a number that means 
               something only to you. And then I say it out loud. Not close. 
               Exactly right.</p>
          </div>
          
          <div class="experience-card">
            <div class="card-accent"></div>
            <h3>A Choice Predicted</h3>
            <p>You make a decision freely. No pressure, no tricks. Then we open 
               an envelope that's been sitting in plain sight all evening - and 
               there it is, written before you ever chose.</p>
          </div>
          
          <div class="experience-card">
            <div class="card-accent"></div>
            <h3>A Connection Made</h3>
            <p>It's not about fooling people. It's about creating a moment 
               where an entire room shares the same impossible feeling - and 
               nobody can quite explain why.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- The Difference -->
    <section class="difference section">
      <div class="container">
        <div class="difference-content">
          <div class="difference-text">
            <h2>Not a Magic Show</h2>
            <p>Traditional magic asks you to wonder <em>how</em>. 
               Mentalism asks you to wonder <em>what else is possible</em>.</p>
            <p>My performances draw on psychology, observation, and an understanding 
               of how people think. The result isn't a trick - it's an experience 
               that stays with you long after the evening ends.</p>
          </div>
          
          <div class="difference-cta">
            <router-link to="/contact" class="btn btn-primary">
              Experience It Yourself
            </router-link>
            <router-link to="/performances" class="btn btn-secondary">
              View Performance Formats
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.timeline()
    .fromTo('.mentalism-hero .section-label', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
    .fromTo('.mentalism-hero h1', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.3')
    .fromTo('.hero-description', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4')

  document.querySelectorAll('.experience-card').forEach((el, i) => {
    gsap.fromTo(el, { y: 40, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.7, delay: i * 0.15,
      scrollTrigger: { trigger: el, start: 'top 90%' }
    })
  })

  gsap.fromTo('.difference-content', { y: 30, opacity: 0 }, {
    y: 0, opacity: 1, duration: 0.8,
    scrollTrigger: { trigger: '.difference', start: 'top 85%' }
  })
})
</script>

<style lang="scss" scoped>
.mentalism-hero {
  padding-top: 8rem;
  text-align: center;
  
  h1 {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    margin-bottom: 2rem;
    
    .accent {
      background: linear-gradient(135deg, var(--accent-purple), var(--text-accent));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }
  
  .hero-description {
    font-size: 1.15rem;
    color: var(--text-secondary);
    line-height: 1.9;
    max-width: 700px;
    margin: 0 auto;
  }
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
  
  h2 {
    margin-bottom: 1.5rem;
    font-size: clamp(2rem, 4vw, 2.8rem);
  }
  
  p {
    color: var(--text-secondary);
    font-size: 1.1rem;
    line-height: 1.8;
    max-width: 700px;
    margin: 0 auto;
  }
}

.experience-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
}

.experience-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: rgba(96, 165, 250, 0.3);
    background: rgba(96, 165, 250, 0.05);
  }
  
  .card-accent {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(135deg, var(--accent-purple), var(--text-accent));
  }
  
  h3 {
    color: var(--text-primary);
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }
  
  p {
    color: var(--text-secondary);
    line-height: 1.8;
    font-size: 1.05rem;
  }
}

.difference {
  .difference-content {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
  }
  
  .difference-text {
    margin-bottom: 3rem;
    
    h2 {
      font-size: clamp(2rem, 4vw, 2.8rem);
      margin-bottom: 1.5rem;
    }
    
    p {
      color: var(--text-secondary);
      font-size: 1.1rem;
      line-height: 1.8;
      margin-bottom: 1.5rem;
      
      em {
        color: var(--text-accent);
        font-style: italic;
      }
    }
  }
  
  .difference-cta {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }
}

.section-label {
  display: inline-block;
  color: var(--text-accent);
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 1rem;
  padding: 0.4rem 1rem;
  border: 1px solid rgba(96, 165, 250, 0.3);
  border-radius: 20px;
  background: rgba(96, 165, 250, 0.1);
}
</style>
