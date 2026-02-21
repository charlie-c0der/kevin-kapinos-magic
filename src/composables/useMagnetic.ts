import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

export function useMagnetic() {
  let magneticElements: HTMLElement[] = []

  function addMagneticEffect(element: HTMLElement) {
    const duration = 0.3

    function handleMouseMove(e: MouseEvent) {
      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const deltaX = (e.clientX - centerX) * 0.2
      const deltaY = (e.clientY - centerY) * 0.2
      
      gsap.to(element, {
        x: deltaX,
        y: deltaY,
        duration,
        ease: 'power2.out'
      })
    }

    function handleMouseLeave() {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: duration * 1.5,
        ease: 'elastic.out(1, 0.3)'
      })
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    // Store event listeners for cleanup
    ;(element as any)._magneticHandlers = {
      mousemove: handleMouseMove,
      mouseleave: handleMouseLeave
    }
  }

  function removeMagneticEffect(element: HTMLElement) {
    const handlers = (element as any)._magneticHandlers
    if (handlers) {
      element.removeEventListener('mousemove', handlers.mousemove)
      element.removeEventListener('mouseleave', handlers.mouseleave)
      delete (element as any)._magneticHandlers
    }
  }

  onMounted(() => {
    // Find all elements with .magnetic class
    magneticElements = Array.from(document.querySelectorAll('.magnetic')) as HTMLElement[]
    
    magneticElements.forEach(addMagneticEffect)
    
    // Use mutation observer to detect new magnetic elements
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as HTMLElement
            if (element.classList.contains('magnetic')) {
              addMagneticEffect(element)
              magneticElements.push(element)
            }
            
            // Check child elements too
            const childMagnetics = element.querySelectorAll('.magnetic') as NodeListOf<HTMLElement>
            childMagnetics.forEach((child) => {
              addMagneticEffect(child)
              magneticElements.push(child)
            })
          }
        })
      })
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true
    })

    // Store observer for cleanup
    ;(window as any)._magneticObserver = observer
  })

  onUnmounted(() => {
    // Clean up all magnetic effects
    magneticElements.forEach(removeMagneticEffect)
    
    // Clean up observer
    const observer = (window as any)._magneticObserver
    if (observer) {
      observer.disconnect()
      delete (window as any)._magneticObserver
    }
  })
}