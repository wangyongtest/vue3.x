<template>
  <section class="indexPage">
    {{ msg }} {{ state.name }}
  </section>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'IndexPage',
  components: {},
  setup() {
    let msg = ref('indexPage')
    const { state } = useStore()
    console.log( state )
    return {
      msg,
      state
    }
  }
}
</script>

<style lang="postcss" scoped>
.indexPage {
  width: 100%;
}
</style>
