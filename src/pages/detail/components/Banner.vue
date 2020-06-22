<template>
    <div>
        <div class='banner' @click='handleBannerClick'>
            <img class='banner-img' src="//img1.qunarzz.com/sight/p0/1909/78/78946546c055f91fa3.img.jpg_600x330_8d9020b4.jpg">
            <div class='banner-info'>
                <div class='banner-title'>顺德欢乐海岸PLUS</div>
                <div class='banner-number'>
                    <i class='iconfont icontupian'></i>
                    17
                </div>
            </div>
        </div>
        <common-gallery :imgs='imgs'
                        v-show='showGallery'
                        @close='handleGalleryClose'
        >
        </common-gallery>
    </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
export default {
  name: 'DetailBanner',
  props: {
    imgs: Array
  },
  data () {
    return {
      showGallery: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    handleGalleryClose () {
      this.showGallery = false
    }
  },
  components: {
    CommonGallery
  }
}
</script>

<style lang='stylus' scoped>
    .banner
        position relative
        overflow hidden
        height 0
        padding-bottom 55%
        .banner-img
            width 100%
        .banner-info
            display flex
            position absolute
            left 0
            right 0
            bottom 0
            line-height 0.3rem
            color #fff
            .banner-title
                flex 1
                font-size 0.16rem
                padding 0 0.1rem
            .banner-number
                height 0.2rem
                line-height 0.18rem
                margin-top 0.07rem
                margin-right 0.1rem
                padding 0 0.16rem
                border-radius 0.1rem
                font-size 0.12rem
                background rgba(0, 0, 0, 0.4rem)
</style>
