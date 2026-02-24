<template>
  <div class="contact">
    <!-- Hero Section -->
    <section class="contact-hero section">
      <div class="container">
        <div class="contact-hero__content">
          <span class="section-label">Get In Touch</span>
          <h1>Ready to create an <span class="accent">unforgettable</span> experience?</h1>
          <p class="hero-description">
            Whether you're planning a corporate event, wedding, or private celebration
            or inquiring about private magic lessons, fill out the form below. 
            Include the date, venue, location, and number of guests if you have that info.
          </p>
          
          <div class="contact-info">
            <div class="contact-item">
              <div class="contact-icon">📧</div>
              <div>
                <span class="contact-label">Email</span>
                <span class="contact-value">kevin@kevinkapinos.com</span>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">📍</div>
              <div>
                <span class="contact-label">Based in</span>
                <span class="contact-value">Chicago, Illinois</span>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">✈️</div>
              <div>
                <span class="contact-label">Available</span>
                <span class="contact-value">Nationwide Travel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form -->
    <section class="contact-form-section section">
      <div class="container">
        <div class="form-container">
          <div class="form-header">
            <h2>Tell Me About Your Event</h2>
            <p>The more details you provide, the better I can tailor the perfect 
               experience for your audience.</p>
          </div>
          
          <form @submit.prevent="handleSubmit" class="contact-form" v-if="!submitted">
            <div class="form-grid">
              <div class="form-group">
                <label for="name">Your Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
                  required 
                  placeholder="John Smith"
                />
              </div>
              
              <div class="form-group">
                <label for="email">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  required 
                  placeholder="john@company.com"
                />
              </div>
              
              <div class="form-group">
                <label for="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  v-model="form.phone" 
                  placeholder="(555) 123-4567"
                />
              </div>
              
              <div class="form-group">
                <label for="company">Company/Organization</label>
                <input 
                  type="text" 
                  id="company" 
                  v-model="form.company" 
                  placeholder="Acme Corporation"
                />
              </div>
              
              <div class="form-group">
                <label for="eventDate">Event Date</label>
                <input 
                  type="date" 
                  id="eventDate" 
                  v-model="form.eventDate"
                />
              </div>
              
              <div class="form-group">
                <label for="eventType">Event Type *</label>
                <select id="eventType" v-model="form.eventType" required>
                  <option value="" disabled>Select event type...</option>
                  <option value="corporate-event">Corporate Event</option>
                  <option value="holiday-party">Holiday Party</option>
                  <option value="wedding">Wedding</option>
                  <option value="private-party">Private Party</option>
                  <option value="conference">Conference</option>
                  <option value="fundraiser">Fundraiser</option>
                  <option value="lessons">Private Lessons</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="guestCount">Expected Guests</label>
                <input 
                  type="number" 
                  id="guestCount" 
                  v-model="form.guestCount" 
                  placeholder="50"
                  min="1"
                />
              </div>
              
              <div class="form-group">
                <label for="location">Event Location</label>
                <input 
                  type="text" 
                  id="location" 
                  v-model="form.location" 
                  placeholder="Chicago, IL or specific venue"
                />
              </div>
            </div>
            
            <div class="form-group full-width">
              <label for="message">Tell Me About Your Vision *</label>
              <textarea 
                id="message" 
                v-model="form.message" 
                required 
                rows="6"
                placeholder="What kind of experience are you hoping to create? Any specific requirements or details I should know about?"
              ></textarea>
            </div>
            
            <button type="submit" class="btn btn-primary submit-btn" :disabled="submitting">
              <span v-if="!submitting">Send Inquiry</span>
              <span v-else>Sending...</span>
            </button>
          </form>
          
          <!-- Success State -->
          <div v-if="submitted" class="form-success">
            <div class="success-icon">✨</div>
            <h3>Message Received!</h3>
            <p>Thank you for your inquiry. I'll review your event details and 
               respond within 24 hours.</p>
            <button @click="resetForm" class="btn btn-secondary">
              Send Another Inquiry
            </button>
          </div>
        </div>
        
        <!-- Sidebar -->
        <div class="contact-sidebar">
          <div class="sidebar-card">
            <h3>What to Expect</h3>
            <ul class="expect-list">
              <li>Personal consultation about your event goals</li>
              <li>Custom performance tailored to your audience</li>
              <li>Professional presentation and setup</li>
              <li>Memorable moments your guests will discuss for years</li>
            </ul>
          </div>
          
          <div class="sidebar-card">
            <h3>Common Questions</h3>
            <div class="faq-list">
              <div class="faq-item">
                <strong>How far in advance should I book?</strong>
                <span>4-8 weeks is ideal, though I can sometimes accommodate shorter notice.</span>
              </div>
              <div class="faq-item">
                <strong>Do you travel outside Chicago?</strong>
                <span>Yes, I perform nationwide. Travel within 200 miles is included.</span>
              </div>
              <div class="faq-item">
                <strong>What's included?</strong>
                <span>Performance, travel, setup, and a pre-event consultation to tailor the show.</span>
              </div>
            </div>
          </div>
          
          <div class="sidebar-card contact-card">
            <h3>Direct Contact</h3>
            <div class="direct-contact">
              <div class="contact-method">
                <span class="method-label">Email:</span>
                <a href="mailto:kevin@kevinkapinos.com">kevin@kevinkapinos.com</a>
              </div>
              <div class="contact-method">
                <span class="method-label">Based in:</span>
                <span>Chicago, Illinois</span>
              </div>
            </div>
            
            <div class="calendar-note">
              <p><strong>Quick Consultation:</strong> After initial contact, 
                 I'll send you a calendar link to schedule a brief call to discuss 
                 your event details and vision.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useSEO } from '../composables/useSEO'

