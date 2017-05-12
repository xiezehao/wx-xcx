// navigate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  navigateTo:function(){
    wx.navigateTo({
      url: '../navigate2/navigate2?name=123&pwd=123456'
    })
  },
  redirectTo:function(){
    wx.redirectTo({
      url: '../navigate2/navigate2?name=123&pwd=123456',
    })
  }
})