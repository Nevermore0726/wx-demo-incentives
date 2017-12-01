// pages/qrcode/qrcode.js
Page({
  data: {
    img: '../../images/myAccount/ali-qrcode.png'
  },

  onLoad: function (options) {
    if (options.pay == 'wechat') {
      this.setData({
        img: '../../images/myAccount/wx-qrcode.png'
      })
    } else {
      this.setData({
        img: '../../images/myAccount/ali-qrcode.png'
      })
    }
  },

  onPullDownRefresh() {
    wx.stopPullDownRefresh()
  }
})
