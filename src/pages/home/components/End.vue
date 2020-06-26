<template>
    <div class='end'>
        <div class='end-top'>
            <ul>
                <i class='iconfont icon943caidan_jipiao'></i>
                飞机
            </ul>
            <ul>
                <i class='iconfont iconHotel'></i>
                酒店
            </ul>
            <ul>
                <i class='iconfont iconhome'></i>
                公寓
            </ul>
            <ul>
                <i class='iconfont icongengduo1'></i>
                更多
            </ul>
        </div>
        <div class='end-bottom'>
            <router-link to='/login'>
                <a href="#">登录</a>
            </router-link>
            <a href="#">我的订单</a>
            <a href="#">最近浏览</a>
            <a href="#">关于我们</a>
        </div>
        <p>Qunar 京ICP备05021087</p>
    </div>
</template>

<script>
export default {
  name: 'HomeEnd'
}
</script>

<style lang='stylus' scoped>

    .end
        height 1rem
        font-size 0.15rem
        background #F5F5F5

    .end-top
        display flex
        justify-content space-around
        margin-bottom 0.2rem
    .end-bottom
        height 0.33rem
        display flex
        justify-content space-between
        a
            margin-left 0.05rem
            margin-right 0.05rem
    p
        width 100%
        text-align center
</style>
