<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import NavBar from './components/NavBar.vue'
import FooterSection from './components/FooterSection.vue'
import FloatingSymbols from './components/FloatingSymbols.vue'
import Preloader from './components/Preloader.vue'
import { useMindCursor } from './composables/useMindCursor'
import Lenis from 'lenis'

const { cursorX, cursorY, cursorScale, cursorVisible } = useMindCursor()

const showPreloader = ref(true)
const siteReady = ref(false)

let lenis: Lenis | null = null
let rafId = 0

function onPreloaderDone() {
  showPreloader.value = false
  siteReady.value = true
}

onMounted(() => {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: true,
  })

  function raf(time: number) {
    lenis?.raf(time)
    rafId = requestAnimationFrame(raf)
  }
  rafId = requestAnimationFrame(raf)
})

onUnmounted(() => {
  cancelAnimationFrame(rafId)
  lenis?.destroy()
})

// Easter egg - type "mindread" to trigger a thought bubble cascade
const secretWord = 'mindread'
const secretIndex = ref(0)
const showEasterEgg = ref(false)

function onKeydown(e: KeyboardEvent) {
  if (e.key === secretWord[secretIndex.value]) {
    secretIndex.value++
    if (secretIndex.value === secretWord.length) {
      secretIndex.value = 0
      triggerThoughtCascade()
    }
  } else {
    secretIndex.value = 0
  }
}

function triggerThoughtCascade() {
  showEasterEgg.value = true
  setTimeout(() => { showEasterEgg.value = false }, 4000)
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})
onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <!-- Preloader -->
  <Preloader v-if="showPreloader" @done="onPreloaderDone" />

  <div class="grain" />

  <!-- Floating Symbols (atmospheric) -->
  <FloatingSymbols />

  <!-- Custom Cursor -->
  <div
    class="custom-cursor"
    :style="{
      left: cursorX + 'px',
      top: cursorY + 'px',
      transform: `translate(-50%, -50%) scale(${cursorScale})`,
      opacity: cursorVisible ? 1 : 0,
    }"
  />
  <div
    class="custom-cursor--dot"
    :style="{
      left: cursorX + 'px',
      top: cursorY + 'px',
      transform: 'translate(-50%, -50%)',
      opacity: cursorVisible ? 1 : 0,
    }"
  />

  <div :class="['site-wrapper', { ready: siteReady }]">
    <NavBar />
    <main>
      <router-view v-slot="{ Component, route }">
        <transition :name="(route.meta.transition as string) || 'mind'" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </main>
    <FooterSection />
  </div>

  <!-- Easter Egg: Thought Bubble Cascade -->
  <Teleport to="body">
    <div v-if="showEasterEgg" class="easter-egg">
      <div
        v-for="n in 25"
        :key="n"
        class="easter-thought"
        :style="{
          left: Math.random() * 100 + 'vw',
          animationDelay: Math.random() * 1.5 + 's',
          animationDuration: (2 + Math.random() * 2) + 's',
          fontSize: (14 + Math.random() * 20) + 'px',
        }"
      >
        <span>{{ ['🧠', '👁', '💭', '✨', '🔮', '⚡'][n % 6] }}</span>
      </div>
    </div>
  </Teleport>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap');

body { cursor: none; }
@media (max-width: 768px) { body { cursor: auto; } }

:root {
  // Kevin's mysterious color palette
  --primary-dark: #0a0b15;
  --secondary-dark: #1a1b2e;
  --accent-blue: #16213e;
  --accent-purple: #533a7b;
  --accent-violet: #8b5cf6;
  --accent-silver: #9ca3af;
  --accent-gold: #c4924f;
  --text-primary: #ffffff;
  --text-secondary: #e5e7eb;
  --text-muted: #9ca3af;
  --text-accent: #60a5fa;

  // Spacing
  --section-pad: clamp(80px, 10vw, 140px);
  --container: 1200px;

  // Transitions
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);

  // Radius
  --radius-sm: 4px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-pill: 100px;
}

*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', -apple-system, sans-serif;
  background: var(--primary-dark);
  color: var(--text-primary);
  line-height: 1.6;
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

img, video {
  display: block;
  max-width: 100%;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Playfair Display', serif;
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

::selection {
  background: var(--accent-purple);
  color: white;
}

// ── Site wrapper ──
.site-wrapper {
  opacity: 0;
  transition: opacity 0.6s ease-out;
}
.site-wrapper.ready {
  opacity: 1;
}

// ── App background ──
#app {
  min-height: 100vh;
  background: var(--primary-dark);
  position: relative;
}

#app::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 80%, rgba(83, 58, 123, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(96, 165, 250, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(196, 146, 79, 0.04) 0%, transparent 50%);
  pointer-events: none;
  z-index: -1;
}

