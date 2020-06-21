<template>
  <div>
      <home-header></home-header>
      <home-icons :list='iconList'></home-icons>
      <home-top :list='topList'></home-top>
      <home-recommend :list='recommendList'></home-recommend>
      <home-end></home-end>
  </div>
</template>

<script>
import axios from 'axios'
import HomeHeader from './components/Header'
import HomeIcons from './components/Icons'
import HomeTop from './components/Top'
import HomeRecommend from './components/Recommend'
import HomeEnd from './components/End'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeIcons,
    HomeTop,
    HomeRecommend,
    HomeEnd
  },
  data () {
    return {
      lastCity: '',
      iconList: [],
      topList: [],
      recommendList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.iconList = data.iconList
        this.topList = data.topList
        this.recommendList = data.recommendList
      }
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.city) { // 如果上一次保存的城市不相等的时候，重新发一次ajax请求
      this.lastCity = this.city
      this.getHomeInfo() // 重新发送请求
    }
  }
}
</script>

<style>

</style>
