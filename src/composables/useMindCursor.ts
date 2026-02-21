/**
 * Mind Cursor - Custom cursor with electric particle trail.
 * Purple/blue particles that suggest neural energy.
 * Scales on hover over interactive elements.
 */
import { onMounted, onUnmounted, ref } from 'vue'

interface Particle {
  x: number
  y: number
  size: number
  opacity: number
  vx: number
  vy: number
  life: number
}

export function useMindCursor() {
  const cursorX = ref(0)
  const cursorY = ref(0)
  const cursorScale = ref(1)
  const cursorVisible = ref(false)
  const isHovering = ref(false)

  let particles: Particle[] = []
  let canvas: HTMLCanvasElement | null = null
  let ctx: CanvasRenderingContext2D | null = null
  let animFrame: number = 0
  let lastEmit = 0

  function onMouseMove(e: MouseEvent) {
    cursorX.value = e.clientX
    cursorY.value = e.clientY
    cursorVisible.value = true

    const now = Date.now()
    if (now - lastEmit > 30) {
      emitParticles(e.clientX, e.clientY, 1)
      lastEmit = now
    }
  }

  function onMouseLeave() { cursorVisible.value = false }
  function onMouseEnter() { cursorVisible.value = true }

  function onClick(e: MouseEvent) {
    emitParticles(e.clientX, e.clientY, 8)
  }

  const MAX_PARTICLES = 60

  function emitParticles(x: number, y: number, count: number) {
    const toAdd = Math.min(count, MAX_PARTICLES - particles.length)
    for (let i = 0; i < toAdd; i++) {
      const angle = Math.random() * Math.PI * 2
      const speed = Math.random() * 1.5 + 0.5
      particles.push({
        x,
        y,
        size: Math.random() * 2.5 + 0.8,
        opacity: 1,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 0.5,
        life: 1,
      })
    }
  }

  function animate() {
    if (!ctx || !canvas) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    particles = particles.filter((p) => {
      p.x += p.vx
      p.y += p.vy
      p.vy += 0.015
      p.life -= 0.018
      p.opacity = p.life

      if (p.life <= 0) return false

      ctx!.save()
      ctx!.globalAlpha = p.opacity * 0.5
      // Alternate between purple and blue particles
      const color = Math.random() > 0.5 ? '#8b5cf6' : '#60a5fa'
      ctx!.fillStyle = color
      ctx!.shadowColor = color
      ctx!.shadowBlur = p.size * 5
      ctx!.beginPath()
      ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2)
      ctx!.fill()
      ctx!.restore()

      return true
    })

    animFrame = requestAnimationFrame(animate)
  }

  onMounted(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return

    canvas = document.createElement('canvas')
    canvas.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:10000;'
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    document.body.appendChild(canvas)
    ctx = canvas.getContext('2d')

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('mouseleave', onMouseLeave)
    window.addEventListener('mouseenter', onMouseEnter)
    window.addEventListener('click', onClick)
    window.addEventListener('resize', () => {
      if (canvas) {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
    })

    animate()

    document.addEventListener('mouseover', (e) => {
      const target = (e.target as HTMLElement).closest('a, button, .magnetic')
      if (target) {
        cursorScale.value = 2
        isHovering.value = true
      } else if (isHovering.value) {
        cursorScale.value = 1
        isHovering.value = false
      }
    }, { passive: true })
  })

  onUnmounted(() => {
    cancelAnimationFrame(animFrame)
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('mouseleave', onMouseLeave)
    window.removeEventListener('mouseenter', onMouseEnter)
    window.removeEventListener('click', onClick)
    canvas?.remove()
  })

  return { cursorX, cursorY, cursorScale, cursorVisible, isHovering }
}
