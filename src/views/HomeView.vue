<script setup lang="ts">
import { onMounted, ref, nextTick, reactive } from 'vue'
import { useReveal } from '../composables/useReveal'
import { useParticles } from '../composables/useParticles'
import { useSplitText } from '../composables/useSplitText'
import { useMagnetic } from '../composables/useMagnetic'
import { useSEO } from '../composables/useSEO'
import BackToTop from '../components/BackToTop.vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

useSEO({
  title: 'Kevin Kapinos | Chicago Magician - Close-Up Magic & Mentalism',
  description: 'Kevin Kapinos offers interactive close-up magic and mentalism for weddings, corporate events, and private celebrations in Chicago and nationwide.',
  path: '/'
})

gsap.registerPlugin(ScrollTrigger)

useReveal()
useParticles('hero-particles', 40)
useSplitText()
useMagnetic()

const heroLoaded = ref(false)
const newsletter = reactive({
  email: '',
  submitting: false,
  submitted: false
})

const venues = [
  'Chicago Magic Lounge',
  'The Magic Castle',
  'Monday Night Magic',
  'A Taste of Magic',
  'Tannen\'s Magic Camp',
  'MAES Convention',
  'Corporate & Private Events Nationwide'
]

const stats = [
  { number: '15+', label: 'Years Performing', isNumeric: false },
  { number: 'CML', label: 'Resident Performer', isNumeric: false },
  { number: '✦', label: 'Magic Castle', isNumeric: false },
  { number: '✦', label: 'Award-Winning', isNumeric: false }
]

const testimonials = [
  {
    quote: 'We hired Kevin for our holiday party and he absolutely stole the show. People were talking about it for weeks. He made our CEO\'s jaw literally drop.',
    author: 'Corporate Event Planner',
    context: 'Chicago, IL',
    avatar: '/images/hero-performing.webp',
    initials: 'MW'
  },
  {
    quote: 'I\'ve seen magicians before. This was completely different. Kevin told me the word I was thinking - the exact word - and I still have no idea how.',
    author: 'Private Event Guest',
    context: 'Wedding Reception',
    avatar: '/images/performing-closeup.webp',
    initials: 'JD'
  },
  {
    quote: 'Professional from start to finish. Kevin adapted to our event flow perfectly and delivered something our guests will never forget.',
    author: 'Event Coordinator',
    context: 'Corporate Gala',
    avatar: '/images/cards-in-air.webp',
    initials: 'SL'
  }
]

const processSteps = [
  { 
    number: '01', 
    title: 'Tell me about your audience', 
    desc: 'Every group is different. I need to know who they are, what they expect, and what will truly astound them.' 
  },
  { 
    number: '02', 
    title: 'We craft the impossible together', 
    desc: 'I\'ll design a performance specifically for your event. No generic show - just pure, targeted psychological entertainment.' 
  },
  { 
    number: '03', 
    title: 'Your guests question reality', 
    desc: 'They won\'t just be entertained. They\'ll leave convinced they witnessed something that shouldn\'t be possible.' 
  }
]

onMounted(async () => {
  await nextTick()
  setTimeout(() => { heroLoaded.value = true }, 300)

  // Hero parallax effects
  gsap.to('.hero__title', {
    yPercent: -40,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1.5
    }
  })

  gsap.to('.hero__subtitle', {
    yPercent: -20,
    opacity: 0.3,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: '70% top',
      scrub: 1
    }
  })

  // Mind symbol rotation
  gsap.to('.mind-symbol', {
    rotation: 360,
    duration: 20,
    repeat: -1,
    ease: 'none'
  })

  // Stats fade-in
  gsap.from('.stat', {
    y: 20,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.stats-bar',
      start: 'top 85%'
    }
  })

  // Testimonials staggered reveal
  document.querySelectorAll('.testimonial-card').forEach((card, i) => {
    gsap.fromTo(card,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: i * 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
        }
      }
    )
  })

  // Process steps animation
  document.querySelectorAll('.process-step').forEach((step, i) => {
    gsap.fromTo(step,
      { x: -40, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        delay: i * 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: step,
          start: 'top 90%',
        }
      }
    )
  })

  // Floating effects for various elements
  gsap.to('.float-slow', {
    y: -15,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: 'power2.inOut'
  })

  gsap.to('.float-medium', {
    y: -20,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: 'power2.inOut'
  })
})

