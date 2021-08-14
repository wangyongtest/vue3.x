<template>
  <div>
    {{ state.iconLists }}
    {{ num }}
  </div>
</template>

<script setup>
import { defineProps, ref, reactive } from 'vue'

defineProps({})
const  state =  {
  iconLists: []
}
let num = 3
</script>
