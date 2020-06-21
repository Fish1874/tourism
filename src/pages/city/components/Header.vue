<template>
  <div class='header'>
      <router-link to='/'>
        <i class='iconfont iconfanhui'></i>
      </router-link>
      城市选择
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang='stylus' scoped>
  @import '~styles/varibles.styl'
  .header
    overflow hidden
    height 0.43rem
    line-height 0.43rem
    text-align center
    color #fff
    background $bgColor
    font-size $fontSize
    .iconfanhui
      position absolute
      left 0.1rem
      color #fff
</style>
