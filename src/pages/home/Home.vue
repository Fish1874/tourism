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
      iconList: [],
      topList: [],
      recommendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
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
    this.getHomeInfo()
  }
}
</script>

<style>

</style>
