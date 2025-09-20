<template>
  <div class="page">
    <h1 class="title">🌟 Страница со стикером</h1>

    <transition name="fade-up">
      <div v-if="phrase" class="result">
        <h2>Ваш результат:</h2>
        <p>{{ phrase }}</p>
      </div>
    </transition>

    <p v-for="i in 30" :key="i">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
    </p>

    <CatSticker @consult="setPhrase" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import CatSticker from "@/components/CatSticker.vue"

const phrase = ref<string | null>(null)

function setPhrase(p: string) {
  phrase.value = p
}
</script>

<style scoped lang="scss">
.page {
  max-width: 800px;
  margin: auto;
  padding: 30px;
  font-family: "Segoe UI", sans-serif;
  line-height: 1.6;
  background: #1e1e2f;
  color: #e0e0e0;
  min-height: 100vh;

  p {
    margin: 20px;
    color: #ccc;
  }
}

.title {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 24px;
  text-align: center;
  background: linear-gradient(90deg, #8a2be2, #20b2aa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.result {
  margin: 20px 0 40px;
  padding: 20px;
  background: linear-gradient(135deg, #2c2c3a, #3a3a4a);
  border-radius: 16px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
  animation: pop-in 0.5s ease;

  h2 {
    margin: 0 0 10px;
    font-size: 20px;
    color: #f0f0f0;
  }

  p {
    font-size: 16px;
    color: #ddd;
  }
}

.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.4s ease;
}

.fade-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

@keyframes pop-in {
  0% {
    transform: scale(0.9);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
