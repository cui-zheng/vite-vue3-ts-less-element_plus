<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
// 路由跳转
router.push("/home");
</script>
<template>
  <div>1</div>
</template>
<style scoped></style>
