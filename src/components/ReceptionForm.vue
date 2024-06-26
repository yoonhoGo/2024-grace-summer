<script lang="ts" setup>
import { ref } from "vue";

const user = ref({
  name: "",
  grade: "",
});
</script>

<template>
  <div>
    <h1 class="dongle-regular">접수하기 🏖️</h1>
    <div class="flex flex-column gap-3">
      <InputText v-model="user.name" placeholder="이름" />
      <InputText v-model="user.grade" placeholder="학년" />
      <Button>신청하기</Button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
