<template>
    <div class='list' ref='wrapper'>
        <div>
            <div class='area'>
                <div class='title'>当前城市</div>
                <div class='current-city'>
                    <div class='button-wrapper'>
                        <div class='button'>{{ this.$store.state.city}}</div>
                    </div>
                </div>
            </div>
            <div class='area'>
                <div class='title'>热门城市</div>
                <div class='current-city'>
                    <div class='button-wrapper' v-for='item of list'
                                                :key='item.id'
                                                @click='handleCityClick(item.name)'
                    >
                        <div class='button'>{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class='area' v-for='(item, key) of cities' :key='key' :ref='key'>
                <div class='title border-line'>{{key}}</div>
                <div class='item-list' v-for='innerItem of item' :key='innerItem.id' @click='handleCityClick(innerItem.name)'>
                    <div class='item'>{{innerItem.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    list: Array,
    cities: Object,
    letter: String
  },
  methods: {
    handleCityClick (city) {
      this.$store.commit('changeCity', city)
      this.$router.push('/') // 做页面的跳转，当我确定了城市之后，自动跳回主页
    }
  },
  mounted () { // 等挂载完成之后，再创建这个插件，使之可以拖动
    const options = {
      scrollY: true,
      scrollX: false,
      mouseWheel: true,
      click: true,
      taps: true
    }
    this.scroll = new Bscroll(this.$refs.wrapper, options)
  },
  watch: { // 借助监听器来监听letter的变化
    letter () {
    //   console.log(this.letter) 一旦letter改变，就执行这个代码,点B的时候区域变到B区
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang='stylus' scoped>
    @import '~styles/varibles.styl'
    .list
        overflow hidden
        position absolute
        top 0.79rem
        left 0
        right 0
        bottom 0
        .title
            line-height 0.25rem
            background #eeeeee
            padding-left 0.15rem
            color #666
            font-size 0.13rem
        .current-city
            overflow hidden
            padding 0.05rem 0.2rem 0.05rem 0.05rem
            .button-wrapper
                float left
                width 33%
                .button
                    margin 0.05rem
                    padding 0.05rem 0
                    text-align center
                    border 0.01rem solid #ccc
                    border-radius 0.03rem
        .item-list
            .item
                line-height 0.35rem
                color #666
                padding-left 0.1rem
                &::before
                    content ''
                    position absolute
                    left 0
                    width 100%
                    height 0.01rem
                    background #DDDDDD
</style>
