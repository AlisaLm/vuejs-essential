<template>
  <div>
    <Message :show.sync="msgShow" :type="msgType" :msg="msg"/>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      msg: '', // 消息
      msgType: '', // 消息类型
      msgShow: false // 是否显示消息，默认不显示
    }
  },
  // 组件内的路由导航守卫
  beforeRouteEnter(to, from, next) {
    // 路由名称，对应路由配置中的name
    const fromName = from.name
    const logout = to.params.logout

    // 确认导航
    next(vm => {
      // 通过vm参数访问组件实例，已登录时，评估路由名称
      if (vm.$store.state.auth) {
        switch (fromName) {
          // 如果从注册页面跳转过来
          case 'Register':
            // 显示注册成功
            vm.showMsg('注册成功')
                break
        }
      } else if (logout) {
        // logout返回true时，显示操作成功
        vm.showMsg('退出成功')
      }
    })
  },
  computed: {
    // 用户登录状态
    auth() {
      return this.$store.state.auth
    }
  },
  watch: {
    // 监听auth，值变为false时，提示操作成功
    auth(value) {
      if (!value) {
        this.showMsg('退出成功')
      }
    }
  },
  methods: {
    showMsg(msg, type = 'success') {
      this.msg = msg
      this.msgType = type
      this.msgShow = true
    }
  }
}
</script>

<style scoped>

</style>