const scrollToExperience = () => {
  const element = document.getElementById('experience')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const handleNewsletterSubmit = async () => {
  newsletter.submitting = true
  
  try {
    // Using Formspree for newsletter signup too
    const response = await fetch('https://formspree.io/f/xpznzkyj', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: newsletter.email,
        subject: `Newsletter Signup from ${newsletter.email}`,
        message: 'Newsletter subscription request'
      })
    })
    
    if (response.ok) {
      newsletter.submitted = true
      setTimeout(() => {
        newsletter.email = ''
        newsletter.submitted = false
      }, 3000)
    } else {
      throw new Error('Signup failed')
    }
  } catch {
    alert('Sorry, there was an error. Please try again later.')
  } finally {
    newsletter.submitting = false
  }
}
</script>

<template>
  <div class="home">
    <BackToTop />
    <!-- ━━━ HERO SECTION ━━━ -->
    <section class="hero">
      <canvas id="hero-particles" class="hero__particles" />
      
      <!-- Background elements -->
      <div class="hero__bg-gradient" />
      <div class="hero__vignette" />
      
      <!-- Floating mystical elements -->
      <div class="mystical-orb mystical-orb--1 float-slow" />
      <div class="mystical-orb mystical-orb--2 float-medium" />
      <div class="mystical-orb mystical-orb--3 float-slow" />

      <!-- Mind reading symbol -->
      <div class="hero__mind-symbol">
        <div class="mind-symbol">
          <div class="mind-symbol__inner">
            <div class="mind-symbol__eye">👁</div>
            <div class="mind-symbol__rays"></div>
          </div>
        </div>
      </div>

      <div class="hero__content container" :class="{ loaded: heroLoaded }">
        <p class="hero__eyebrow" data-split data-split-delay="0.3">
          Chicago Magician & Sleight of Hand Expert
        </p>
        <h1 class="hero__title" data-split data-split-delay="0.6">
          Close-up magic that creates <span class="shimmer">impossible moments.</span>
        </h1>
        <div class="hero__divider" />
        <p class="hero__subtitle reveal-delay-1">
          Interactive close-up magic and mentalism for weddings, corporate events,<br class="hide-mobile">
          and private celebrations. Resident performer at the Chicago Magic Lounge.<br class="hide-mobile">
          15+ years creating once-in-a-lifetime moments.
        </p>
        <div class="hero__actions reveal-delay-2">
          <router-link to="/contact" class="btn btn--primary magnetic glow-pulse">
            <span>Book Kevin for Your Event</span>
          </router-link>
          <button @click="scrollToExperience" class="btn btn--secondary magnetic">
            <span>See How It Works</span>
          </button>
        </div>
      </div>

      <div class="hero__scroll-indicator">
        <div class="scroll-text">Scroll to explore</div>
        <div class="scroll-line" />
      </div>
    </section>

    <!-- ━━━ VENUES TICKER ━━━ -->
    <section class="ticker">
      <div class="ticker__track">
        <span v-for="(venue, i) in [...venues, ...venues, ...venues]" :key="i" class="ticker__item">
          {{ venue }} <span class="ticker__star">✦</span>
        </span>
      </div>
    </section>

    <!-- ━━━ STATS BAR ━━━ -->
    <section class="stats-bar">
      <div class="container stats-bar__inner">
        <div v-for="stat in stats" :key="stat.label" class="stat">
          <span class="stat__number">{{ stat.number }}</span>
          <span class="stat__label">{{ stat.label }}</span>
        </div>
      </div>
    </section>

    <!-- ━━━ AS SEEN AT VENUES ━━━ -->
    <section class="section venues-section">
      <div class="container">
        <div class="section-content">
          <p class="section-eyebrow reveal">Regular Performer At</p>
          <h2 class="section-title reveal reveal-delay-1">
            Trusted by <em class="shimmer">premier</em> venues.
          </h2>
        </div>
        
        <div class="venues-grid">
          <div class="venue-logo featured">
            <div class="venue-brand">
              <h3>Chicago Magic Lounge</h3>
              <p>Resident Magician</p>
            </div>
          </div>
          <div class="venue-logo">
            <div class="venue-brand">
              <h3>The Magic Castle</h3>
              <p>Hollywood, CA</p>
            </div>
          </div>
          <div class="venue-logo">
            <div class="venue-brand">
              <h3>Monday Night Magic</h3>
              <p>NYC's Longest-Running Show</p>
            </div>
          </div>
          <div class="venue-logo">
            <div class="venue-brand">
              <h3>A Taste of Magic</h3>
              <p>NYC's Top-Rated Show</p>
            </div>
          </div>
          <div class="venue-logo">
            <div class="venue-brand">
              <h3>Tannen's Magic</h3>
              <p>Camp Staff Since 2020</p>
            </div>
          </div>
          <div class="venue-logo">
            <div class="venue-brand">
              <h3>MAES Convention</h3>
              <p>Featured Performer</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ━━━ VIDEO REEL ━━━ -->
    <section class="section video-section">
      <div class="container">
        <div class="video-content">
          <div class="section-content">
            <p class="section-eyebrow reveal">See It In Action</p>
            <h2 class="section-title reveal reveal-delay-1">
              Watch the <em class="shimmer">impossible</em> happen.
            </h2>
            <div class="section-divider reveal reveal-delay-2" />
            <p class="section-description reveal reveal-delay-2">
              Experience the moments that define my performances - genuine reactions, 
              impossible revelations, and the magic that happens when audiences 
              witness something that shouldn't be possible.
            </p>
          </div>
          
          <div class="video-placeholder reveal reveal-delay-3">
            <div class="video-frame">
              <div class="video-overlay">
                <div class="play-button">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <circle cx="30" cy="30" r="30" fill="rgba(96, 165, 250, 0.9)"/>
                    <path d="M24 20L40 30L24 40V20Z" fill="white"/>
                  </svg>
                </div>
                <h3>Performance Highlight Reel</h3>
                <p>Coming Soon - Watch Kevin perform at the Chicago Magic Lounge</p>
              </div>
              <img 
                src="/images/event-photo.webp" 
                alt="Kevin Kapinos performing at an event with amazed audience reactions"
                class="video-thumbnail"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ━━━ THE EXPERIENCE ━━━ -->
    <section class="section experience-section" id="experience">
      <div class="container">
        <div class="section-content">
          <p class="section-eyebrow reveal">The Experience</p>
          <h2 class="section-title reveal reveal-delay-1">
            Astonishing magic that happens<br>
            <em class="shimmer">inches from your eyes.</em>
          </h2>
          <div class="section-divider reveal reveal-delay-2" />
          <div class="experience-hero-image reveal reveal-delay-2">
            <img 
              src="/images/performing-closeup.webp" 
              alt="Kevin Kapinos performing close-up magic with cards inches from audience members"
              class="experience-image"
            />
          </div>
          <p class="section-description reveal reveal-delay-2">
            Forget stage shows with smoke and mirrors. This is interactive, close-up magic 
            that happens right in your hands - inches away from your eyes. Card tricks, 
            sleight of hand, and mentalism that create genuine moments of astonishment.
          </p>
          <p class="section-description reveal reveal-delay-3">
            The magic I perform is focused on interaction and improvisation. No stage needed. 
            No loud announcements. Just polished, professional entertainment woven seamlessly 
            into your event - creating natural conversation starters and shared moments of wonder.
          </p>
        </div>
        
        <div class="experience-grid">
          <div class="experience-card reveal-scale">
            <div class="card-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect x="8" y="12" width="32" height="20" rx="4" stroke="currentColor" stroke-width="2"/>
                <circle cx="16" cy="20" r="2" fill="currentColor"/>
                <circle cx="32" cy="24" r="2" fill="currentColor"/>
                <path d="M20 28L28 20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <h3>Sleight of Hand</h3>
            <p>Cards, coins, and objects transform impossibly in your hands. 
               Close-up magic so refined you'll watch it happen and still not believe your eyes.</p>
          </div>
          <div class="experience-card reveal-scale">
            <div class="card-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="16" stroke="currentColor" stroke-width="2"/>
                <path d="M16 20C16 20 19 16 24 16C29 16 32 20 32 20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <circle cx="20" cy="26" r="2" fill="currentColor"/>
                <circle cx="28" cy="26" r="2" fill="currentColor"/>
                <path d="M18 32C18 32 20 34 24 34C28 34 30 32 30 32" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M24 8V12M24 36V40M8 24H12M36 24H40" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <h3>Mentalism</h3>
            <p>Thought reading, predictions, and psychological demonstrations 
               that blur the line between entertainment and the genuinely impossible.</p>
          </div>
          <div class="experience-card reveal-scale">
            <div class="card-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="3" fill="currentColor"/>
                <path d="M12 12L16 16M36 12L32 16M12 36L16 32M36 36L32 32" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <circle cx="12" cy="24" r="2" fill="currentColor"/>
                <circle cx="36" cy="24" r="2" fill="currentColor"/>
                <circle cx="24" cy="12" r="2" fill="currentColor"/>
                <circle cx="24" cy="36" r="2" fill="currentColor"/>
                <path d="M18 18L21 21M30 18L27 21M18 30L21 27M30 30L27 27" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <h3>Interactive Magic</h3>
            <p>Every performance is a conversation. Guests participate, react, and become 
               part of the magic - creating moments they'll talk about for years.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ━━━ TESTIMONIALS ━━━ -->
    <section class="section testimonials-section">
      <div class="container">
        <p class="section-eyebrow reveal">What People Say</p>
        <h2 class="section-title reveal reveal-delay-1">
          Reactions from those who've seen<br>
          the <em class="shimmer">impossible.</em>
        </h2>
        
        <div class="testimonials-grid">
          <div v-for="(testimonial, i) in testimonials" :key="i" class="testimonial-card">
            <blockquote class="testimonial-quote">{{ testimonial.quote }}</blockquote>
            <div class="testimonial-footer">
              <div class="testimonial-avatar">
                <span class="avatar-initials">{{ testimonial.initials }}</span>
              </div>
              <cite class="testimonial-cite">
                <span class="testimonial-author">{{ testimonial.author }}</span>
                <span class="testimonial-context">{{ testimonial.context }}</span>
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ━━━ HOW IT WORKS ━━━ -->
    <section class="section process-section">
      <div class="container">
        <p class="section-eyebrow reveal">The Process</p>
        <h2 class="section-title reveal reveal-delay-1">
          From inquiry to<br>
          <em class="shimmer">impossible experience.</em>
        </h2>
        
        <div class="process-steps">
          <div v-for="(step, i) in processSteps" :key="i" class="process-step">
            <div class="step-number">{{ step.number }}</div>
            <div class="step-content">
              <h3 class="step-title">{{ step.title }}</h3>
              <p class="step-description">{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ━━━ FAQ SECTION ━━━ -->
    <section class="section faq-section">
      <div class="container">
        <div class="section-content">
          <p class="section-eyebrow reveal">Common Questions</p>
          <h2 class="section-title reveal reveal-delay-1">
            Everything you need to <em class="shimmer">know</em>.
          </h2>
          <div class="section-divider reveal reveal-delay-2" />
        </div>
        
        <div class="faq-grid">
          <div class="faq-category">
            <h3>Booking & Pricing</h3>
            <div class="faq-items">
              <div class="faq-item">
                <h4>How far in advance should I book?</h4>
                <p>4-8 weeks is ideal for full customization, but I can often accommodate shorter notice. Popular dates (holidays, wedding season) book up faster.</p>
              </div>
              <div class="faq-item">
                <h4>What's included in your performance fee?</h4>
                <p>Performance, travel within 200 miles of Chicago, setup, and a pre-event consultation to tailor the show to your audience.</p>
              </div>
              <div class="faq-item">
                <h4>Do you travel outside of Chicago?</h4>
                <p>Yes, I perform nationwide. Travel within 200 miles is included. Beyond that, travel costs are quoted separately.</p>
              </div>
            </div>
          </div>
          
          <div class="faq-category">
            <h3>Performance Details</h3>
            <div class="faq-items">
              <div class="faq-item">
                <h4>What kind of magic do you perform?</h4>
                <p>Interactive close-up magic and mentalism - card tricks, sleight of hand, mind reading. No stage, no smoke machines, no top hats.</p>
              </div>
              <div class="faq-item">
                <h4>What do you need from the venue?</h4>
                <p>Very little. Clear sightlines to the audience and basic sound for larger groups (150+). I bring everything else.</p>
              </div>
              <div class="faq-item">
                <h4>What if someone doesn't want to participate?</h4>
                <p>Participation is always voluntary. I read the room and never pressure anyone. There are always plenty of willing volunteers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ━━━ NEWSLETTER SECTION ━━━ -->
    <section class="section newsletter-section">
      <div class="container">
        <div class="newsletter-content">
          <div class="newsletter-text">
            <h3>Stay in the Loop</h3>
            <p>Get notified when I'm performing at public venues in Chicago or when 
               I'm touring to a city near you. No spam, just the occasional update 
               about where you can catch a show.</p>
          </div>
          <form @submit.prevent="handleNewsletterSubmit" class="newsletter-form">
            <div class="form-group">
              <input 
                type="email" 
                v-model="newsletter.email"
                placeholder="Enter your email address"
                required
                :disabled="newsletter.submitted"
              />
              <button 
                type="submit" 
                class="btn btn-primary"
                :disabled="newsletter.submitting || newsletter.submitted"
              >
                <span v-if="newsletter.submitted">✓ Subscribed</span>
                <span v-else-if="newsletter.submitting">Subscribing...</span>
                <span v-else>Subscribe</span>
              </button>
            </div>
            <p class="newsletter-note">Unsubscribe anytime. I respect your inbox.</p>
          </form>
        </div>
      </div>
    </section>

    <!-- ━━━ FINAL CTA ━━━ -->
    <section class="section cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title reveal">
            Ready to make your event<br>
            <span class="shimmer">unforgettable?</span>
          </h2>
          <p class="cta-description reveal reveal-delay-1">
            Book interactive magic and mentalism that your guests will discuss for years. 
            Professional entertainment for weddings, corporate events, and private celebrations 
            from a Chicago Magic Lounge resident and Magic Castle performer.
          </p>
          <div class="cta-actions reveal reveal-delay-2">
            <router-link to="/contact" class="btn btn--primary btn--large magnetic glow-pulse">
              <span>Book Kevin for Your Event</span>
            </router-link>
          </div>
          <div class="cta-guarantees reveal reveal-delay-3">
            <p>✓ Customized performance for your specific audience<br>
               ✓ Available for events nationwide<br>
               ✓ Based in Chicago, IL</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
// ━━━ HERO SECTION ━━━
.hero {
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(135deg, #0a0b15 0%, #1a1b2e 50%, #16213e 100%);
}

.hero__particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.hero__bg-gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 80%, rgba(83, 58, 123, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(96, 165, 250, 0.2) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(196, 146, 79, 0.1) 0%, transparent 50%);
  z-index: 0;
}

.hero__vignette {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at center, transparent 30%, rgba(10, 11, 21, 0.4) 100%);
  z-index: 1;
}

