<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="item in breadcrumbList" :key="item.path">
        <router-link v-if="hasValue(item.path)" :to="item.path">{{ item.meta.display }}</router-link>
        <a href="javascript:void(0)" class="drop" v-else>{{ item.meta.display }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script lang="ts" src="./index.ts">
</script>

<style scoped>
.el-breadcrumb {
  padding: 21px 0px;
}
</style>
