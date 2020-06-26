<template>
    <div class='logins'>
        <login-header></login-header>
    </div>
</template>

<script>
import LoginHeader from './components/Header'
export default {
  name: 'Login',
  components: {
    LoginHeader
  }
}
</script>

<style lang='stylus' scoped>
    @import '~styles/varibles.styl'
    .logins
        font-size $fontSize
        background #F3F9FC
</style>
