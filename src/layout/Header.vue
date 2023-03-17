<template>
  <el-row>
    <el-col
      :span="4"
      class="left"
    >
      <el-button
        v-if="!$store.state.isCollapsed"
        @click="$store.state.isCollapsed = !$store.state.isCollapsed"
        :icon="Fold"
      ></el-button>
      <el-button
        v-if="$store.state.isCollapsed"
        @click="$store.state.isCollapsed = !$store.state.isCollapsed"
        :icon="Expand"
      ></el-button>
    </el-col>
    <el-col
      :span="16"
      class="middle"
    >
      <h1>Header</h1>
    </el-col>
    <el-col :span="4">

    </el-col>
  </el-row>
</template>

<script>
import { Fold, Expand } from '@element-plus/icons-vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Header',
  setup() {
    return {
      Fold, Expand
    }
  }
}
</script>

<style>
.left > .el-button {
  height: 100%;
  border: none;
  background-color: #141414;
  color: #e5eaf3;
  width: 50px;
  font-size: 20px;
}
.left > .el-button:hover {
  background-color: #1d2025;
  color: #e5eaf3;
  border-right: 1px solid #121212;
}
.middle {
  text-align: center;
}
</style>