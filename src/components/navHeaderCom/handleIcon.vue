<template>
  <div>
    {{ state.iconLists }}
  </div>
</template>

<script setup>
import {ref, reactive} from 'vue'

const state = reactive({
  iconLists: []
})
</script>
