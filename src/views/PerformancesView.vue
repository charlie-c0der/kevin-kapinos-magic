<template>
  <div class="performances">
    <!-- Hero Section -->
    <section class="performances-hero section">
      <div class="container">
        <div class="hero-content">
          <span class="section-label">Live Performances</span>
          <h1>Sophisticated magic for events<br/>that <span class="accent">matter</span>.</h1>
          <p class="hero-description">
            Interactive close-up magic and mentalism designed to elevate the atmosphere 
            of your event - not interrupt it. Each experience is tailored to feel 
            personal, elegant, and unforgettable.
          </p>
        </div>
      </div>
    </section>

    <!-- Performance Types -->
    <section class="performance-types section">
      <div class="container">
        <div class="section-header">
          <h2>Performance Formats</h2>
          <p>Each format is designed to maximize impact while respecting your event's atmosphere</p>
        </div>
        
        <div class="format-grid">
          <!-- Walk-Around Magic -->
          <div class="format-card featured">
            <div class="format-header">
              <div class="format-icon">🃏</div>
              <div class="format-title">
                <h3>Walk-Around Magic</h3>
                <span class="format-subtitle">Cocktail Hours, Receptions & Networking Events</span>
              </div>
            </div>
            
            <div class="format-content">
              <p>Kevin moves seamlessly from group to group, performing close-up magic 
                 that creates natural conversation starters and shared moments of surprise. 
                 No microphones, no interruptions - just polished entertainment woven 
                 into your event.</p>
              
              <div class="format-specs">
                <div class="spec-row">
                  <span class="spec-label">Ideal for:</span>
                  <span class="spec-value">Wedding cocktail hours, corporate mixers, holiday parties</span>
                </div>
                <div class="spec-row">
                  <span class="spec-label">Format:</span>
                  <span class="spec-value">Roving, table-to-table</span>
                </div>
              </div>
            </div>

            <div class="format-image">
              <img src="/images/cards-in-air.webp" alt="Kevin performing walk-around magic at a cocktail event" loading="lazy" />
            </div>
          </div>

          <!-- Close-Up Shows -->
          <div class="format-card">
            <div class="format-header">
              <div class="format-icon">✨</div>
              <div class="format-title">
                <h3>Close-Up Magic Shows</h3>
                <span class="format-subtitle">Intimate Gatherings & Private Events</span>
              </div>
            </div>
            
            <div class="format-content">
              <p>A focused performance for seated or closely gathered audiences - 
                 impossible moments, audience participation, and genuine astonishment 
                 happening right in your hands. The same format Kevin performs at 
                 the Chicago Magic Lounge.</p>
              
              <div class="format-specs">
                <div class="spec-row">
                  <span class="spec-label">Ideal for:</span>
                  <span class="spec-value">Birthday parties, anniversaries, small corporate dinners</span>
                </div>
                <div class="spec-row">
                  <span class="spec-label">Format:</span>
                  <span class="spec-value">Seated / close-up show</span>
                </div>
              </div>
            </div>

            <div class="format-image">
              <img src="/images/hero-performing.webp" alt="Kevin performing close-up magic show at a table" loading="lazy" />
            </div>
          </div>

          <!-- Corporate -->
          <div class="format-card">
            <div class="format-header">
              <div class="format-icon">🏢</div>
              <div class="format-title">
                <h3>Corporate Entertainment</h3>
                <span class="format-subtitle">Team Events & Executive Gatherings</span>
              </div>
            </div>
            
            <div class="format-content">
              <p>Professional entertainment that breaks the ice, keeps energy high, 
                 and creates memorable moments without formal staging. Walk-around 
                 magic during networking events or a focused close-up show for 
                 smaller executive gatherings.</p>
              
              <div class="format-specs">
                <div class="spec-row">
                  <span class="spec-label">Ideal for:</span>
                  <span class="spec-value">Holiday parties, team building, client events</span>
                </div>
                <div class="spec-row">
                  <span class="spec-label">Format:</span>
                  <span class="spec-value">Walk-around or close-up show</span>
                </div>
              </div>
            </div>

            <div class="format-image">
              <img src="/images/haunted-deck.webp" alt="Kevin performing card magic for amazed guests" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="faq section">
      <div class="container">
        <div class="section-header">
          <h2>Common Questions</h2>
        </div>
        
        <div class="faq-list">
          <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
            <button 
              class="faq-question" 
              @click="toggleFAQ(index)"
              :class="{ 'active': openFAQ === index }"
            >
              <span>{{ faq.question }}</span>
              <div class="faq-icon" :class="{ 'rotated': openFAQ === index }">▼</div>
            </button>
            <div class="faq-answer" :class="{ 'open': openFAQ === index }">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="performances-cta section">
      <div class="container">
        <div class="cta-content">
          <h2>Let's create something unforgettable.</h2>
          <p>Tell me about your event and I'll put together a custom proposal.</p>
          <div class="cta-actions">
            <router-link to="/contact" class="btn btn-primary">
              Get in Touch
            </router-link>
            <a href="mailto:kevin@kevinkapinos.com" class="btn btn-secondary">
              Email Directly
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useSEO } from '../composables/useSEO'

