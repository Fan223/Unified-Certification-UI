<template>
  <el-container>
    <el-header>
      <Header />
    </el-header>
    <el-container>
      <el-aside>
        <Aside />
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from './Header.vue';
import Aside from './Aside.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Container',
  components: {
    Header,
    Aside
  }
}
</script>

<style>
.el-container {
  height: 100%;
}
.el-header {
  height: 60px;
  line-height: 60px;
}
.el-aside {
}
</style>