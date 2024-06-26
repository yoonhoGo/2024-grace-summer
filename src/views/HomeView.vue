<script lang="ts" setup>
import ReceptionForm from "@/components/ReceptionForm.vue";
import ShareButtons from "@/components/ShareButtons.vue";
</script>

<template>
  <div class="flex flex-column gap-5">
    <!-- <h1 class="text-8xl">제목입니다.</h1> -->
    <div class="text-8xl dongle-regular">2024 여름성경학교 광주성전</div>

    <div class="flex flex-column gap-3 text-3xl dongle-regular text-yellow-400">
      <span> 날짜: 2024 년 7 월 13 일 </span>
      <span> 장소: 은헤와진리교회 광주성전</span>
      <span> 시간표: 9:30 ~ 15:00 </span>
    </div>
    <div class="flex flex-column gap-1 dongle-regular text-green-400">
      <div class="text-5xl">일정 안내</div>
      <div class="flex flex-column text-2xl gap-2">
        <span> - 예배 🙏🏻</span>
        <span> - 예수님을 만나면 🌟 </span>
        <span> - 소망의 길 🌱 </span>
        <span> - 물 놀이 🏝️</span>
      </div>
    </div>
    <div class="flex flex-column gap-2">
      <div class="text-2xl font-bold">오시는 길</div>
      <div class="text-xl">경기도 광주시 오포읍 마루들길 168</div>
      <Image src="/src/assets/map.webp" alt="Image" width="500" />
    </div>

    <div class="flex gap-3 justify-content-center">
      <Button
        label="네이버 지도에서 보기"
        class="bg-green-300 border-none"
        rounded
      />
      <Button
        class="bg-yellow-300 border-none"
        rounded
        label="카카오 지도에서 보기"
      />
    </div>
    <div class="dongle-regular">
      <p class="text-5xl">소망의 길</p>
      <span class="text-5xl">
        우리는 낮에 속하였으니 근신하여<br />
        믿음과 사랑의 흉배를 붙이고 구원의 소망의 투구를 쓰자 <br />
        데살로니가전서 5장 8절
      </span>
    </div>
    <ReceptionForm />
    <ShareButtons />

    <div>
      <router-link to="/about">Go to About</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
