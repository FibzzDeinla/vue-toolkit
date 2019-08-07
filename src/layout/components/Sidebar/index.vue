<template>
  <el-aside width="200px" id="main-sidebar">
    <img :src="fsxlogo" alt="">
    <ul class="nav flex-column">
      <template v-for="_route in adminRoutes">
        <sidebar-item :meta="_route.meta" :path="_route.path" :nodes="_route.children" :key="_route.name"></sidebar-item>
      </template>
    </ul>
  </el-aside>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import { AppJS } from '@/js/app.js'

export default {
  data() {
      return {
          fsxlogo: require('@/assets/images/logo.png')
      }
  },
  components: {
    SidebarItem
  },
  computed: { 
  ...mapGetters([
      'adminRoutes'
    ]),
    currentRoute() {
      return this.$route.path;
    }
  },
  mounted() {
    $(document).ready(() => {
      console.log('wew')
      AppJS.handleSidebar();
    })
  }
};
</script>

<style scoped>
  img {
    /* width: calc(100% - 40px); */
    height: 60px;
    width: auto;
    padding: 10px 18px;
  }
  
  a {
    display: block;
  }

  a.is-active > span {
    color: #f3c761;
  }

  #main-sidebar {
    background-color: #19232d;
  }

  ul.nav {
    padding-top: 20px;
  }

</style>