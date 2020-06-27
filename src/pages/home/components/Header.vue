<template>
    <div class='header'>
        <router-link to='/login' id='left'>
            <div class='header-left'>
                <i class='iconfont icondenglu'></i>
            </div>
        </router-link>
        <div class='header-middle'>
            <i class='iconfont iconsousuo'></i>
            <input class='header-input' type="text" placeholder='输入城市/景点/游玩主题'>
        </div>
        <router-link to='/city' id='right'>
            <div class='header-right'>
                <span>{{ this.city }}</span>
                <i class='iconfont iconjiantou'></i>
            </div>
        </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}

</script>

<style lang='stylus' scoped>
// 1rem = html font-size = 100px
    @import '~styles/varibles.styl';
    .header
        height .45rem
        background $bgColor
        display flex
        color #fff
        #left
            flex 0.5
        #right
            flex 1
        .header-left
            width 0.4rem
            text-align center
            line-height .45rem
            .icondenglu
                font-size .3rem
                color #fff
        .header-middle
            flex 4
            width 2.55rem
            height 0.2rem
            background #fff
            border-radius 5px
            margin 0.08rem 0 0.08rem
            padding 0.07rem 0.1rem 0.03rem
            font-size 0.15rem
            color #E8E9EB
            .header-input
                width 80%
                position relative
                top -0.02rem
                padding-left 0.01rem
        .header-right
            width 0.5rem
            font-size 0.15rem
            position relative
            line-height .45rem
            margin-left 0.05rem
            overflow hidden
            text-overflow ellipsis
            white-space nowrap;
            color #fff
            span
                display inline-block
                width 0.35rem
                overflow hidden
                white-space nowrap
                text-overflow ellipsis
            .iconjiantou
                position absolute
                right 0

</style>
