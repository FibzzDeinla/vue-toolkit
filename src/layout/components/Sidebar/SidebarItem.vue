<template>
  <li class="sidebar-item nav-item">
    <a v-if="nodes && nodes.length > 0" href="javascript:void(0)" class="drop">
      <i :class="meta.icon"></i>
      <span>{{ meta.display }}</span>
    </a>
    <router-link v-else :to="path" class="nav-link">
      <i :class="meta.icon"></i>
      <span>{{ meta.display }}</span>
    </router-link>
    <ul v-show="nodes && nodes.length > 0">
      <sidebar-item 
        v-for="node in nodes" 
        :nodes="node.children" 
        :meta="node.meta"
        :path="node.path"
        :key="node.name"
      />
    </ul>
  </li>
</template>
<script>
  export default { 
    props: [ 'meta', 'path', 'nodes' ],
    name: 'sidebar-item',
    created() {
    // console.log(this.meta)
    },

    beforeDestroy() {
    }
  }
</script>