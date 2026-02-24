<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <div class="footer__brand">
          <div class="brand">
            <span class="brand-text">Kevin Kapinos</span>
            <span class="brand-subtitle">Magician</span>
          </div>
          <p class="footer__description">
            Chicago-based magician and sleight of hand expert.
            Resident performer at the Chicago Magic Lounge.
          </p>
          <div class="footer__venues">
            <span>Regular Performer At:</span>
            <div class="venue-badges">
              <span class="venue-badge">Chicago Magic Lounge</span>
              <span class="venue-badge">The Magic Castle</span>
            </div>
          </div>
        </div>
        
        <div class="footer__links">
          <div class="footer__section">
            <h4>Navigate</h4>
            <ul>
              <li><router-link to="/about">About</router-link></li>
              <li><router-link to="/performances">Performances</router-link></li>
              <li><router-link to="/mentalism">Mentalism</router-link></li>
              <li><router-link to="/testimonials">Testimonials</router-link></li>
              <li><router-link to="/contact">Contact</router-link></li>
            </ul>
          </div>
          
          <div class="footer__section">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:kevin@kevinkapinos.com">kevin@kevinkapinos.com</a></li>
              <li><span style="color: var(--text-muted)">Chicago, Illinois</span></li>
              <li><span style="color: var(--text-muted)">Available Nationwide</span></li>
            </ul>
            
            <div class="social-links">
              <h4 style="margin-top: 1.5rem;">Follow</h4>
              <ul>
                <li><a href="https://www.instagram.com/kevinkapinos" target="_blank" rel="noopener">Instagram</a></li>
                <li><a href="https://www.youtube.com/@kevinkapinos" target="_blank" rel="noopener">YouTube</a></li>
                <li><a href="https://www.facebook.com/kevinkapinosmagic" target="_blank" rel="noopener">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="footer__cta">
          <h4>Ready to be Amazed?</h4>
          <p>Experience the impossible and create unforgettable moments for your guests.</p>
          <router-link to="/contact" class="btn btn-primary">
            Book Performance
          </router-link>
        </div>
      </div>
      
      <div class="footer__bottom">
        <div class="footer__copyright">
          <p>&copy; {{ currentYear }} Kevin Kapinos. All rights reserved.</p>
        </div>
        <div class="footer__location">
          <p>Based in Chicago, IL • Available Nationwide</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style lang="scss" scoped>
.footer {
  background: linear-gradient(135deg, var(--primary-dark) 0%, var(--secondary-dark) 100%);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--text-accent), transparent);
  }
}

.footer__content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  padding: 4rem 0 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
}

.footer__brand {
  .brand {
    margin-bottom: 1rem;
  }
  
  .brand-text {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    font-weight: 700;
    display: block;
    background: linear-gradient(135deg, var(--text-primary), var(--text-accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .brand-subtitle {
    font-size: 0.9rem;
    color: var(--accent-silver);
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-top: 2px;
  }
}

.footer__description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.footer__venues {
  span {
    display: block;
    color: var(--text-muted);
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
}

.venue-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
}

.venue-badge {
  padding: 0.3rem 0.8rem;
  background: rgba(96, 165, 250, 0.1);
  border: 1px solid rgba(96, 165, 250, 0.2);
  border-radius: 15px;
  font-size: 0.8rem;
  color: var(--text-accent);
  white-space: nowrap;
}

.footer__links {
  display: flex;
  gap: 3rem;
  
  @media (max-width: 768px) {
    justify-content: center;
    gap: 2rem;
  }
}

.footer__section {
  h4 {
    font-family: 'Playfair Display', serif;
    color: var(--text-primary);
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }
  
  ul {
    list-style: none;
    
    li {
      margin-bottom: 0.5rem;
      
      a {
        color: var(--text-secondary);
        text-decoration: none;
        transition: color 0.3s ease;
        
        &:hover {
          color: var(--text-accent);
        }
      }
    }
  }
}

.footer__cta {
  text-align: right;
  
  @media (max-width: 768px) {
    text-align: center;
  }
  
  h4 {
    font-family: 'Playfair Display', serif;
    color: var(--text-primary);
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
  
  p {
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
}

.footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}

.footer__copyright,
.footer__location {
  p {
    color: var(--text-muted);
    font-size: 0.9rem;
  }
}

.social-links {
  a {
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 1px;
      background: var(--text-accent);
      transition: width 0.3s ease;
    }
    
    &:hover::after {
      width: 100%;
    }
  }
}
</style>