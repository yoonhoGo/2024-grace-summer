<script lang="ts" setup>
import { useCounterStore } from "@/store/counter";
import { storeToRefs } from "pinia";
import confetti from "canvas-confetti";

const store = useCounterStore();

const { count, name, doubleCount } = storeToRefs(store);

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
    <!-- <h1>여름성경학교 광주성전</h1> -->
    <h1>제목입니다.</h1>
    <p>소망의 길</p>
    <div>이미지</div>
    <div>
      <span> 날짜: 2024 년 7 월 29 일 ~ 8 월 2 일 </span>
      <span> 장소: 광주성전</span>
      <span> 시간표: 9:00 ~ 12:00 </span>
    </div>
    <div>오시는 길</div>
    <div>지도</div>
    <div>
      <div>네이버 지도에서 보기</div>
      <div>카카오 지도에서 보기</div>
    </div>
    <button @click="fireConfetti">Like</button>
    <div>
      <div>이름</div>
      <div>학년</div>
      <Button>신청하기</Button>
    </div>
    <div>카카오톡으로 공유하기</div>
    <div>url 링크 복사하기</div>

    <router-link to="/about">Go to About</router-link>
    <p>Like: {{ count }}</p>
    <p>Name: {{ name }}</p>
    <p>Double count: {{ doubleCount }}</p>
  </div>
</template>

<style lang="scss" scoped></style>
