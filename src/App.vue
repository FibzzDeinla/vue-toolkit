<template>
  <div id="app">
    <component :is="componentId">
      <router-view></router-view>
    </component>
  </div>
</template>
<script lang="ts">
  import Vue from "vue";
  export default Vue.extend({
    data() {
        return {
          componentId: "default-layout"
        }
    }
  });
</script>