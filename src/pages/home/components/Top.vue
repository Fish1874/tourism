<template>
  <div class='tops'>
      <div class='tops-top'>
          <h2>
            <img src="https://imgs.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png">
            本周热门榜单
          </h2>
          <p>
              全部榜单
              <i class='iconfont iconfanhui'></i>
          </p>
      </div>
      <ul class='tops-bottom'>
        <li class='bottom-content' v-for='item of list' :key='item.id'>
          <div class='bottom-top-img' v-if='item.img'><img :src="item.img"></div>
          <div class='bottom-img'><img :src="item.imgUrl"></div>
          <p>{{ item.desc }}</p>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeTop',
  props: {
    list: Array
  }
}
</script>

<style lang='stylus' scoped>
  @import '~styles/varibles.styl';

  .tops
    font-size $fontSize
    height 2.1rem
    line-height 0.4rem
    border-bottom 0.1rem solid #F5F5F5
    .tops-top
      display flex
      justify-content space-between
      img
        height 0.2rem
        position relative
        bottom 0.03rem
      p
        .iconfanhui
          display inline-block
          transform rotateY(180deg)
          font-size 0.15rem
    .tops-bottom
      white-space nowrap
      overflow-x scroll
      overflow-y hidden
      .bottom-content
        display inline-block
        position relative
        .bottom-top-img
          height 0.2rem
          position absolute
          top -0.1rem
          left 0.05rem
          img
            height 100%
        .bottom-img
          padding 0.05rem
          padding-bottom 0.3rem
          height 1.35rem
          img
            height 100%
        p
          position absolute
          left 0.05rem
          right 0
          bottom -0.01rem
          width 1.2rem
          height .4rem
          line-height .4rem
          color $darkTextColor
          text-align center
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
</style>
