// pages/login/login.js
var api = require('../../utils/api.js')
var app = getApp()
Page({
  data: {
  },

  onLoad() {
  },

  onPullDownRefresh() {
    wx.stopPullDownRefresh()
  },

  formSubmit: function (e) {
    console.log(api.json2Form(e.detail.value))
    api.post('https://api.douban.com/v2/book/1220562', api.json2Form(e.detail.value))
      .then(res => {
        console.log(res)
      })
  }
})
