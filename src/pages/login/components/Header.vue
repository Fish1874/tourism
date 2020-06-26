<template>
    <div>
        <div class='headers'>
            <div class='top-column'>
                <i class='iconfont iconhome'></i>
                <h2>登录</h2>
                <router-link to='/'>
                    <i class='iconfont iconfanhui'></i>
                </router-link>
            </div>
            <div class='bottom-column'>
                <div class='tab'>
                    <div v-for='(tab,index) in tabs'
                         :key='index'
                         :class="{filter: currentFilter==tab}"
                         @click='filterClick(tab)'
                    >{{ tab }}</div>
                </div>
            </div>
        </div>
        <keep-alive>
            <component :is='currentTabComponent'></component>
        </keep-alive>
    </div>
</template>

<script>
import LoginAccount from './Account'
import LoginIphone from './Iphone'
export default {
  name: 'LoginHeader',
  components: {
    LoginAccount,
    LoginIphone
  },
  data () {
    return {
      currentFilter: '短信验证码登录',
      tabs: ['短信验证码登录', '账号登录']
    }
  },
  methods: {
    filterClick (index) {
      this.currentFilter = index
    }
  },
  computed: {
    currentTabComponent () {
      if (this.currentFilter === '短信验证码登录') {
        return 'LoginIphone'
      } else {
        return 'LoginAccount'
      }
    }
  }
}
</script>

<style lang='stylus' scoped>
    @import '~styles/varibles.styl'
    .headers
        height 1rem
        background $bgColor
        .top-column
            position relative
            text-align center
            h2
                padding-top 0.2rem
                font-size 0.2rem
                color #fff
            .iconhome
                position absolute
                top 0.18rem
                left 0.05rem
                font-size 0.25rem
                color #fff
            .iconfanhui
                position absolute
                top 0.18rem
                right 0.08rem
                font-size 0.2rem
                transform rotateZ(180deg)
                color #fff
        .bottom-column
            display flex
            margin-top 0.13rem
            margin-left 0.1rem
            margin-right 0.1rem
            border 0.01rem solid #fff
            border-radius 0.03rem
            box-sizing border-box
            .tab
                width 100%
                display flex
                height 0.32rem
                color #fff
                line-height 0.32rem
                text-align center
                div
                    flex 1
                .filter
                    color $bgColor
                    background #fff
    .tab-detail
        background #fff
        .tab-item
            width 100%
            height 0.91rem
            margin-top 0.1rem
            border 0.01rem solid #CCCCCC
            form
                position relative
                height 0.91rem
                &::before
                    content ''
                    position absolute
                    top 0.45rem
                    right 0
                    width 95%
                    height 0.01rem
                    background #CCCCCC
                .form-control
                    display flex
                    line-height 0.45rem
                    label
                        width 0.9rem
                        height 0.45rem
                        color $bgColor
                        text-align center
                    .control-inp
                        width 100%
                        input
                            width 90%
                    #validation-code
                        position relative
                        input
                            position absolute
                            top 0.1rem
                            width 50%
                        a
                            display inline-block
                            position absolute
                            top 0.08rem
                            right 0.05rem
                            width 0.98rem
                            height 0.28rem
                            line-height 0.28rem
                            text-align center
                            color #d7dce0
                            border 0.01rem solid #ccc
                            border-radius 0.05rem
            .btn
                width 100%
                height 0.5rem
                text-align center
                margin-top 0.3rem
                button
                    width 90%
                    height 100%
                    border 0.01rem solid #85D1DB
                    background #85D1DB
                    font-size 0.2rem
                    color #fff
</style>
