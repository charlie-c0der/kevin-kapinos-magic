<script setup lang="ts">
import { ref, onMounted } from 'vue'

const phase = ref(0) // 0=dark, 1=eye appears, 2=eye opens, 3=text reveals, 4=exit

const emit = defineEmits<{
  done: []
}>()

onMounted(() => {
  setTimeout(() => { phase.value = 1 }, 300)
  setTimeout(() => { phase.value = 2 }, 1000)
  setTimeout(() => { phase.value = 3 }, 1800)
  setTimeout(() => { phase.value = 4 }, 2800)
  setTimeout(() => { emit('done') }, 3600)
})
</script>

<template>
  <div :class="['preloader', { 'preloader--exit': phase >= 4 }]">
    <!-- Ambient particles -->
    <div class="preloader__particles">
      <span v-for="n in 20" :key="n" class="preloader__mote" :style="{
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
        animationDelay: Math.random() * 3 + 's',
        animationDuration: (Math.random() * 3 + 4) + 's',
      }" />
    </div>

    <!-- Eye symbol -->
    <div :class="['preloader__eye-wrap', {
      'phase-1': phase >= 1,
      'phase-2': phase >= 2,
      'phase-3': phase >= 3,
    }]">
      <div class="preloader__eye">
        <div class="preloader__eye-outer">
          <div class="preloader__eye-iris">
            <div class="preloader__eye-pupil"></div>
          </div>
        </div>
        <div class="preloader__eye-rays">
          <span v-for="n in 8" :key="n" class="preloader__ray"
            :style="{ transform: `rotate(${n * 45}deg)` }" />
        </div>
      </div>
    </div>

    <!-- Text reveal -->
    <div :class="['preloader__text', { visible: phase >= 3 }]">
      <span class="preloader__name">Kevin Kapinos</span>
      <span class="preloader__title">Mentalist</span>
    </div>
  </div>
</template>

<style scoped>
.preloader {
  position: fixed;
  inset: 0;
  z-index: 10000;
  background: #0a0b15;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
  transition: opacity 0.8s cubic-bezier(0.65, 0, 0.35, 1),
              transform 0.8s cubic-bezier(0.65, 0, 0.35, 1);
}
.preloader--exit {
  opacity: 0;
  transform: scale(1.05);
  pointer-events: none;
}

/* Ambient motes */
.preloader__particles {
  position: absolute;
  inset: 0;
  overflow: hidden;
}
.preloader__mote {
  position: absolute;
  width: 3px;
  height: 3px;
  background: #60a5fa;
  border-radius: 50%;
  opacity: 0;
  animation: moteFloat linear infinite;
  box-shadow: 0 0 8px #60a5fa;
}
.preloader__mote:nth-child(odd) {
  background: #8b5cf6;
  box-shadow: 0 0 8px #8b5cf6;
}
@keyframes moteFloat {
  0% { opacity: 0; transform: translateY(0) scale(0); }
  20% { opacity: 0.5; transform: translateY(-20px) scale(1); }
  80% { opacity: 0.2; transform: translateY(-80px) scale(0.8); }
  100% { opacity: 0; transform: translateY(-120px) scale(0); }
}

/* Eye wrapper */
.preloader__eye-wrap {
  position: relative;
  width: 120px;
  height: 120px;
  opacity: 0;
  transform: scale(0.6);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
.preloader__eye-wrap.phase-1 {
  opacity: 1;
  transform: scale(1);
}
.preloader__eye-wrap.phase-2 .preloader__eye-iris {
  transform: scale(1);
  opacity: 1;
}
.preloader__eye-wrap.phase-2 .preloader__ray {
  opacity: 1;
  transform-origin: center 60px;
}
.preloader__eye-wrap.phase-3 {
  transform: scale(0.85) translateY(-10px);
  opacity: 0.7;
}

.preloader__eye {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.preloader__eye-outer {
  width: 80px;
  height: 80px;
  border: 2px solid rgba(96, 165, 250, 0.4);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: outerPulse 2s ease-in-out infinite;
}

@keyframes outerPulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(96, 165, 250, 0); }
  50% { box-shadow: 0 0 20px 5px rgba(96, 165, 250, 0.15); }
}

.preloader__eye-iris {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: radial-gradient(circle, #60a5fa 0%, #533a7b 70%);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(0);
  opacity: 0;
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.preloader__eye-pupil {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #0a0b15;
  box-shadow: 0 0 10px rgba(96, 165, 250, 0.5);
}

.preloader__eye-rays {
  position: absolute;
  inset: 0;
}
.preloader__ray {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1px;
  height: 20px;
  background: linear-gradient(to top, rgba(96, 165, 250, 0.4), transparent);
  margin-left: -0.5px;
  margin-top: -60px;
  opacity: 0;
  transition: opacity 0.6s ease 0.3s;
}

/* Text */
.preloader__text {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.preloader__text.visible {
  opacity: 1;
  transform: translateY(0);
}
.preloader__name {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 28px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.01em;
}
.preloader__title {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 16px;
  font-weight: 400;
  font-style: italic;
  color: #60a5fa;
  letter-spacing: 0.15em;
}
</style>
