<template>
  <div>
    <div class='search'>
        <input v-model='keyword' class='search-input' type="text" placeholder='输入城市名或拼音'>
    </div>
    <div class='search-content' ref='search' v-show='keyword'>
      <ul>
        <li class='search-item'
            v-for='item of list'
            :key='item.id'
            @click='handleCityClick(item.name)'
        >{{item.name}}</li>
        <li class='search-item' v-show='hasNoData'>没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'

export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '', // 和input进行一个双向绑定，用v-model
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  methods: {
    handleCityClick (city) {
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>

<style lang='stylus' scoped>
    @import '~styles/varibles.styl'
    .search
        height 0.36rem
        padding 0 0.03rem
        background $bgColor
        font-size $fontSize
        .search-input
            width 100%
            height 0.31rem
            line-height 0.31rem
            text-align center
            border-radius 0.06rem
            box-sizing border-box
            padding 0 0.1rem
    .search-content
        z-index 1
        overflow hidden
        position absolute
        top 0.79rem
        left 0
        right 0
        bottom 0
        background #eee
        .search-item
          line-height 0.31rem
          padding-left 0.1rem
          color #666
          background #fff
          &::before
            content ''
            position absolute
            left 0
            width 100%
            height 0.01rem
            background #DDDDDD
</style>
