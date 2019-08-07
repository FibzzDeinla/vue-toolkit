<template>
  <input type="checkbox" class="js-switch" :checked="checked" />
</template>

<script lang="ts" src="./index.ts"></script>

<style lang="scss">
.switchery {
  &.switchery-small {
    height: 20px;

    > small {
      width: 22px;
      height: 22px;
      top: -2px;
    }
  }
}
</style>
