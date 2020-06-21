<template>
  <div>
    <city-header></city-header>
    <city-search :cities='cities'></city-search>
    <city-list :list='hotCities' :cities='cities' :letter='letter'></city-list>
    <city-alphabet :cities='cities'
                    @change='handleLetterChange'
    ></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      hotCities: [],
      cities: {},
      letter: '' // 用于保存兄弟组件的传值联动
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.getCityInfoSucc)
    },
    getCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.hotCities = data.hotCities
        this.cities = data.cities
      }
    },
    handleLetterChange (letter) {
      // console.log(letter)  这里接受到Alphabet传过来的值
      this.letter = letter // 最后只需要传递给list就行了
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style>
  div {
    font-size: 0.15rem;
  }
</style>
