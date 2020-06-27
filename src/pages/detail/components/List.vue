<template>
    <div class='lists'>
        <div class='lists-top'>
            <h2>景区门票</h2>
            <p>
                <i class='iconfont icongonggao'></i>
                欢乐时光享
            </p>
        </div>
        <div class='lists-bottom'>
            <div class='item' v-for='(item,index) of list' :key='index' @click='handleClickPrice(index)'>
                <div class='item-title'>
                    {{item.title}}
                </div>
                <div class='item-price'>
                    <p>$170</p>
                    <i class='iconfont iconjiantou'></i>
                </div>
                <div class='item-price-popups' v-if='item.hide? true : false'>
                    <div class='popups-left'>
                        <p>顺德欢乐海岸PLUS玛雅海滩水公园日场门票双人票(特惠票，提前有优惠)</p>
                        <span>23:59前可订明日</span>
                        <span>随时退</span>
                    </div>
                    <div class='popups-right'>
                        <h3>￥270</h3>
                        <p>立即预定</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  },
  methods: {
    handleClickPrice (index) {
      let obj = this.list[index]
      obj.hide = !obj.hide
      this.$set(this.list, index, obj)
    }
  }
}
</script>

<style lang='stylus' scoped>
    @import '~styles/varibles.styl'
    .lists-top
        h2
            font-size 0.2rem
            font-weight bold
            margin-top 0.1rem
            margin-left 0.1rem
        p
            margin-top 0.1rem
            margin-left 0.1rem
            .icongonggao
                color $bgColor
    .lists-bottom
        width 95%
        margin-top 0.18rem
        margin-left 0.08rem
        margin-bottom 0.5rem
        box-shadow: 0 0.02rem 0.06rem 0 rgba(0,0,0,0.10);
        border-radius: 0.08rem;
        .item
            display flex
            justify-content space-between
            flex-wrap wrap
            &::before
                content ''
                position absolute
                left 0.18rem
                width 90%
                height 0.01rem
                background #F2F2F2
            &:nth-child(1)::before
                content none
        .item-title
            line-height 0.4rem
            font-size 0.16rem
            padding 0 0.1rem
        .item-price
            display flex
            margin-right 0.1rem
            line-height 0.4rem
            p
                color #FFA500
            .iconjiantou
                margin-left 0.04rem
                color #dfe4ea
        .item-price-popups
            width 3rem
            height 1.15rem
            margin-left 0.08rem
            margin-bottom 0.1rem
            padding 0.16rem
            border-radius 0.08rem
            background #F8F8F8
            .popups-left
                overflow hidden
                width 2.28rem
                height 1.15rem
                float left
                display flex
                flex-direction column
                justify-content space-between
                p
                    line-height 0.2rem
                span
                    font-size 0.12rem
                    color $bgColor
            .popups-right
                overflow hidden
                float right
                position relative
                top 0.4rem
                h3
                    font-size 0.25rem
                    color #FFA500
                p
                    font-size 0.1rem
                    height 0.22rem
                    margin-top 0.05rem
                    text-align center
                    line-height 0.22rem
                    border 0.01rem solid transparent
                    background #FFA500
                    border-radius 0.2rem
                    color #fff
</style>
