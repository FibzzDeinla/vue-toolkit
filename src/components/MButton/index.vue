<template>
  <el-button
    :class="`mbutton btn-${color} ${(inverted) ? 'inverted' : ''}`"
    :icon="iconClass"
    :circle="circle"
    :round="round"
    :loading="loading"
    :disabled="disabled"
    @click="clickHandler"
  >
    <slot></slot>
  </el-button>
</template>

<script lang="ts" src="./index.ts"></script>

<style scoped lang="css">
.mbutton { vertical-align: middle; }
.mbutton.btn-default {
  border: none !important;
}
</style>

<style lang="css">
.mbutton > i + span {
  padding-left: 5px !important;
}

.mbutton.is-circle {
  padding: 12px 13px !important;
}
</style>
