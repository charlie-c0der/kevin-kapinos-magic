<template>
  <div class="about">
    <!-- Hero Section -->
    <section class="about-hero section">
      <div class="container">
        <div class="about-hero__content">
          <div class="about-hero__text">
            <span class="section-label">About Kevin</span>
            <h1>Close-up magic that creates<br/>
                <span class="accent">impossible moments</span>.</h1>
            <p class="hero-description">
              Chicago-based magician and sleight of hand expert with over 15 years 
              of experience. Resident performer at the Chicago Magic Lounge. 
              Regular at The Magic Castle and Monday Night Magic.
            </p>
          </div>
          <div class="about-hero__image">
            <div class="portrait-container img-reveal">
              <img 
                src="/images/hero-performing.webp" 
                alt="Kevin Kapinos performing close-up magic at the Chicago Magic Lounge"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- The Story -->
    <section class="origin section">
      <div class="container">
        <div class="origin__story">
          <h2>How It Started</h2>
          <div class="story-content">
            <p>What started as a passion for curiosities, logic, and puzzles turned 
               into an obsession - creating, building, practicing, and performing 
               close-up magic. The magic I perform is focused on interaction and 
               improvisation to create impossible, once-in-a-lifetime moments.</p>
            
            <p>I moved to New York City and became a regular performer at 
               <strong>A Taste of Magic</strong> - New York's top-rated magic show - 
               and <strong>Monday Night Magic</strong>. I worked at 
               <strong>Tannen's Magic Shop</strong> and behind the scenes on 
               <strong>Joshua Jay's <em>Six Impossible Things</em></strong>.</p>
            
            <p>Now based in Chicago, I'm a resident magician at the 
               <strong>Chicago Magic Lounge</strong> and perform at private events 
               and venues nationwide. Whether it's a corporate cocktail hour or an 
               intimate dinner party, I bring the same thing every time: moments 
               that shouldn't be possible.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Credentials -->
    <section class="credentials section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Where I Perform</span>
          <h2>Venues & Recognition</h2>
        </div>
        
        <div class="venue-grid">
          <div class="venue-card featured tilt-card">
            <div class="venue-icon">🎭</div>
            <h3>Chicago Magic Lounge</h3>
            <p class="venue-status">Resident Magician</p>
            <p>Chicago's premier magic venue - performing close-up magic tableside 
               as one of their rotating house magicians.</p>
          </div>
          
          <div class="venue-card tilt-card">
            <div class="venue-icon">🏰</div>
            <h3>The Magic Castle</h3>
            <p class="venue-status">Performing Member</p>
            <p>Hollywood's legendary private club for magicians, 
               where I've performed multiple times.</p>
          </div>
          
          <div class="venue-card tilt-card">
            <div class="venue-icon">🗽</div>
            <h3>Monday Night Magic</h3>
            <p class="venue-status">Regular Performer</p>
            <p>New York City's longest-running magic show, 
               where I was a featured performer.</p>
          </div>
          
          <div class="venue-card tilt-card">
            <div class="venue-icon">✨</div>
            <h3>A Taste of Magic</h3>
            <p class="venue-status">Regular Performer</p>
            <p>New York's top-rated magic show - intimate, 
               interactive close-up performances.</p>
          </div>
        </div>

        <div class="awards">
          <div class="award-item">
            <span class="award-icon">🏆</span>
            <div>
              <strong>Close-Up Magic Competition Winner</strong>
              <span>Alliance of Chicago Entertainers, 2013</span>
            </div>
          </div>
          <div class="award-item">
            <span class="award-icon">🏆</span>
            <div>
              <strong>Close-Up Magician of the Year</strong>
              <span>New York Magic Enclave</span>
            </div>
          </div>
          <div class="award-item">
            <span class="award-icon">🎪</span>
            <div>
              <strong>Tannen's Magic Camp</strong>
              <span>Staff member since 2020</span>
            </div>
          </div>
          <div class="award-item">
            <span class="award-icon">🎬</span>
            <div>
              <strong>Joshua Jay's <em>Six Impossible Things</em></strong>
              <span>Behind the scenes crew</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Photo Gallery -->
    <section class="gallery section">
      <div class="container">
        <div class="section-header">
          <h2>In Action</h2>
        </div>
        <div class="gallery-grid">
          <div class="gallery-item img-reveal">
            <img src="/images/performing-closeup.webp" alt="Kevin performing Rubik's cube magic at the Chicago Magic Lounge" loading="lazy" />
          </div>
          <div class="gallery-item img-reveal">
            <img src="/images/cards-in-air.webp" alt="Kevin performing close-up magic for guests at a cocktail event" loading="lazy" />
          </div>
          <div class="gallery-item img-reveal">
            <img src="/images/haunted-deck.webp" alt="Kevin performing card magic for amazed audience members" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <!-- Lessons -->
    <section class="lessons section">
      <div class="container">
        <div class="lessons-content">
          <h2>Private Lessons</h2>
          <p>Want to learn magic yourself? I offer private lessons for all skill levels - 
             from complete beginners to experienced performers looking to refine their craft.</p>
          <router-link to="/contact" class="btn btn-secondary">
            Inquire About Lessons
          </router-link>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="about-cta section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to make your event unforgettable?</h2>
          <p>Let's talk about what I can bring to your next event.</p>
          <div class="cta-actions">
            <router-link to="/contact" class="btn btn-primary">
              Get In Touch
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
import { useTilt } from '../composables/useTilt'
import { useSEO } from '../composables/useSEO'

