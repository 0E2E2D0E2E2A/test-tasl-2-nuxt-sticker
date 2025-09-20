<template>
  <div
      class="sticker"
      @mouseenter="hover = true"
      @mouseleave="hover = false"
  >
    <div class="sticker-content" :class="{ open: hover }">
      <template v-if="hover">
        <h3>🐾 Котовая Консультация</h3>

        <transition-group name="fade" tag="div" class="photos" v-if="experts.length">
          <img
              v-for="(img, i) in experts"
              :key="img"
              :src="img"
              :alt="`cat ${i + 1}`"
              loading="lazy"
          />
        </transition-group>

        <div v-else class="loading">Загрузка фото...</div>

        <button @click="onClick" :disabled="loadingPhrase">
          {{ loadingPhrase ? "Загрузка..." : "Получить поддержку" }}
        </button>
      </template>

      <template v-else>
        <div class="avatars-vertical">
          <img
              v-for="(img, i) in experts"
              :key="i"
              :src="img"
              :alt="`cat ${i + 1}`"
              loading="lazy"
          />
        </div>
        <span class="arrow">←</span>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"

const hover = ref(false)
const experts = ref<string[]>([])
const loadingPhrase = ref(false)

const emit = defineEmits<{ (e: "consult", phrase: string): void }>()

onMounted(async () => {
  try {
    const res = await $fetch<{ experts: string[] }>("/api/cats")
    experts.value = res.experts ?? []
  } catch (err) {
    experts.value = []
  }
})

async function onClick() {
  loadingPhrase.value = true
  try {
    const res = await $fetch<{ phrase: string }>("/api/phrase")
    emit("consult", res.phrase ?? "Котики устали сегодня, но знай, что ты самый лучший :) Приходи в следующий раз")
  } catch (err) {
    emit("consult", "Котики устали сегодня, но знай, что ты самый лучший :) Приходи в следующий раз")
  } finally {
    loadingPhrase.value = false
  }
}
</script>

<style scoped lang="scss">
.sticker {
  position: fixed;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;

  .sticker-content {
    background: #f6f8fa;
    border-radius: 18px 0 0 18px;
    box-shadow: 0 8px 20px rgba(22, 27, 34, 0.15);
    padding: 12px;
    transition: all 0.35s cubic-bezier(0.2, 0.9, 0.2, 1);
    overflow: hidden;
    width: 74px;
    min-height: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &.open {
      width: 340px;
      min-height: 280px;
      align-items: flex-start;
      padding: 20px;
    }

    h3 {
      width: 100%;
      font-size: 20px;
      margin: 0 0 14px;
      text-align: center;
      color: #20262b;
    }

    .photos {
      width: 100%;
      display: flex;
      gap: 12px;
      justify-content: center;
      margin-bottom: 14px;

      img {
        width: calc((100% - 24px) / 3);
        height: 90px;
        border-radius: 14px;
        object-fit: cover;
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
        &:hover {
          transform: scale(1.05);
        }
      }
    }

    .avatars-vertical {
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: center;

      img {
        width: 56px;
        height: 56px;
        border-radius: 12px;
        object-fit: cover;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
      }
    }

    .loading {
      font-size: 14px;
      color: #777;
      margin-bottom: 12px;
      width: 100%;
      text-align: center;
    }

    button {
      margin-top: 6px;
      width: 100%;
      padding: 12px;
      border: none;
      border-radius: 12px;
      background: linear-gradient(90deg, #6a5acd, #20b2aa);
      color: #fff;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s ease, opacity 0.2s ease;
      box-shadow: 0 4px 10px rgba(2, 8, 23, 0.12);

      &:hover:not(:disabled) {
        transform: translateY(-2px);
        opacity: 0.95;
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }

    .arrow {
      margin-top: 12px;
      font-size: 22px;
      color: #888;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
