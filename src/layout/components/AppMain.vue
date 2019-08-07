<template>
    <el-main>
        <transition name="fade-transform" mode="out-in">
        <!-- <keep-alive> -->
            <router-view/>
        <!-- </keep-alive> -->
        </transition>
    </el-main>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
  }
}
</script>


<style>
  #app {
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    font-size: 14px;
    letter-spacing: .28px;
    color: #7c7c7c;
    /* background: #f0f2f5; */
    background: #ffffff;
  }
</style>