// ── Page Transitions ──
.mind-enter-active {
  transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
              filter 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.mind-leave-active {
  transition: opacity 0.4s cubic-bezier(0.65, 0, 0.35, 1),
              transform 0.4s cubic-bezier(0.65, 0, 0.35, 1),
              filter 0.4s cubic-bezier(0.65, 0, 0.35, 1);
}
.mind-enter-from {
  opacity: 0;
  transform: scale(0.97) translateY(20px);
  filter: blur(6px);
}
.mind-leave-to {
  opacity: 0;
  transform: scale(1.02) translateY(-10px);
  filter: blur(4px);
}

// ── Grain Overlay ──
.grain {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  opacity: 0.02;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
}

// ── Custom Cursor ──
.custom-cursor {
  position: fixed;
  width: 22px;
  height: 22px;
  border: 1.5px solid var(--text-accent);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  transition: transform 0.2s var(--ease-out), opacity 0.3s, border-color 0.3s;
  transform-origin: center;
  mix-blend-mode: difference;
}
.custom-cursor--dot {
  position: fixed;
  width: 4px;
  height: 4px;
  background: var(--text-accent);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transition: opacity 0.3s;
}

// ── Scrollbar ──
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: var(--primary-dark);
}
::-webkit-scrollbar-thumb {
  background: rgba(96, 165, 250, 0.3);
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(96, 165, 250, 0.5);
}

// ── Container ──
.container {
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 clamp(20px, 4vw, 48px);
}

// ── Section ──
.section {
  padding: var(--section-pad) 0;
  position: relative;
}

// ── Shimmer text ──
.shimmer {
  background: linear-gradient(
    110deg,
    var(--text-accent) 0%,
    var(--accent-violet) 25%,
    var(--accent-gold) 50%,
    var(--accent-violet) 75%,
    var(--text-accent) 100%
  );
  background-size: 300% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shimmerSlide 5s ease-in-out infinite;
}

@keyframes shimmerSlide {
  0% { background-position: 100% 0; }
  50% { background-position: 0% 0; }
  100% { background-position: 100% 0; }
}

// ── Reveals ──
// GSAP handles all reveal animations via useReveal() composable.
// Do NOT set opacity:0 here - it conflicts with GSAP's from() animations.

// ── Split Text ──
// GSAP handles animation. Only layout styles here.
.split-text { display: inline; }
.split-word, .word { display: inline-flex; overflow: hidden; }
.split-char, .char { display: inline-block; }

// ── Glow pulse ──
.glow-pulse {
  animation: glowPulse 3s ease-in-out infinite;
}
@keyframes glowPulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(96, 165, 250, 0); }
  50% { box-shadow: 0 0 24px 4px rgba(96, 165, 250, 0.15); }
}

// ── Buttons ──
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 2.2rem;
  border: none;
  border-radius: var(--radius-pill);
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.4s var(--ease-out);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
    transition: left 0.6s;
  }
  
  &:hover::before {
    left: 100%;
  }

  span {
    position: relative;
    z-index: 1;
  }
}

.btn-primary, .btn--primary {
  background: linear-gradient(135deg, var(--accent-purple), var(--text-accent));
  color: white;
  border-radius: var(--radius-pill);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(96, 165, 250, 0.3);
  }
}

.btn-secondary, .btn--secondary {
  background: rgba(255, 255, 255, 0.08);
  color: var(--text-primary);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: var(--radius-pill);
  
  &:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.25);
    transform: translateY(-2px);
  }
}

.btn--large {
  padding: 1.25rem 3rem;
  font-size: 1.1rem;
}

// ── Easter Egg ──
.easter-egg {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 99999;
  overflow: hidden;
}
.easter-thought {
  position: absolute;
  top: -60px;
  animation: thoughtFall linear forwards;
}
@keyframes thoughtFall {
  0% { transform: translateY(0) scale(1); opacity: 1; }
  80% { opacity: 1; }
  100% { transform: translateY(110vh) scale(0.5); opacity: 0; }
}

// ── Lenis smooth scrolling ──
html.lenis, html.lenis body {
  height: auto;
}
.lenis.lenis-smooth {
  scroll-behavior: auto !important;
}
.lenis.lenis-smooth [data-lenis-prevent] {
  overscroll-behavior: contain;
}
.lenis.lenis-stopped {
  overflow: hidden;
}

// ── Performance hints ──
.hero__title,
.hero__subtitle,
.custom-cursor,
.custom-cursor--dot,
.ticker__track,
.fsymbol {
  will-change: transform;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  .ticker__track { animation: none !important; }
}

// ── Responsive ──
@media (max-width: 768px) {
  .hide-mobile { display: none !important; }
  .custom-cursor, .custom-cursor--dot { display: none !important; }
  body { cursor: auto; }
}
</style>
