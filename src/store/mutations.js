export default {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city // 当我改了城市之后，刷新页面又会跳回原来的设置，所以需要vuex这个api帮助我们保证cookie
    } catch (e) {}
  }
}