useSEO({
  title: 'Contact Kevin Kapinos | Book Magic Show for Your Event',
  description: 'Contact Chicago magician Kevin Kapinos to book close-up magic and mentalism for your wedding, corporate event, or private celebration. Free consultation.',
  path: '/contact'
})

gsap.registerPlugin(ScrollTrigger)

const submitted = ref(false)
const submitting = ref(false)

const form = reactive({
  name: '',
  email: '',
  phone: '',
  company: '',
  eventDate: '',
  eventType: '',
  guestCount: '',
  location: '',
  message: ''
})

const handleSubmit = async () => {
  submitting.value = true
  
  try {
    const response = await fetch('https://formspree.io/f/xpznzkyj', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        subject: `Performance Inquiry from ${form.name} - ${form.eventType}`,
      }),
    })
    
    if (response.ok) {
      submitted.value = true
      gsap.from('.form-success', {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.7)'
      })
    } else {
      throw new Error('Form submission failed')
    }
  } catch {
    alert('Sorry, there was an error. Please email kevin@kevinkapinos.com directly.')
  } finally {
    submitting.value = false
  }
}

const resetForm = () => {
  submitted.value = false
  Object.assign(form, {
    name: '', email: '', phone: '', company: '',
    eventDate: '', eventType: '', guestCount: '', location: '', message: ''
  })
}

onMounted(() => {
  gsap.from('.contact-hero__content > *', {
    y: 40, opacity: 0, duration: 0.8, stagger: 0.15,
    ease: 'power3.out'
  })

  gsap.from('.sidebar-card', {
    scrollTrigger: { trigger: '.contact-sidebar', start: 'top 80%' },
    y: 40, opacity: 0, duration: 0.6, stagger: 0.15
  })
})
</script>

<style lang="scss" scoped>
.contact-hero {
  padding-top: 8rem;
  text-align: center;
  
  h1 {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    margin-bottom: 1.5rem;
    
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
    margin: 0 auto 3rem;
  }
}

.contact-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  .contact-icon {
    font-size: 1.5rem;
    width: 40px;
    text-align: center;
    flex-shrink: 0;
  }
  
  div {
    display: flex;
    flex-direction: column;
    
    .contact-label {
      color: var(--text-muted);
      font-size: 0.85rem;
    }
    
    .contact-value {
      color: var(--text-primary);
      font-weight: 600;
    }
  }
}

.contact-form-section > .container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

.form-container {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-lg);
  padding: 3rem;
  
  @media (max-width: 480px) { padding: 1.5rem; }
}

.form-header {
  text-align: center;
  margin-bottom: 3rem;
  
  h2 { margin-bottom: 1rem; font-size: clamp(1.8rem, 3vw, 2.2rem); }
  p { color: var(--text-secondary); line-height: 1.6; }
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 600px) { grid-template-columns: 1fr; }
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  &.full-width { margin-bottom: 0; }
  
  label {
    color: var(--text-primary);
    font-weight: 600;
    font-size: 0.95rem;
  }
  
  input, select, textarea {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: var(--radius-md);
    padding: 0.85rem 1rem;
    color: var(--text-primary);
    font-size: 1rem;
    transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
    
    &:focus {
      outline: none;
      border-color: var(--text-accent);
      background: rgba(255, 255, 255, 0.08);
      box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.1);
    }
    
    &::placeholder { color: var(--text-muted); }
  }
  
  select {
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%239ca3af' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    padding-right: 2.5rem;
    
    option {
      background: #1a1b2e;
      color: #e5e7eb;
    }
  }
  
  textarea {
    resize: vertical;
    min-height: 120px;
    line-height: 1.6;
  }
}

.submit-btn {
  width: 100%;
  padding: 1rem 2rem;
  font-size: 1.05rem;
  margin-top: 2rem;
  
  &:disabled { opacity: 0.5; cursor: not-allowed; }
}

.form-success {
  text-align: center;
  padding: 3rem;
  
  .success-icon { font-size: 3.5rem; margin-bottom: 1.5rem; display: block; }
  h3 { color: var(--text-primary); margin-bottom: 1rem; font-size: 1.8rem; }
  p { color: var(--text-secondary); line-height: 1.7; margin-bottom: 1.5rem; }
}

.contact-sidebar {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.sidebar-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-lg);
  padding: 2rem;
  
  h3 { color: var(--text-primary); margin-bottom: 1.5rem; font-size: 1.2rem; }
}

.expect-list li {
  position: relative;
  padding-left: 1.5rem;
  color: var(--text-secondary);
  margin-bottom: 0.8rem;
  line-height: 1.6;
  
  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: var(--text-accent);
    font-weight: 700;
  }
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.faq-item {
  strong { display: block; color: var(--text-primary); margin-bottom: 0.4rem; font-size: 0.95rem; }
  span { color: var(--text-secondary); line-height: 1.6; font-size: 0.9rem; }
}

.direct-contact { margin-bottom: 0; }

.contact-method {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  
  &:last-child { margin-bottom: 0; }
  .method-label { color: var(--text-muted); font-size: 0.85rem; margin-bottom: 0.2rem; }
  a { color: var(--text-accent); &:hover { text-decoration: underline; } }
  span:not(.method-label) { color: var(--text-secondary); }
}

.calendar-note {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  p {
    color: var(--text-secondary);
    font-size: 0.9rem;
    line-height: 1.6;
    margin: 0;
    
    strong {
      color: var(--text-primary);
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
  border-radius: var(--radius-pill);
  background: rgba(96, 165, 250, 0.1);
}
</style>
