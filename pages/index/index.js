// index.js
var searchText = "";

Page({
  data: {},
  submitSearching(e) {
    // 提交搜索后的逻辑，e.detail.value可以接收到文本内容
    wx.navigateTo({
      url: '/pages/searching/searching',
    })

    // 控制setData 的频率：https://developers.weixin.qq.com/miniprogram/dev/framework/performance/tips/runtime_setData.html
    this.setData({
      searchText: e.detail.value
    })
  }
})