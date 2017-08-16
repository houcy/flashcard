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

      wx.showModal({
        title: 'Congratulations!',
        content: 'You finished all the words in this list!',
        showCancel: false,
        success: function(res) {
          if (res.confirm) {
            console.log('Confirm'),

            wx.navigateBack({
              delta: 1
            })
            
          }
        }
      })
      
      return
    }

    this.data.currWordId += 1
    this.setData({
      displayType: 0,
      currWordId: this.data.currWordId
    })
    
    this.playSound()
  }, 

  playSound: function(){
    console.log('playSound')
    var wordRow = this.data.wordList[this.data.currWordId - 1]
    console.log('wordRow: ' + wordRow)

    wx.playBackgroundAudio({
      dataUrl: 'http://tts.yeshj.com/s/' + wordRow[0], 
    })


    // if (wordRow[2] == null){
    //   wx.downloadFile({
    //     url: 'http://tts.yeshj.com/s/' + wordRow[0], 
    //     success: function(res) {
    //       console.log('Success downloading sound')
    //       console.log(res)

    //       var tempFilePath = res.tempFilePath
    //       wx.saveFile({
    //         tempFilePath: tempFilePath,
    //         success: function(res) {
    //           var savedFilePath = res.savedFilePath
    //           wordRow[2] = savedFilePath
    //         }
    //       })
    //     }
    //   })
    // }

    // wx.playVoice({
    //   filePath: wordRow[2],
    //   success: function () { 
    //     wx.showToast({ 
    //       title: '播放结束', 
    //       icon: 'success', 
    //       duration: 1000 
    //     })
    //   }
    // })
    // console.log('Sound played')

  },

  flipCard: function(){
    //change the display type of the word
    this.data.displayType = 1 - this.data.displayType
    this.setData({
      displayType: this.data.displayType
    })
  }

})