<template>
  <div class="parentNode">
    abxcc
    <span class="childNodes">
      index
    </span>
  </div>
</template>

<script>
export default {
  name: 'Layout-Com',
  components: {},
  data() {
    return {}
  }
}
</script>

<style lang="postcss" scoped>
.parentNode {
  color: var(--text-color);

  & .childNodes {
    font-size: var(--middle-size);
    color: purple;
  }
}
</style>
