<template>
    <div class='account'>
        <div class='tab-item'>
            <form action="#">
                <div class='form-control'>
                    <label>手机号</label>
                    <div class='control-inp'><input type="text" placeholder='请输入手机号'></div>
                </div>
                <div class='form-control'>
                    <label>验证码</label>
                    <div class='control-inp' id='validation-code'>
                        <input type="text" placeholder='请输入验证码'>
                        <button href="#">获取验证码</button>
                    </div>
                </div>
            </form>
            <div class='btn'><button>登录</button></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'LoginIphone'
}
</script>

<style lang='stylus' scoped>
    .account
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
                        button
                            display inline-block
                            position absolute
                            top 0.08rem
                            right 0.05rem
                            width 0.98rem
                            height 0.28rem
                            line-height 0.28rem
                            text-align center
                            color grey
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
                    border-radius 0.05rem
                    background #85D1DB
                    font-size 0.2rem
                    color #fff
</style>
