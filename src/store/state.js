let defaultCity = '北京'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity // 为了防止用户使用隐身模式时，使用localStorage会抛出异常，所以使用 try catch!
}
