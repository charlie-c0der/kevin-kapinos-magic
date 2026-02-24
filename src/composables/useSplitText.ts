import { onMounted, nextTick } from 'vue'
import gsap from 'gsap'

export function useSplitText() {
  function splitTextContent(element: HTMLElement) {
    const text = element.textContent || ''
    const words = text.split(' ')

    element.innerHTML = words
      .map(word => `<span class="word">${word.split('').map(char =>
        `<span class="char">${char}</span>`
      ).join('')}</span>`)
      .join('<span class="char space"> </span>')
  }

  function animateChars(element: HTMLElement, delay: number = 0) {
    const chars = element.querySelectorAll('.char')

    gsap.fromTo(chars,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.02,
        delay
      }
    )
  }

  onMounted(async () => {
    await nextTick()

    const splitElements = document.querySelectorAll('[data-split]')

    splitElements.forEach((element: Element) => {
      const htmlElement = element as HTMLElement
      const delay = parseFloat(htmlElement.getAttribute('data-split-delay') || '0')

      splitTextContent(htmlElement)

      // Use IntersectionObserver but also handle already-visible elements
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              animateChars(entry.target as HTMLElement, delay)
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.1 }
      )

      observer.observe(htmlElement)
    })
  })
}
