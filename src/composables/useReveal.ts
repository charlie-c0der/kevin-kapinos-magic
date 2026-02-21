import { onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useReveal() {
  onMounted(async () => {
    await nextTick()

    // Each .reveal element gets its OWN ScrollTrigger
    document.querySelectorAll('.reveal').forEach((el) => {
      const delay = el.classList.contains('reveal-delay-1') ? 0.1
        : el.classList.contains('reveal-delay-2') ? 0.2
        : el.classList.contains('reveal-delay-3') ? 0.3
        : el.classList.contains('reveal-delay-4') ? 0.4
        : 0

      gsap.from(el, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none'
        }
      })
    })

    // Each .reveal-scale element gets its own trigger
    document.querySelectorAll('.reveal-scale').forEach((el) => {
      gsap.from(el, {
        scale: 0.85,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.4)',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none'
        }
      })
    })

    // Slide from left
    document.querySelectorAll('.reveal-left').forEach((el) => {
      gsap.from(el, {
        x: -60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none'
        }
      })
    })

    // Slide from right
    document.querySelectorAll('.reveal-right').forEach((el) => {
      gsap.from(el, {
        x: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none'
        }
      })
    })
  })
}
