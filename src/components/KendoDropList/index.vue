<template>
  <input class="form-control" />
</template>

<script lang="ts" src="./index.ts"></script>

<style scoped></style>

<style lang="scss">
.k-dropdown {
  width: 100%;
  font-size: 14px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.2) !important;
  font-weight: 300;

  .k-state-default {
    background-color: #fff;
  }

  &.form-control:focus {
    box-shadow: none;
  }

  .k-dropdown-wrap {
    padding: 2px 10px !important;
  }
  .k-input {
    border: none;
  }

  .k-listbox .k-item,
  .k-popup .k-list .k-item {
    padding-left: 15px !important;
  }
}
</style>
