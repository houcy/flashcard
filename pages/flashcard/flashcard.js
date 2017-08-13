// pages/flashcard/flashcard.js
Page({
  data:{
    displayType: 0, //0: English; 1: Chinese
    currWordId: 0,
    wordList: [['employee','1.n.雇员'], ['probably','1.ad.很可能']]
  },

  onLoad: function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log('Starting flashcard')
    this.nextWord()
  },

  nextWord: function(){
    //move on to next word in word list by changing ID
    console.log('nextWord')
    if (this.data.currWordId == this.data.wordList.length){
      console.log('Finished all words')
      return
    }
    this.data.currWordId += 1
    this.setData({
      currWordId: this.data.currWordId
    })
    this.playSound()
  }, 

  playSound: function(){
    console.log('playSound')
    var wordRow = this.data.wordList[this.data.currWordId - 1]
    wx.downloadFile({
      url: 'http://tts.yeshj.com/s/' + wordRow[0], 
      success: function(res) {
        console.log('Success downloading sound')
        wx.playVoice({
          filePath: res.tempFilePath
        })
        console.log('Sound played')
      }
    })
  },

  flipCard: function(){
    //change the display type of the word
    this.data.displayType = 1 - this.data.displayType
    this.setData({
      displayType: this.data.displayType
    })
  }

})