<template>
  <div class="pageParent">
    <router-view v-slot="{ Component, route }">
      <keep-alive :include="keepAliveCom" :exclude="excludeAliveCom">
        <transition name="homeapp" mode="out-in">
          <component :is="Component" />
        </transition>
      </keep-alive>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { reactive, ref } from 'vue'

const Routes = useRoute()
const RouterList = useRouter()
console.log(Routes, 'Routes', RouterList.options.routes, 'RouterLists')
let num = ref(1)
let keepAliveCom = reactive([])
let excludeAliveCom = reactive([])
</script>

<style lang="postcss" scoped>
.pageParent {
  width: 100%;
  overflow: hidden;

  .homeapp-enter-active {
    animation: moveIn 0.15s;
  }

  .homeapp-leave-active {
    animation: moveOut 0.15s;
  }

  @keyframes moveIn {
    0% {
      opacity: 0;
      transform: translateX(200px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }

  @keyframes moveOut {
    0% {
      opacity: 1;
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      transform: translateX(-200px);
    }
  }
}
</style>
