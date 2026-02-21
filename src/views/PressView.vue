<template>
  <div class="testimonials">
    <!-- Hero Section -->
    <section class="testimonials-hero section">
      <div class="container">
        <div class="hero-content">
          <span class="section-label">Kind Words</span>
          <h1>What people say <span class="accent">after</span>.</h1>
          <p class="hero-description">
            The best measure of a performance isn't what happens during - it's 
            the conversations that follow. Here's what audiences and event planners 
            have shared.
          </p>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials-content section">
      <div class="container">
        <div class="testimonials-grid">
          <div class="testimonial-card featured">
            <div class="quote-mark">"</div>
            <blockquote>
              We hired Kevin for our company holiday party and he absolutely 
              stole the show. People are still talking about it weeks later. 
              He made our CEO's jaw literally drop.
            </blockquote>
            <cite>
              <strong>Corporate Event Planner</strong>
              <span>Chicago, IL</span>
            </cite>
          </div>
          
          <div class="testimonial-card">
            <div class="quote-mark">"</div>
            <blockquote>
              I've seen magicians before. This was completely different. Kevin 
              told me the word I was thinking of - the exact word - and I still 
              have no idea how. Genuinely unsettling in the best possible way.
            </blockquote>
            <cite>
              <strong>Private Event Guest</strong>
              <span>Wedding Reception</span>
            </cite>
          </div>
          
          <div class="testimonial-card">
            <div class="quote-mark">"</div>
            <blockquote>
              Professional from start to finish. Kevin worked with us on timing, 
              adapted to our event flow perfectly, and delivered something our 
              guests will never forget.
            </blockquote>
            <cite>
              <strong>Event Coordinator</strong>
              <span>Corporate Gala</span>
            </cite>
          </div>
        </div>
        
        <div class="share-experience">
          <div class="share-card">
            <h3>Seen Kevin Perform?</h3>
            <p>If Kevin performed at your event and you'd like to share your 
               experience, we'd love to hear from you.</p>
            <a href="mailto:kevin@kevinkapinos.com?subject=Testimonial" class="btn btn-secondary">
              Share Your Experience
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="testimonials-cta section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to give your guests something to talk about?</h2>
          <router-link to="/contact" class="btn btn-primary">
            Book Kevin
          </router-link>
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
    .from('.section-label', { duration: 0.8, y: 30, opacity: 0 })
    .from('.testimonials-hero h1', { duration: 1, y: 50, opacity: 0 }, '-=0.3')
    .from('.hero-description', { duration: 0.8, y: 30, opacity: 0 }, '-=0.5')

  gsap.from('.testimonial-card', {
    scrollTrigger: { trigger: '.testimonials-content', start: 'top 80%' },
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2
  })
})
</script>

<style lang="scss" scoped>
.testimonials-hero {
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

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  margin-bottom: 4rem;
}

.testimonial-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: rgba(96, 165, 250, 0.3);
    background: rgba(96, 165, 250, 0.05);
  }
  
  &.featured {
    border-color: rgba(96, 165, 250, 0.4);
    background: rgba(96, 165, 250, 0.08);
  }
  
  .quote-mark {
    font-family: 'Playfair Display', serif;
    font-size: 4rem;
    color: var(--text-accent);
    opacity: 0.3;
    line-height: 1;
    margin-bottom: 0.5rem;
  }
  
  blockquote {
    color: var(--text-primary);
    font-size: 1.05rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-style: italic;
  }
  
  cite {
    font-style: normal;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    
    strong {
      color: var(--text-primary);
      font-size: 0.95rem;
    }
    
    span {
      color: var(--text-muted);
      font-size: 0.85rem;
    }
  }
}

.share-experience {
  display: flex;
  justify-content: center;
}

.share-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  max-width: 500px;
  
  h3 {
    color: var(--text-primary);
    margin-bottom: 1rem;
    font-size: 1.3rem;
  }
  
  p {
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }
}

.testimonials-cta {
  text-align: center;
  
  .cta-content {
    max-width: 600px;
    margin: 0 auto;
    
    h2 {
      font-size: clamp(1.8rem, 3.5vw, 2.5rem);
      margin-bottom: 2rem;
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
