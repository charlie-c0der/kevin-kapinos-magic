import { onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useReveal() {
  onMounted(async () => {
    await nextTick()
    
    // Setup reveal animations for elements with .reveal class
    gsap.from('.reveal', {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      stagger: {
        amount: 0.6,
        from: 'start'
      },
      scrollTrigger: {
        trigger: '.reveal',
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    })

    // Advanced reveal with delays
    gsap.from('.reveal-delay-1', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.reveal-delay-1',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })

    gsap.from('.reveal-delay-2', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      delay: 0.4,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.reveal-delay-2',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })

    gsap.from('.reveal-delay-3', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      delay: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.reveal-delay-3',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })

    // Slide in from left
    gsap.from('.reveal-left', {
      x: -80,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.reveal-left',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })

    // Slide in from right
    gsap.from('.reveal-right', {
      x: 80,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.reveal-right',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })

    // Scale reveal
    gsap.from('.reveal-scale', {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: '.reveal-scale',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })
  })
}