// pages/account/account.js
Page({
  onItemClick: function (e) {
    var targetUrl = '/pages/qrcode/qrcode?pay=' + e.currentTarget.dataset.pay
    console.log(e.currentTarget.dataset)
    wx.navigateTo({
      url: targetUrl
    })
  },

  login() {
    wx.navigateTo({
      url: '/pages/login/login'
    })
  },

  onPullDownRefresh() {
    wx.stopPullDownRefresh()
  }
})
