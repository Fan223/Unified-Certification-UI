<template>
  <el-menu
    :collapse="$store.state.isCollapsed"
    background-color="#141414"
    text-color="#e5eaf3"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="111">111</el-menu-item>
    <el-sub-menu index="1-4">
      <template #title><el-icon>
          <location />
        </el-icon><span>item four</span></template>
      <el-menu-item index="1-4-1">item one</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Aside',
}
</script>

<style>
.el-menu {
  border-right: none;
}
</style>