useSEO({
  title: 'About Kevin Kapinos | Chicago Magic Lounge Resident Magician',
  description: 'Learn about Kevin Kapinos, Chicago-based magician with 15+ years experience. Resident performer at Chicago Magic Lounge and The Magic Castle.',
  path: '/about'
})

gsap.registerPlugin(ScrollTrigger)
useTilt('.tilt-card', 6)

onMounted(() => {
  // Hero timeline - immediate, no scroll trigger
  const heroTl = gsap.timeline()
  heroTl
    .fromTo('.about-hero .section-label', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
    .fromTo('.about-hero h1', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.3')
    .fromTo('.hero-description', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4')
    .fromTo('.portrait-container', { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8 }, '-=0.6')

  document.querySelectorAll('.story-content p').forEach((el, i) => {
    gsap.fromTo(el, { y: 30, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.7, delay: i * 0.15,
      scrollTrigger: { trigger: el, start: 'top 90%' }
    })
  })

  document.querySelectorAll('.venue-card').forEach((el, i) => {
    gsap.fromTo(el, { y: 40, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.7, delay: i * 0.1,
      scrollTrigger: { trigger: el, start: 'top 90%' }
    })
  })

  document.querySelectorAll('.award-item').forEach((el, i) => {
    gsap.fromTo(el, { x: -20, opacity: 0 }, {
      x: 0, opacity: 1, duration: 0.5, delay: i * 0.08,
      scrollTrigger: { trigger: el, start: 'top 90%' }
    })
  })

  document.querySelectorAll('.gallery-item').forEach((el, i) => {
    gsap.fromTo(el, { y: 40, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.7, delay: i * 0.15,
      scrollTrigger: { trigger: el, start: 'top 90%' }
    })
  })
})
</script>

<style lang="scss" scoped>
.about-hero {
  padding-top: 8rem;
  
  &__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 3rem;
    }
  }
  
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
    line-height: 1.8;
  }
}

.portrait-container {
  border-radius: var(--radius-lg);
  overflow: hidden;
  
  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: var(--radius-lg);
  }
}

// Story
.origin__story {
  max-width: 700px;
  margin: 0 auto;
  
  h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: clamp(2rem, 4vw, 2.5rem);
  }
}

.story-content {
  p {
    color: var(--text-secondary);
    font-size: 1.1rem;
    line-height: 1.9;
    margin-bottom: 1.5rem;
    
    strong {
      color: var(--text-primary);
    }
    
    em {
      color: var(--text-accent);
    }
    
    &:last-child { margin-bottom: 0; }
  }
}

// Venues
.venue-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.venue-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-lg);
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(96, 165, 250, 0.3);
  }
  
  &.featured {
    border-color: rgba(96, 165, 250, 0.4);
    background: rgba(96, 165, 250, 0.08);
  }
  
  .venue-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  h3 {
    margin-bottom: 0.5rem;
    color: var(--text-primary);
    font-size: 1.2rem;
  }
  
  .venue-status {
    color: var(--text-accent);
    font-weight: 600;
    margin-bottom: 1rem;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  p:last-child {
    color: var(--text-secondary);
    line-height: 1.6;
    font-size: 0.95rem;
  }
}

// Awards
.awards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.award-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-md);
  
  .award-icon {
    font-size: 1.5rem;
    flex-shrink: 0;
    margin-top: 2px;
  }
  
  strong {
    display: block;
    color: var(--text-primary);
    margin-bottom: 0.3rem;
    font-size: 0.95rem;
    
    em {
      color: var(--text-accent);
    }
  }
  
  span {
    color: var(--text-muted);
    font-size: 0.85rem;
  }
}

// Gallery
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.gallery-item {
  border-radius: var(--radius-lg);
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    display: block;
    transition: transform 0.6s var(--ease-out);
  }
  
  &:hover img {
    transform: scale(1.05);
  }
}

// Lessons
.lessons {
  .lessons-content {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--radius-lg);
    padding: 3rem;
    
    h2 {
      margin-bottom: 1rem;
      font-size: 1.8rem;
    }
    
    p {
      color: var(--text-secondary);
      line-height: 1.7;
      margin-bottom: 2rem;
    }
  }
}

// CTA
.about-cta {
  text-align: center;
  
  .cta-content {
    max-width: 600px;
    margin: 0 auto;
    
    h2 {
      font-size: clamp(1.8rem, 3.5vw, 2.5rem);
      margin-bottom: 1rem;
    }
    
    p {
      color: var(--text-secondary);
      font-size: 1.1rem;
      margin-bottom: 2rem;
    }
    
    .cta-actions {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
}

// Shared
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
  border-radius: var(--radius-pill);
  background: rgba(96, 165, 250, 0.1);
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
  
  h2 {
    margin-bottom: 1.5rem;
    font-size: clamp(2rem, 4vw, 2.8rem);
  }
}

// Image reveal
.img-reveal {
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, var(--accent-purple), var(--text-accent));
    transform: scaleX(1);
    transform-origin: right;
    transition: transform 0.9s var(--ease-in-out);
    transition-delay: 0.2s;
    border-radius: inherit;
  }
  
  &.revealed::after {
    transform: scaleX(0);
  }
}
</style>
