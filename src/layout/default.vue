<template>
  <el-container>
    <sidebar />
    <el-main>
      <el-container class="container__main">
        <app-main />
      </el-container>
    </el-main>
  </el-container>
</template>

<script>
import Vue from "vue";
import { AppMain, Sidebar } from "./components";
import { mapState } from "vuex";
import PerfectScrollbar from "perfect-scrollbar";

export default {
  name: "Layout",
  data() {
    return {
      avatar: require("@/assets/images/myAvatar.png")
    };
  },
  components: {
    AppMain,
    Sidebar
  },
  computed: {
    ...mapState("account", ["user"])
  }
};
</script>

<style scoped lang="scss">
.el-container { height: 100%;}

.el-main { padding: 0; }

#footer_connection_status {
  background: #4e4e4e;
  border-top-left-radius: 60px;
  border-top-right-radius: 60px;
  height: 60px;
}

.container__main {
  height: 100%;

  > .el-aside {
    width: 220px !important;
  }

  > .el-main {
    padding: 15px 20px;
  }
}

.el-container .el-header {
  background-color: #4e4e4e;

  > .el-breadcrumb,
  > .nav-right-menu {
    display: inline-block;
    padding: 9px 0px;
  }
}

.nav-right-menu {
  float: right;

  > a {
    padding: 10px 15px;
  }

  a,
  div {
    display: inline-block;
    vertical-align: top;
  }
}

.user__thumb {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  float: left;
  overflow: hidden;
}

.user__info {
  display: inline-block;
  padding: 5px;

  .name,
  .description {
    display: block;
    white-space: nowrap;
  }

  .name {
    font-size: 13px;
    font-weight: 600;
  }

  .description {
    font-size: 10px;
    font-weight: 300;
  }
}
</style>