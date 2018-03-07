//index.js
//获取应用实例
var app = getApp()
Page( {
  data: {
    motto: '欢迎',
    userInfo: {},
    jobList: [
      {
        id: "1",
        jobUrl: "http://www.lgstatic.com/thumbnail_160x160/image1/M00/00/08/CgYXBlTUWA-AeZa7AACzZLV9LMM813.jpg",
        jobName: "架构师",
        companyName: "华为技术有限公司",
        requrie: "深圳 坂田 5-10年 本科",
        jobSalary: "18k-30k",
        createTime:"09月29日"
      },
      {
        id: "2",
        jobUrl: "http://www.lgstatic.com/thumbnail_160x160/i/image/M00/42/00/CgqKkVd-FeGAF2VWAAFrO0JapSo547.jpg",
        jobName: "架构师",
        companyName: "万家医疗",
        requrie: "深圳 福田 5-10年 本科",
        jobSalary: "20k-35k",
        createTime:"09月29日"
      }, {
        id: "3",
        jobUrl: "http://www.lgstatic.com/thumbnail_160x160/image2/M00/05/ED/CgpzWlX4yUeAKA4CAAB5b0H0iBY944.JPG",
        jobName: "架构师",
        companyName: "平安科技",
        requrie: "深圳 福田 5-10年 本科",
        jobSalary: "15k-30k",
        createTime:"09月29日"
      }, {
        id: "4",
        jobUrl: "http://www.lgstatic.com/thumbnail_300x300/i/image/M00/50/7B/CgqKkVe0Dx6AN1VNAACZSXFNTAI460.png",
        jobName: "架构师",
        companyName: "信美分期",
        requrie: "深圳 福田 5-10年 本科",
        jobSalary: "25k-40k",
        createTime:"09月29日"
      }, {
        id: "5",
        jobUrl: "http://www.lgstatic.com/thumbnail_160x160/image1/M00/00/73/Cgo8PFTUXZuARUuOAABlvEsqXqE644.png",
        jobName: "架构师",
        companyName: "我来贷WeWeLab",
        requrie: "深圳 福田 5-10年 本科",
        jobSalary: "20k-30k",
        createTime:"09月29日"
      }, {
        id: "6",
        jobUrl: "http://www.lgstatic.com/thumbnail_160x160/image2/M00/05/ED/CgpzWlX4yUeAKA4CAAB5b0H0iBY944.JPG",
        jobName: "架构师",
        companyName: "平安科技",
        requrie: "深圳 福田 5-10年 本科",
        jobSalary: "15k-30k",
        createTime:"09月28日"
      }, {
        id: "7",
        jobUrl: "http://www.lgstatic.com/thumbnail_300x300/i/image/M00/50/7B/CgqKkVe0Dx6AN1VNAACZSXFNTAI460.png",
        jobName: "架构师",
        companyName: "信美分期",
        requrie: "深圳 福田 5-10年 本科",
        jobSalary: "25k-40k",
        createTime:"09月29日"
      }, {
        id: "8",
        jobUrl: "http://www.lgstatic.com/thumbnail_160x160/image2/M00/05/ED/CgpzWlX4yUeAKA4CAAB5b0H0iBY944.JPG",
        jobName: "架构师",
        companyName: "平安科技",
        requrie: "深圳 福田 5-10年 本科",
        jobSalary: "15k-30k",
        createTime:"09月28日"
      }, {
        id: "9",
        jobUrl: "http://www.lgstatic.com/thumbnail_300x300/i/image/M00/50/7B/CgqKkVe0Dx6AN1VNAACZSXFNTAI460.png",
        jobName: "架构师",
        companyName: "信美分期",
        requrie: "深圳 福田 5-10年 本科",
        jobSalary: "25k-40k",
        createTime:"09月29日"
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo( {
      url: '../detail/detail'
    })
  },
  onLoad: function() {
    console.log( 'onLoad' )
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo( function( userInfo ) {
      //更新数据
      that.setData( {
        userInfo: userInfo
      })
    })
  }
})
