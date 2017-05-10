// pages/toast/toast.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  btn:function(){
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  }
})