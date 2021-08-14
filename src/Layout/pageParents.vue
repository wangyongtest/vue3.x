<template>
  <div class="pageParent">
    <router-view v-slot="{ Component }">
      <keep-alive :include="keepAliveCom"
                  :exclude="excludeAliveCom">
        <transition appear
                    name="animate__animated animate__slide"
                    enter-active-class="animate__slideInLeft"
                    leave-active-class="animate__slideInRight">
          <component :is="Component"/>
        </transition>
      </keep-alive>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import {useRouter, useRoute} from "vue-router";
import {defineProps, reactive, ref} from 'vue'

defineProps({})
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
}
</style>
