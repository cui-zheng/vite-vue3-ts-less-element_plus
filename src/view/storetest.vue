<script>
// 引入爱老虎油状态管理仓库
import { ILoveYouStore } from "@/store/ILoveYouStore";
const useILoveYouStore = ILoveYouStore();
</script>

然后随便用Vue2、Vue3、Vue3+语法糖来定义数据
<!-- ^ Vue2 -->
<template>
  <div v-if="useILoveYouStore.$state.xxx != null">
    { { useILoveYouStore.$state.xxx }}
  </div>
  <div v-else>{ { useILoveYouStore.$state }}</div>
</template>

<script>
export default {
  data: () => ({
    useILoveYouStore: useILoveYouStore,
  }),
};
</script>
<!-- / Vue2 -->

<!-- ^ Vue3 -->
<script>
import { ref } from "vue";
export default {
  setup() {
    const useILoveYouStore = useILoveYouStore;

    return {
      useILoveYouStore,
    };
  },
};
</script>
<!-- / Vue3 -->

<!-- ^ Vue3+语法糖 -->
<script setup>
const useILoveYouStore = useILoveYouStore;
</script>
<!-- / Vue3+语法糖 -->
