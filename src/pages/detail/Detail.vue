<template>
  <div class='details'>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-list :list='list'></detail-list>
    <detail-end></detail-end>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import DetailEnd from './components/End'
import axios from 'axios'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList,
    DetailEnd
  },
  data () {
    return {
      list: []
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.list = data.categoryList
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang='stylus' scoped>
    @import '~styles/varibles.styl'
    .details
        font-size $fontSize
</style>
