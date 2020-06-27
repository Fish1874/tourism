<template>
    <div class='account'>
        <div class='tab-item'>
            <!-- 登录表单 -->
            <el-form :model='loginForm' :rules='loginFormRules' ref='loginFormRef'>
                <!-- 用户名 -->
                <el-form-item prop='username'>
                    <el-input prefix-icon='el-icon-user-solid'
                              v-model='loginForm.username'
                    ></el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item prop='password'>
                    <el-input prefix-icon='el-icon-warning'
                              v-model='loginForm.password'
                              type='password'
                    ></el-input>
                </el-form-item>
                <!-- 登录 -->
                <router-link to='/'>
                  <el-form-item class='btn'>
                      <el-button type="primary">登录</el-button>
                  </el-form-item>
                </router-link>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
  name: 'LoginAccount',
  data () {
    return {
      // 登录表单的数据绑定对象
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      // 验证规则
      loginFormRules: {
        username: [
          {
            required: true, // 必填项
            message: '请输入用户名', // 提示消息
            trigger: 'blur' // 触发时机
          },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          },
          { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
        ]
      }
    }
  }
  // methods: {
  //   login () {
  //     // 表单预验证
  //     this.$refs.loginFormRef.validate(async valid => {
  //       // console.log(valid) 返回布尔值, true则通过
  //       if (!valid) return
  //       const {data: res} = await this.$http.post('login', this.loginForm)
  //       if (res.meta.status !== 200) return this.$message.error('登录失败')
  //       this.$message.success('登录成功')
  //       // console.log(res)
  //       // 1.将token保存到客户端的 sessionStorage
  //       //   1.1 项目中除了登录之外的其他API接口，必须在登录之后才能访问
  //       //   1.2 token 只应在当前网站打开期间生效，将token保存到 sessionStorage中
  //       window.sessionStorage.setItem('token', res.data.token)
  //       // 2. 登录后，跳转到主页
  //       this.$router.push('/')
  //     })
  //   }
  // }
}
</script>

<style lang='stylus' scoped>
    .account >>> .el-form-item__label
        width 0.6rem
        padding 0
        text-align center
     .account >>> .el-input__icon
        line-height 0.45rem
    .account
        background #fff
        .tab-item
            width 100%
            margin-top 0.1rem
            .el-form-item
                margin-top 0.05rem
                margin-bottom 0.2rem
            .btn
                width 100%
                height 0.5rem
                text-align center
                margin-top 0.3rem
                .el-button
                    width 90%
                    height 100%
                    border 0.01rem solid #85D1DB
                    background #85D1DB
                    font-size 0.2rem
                    color #fff
</style>
