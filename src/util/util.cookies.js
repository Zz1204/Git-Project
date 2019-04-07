import Cookies from 'js-cookie'

const cookies = {}

/**
 * @description 存储 cookie 值
 * @param {string} [name='default']
 * @param {string} [value='']
 * @param {*} [cookieSetting={}]
 */
cookies.set = function(name = 'default', value = '', cookieSetting = {}) {
  let currentCookieSetting = {
    expires: 1
  }
  Object.assign(currentCookieSetting, cookieSetting)
  Cookies.set(
    `admin-${process.env.VUE_APP_VERSION}-${name}`,
    value,
    currentCookieSetting
  )
}

/**
 * @description 拿到cookie的值
 * @param {string} [name='default']
 * @returns
 */
cookies.get = function(name = 'default') {
  return Cookies.get(`admin-${process.env.VUE_APP_VERSION}-${name}`)
}

/**
 * @description 拿到cookie全部的值
 * @returns
 */
cookies.getAll = function() {
  return Cookies.get()
}

/**
 * @description 删除cookie
 * @param {string} [name='default']
 * @returns
 */
cookies.remove = function(name = 'default') {
  return Cookies.remove(`admin-${process.env.VUE_APP_VERSION}-${name}`)
}

export default cookies
