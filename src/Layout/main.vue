<template>
  <div class="container">
    <SideBar/>
    <PageParent/>
  </div>
</template>

<script lang="ts">
import SideBar from './sideBar.vue'
import PageParent from './pageParents.vue'
export default {
  name: 'Container',
  components:{
    SideBar,
    PageParent
  },
  data(){
    return {}
  }
}
</script>

<style lang="postcss" scoped>
.container {
  width: 100%;
  height: calc(100% - 60px);
  display: flex;
  justify-content: flex-start;
}
</style>