.mystical-orb {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(96, 165, 250, 0.2), transparent 70%);
  pointer-events: none;
  z-index: 1;
  
  &--1 {
    width: 200px;
    height: 200px;
    top: 20%;
    left: -5%;
  }
  
  &--2 {
    width: 150px;
    height: 150px;
    top: 60%;
    right: -3%;
    background: radial-gradient(circle, rgba(196, 146, 79, 0.15), transparent 70%);
  }
  
  &--3 {
    width: 100px;
    height: 100px;
    top: 40%;
    right: 20%;
    background: radial-gradient(circle, rgba(83, 58, 123, 0.2), transparent 70%);
  }
}

.hero__mind-symbol {
  position: absolute;
  top: 50%;
  right: 10%;
  transform: translateY(-50%);
  z-index: 2;
  opacity: 0.1;
  
  @media (max-width: 768px) {
    display: none;
  }
}

.mind-symbol {
  position: relative;
  width: 120px;
  height: 120px;
  
  &__inner {
    position: relative;
    width: 100%;
    height: 100%;
    border: 2px solid rgba(96, 165, 250, 0.3);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  &__eye {
    font-size: 2rem;
    color: rgba(96, 165, 250, 0.6);
  }
  
  &__rays {
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border: 1px solid rgba(196, 146, 79, 0.2);
    border-radius: 50%;
    
    &::before,
    &::after {
      content: '';
      position: absolute;
      top: -15px;
      left: -15px;
      right: -15px;
      bottom: -15px;
      border: 1px solid rgba(83, 58, 123, 0.15);
      border-radius: 50%;
    }
    
    &::after {
      top: -25px;
      left: -25px;
      right: -25px;
      bottom: -25px;
      border-color: rgba(96, 165, 250, 0.1);
    }
  }
}

.hero__content {
  position: relative;
  z-index: 3;
  text-align: center;
  padding: 2rem 0;
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s cubic-bezier(0.23, 1, 0.320, 1);
  
  &.loaded {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero__eyebrow {
  display: inline-block;
  color: #60a5fa;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 2rem;
  padding: 0.8rem 1.5rem;
  border: 1px solid rgba(96, 165, 250, 0.3);
  border-radius: 30px;
  background: rgba(96, 165, 250, 0.1);
  backdrop-filter: blur(10px);
}

.hero__title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 2rem;
  color: #ffffff;
  
  .shimmer {
    background: linear-gradient(45deg, #533a7b, #60a5fa, #c4924f);
    background-size: 300% 300%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 3s ease-in-out infinite;
  }
}

@keyframes shimmer {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.hero__divider {
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #60a5fa, transparent);
  margin: 0 auto 2rem;
}

.hero__subtitle {
  font-size: clamp(1rem, 2vw, 1.3rem);
  color: #e5e7eb;
  line-height: 1.8;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.hero__actions {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.hero__scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  z-index: 3;
}

.scroll-text {
  color: #9ca3af;
  font-size: 0.8rem;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.scroll-line {
  width: 1px;
  height: 30px;
  background: linear-gradient(to bottom, #60a5fa, transparent);
  animation: scroll-pulse 2s infinite;
}

@keyframes scroll-pulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

// ━━━ TICKER ━━━
.ticker {
  background: rgba(10, 11, 21, 0.8);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  padding: 1rem 0;
}

.ticker__track {
  display: flex;
  animation: ticker-scroll 30s linear infinite;
  white-space: nowrap;
}

.ticker__item {
  color: #e5e7eb;
  font-size: 0.9rem;
  margin-right: 3rem;
  font-weight: 500;
}

.ticker__star {
  color: #c4924f;
  margin: 0 1rem;
}

@keyframes ticker-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-33.333%); }
}

// ━━━ STATS BAR ━━━
.stats-bar {
  background: rgba(26, 27, 46, 0.8);
  padding: 3rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.stats-bar__inner {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.stat {
  text-align: center;
  
  &__number {
    display: block;
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 700;
    color: #60a5fa;
    font-family: 'Playfair Display', serif;
    margin-bottom: 0.5rem;
  }
  
  &__label {
    color: #9ca3af;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
}

// ━━━ VENUES SECTION ━━━
.venues-section {
  background: rgba(255, 255, 255, 0.02);
}

.venues-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.venue-logo {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2.5rem 2rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.1), transparent);
    transition: left 0.8s;
  }
  
  &:hover {
    transform: translateY(-5px);
    border-color: rgba(96, 165, 250, 0.3);
    background: rgba(96, 165, 250, 0.05);
    
    &::before {
      left: 100%;
    }
  }
  
  &.featured {
    border-color: rgba(96, 165, 250, 0.4);
    background: rgba(96, 165, 250, 0.08);
    
    .venue-brand h3 {
      color: var(--text-accent);
    }
  }
}

.venue-brand {
  h3 {
    font-family: 'Playfair Display', serif;
    color: var(--text-primary);
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }
  
  p {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin: 0;
  }
}

// ━━━ VIDEO SECTION ━━━
.video-section {
  background: rgba(255, 255, 255, 0.02);
}

.video-content {
  text-align: center;
}

.video-placeholder {
  margin-top: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.video-frame {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
}

.video-thumbnail {
  width: 100%;
  height: 400px;
  object-fit: cover;
  
  @media (max-width: 768px) {
    height: 250px;
  }
}

.video-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(83, 58, 123, 0.4));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(83, 58, 123, 0.5));
    
    .play-button {
      transform: scale(1.1);
    }
  }
  
  h3 {
    margin: 1rem 0 0.5rem;
    font-size: 1.5rem;
    color: white;
  }
  
  p {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1rem;
  }
}

.play-button {
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
}

// ━━━ EXPERIENCE HERO IMAGE ━━━
.experience-hero-image {
  margin: 2rem 0;
  text-align: center;
  
  .experience-image {
    width: 100%;
    max-width: 500px;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    transition: transform 0.6s var(--ease-out);
    
    &:hover {
      transform: scale(1.02);
    }
  }
}

// ━━━ SECTIONS ━━━
// Override global section padding for home page density
.section {
  padding: 6rem 0;
  
  &:nth-child(even) {
    background: rgba(255, 255, 255, 0.02);
  }
}

.section-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
}

