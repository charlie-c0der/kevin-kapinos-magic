<script setup lang="ts">
/**
 * MindReveal - Text materializes from electric energy.
 * Characters appear with a purple/blue pulse effect on scroll.
 */
import { ref, onMounted } from 'vue'

const props = defineProps<{
  text: string
  tag?: string
}>()

const revealed = ref(false)
const el = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!el.value) return
  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0]
      if (entry?.isIntersecting) {
        revealed.value = true
        observer.unobserve(entry.target)
      }
    },
    { threshold: 0.5 }
  )
  observer.observe(el.value)
})
</script>

<template>
  <component :is="tag || 'span'" ref="el" :class="['mind-reveal', { revealed }]">
    <span class="mind-reveal__pulse" />
    <span class="mind-reveal__text">
      <span
        v-for="(char, i) in text.split('')"
        :key="i"
        class="mind-reveal__char"
        :style="{ transitionDelay: (i * 0.04 + 0.3) + 's' }"
      >{{ char === ' ' ? '\u00A0' : char }}</span>
    </span>
  </component>
</template>

<style scoped>
.mind-reveal {
  position: relative;
  display: inline-block;
  overflow: hidden;
}

.mind-reveal__pulse {
  position: absolute;
  inset: -20px;
  background: radial-gradient(ellipse at center,
    rgba(96, 165, 250, 0.15) 0%,
    rgba(139, 92, 246, 0.05) 40%,
    transparent 70%
  );
  opacity: 0;
  filter: blur(20px);
  transition: opacity 0.8s ease-out;
  pointer-events: none;
}

.mind-reveal.revealed .mind-reveal__pulse {
  animation: pulseReveal 1.5s ease-out forwards;
}

@keyframes pulseReveal {
  0% { opacity: 0; transform: scale(0.5); }
  30% { opacity: 1; transform: scale(1.2); }
  100% { opacity: 0; transform: scale(2); }
}

.mind-reveal__text {
  position: relative;
  z-index: 1;
}

.mind-reveal__char {
  display: inline-block;
  opacity: 0;
  transform: translateY(20px) scale(0.8);
  filter: blur(8px);
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.mind-reveal.revealed .mind-reveal__char {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
}
</style>
