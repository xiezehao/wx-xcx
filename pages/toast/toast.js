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
  },
  btn_loading:function(){
    wx.showLoading({
      title:"loading"
      // mask:"true"
    })
  },
  btn_modal:function(){
    wx.showModal({
      title:"提示",
      content:"这是一个模态弹窗",
      // showCancel:false,
      cancelText:"取消12",
      cancelColor:"#000",
      confirmText:"确定13",
      confirmColor:"#000"
    })
  },
  btn_sheet:function(){
    wx.showActionSheet({
      itemList:["a","b","n"]
    })
  }
})