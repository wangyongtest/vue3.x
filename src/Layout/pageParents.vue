<template>
  <div class="pageParent">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'PageParent',
  setup(){

    return {}
  }
}
</script>

<style lang="postcss" scoped>
.pageParent {
 width: 100%;
  border: 1px solid red;
}
</style>
