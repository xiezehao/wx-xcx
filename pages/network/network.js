// network.js
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that=this;
    wx.getNetworkType({
      success: function (res) {
        // 返回网络类型, 有效值：
        // wifi/2g/3g/4g/unknown(Android下不常见的网络类型)/none(无网络)
        var networkType = res.networkType
        // that.setData({ networkType: networkType})
      }
    })

    wx.onNetworkStatusChange(function (res) {
      // console.log(res.isConnected)
      // console.log(res.networkType)
      that.setData({ networkType: res.networkType })
      that.setData({ isConnected: res.isConnected })
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})