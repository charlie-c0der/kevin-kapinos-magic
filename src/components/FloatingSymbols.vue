<script setup lang="ts">
/**
 * Floating Symbols - Subtle neural/mind symbols drifting in the background.
 * Creates an atmospheric layer with parallax scroll response.
 */
import { onMounted, onUnmounted, ref } from 'vue'

interface FloatingSymbol {
  id: number
  symbol: string
  x: number
  y: number
  rotation: number
  scale: number
  speed: number
  opacity: number
  delay: number
}

const symbols = ref<FloatingSymbol[]>([])
const scrollY = ref(0)

const glyphs = ['◉', '◎', '⟡', '⬡', '◇', '△', '☉', '⊛']

function generateSymbols(): FloatingSymbol[] {
  return Array.from({ length: 8 }, (_, i) => ({
    id: i,
    symbol: glyphs[Math.floor(Math.random() * glyphs.length)]!,
    x: 5 + Math.random() * 90,
    y: 10 + Math.random() * 80,
    rotation: Math.random() * 360,
    scale: 0.4 + Math.random() * 0.5,
    speed: 0.2 + Math.random() * 0.6,
    opacity: 0.03 + Math.random() * 0.04,
    delay: Math.random() * 5,
  }))
}

function onScroll() {
  scrollY.value = window.scrollY
}

onMounted(() => {
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  symbols.value = generateSymbols()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <div class="floating-symbols" aria-hidden="true">
    <div
      v-for="s in symbols"
      :key="s.id"
      class="fsymbol"
      :style="{
        left: s.x + '%',
        top: s.y + '%',
        opacity: s.opacity,
        transform: `
          translateY(${-scrollY * s.speed * 0.12}px)
          rotate(${s.rotation}deg)
          scale(${s.scale})
        `,
        animationDelay: s.delay + 's',
        fontSize: (18 + s.scale * 24) + 'px',
      }"
    >{{ s.symbol }}</div>
  </div>
</template>

<style scoped>
.floating-symbols {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.fsymbol {
  position: absolute;
  color: rgba(96, 165, 250, 0.08);
  transition: transform 0.1s linear;
  animation: symbolDrift 15s ease-in-out infinite alternate;
  text-shadow: 0 0 20px rgba(96, 165, 250, 0.05);
}

.fsymbol:nth-child(odd) {
  color: rgba(139, 92, 246, 0.06);
  text-shadow: 0 0 20px rgba(139, 92, 246, 0.04);
}

@keyframes symbolDrift {
  0% { transform: translateY(0); }
  100% { transform: translateY(-25px); }
}
</style>