.section-eyebrow {
  display: inline-block;
  color: #60a5fa;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid rgba(96, 165, 250, 0.3);
  border-radius: 20px;
  background: rgba(96, 165, 250, 0.1);
}

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  line-height: 1.2;
  color: #ffffff;
  margin-bottom: 2rem;
  
  em.shimmer {
    font-style: italic;
    background: linear-gradient(45deg, #533a7b, #60a5fa, #c4924f);
    background-size: 300% 300%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 3s ease-in-out infinite;
  }
}

.section-divider {
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #60a5fa, transparent);
  margin: 0 auto 2rem;
}

.section-description {
  font-size: 1.1rem;
  color: #e5e7eb;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  
  &:last-of-type {
    margin-bottom: 0;
  }
}

// ━━━ EXPERIENCE GRID ━━━
.experience-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
}

.experience-card {
  background: linear-gradient(135deg, rgba(83, 58, 123, 0.1), rgba(96, 165, 250, 0.05));
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 3rem 2rem;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.1), transparent);
    transition: left 0.8s;
  }
  
  &:hover {
    transform: translateY(-10px);
    border-color: rgba(96, 165, 250, 0.3);
    box-shadow: 0 20px 60px rgba(96, 165, 250, 0.15);
    
    &::before {
      left: 100%;
    }
    
    .card-icon svg {
      transform: scale(1.1);
      color: #ffffff;
    }
  }
  
  .card-icon {
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    
    svg {
      color: var(--text-accent);
      transition: all 0.3s ease;
    }
  }
  
  h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    color: #ffffff;
    margin-bottom: 1.5rem;
  }
  
  p {
    color: #e5e7eb;
    line-height: 1.6;
  }
}

