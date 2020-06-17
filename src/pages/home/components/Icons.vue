<template>
    <div class='icons'>
        <swiper :options="swiperOptions">
            <swiper-slide v-for='(page, index) of pages' :key='index'>
                <div class='icon' v-for='item of page' :key='item.id'>
                    <div class='icon-img'><img :src='item.imgUrl'></div>
                    <p class='icon-desc'>{{ item.desc }}</p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div class='pos'>
          <div class='pos-left'>
            <i class='iconfont icondizhi'></i>
            定位失败
          </div>
          <div class='pos-right'>
            <i class='iconfont icon943caidan_jipiao'></i>
            必游榜单
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomeIcon',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = [] /* 如果第二页不存在，设置为空 */
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang='stylus' scoped>
    @import '~styles/varibles.styl'
    .icons >>> .swiper-pagination-bullet
      background $bgColor !important
    .icons >>> .swiper-container //解决只有一半才能滑动的问题
        height 0
        padding-bottom 45%
    .icons
        font-size $fontSize
        margin-top 0.1rem
        border-bottom 0.1rem solid #F5F5F5
        .pos
            height 0
            display flex
            justify-content space-around
            padding-bottom 10%
            div
                width 100%
                height 0.4rem
                line-height 0.4rem
                border 0.01rem solid #E8E9EB
                text-align center
            .pos-left
                border-left none
                border-right none
                border-bottom none
            .pos-right
                border-right none
                border-bottom none
    .icon
        position relative
        overflow: hidden
        float left
        width 25%
        height 0
        padding-bottom: 20%
        .icon-img
            position absolute
            top 0
            left 0
            right 0
            bottom .4rem
            box-sizing: border-box
            img
                display block
                margin: 0 auto
                height 100%
        .icon-desc
            position absolute
            left 0
            right 0
            bottom 0
            height .44rem
            line-height .44rem
            color $darkTextColor
            text-align center
</style>
