// systemInfo.js
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that=this;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.model)
        console.log(res.pixelRatio)
        console.log(res.screenWidth)
        console.log(res.screenHeight)
        console.log(res.windowWidth)
        console.log(res.windowHeight)
        console.log(res.language)
        console.log(res.version)
        console.log(res.system)
        console.log(res.platform)
        console.log(res.SDKVersion)
        that.setData({ model: res.model, pixelRatio: res.pixelRatio, screenWidth: res.screenWidth, screenHeight: res.screenHeight, windowWidth: res.windowWidth, windowHeight: res.windowHeight, language: res.language, version: res.version, system: res.system, platform: res.platform, SDKVersion: res.SDKVersion})
      }
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