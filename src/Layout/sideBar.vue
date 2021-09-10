<template>
  <div :class="[ collapsed ? 'closeSideBar' : 'sideBar']">
    <a-menu
        mode="inline"
        theme="dark"
        :inline-collapsed="collapsed"
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
    >
      <a-menu-item key="1">
        <template #icon>
          <PieChartOutlined/>
        </template>
        <span>Option 1</span>
      </a-menu-item>

      <a-menu-item key="2">
        <template #icon>
          <DesktopOutlined/>
        </template>
        <span>Option 2</span>
      </a-menu-item>

      <a-menu-item key="3">
        <template #icon>
          <InboxOutlined/>
        </template>
        <span>Option 3</span>
      </a-menu-item>

      <a-sub-menu key="sub1">
        <template #icon>
          <MailOutlined />
        </template>
        <template #title>Navigation One</template>
        <a-menu-item key="5">Option 5</a-menu-item>
        <a-menu-item key="6">Option 6</a-menu-item>
      </a-sub-menu>

    </a-menu>
    <transition name="fade">
      <DoubleLeftOutlined v-if="!collapsed" class="collapseIcon" @click="toggleCollapsed"/>
      <DoubleRightOutlined v-else class="collapseIcon" @click="toggleCollapsed"/>
    </transition>
  </div>
</template>

<script>
import {
  defineComponent,
  reactive,
  toRefs,
  watch
} from 'vue'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined
} from '@ant-design/icons-vue';

export default defineComponent({
  setup() {
    const state = reactive({
      collapsed: false,
      selectedKeys: ['1'],
      openKeys: ['sub1'],
      preOpenKeys: ['sub1'],
    });

    watch(() => state.openKeys, (val, oldVal) => {
          state.preOpenKeys = oldVal
        }
    );

    const toggleCollapsed = () => {
      state.collapsed = !state.collapsed;
      state.openKeys = state.collapsed ? [] : state.preOpenKeys;
    };

    return {
      ...toRefs(state),
      toggleCollapsed,
    };
  },
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined,
    DoubleLeftOutlined,
    DoubleRightOutlined
  },
});
</script>

<style lang="postcss" scoped>
.sideBar {
  height: 100%;
  width: 256px;
  //border: 1px solid red;

  ::v-deep(.ant-menu) {
    height: calc(100% - 32px);
  }
}

.closeSideBar {
  width: 80px;
  border: 1px solid red;

  ::v-deep(.ant-menu) {
    height: calc(100% - 32px);
  }
}

.collapseIcon {
  width: 100%;
  height: 32px;
  line-height: 32px;
  bottom: 0;
  animation: fromBottomToTop 3s ease-in;
  transition: all 3s;
}
</style>
