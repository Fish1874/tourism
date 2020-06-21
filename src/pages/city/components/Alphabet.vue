<template>
  <ul class='item-wrapper'>
    <li class='item' v-for='item of letters' :key='item' :ref='item'
        @click='handleLetterClick'
        @touchstart='handleTouchStart'
        @touchmove='handleTouchMove'
        @touchend='handleTouchEnd'
    >
    {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters // 返回的是 ['A', 'B', 'C', 'D']
    }
  },
  data () {
    return {
      touchStatus: false
    }
  },
  methods: {
    handleLetterClick (e) {
    //   console.log(e.target.innerText)  添加一个绑定事件
      this.$emit('change', e.target.innerText) // 向外触发事件，City来监听这个事件
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) { // 滑动字母，区域跟着变
      if (this.touchStatus) {
        const startY = this.$refs['A'][0].offsetTop
        const touchY = e.touches[0].clientY - 79
        const index = Math.floor((touchY - startY) / 20)
        // console.log(index)
        if (index >= 0 && index < this.letters.length) {
          this.$emit('change', this.letters[index])
        }
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang='stylus' scoped>
    @import '~styles/varibles.styl'
    .item-wrapper
        display flex
        flex-direction column
        justify-content center
        position absolute
        top 0.79rem
        right 0
        bottom 0
        width 0.2rem
        .item
            line-height 0.2rem
            text-align center
            color $bgColor
</style>
