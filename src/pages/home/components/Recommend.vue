<template>
  <div class='recommend'>
      <h2>周末去哪儿</h2>
      <div v-for='item of list' :key='item.id'>
          <div class='recommend-img'><img :src="item.imgUrl"></div>
          <div class='recommend-text'>
              <span>{{ item.headline }}</span>
              <p>{{ item.text }}</p>
          </div>
      </div>
  </div>  
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list:Array
  }
}
</script>

<style lang='stylus' scoped>
    .recommend
        font-size 0.15rem
        border-bottom 0.1rem solid #F5F5F5
        h2
            height .4rem
            padding-left .26rem
            line-height .4rem
            background #e0e0e0
        .recommend-img
            overflow hidden
            width 100%
            height 0
            padding-bottom 37.5%
            img
                width 100%
        .recommend-text
            height 0
            padding-bottom 12%
            line-height .25rem
            padding-left .2rem
            span
                font-weight bold
                color black
            p
                overflow hidden
                white-space nowrap
                text-overflow ellipsis    
</style>