// ━━━ TESTIMONIALS ━━━
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
}

.testimonial-card {
  background: rgba(255, 255, 255, 0.03);
  border-left: 3px solid #60a5fa;
  padding: 2.5rem;
  border-radius: 0 15px 15px 0;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateX(5px);
  }
}

.testimonial-quote {
  font-size: 1.1rem;
  color: #ffffff;
  line-height: 1.6;
  font-style: italic;
  margin-bottom: 2rem;
  position: relative;
  
  &::before {
    content: '"';
    position: absolute;
    top: -10px;
    left: -15px;
    font-size: 3rem;
    color: rgba(96, 165, 250, 0.3);
    font-family: 'Playfair Display', serif;
  }
}

.testimonial-footer {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.testimonial-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-purple), var(--text-accent));
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  .avatar-initials {
    color: white;
    font-weight: 600;
    font-size: 0.9rem;
  }
}

.testimonial-cite {
  color: #e5e7eb;
  font-style: normal;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  
  .testimonial-author {
    font-weight: 600;
    color: var(--text-primary);
  }
  
  .testimonial-context {
    color: #9ca3af;
    font-size: 0.9rem;
    font-weight: 400;
  }
}

// ━━━ PROCESS STEPS ━━━
.process-steps {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 800px;
  margin: 4rem auto 0;
}

