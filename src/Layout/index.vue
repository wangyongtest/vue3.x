<template>
  <div class="layoutNode">
<!--    {{ msgLayout }}-->
    <HeaderNav/>
    <MainCom/>
  </div>
</template>

<script>
import HeaderNav from './headerNav.vue'
import MainCom from './main.vue'
import { ref } from 'vue'
export default {
  name: 'Layout-Com',
  components: {
    HeaderNav,
    MainCom
  },
  setup(){
    let msgLayout = ref('Layout')
    return {
      msgLayout
    }
  }
}
</script>

<style lang="postcss" scoped>
.layoutNode {
  height: 100%;
  //border: 1px solid red;
}
</style>
