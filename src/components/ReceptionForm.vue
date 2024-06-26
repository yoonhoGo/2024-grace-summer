<script lang="ts" setup>
import { ref } from "vue";

const user = ref({
  name: "",
  grade: "",
  pickup: "",
});
</script>

<template>
  <div>
    <h1 class="dongle-regular">접수하기 🏖️</h1>
    <div class="flex flex-column gap-3">
      <InputText v-model="user.name" placeholder="이름" />
      <InputText v-model="user.grade" placeholder="학년" />
      <InputText v-model="user.pickup" placeholder="탑승위치" />
      <Button><a href="sms:01023318579?body={{user.name}}/{{user.grade}}/{{user.pickup}}">안드로이드 신청하기</a></Button>
      <Button><a href="sms:01023318579&body={{user.name}}/{{user.grade}}/{{user.pickup}}">아이폰 신청하기</a></Button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
