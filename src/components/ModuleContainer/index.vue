<template>
  <el-container direction="vertical">
    <el-main class="module-header-container">
      <el-container>
        <el-main class="module-header">
          <h5>
            <icon name="fastrax-fastrax-trademark" color="#F9AD48"></icon>
            {{module}}
          </h5>
          <span>Displays Assets</span>
        </el-main>
        <el-aside class="header-filter-container">
          <div>
            <slot name="dropdown"></slot>
            <!-- container of dropdown -->
          </div>
        </el-aside>
      </el-container>
    </el-main>
    <el-main class="no-padding">
      <el-container>
        <el-main>
          <div class="row">
            <div class="col-lg-10">Bread Crumbs</div>
            <div class="col-lg-2 hide-container">
              <span
                class="hideSidebar"
                @click="handleAsideVisibility"
              >{{showAside ? "Hide" : "Show"}} Sidebar</span>
            </div>
          </div>
          <slot name="content"></slot>
        </el-main>
        <el-aside v-show="showAside">
          <el-main>
            <slot name="sidebar"></slot>
          </el-main>
        </el-aside>
      </el-container>
    </el-main>
  </el-container>
</template>

<script>
import GroupHeaderFilter from "@/components/GroupHeaderFilter/index.vue";

export default {
  name: "ModuleHeaderDropdown",
  props: {
    module: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      showAside: true
    };
  },
  components: {
    GroupHeaderFilter
  },
  methods: {
    handleAsideVisibility() {
      console.log("test");
      const visible = this.showAside;
      this.showAside = !visible;
    }
  }
};
</script>

<style>
.hide-container {
  text-align: right;
}

.hideSidebar {
  cursor: pointer;
}
</style>