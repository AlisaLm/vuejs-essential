<template>
  <div class="navbar-right">
    <ul v-if="auth" class="nav navbar-nav github-login">
      <li>
        <a v-dropdown href="javascript:;">
          <span v-if="user">
            <img v-if="user.avatar" :src="user.avatar" class="avatar-topnav">
            <span v-if="user.name">{{user.name}}</span>
          </span>
          <span v-else>佚名</span>
          <span class="caret"></span>
        </a>
        <ul class="dropdown-menu">
          <li><a href="javascript:;" @click="logout"><i class="fa fa-sign-out text-md"></i>退出</a></li>
        </ul>
      </li>
    </ul>

    <div class="nav navbar-nav github-login">
      <a href="#" class="btn btn-default login-btn">
        <i class="fa fa-user"></i>登录
      </a>
      <router-link to="/auth/register" class="btn btn-default login-btn">
        <i class="fa fa-user-plus"></i>注册
      </router-link>
    </div>
  </div>
</template>

<script>
// 引入mapState辅助函数
import {mapState} from 'vuex'

export default {
  name: 'TheEntry',
  //添加计算属性选项
  computed: {
    //使用对象展开运算符，将mapstate对象混入到计算属性之中
    ...mapState([
        // 映射this.auth为store.state.auth
        'auth',
        // 映射this.user为store.state.user
        'user'
    ])
  },
  methods: {
    logout() {
      this.$swal({
        confirmButtonText: '退出'
      }).then((res) => {
        if (res.value) {
          this.$store.dispatch('logout')
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
