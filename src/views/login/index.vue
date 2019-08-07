<template>
<div class="login-container">
    <el-form class="login-form" label-position="left">

    <div class="title-container">
      <h3 class="title">Login Form</h3>
    </div>

    <el-form-item prop="username">
      <label for="username">Username</label>
      <el-input
        ref="username"
        placeholder="Username"
        v-model="username"
        name="username"
        type="text"
        tabindex="1"
      />
    </el-form-item>

    <el-form-item prop="password">
      <label for="password">Password</label>
      <el-input
        ref="password"
        placeholder="Password"
        v-model="password"
        name="password"
        type="text"
        tabindex="2"
        show-password
      />
    </el-form-item>

    <el-button type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleSubmit">Login</el-button>
  </el-form>
</div>
</template>

<style lang="scss" scoped>
  @media screen and (min-width: 800px) {
    .login-container {
      text-align: center;
      padding-top: 90px;

      > .el-form {
        width: 50%;
        display: inline-block;
      }
    }
  }
</style>


<script>

import { mapActions } from 'vuex'
export default {
    data () {
        return {
            username: '',
            password: '',
            submitted: false
        }
    },
    created () {
        // reset login status
        this.logout();
    },
    methods: {
        ...mapActions('account', ['login', 'logout']),
        handleSubmit () {
            this.submitted = true;
            const { username, password } = this;
            
            if (username && password) {
                this.login({ username, password })
                  .then(res => {
                      console.log(res.data)
                    this.$store.commit('account/LOGIN_SUCCESS', res.data);
                    this.$router.push({ name: 'dashboard' });
                  })
                  .catch(e => {
                    this.$store.commit('account/LOGIN_FAIL');
                    this.$message.warning('Invalid username and password')
                  })
            }
        }
    }
};
</script>
