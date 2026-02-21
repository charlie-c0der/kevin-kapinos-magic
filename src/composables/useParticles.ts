import { onMounted, onUnmounted } from 'vue'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
}

export function useParticles(canvasId: string, particleCount: number = 50) {
  let animationId: number | null = null
  let particles: Particle[] = []
  let canvas: HTMLCanvasElement | null = null
  let ctx: CanvasRenderingContext2D | null = null

  const colors = ['#60a5fa', '#533a7b', '#c4924f', '#9ca3af']

  function createParticle(): Particle {
    const width = canvas?.width || 800
    const height = canvas?.height || 600
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)] || '#60a5fa'
    }
  }

  function updateParticle(particle: Particle) {
    particle.x += particle.vx
    particle.y += particle.vy

    const width = canvas?.width || 800
    const height = canvas?.height || 600
    
    if (particle.x < 0 || particle.x > width) particle.vx *= -1
    if (particle.y < 0 || particle.y > height) particle.vy *= -1

    // Add some randomness
    particle.vx += (Math.random() - 0.5) * 0.01
    particle.vy += (Math.random() - 0.5) * 0.01

    // Limit velocity
    particle.vx = Math.max(-1, Math.min(1, particle.vx))
    particle.vy = Math.max(-1, Math.min(1, particle.vy))

    // Subtle opacity pulse
    particle.opacity = 0.1 + 0.4 * (Math.sin(Date.now() * 0.001 + particle.x * 0.01) + 1) / 2
  }

  function drawParticle(particle: Particle) {
    if (!ctx) return
    
    ctx.save()
    ctx.globalAlpha = particle.opacity
    ctx.fillStyle = particle.color
    ctx.beginPath()
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
    ctx.fill()
    
    // Add subtle glow
    ctx.shadowBlur = 10
    ctx.shadowColor = particle.color
    ctx.fill()
    
    ctx.restore()
  }

  function connectParticles() {
    if (!ctx || !canvas) return

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const particle1 = particles[i]
        const particle2 = particles[j]
        if (!particle1 || !particle2) continue
        
        const dx = particle1.x - particle2.x
        const dy = particle1.y - particle2.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 120) {
          ctx.save()
          const opacity = (120 - distance) / 120 * 0.1
          ctx.globalAlpha = opacity
          ctx.strokeStyle = '#60a5fa'
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(particle1.x, particle1.y)
          ctx.lineTo(particle2.x, particle2.y)
          ctx.stroke()
          ctx.restore()
        }
      }
    }
  }

  function animate() {
    if (!ctx || !canvas) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    particles.forEach(particle => {
      updateParticle(particle)
      drawParticle(particle)
    })
    
    connectParticles()
    
    animationId = requestAnimationFrame(animate)
  }

  function resizeCanvas() {
    if (!canvas) return
    
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * window.devicePixelRatio
    canvas.height = rect.height * window.devicePixelRatio
    
    if (ctx) {
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
  }

  onMounted(() => {
    canvas = document.getElementById(canvasId) as HTMLCanvasElement
    if (!canvas) return
    
    ctx = canvas.getContext('2d')
    if (!ctx) return

    resizeCanvas()
    
    // Initialize particles
    particles = Array.from({ length: particleCount }, createParticle)
    
    // Start animation
    animate()
    
    // Handle resize
    window.addEventListener('resize', resizeCanvas)
  })

  onUnmounted(() => {
    if (animationId) {
      cancelAnimationFrame(animationId)
    }
    window.removeEventListener('resize', resizeCanvas)
  })
}