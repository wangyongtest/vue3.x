<template>
  <div class="headerNav">
    <span class="logo">
      <!-- 引入一个 image 组件：加载成功， 加载失败，根据分辨率来使用不同尺寸图片，可以使用 picture  -->
      <picture class="logo_pic">
        <source srcset="../assets/logo/logo.jpg"
                media="(min-width: 800px)">
        <img class="logo_img" src="../assets/logo/logo.jpg" alt="logo"/>
      </picture>
    </span>

    <div class="nvaList">
      <!-- 右侧 图标操作，包括 【全屏, 返回首页，信息，右侧布局配置】，以及 用户操作 -->
      <ul class="handleAndInfo">
        <!-- 图标操作， 定义为组件，通过传不同 图表显示 -->
        <li class="handlerAndInfo_item">
          <HandlerIcon/>
        </li>
      </ul>

      <span class="userInfo">
        <!-- 用户信息，用途图片， 用户下拉， 展示 个人中心， 退出 -->
      </span>
    </div>
  </div>
</template>


<script setup>
import HandlerIcon from '@/components/navHeaderCom/handleIcon.vue'

</script>

<style lang="postcss" scoped>
.headerNav {
  border: 1px solid purple;
  height: 60px;
  display: flex;
  justify-content: space-between;

  .logo {
    display: block;
    width: 120px;
    height: 60px;
    padding: 5px 10px;
    border: 1px solid purple;
    .logo_pic {
      display: block;
      width: 100%;
      height: auto;
    }
    .logo_img {
      width: 100%;
      object-fit: contain;
    }
  }

  .nvaList {
    border: 1px solid red;
  }
}
</style>
