<template>
    <div class='header-fixed'>
        <router-link to='/'>
            <i class='iconfont iconfanhui'></i>
        </router-link>
        景点详情
    </div>
</template>

<script>
export default {
  name: 'DetailHeader'
}
</script>

<style lang='stylus' scoped>
    @import '~styles/varibles.styl'
    .header-fixed
        z-index 999
        position fixed
        top 0
        left 0
        right 0
        overflow hidden
        height 0.43rem
        line-height 0.43rem
        text-align center
        color #ffffff
        background $bgColor
        font-size 0.16rem
        .iconfanhui
            position absolute
            top 0
            left 0.05rem
            text-align center
            font-size 0.2rem
            color #fff
</style>
