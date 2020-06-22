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
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () { // 当页面的数据被更新的时候，同时页面完成渲染，updated就会被执行
    this.startY = this.$refs['A'][0].offsetTop
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
      if (this.touchStatus) { // 通过函数节流， 减少handleTouchMove函数的执行频率，大大提高网页的性能
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          // console.log(index)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 6) // 函数节流, 如果在6毫秒内, 你又滑动了手指 就会把上一次的操作清除掉, 重新执行这次的操作
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
