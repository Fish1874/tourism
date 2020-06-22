<template>
    <div class='container' @click='handleGallaryClick'>
        <div class='wrapper'>
            <swiper :options="swiperOptions">
                <swiper-slide>
                    <img class='gallery-img' src="http://img1.qunarzz.com/sight/p0/1909/78/78946546c055f91fa3.img.jpg_r_800x800_1af1e2b8.jpg">
                </swiper-slide>
                <swiper-slide>
                    <img class='gallery-img' src="http://img1.qunarzz.com/sight/p0/1909/2d/2d8728dad3105ccba3.img.jpg_r_800x800_62f1776a.jpg">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CommonGallery',
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        // 解决图片拖动问题
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close') // 当画廊被点击的时候触发一个事件
    }
  }
}
</script>

<style lang='stylus' scoped>
    .container >>> .swiper-container
        overflow inherit
    .container
        z-index 99
        display flex
        flex-direction column
        justify-content center
        position fixed
        top 0
        left 0
        right 0
        bottom 0
        background #000
        .wrapper
            width 100%
            height 0
            padding-bottom 65%
            background #fff
            .gallery-img
                width 100%
            .swiper-pagination
                color #fff
                bottom -1rem
</style>
