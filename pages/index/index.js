//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }, 
  enterFlashcardPage: function(){
    wx.navigateTo({
      url: '../flashcard/flashcard',
      success: function(res){
        // success
        console.log('Entered flashcard page')
      },
      fail: function(res) {
        // fail
        console.log('Failed to enter flashcard page')
      },
      complete: function(res) {
        // complete
      }
    })
  }, 
  enterRecordingPage: function(){
    wx.navigateTo({
      url: '../recording/recording',
      success: function(res){
        // success
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
  }
})
