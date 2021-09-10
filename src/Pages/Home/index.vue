<template>
  <div>
    <a-button type="primary" shape="round" :size="size">
      <template #icon>
        <DownloadOutlined />
        Download
      </template>
    </a-button>
  </div>
</template>

<!--<script setup>-->
<!--import {ref} from 'vue'-->
<!--import { DownloadOutlined } from '@ant-design/icons-vue'-->


<!--const info = ref('home/index')-->
<!--</script>-->

<script lang="ts">
import { DownloadOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    DownloadOutlined,
  },
  setup() {
    return {
      size: ref('large'),
    };
  },
});
</script>


<style lang="postcss" scoped>

</style>