useSEO({
  title: 'Performance Types | Corporate & Wedding Magic Shows - Kevin Kapinos',
  description: 'Professional magic entertainment formats: walk-around magic, close-up shows, and corporate events. Customized performances for your specific audience.',
  path: '/performances'
})

gsap.registerPlugin(ScrollTrigger)

const openFAQ = ref<number | null>(null)

const faqs = [
  {
    question: "How far in advance should I book?",
    answer: "4–8 weeks is ideal for full customization, but I can often accommodate shorter notice. Reach out and we'll make it work."
  },
  {
    question: "Do you travel outside of Chicago?",
    answer: "Yes - I perform nationwide. Travel within 200 miles of Chicago is included. For destinations beyond that, travel costs are quoted with your proposal."
  },
  {
    question: "What kind of magic do you perform?",
    answer: "Interactive close-up magic and mentalism - card tricks, sleight of hand, mind reading, and impossible demonstrations that happen right in your hands. No stage, no smoke machines, no top hats."
  },
  {
    question: "What do you need from the venue?",
    answer: "Very little. A clear sightline to the audience and basic sound for larger groups (150+). I bring everything else."
  },
  {
    question: "What if someone doesn't want to participate?",
    answer: "Participation is always voluntary. I read the room and never pressure anyone. There are always plenty of willing volunteers."
  }
]

const toggleFAQ = (index: number) => {
  openFAQ.value = openFAQ.value === index ? null : index
}

onMounted(() => {
  gsap.timeline()
    .fromTo('.performances-hero .section-label', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
    .fromTo('.performances-hero h1', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.3')
    .fromTo('.performances-hero .hero-description', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4')

  document.querySelectorAll('.format-card').forEach((el, i) => {
    gsap.fromTo(el, { y: 40, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.7, delay: i * 0.15,
      scrollTrigger: { trigger: el, start: 'top 90%' }
    })
  })

  document.querySelectorAll('.faq-item').forEach((el, i) => {
    gsap.fromTo(el, { y: 20, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.5, delay: i * 0.08,
      scrollTrigger: { trigger: el, start: 'top 90%' }
    })
  })
})
</script>

<style lang="scss" scoped>
.performances-hero {
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
    font-size: 1.1rem;
    color: var(--text-secondary);
    line-height: 1.8;
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
    max-width: 800px;
    margin: 0 auto;
  }
}

.format-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
}

.format-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: rgba(96, 165, 250, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
  
  &.featured {
    border-color: rgba(96, 165, 250, 0.4);
    background: rgba(96, 165, 250, 0.08);
    
    .format-header {
      background: linear-gradient(135deg, rgba(83, 58, 123, 0.3), rgba(96, 165, 250, 0.3));
    }
  }
}

.format-header {
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  gap: 1.5rem;
  
  .format-icon {
    font-size: 2.5rem;
    width: 60px;
    text-align: center;
    flex-shrink: 0;
  }
  
  .format-title {
    h3 {
      color: var(--text-primary);
      margin-bottom: 0.3rem;
      font-size: 1.3rem;
    }
    
    .format-subtitle {
      color: var(--text-accent);
      font-weight: 600;
      font-size: 0.9rem;
    }
  }
}

.format-image {
  padding: 0 2rem 2rem;
  
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 12px;
    transition: transform 0.6s var(--ease-out);
  }
  
  &:hover img {
    transform: scale(1.02);
  }
}

.format-content {
  padding: 2rem;
  
  p {
    color: var(--text-secondary);
    line-height: 1.7;
    font-size: 1.05rem;
    margin-bottom: 1.5rem;
  }
  
  .format-specs {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 15px;
    padding: 1.5rem;
    
    .spec-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.8rem;
      
      &:last-child { margin-bottom: 0; }
      
      .spec-label {
        color: var(--text-muted);
        font-weight: 600;
      }
      
      .spec-value {
        color: var(--text-primary);
        font-weight: 600;
      }
    }
  }
}

// FAQ
.faq-list {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq-item {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  overflow: hidden;
}

.faq-question {
  width: 100%;
  padding: 1.5rem;
  background: none;
  border: none;
  color: var(--text-primary);
  font-weight: 600;
  font-size: 1rem;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  
  &:hover { background: rgba(255, 255, 255, 0.05); }
  
  &.active {
    background: rgba(96, 165, 250, 0.1);
    color: var(--text-accent);
  }
  
  .faq-icon {
    color: var(--text-accent);
    font-size: 0.8rem;
    transition: transform 0.3s ease;
    
    &.rotated { transform: rotate(180deg); }
  }
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &.open {
    max-height: 200px;
    
    p { opacity: 1; transform: translateY(0); }
  }
  
  p {
    padding: 0 1.5rem 1.5rem;
    color: var(--text-secondary);
    line-height: 1.7;
    opacity: 0;
    transform: translateY(-10px);
    transition: all 0.3s ease 0.1s;
  }
}

// CTA
.performances-cta {
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
