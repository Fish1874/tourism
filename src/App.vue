<template>
  <div id="app">
    <!-- keep-alice 意思是我的路由的内容（router-view）被加载过一次后，就把内容 放在内存之中，下次进入这个路由时
不需要重新渲染这个组件 -->
    <keep-alive>
      <router-view/> <!-- 路由占位符 -->
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
