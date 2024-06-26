<script lang="ts" setup>
import { storeToRefs } from "pinia";
import confetti from "canvas-confetti";
import { useCounterStore } from "@/store/counter";

const store = useCounterStore();

const { count } = storeToRefs(store);

function fireConfetti() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });

  store.increment();
}
</script>

<template>
  <div>
    <p class="text-5xl">Like: {{ count }}</p>
    <div class="flex w-full justify-content-center gap-3 py-5">
      <button @click="fireConfetti">Like</button>
      <Button class="bg-yellow-300 border-none" label="카카오톡으로 공유하기" />
      <Button label="url 링크 복사하기" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