.process-step {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
}

.step-number {
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #533a7b, #60a5fa);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'Playfair Display', serif;
}

.step-content {
  flex: 1;
  
  .step-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    color: #ffffff;
    margin-bottom: 1rem;
  }
  
  .step-description {
    font-size: 1.1rem;
    color: #e5e7eb;
    line-height: 1.7;
  }
}

// ━━━ FAQ SECTION ━━━
.faq-section {
  background: rgba(255, 255, 255, 0.02);
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
}

.faq-category {
  h3 {
    font-family: 'Playfair Display', serif;
    color: var(--text-accent);
    font-size: 1.5rem;
    margin-bottom: 2rem;
    text-align: center;
  }
}

.faq-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.faq-item {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: rgba(96, 165, 250, 0.3);
    background: rgba(96, 165, 250, 0.05);
  }
  
  h4 {
    color: var(--text-primary);
    font-size: 1.1rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  
  p {
    color: var(--text-secondary);
    line-height: 1.7;
    margin: 0;
  }
}

// ━━━ NEWSLETTER SECTION ━━━
.newsletter-section {
  background: rgba(255, 255, 255, 0.02);
}

.newsletter-content {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 3rem;
  
  @media (max-width: 480px) {
    padding: 2rem;
  }
}

.newsletter-text {
  margin-bottom: 2rem;
  
  h3 {
    font-family: 'Playfair Display', serif;
    color: var(--text-primary);
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
  
  p {
    color: var(--text-secondary);
    line-height: 1.7;
  }
}

.newsletter-form {
  .form-group {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    
    @media (max-width: 480px) {
      flex-direction: column;
    }
    
    input {
      flex: 1;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 30px;
      padding: 0.85rem 1.5rem;
      color: var(--text-primary);
      font-size: 1rem;
      transition: all 0.3s ease;
      
      &:focus {
        outline: none;
        border-color: var(--text-accent);
        background: rgba(255, 255, 255, 0.08);
        box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.1);
      }
      
      &::placeholder {
        color: var(--text-muted);
      }
      
      &:disabled {
        opacity: 0.7;
      }
    }
    
    button {
      white-space: nowrap;
      
      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }
    }
  }
  
  .newsletter-note {
    color: var(--text-muted);
    font-size: 0.85rem;
    margin: 0;
  }
}

// ━━━ CTA SECTION ━━━
.cta-section {
  background: linear-gradient(135deg, rgba(83, 58, 123, 0.2), rgba(96, 165, 250, 0.1));
  text-align: center;
}

.cta-content {
  max-width: 700px;
  margin: 0 auto;
}

.cta-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 2rem;
  line-height: 1.2;
}

.cta-description {
  font-size: 1.2rem;
  color: #e5e7eb;
  line-height: 1.7;
  margin-bottom: 3rem;
}

.cta-actions {
  margin-bottom: 3rem;
}

.cta-guarantees {
  background: rgba(96, 165, 250, 0.1);
  border: 1px solid rgba(96, 165, 250, 0.2);
  border-radius: 15px;
  padding: 2rem;
  
  p {
    color: #e5e7eb;
    font-size: 1rem;
    line-height: 2;
    margin: 0;
  }
}

// ━━━ UTILITIES ━━━
// Buttons, container, hide-mobile use global styles from App.vue

@media (max-width: 768px) {
  .section {
    padding: 4rem 0;
  }
  
  .experience-grid,
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
  
  .hero__actions {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 100%;
    max-width: 280px;
  }
}
</style>