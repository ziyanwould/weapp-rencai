//index.js
//获取应用实例
var app = getApp()

// 下拉刷新内容
var url = "http://www.imooc.com/course/ajaxlist";
var page = 0;
var page_size = 5;
var sort = "last";
var is_easy = 0;
var lange_id = 0;
var pos_id = 0;
var unlearn = 0;


// 请求数据  
var loadMore = function (that) {
  that.setData({
    hidden: false
  });
  wx.request({
    url: url,
    data: {
      page: page,
      page_size: page_size,
      sort: sort,
      is_easy: is_easy,
      lange_id: lange_id,
      pos_id: pos_id,
      unlearn: unlearn
    },
    success: function (res) {
      //console.info(that.data.list);  
      var list = that.data.list;
      for (var i = 0; i < res.data.list.length; i++) {
        list.push(res.data.list[i]);
      }
      that.setData({
        list: list
      });
      page++;
      that.setData({
        hidden: true
      });
    }
  });
}  


Page( {
  data: {
    motto: '欢迎',
    userInfo: {},
    hidden: true,
    list: [],
    scrollTop: 0,
    scrollHeight: 0,
    jobList: [
      {
        id: "1",
        jobUrl: "http://www.lgstatic.com/thumbnail_160x160/image1/M00/00/08/CgYXBlTUWA-AeZa7AACzZLV9LMM813.jpg",
        jobName: "架构师",
        companyName: "华为技术有限公司",
        requrie: "深圳 | 坂田 | 5-10年 | 本科",
        jobSalary: "18k-30k",
        createTime:"09-29"
      },
      {
        id: "2",
        jobUrl: "http://www.lgstatic.com/thumbnail_160x160/i/image/M00/42/00/CgqKkVd-FeGAF2VWAAFrO0JapSo547.jpg",
        jobName: "架构师",
        companyName: "万家医疗",
        requrie: "深圳 福田 5-10年 本科",
        jobSalary: "20k-35k",
        createTime:"09-29"
      }, {
        id: "3",
        jobUrl: "http://www.lgstatic.com/thumbnail_160x160/image2/M00/05/ED/CgpzWlX4yUeAKA4CAAB5b0H0iBY944.JPG",
        jobName: "架构师",
        companyName: "平安科技",
        requrie: "深圳 福田 5-10年 本科",
        jobSalary: "15k-30k",
        createTime:"09-29"
      }, {
        id: "4",
        jobUrl: "http://www.lgstatic.com/thumbnail_300x300/i/image/M00/50/7B/CgqKkVe0Dx6AN1VNAACZSXFNTAI460.png",
        jobName: "架构师",
        companyName: "信美分期",
        requrie: "深圳 福田 5-10年 本科",
        jobSalary: "25k-40k",
        createTime:"09-29"
      }, {
        id: "5",
        jobUrl: "http://www.lgstatic.com/thumbnail_160x160/image1/M00/00/73/Cgo8PFTUXZuARUuOAABlvEsqXqE644.png",
        jobName: "架构师",
        companyName: "我来贷WeWeLab",
        requrie: "深圳 福田 5-10年 本科",
        jobSalary: "20k-30k",
        createTime:"09-29"
      }, {
        id: "6",
        jobUrl: "http://www.lgstatic.com/thumbnail_160x160/image2/M00/05/ED/CgpzWlX4yUeAKA4CAAB5b0H0iBY944.JPG",
        jobName: "架构师",
        companyName: "平安科技",
        requrie: "深圳 福田 5-10年 本科",
        jobSalary: "15k-30k",
        createTime:"09-29"
      }, {
        id: "7",
        jobUrl: "http://www.lgstatic.com/thumbnail_300x300/i/image/M00/50/7B/CgqKkVe0Dx6AN1VNAACZSXFNTAI460.png",
        jobName: "架构师",
        companyName: "信美分期",
        requrie: "深圳 福田 5-10年 本科",
        jobSalary: "25k-40k",
        createTime:"09-29"
      }, {
        id: "8",
        jobUrl: "http://www.lgstatic.com/thumbnail_160x160/image2/M00/05/ED/CgpzWlX4yUeAKA4CAAB5b0H0iBY944.JPG",
        jobName: "架构师",
        companyName: "平安科技",
        requrie: "深圳 福田 5-10年 本科",
        jobSalary: "15k-30k",
        createTime:"09-29"
      }, {
        id: "9",
        jobUrl: "http://www.lgstatic.com/thumbnail_300x300/i/image/M00/50/7B/CgqKkVe0Dx6AN1VNAACZSXFNTAI460.png",
        jobName: "架构师",
        companyName: "信美分期",
        requrie: "深圳 福田 5-10年 本科",
        jobSalary: "25k-40k",
        createTime:"09-29"
      }
    ]
  },
  //事件处理函数
  onLoad: function () {
    //   这里要注意，微信的scroll-view必须要设置高度才能监听滚动事件，所以，需要在页面的onLoad事件中给scroll-view的高度赋值  
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          scrollHeight: res.windowHeight
        });
      }
    });
    loadMore(that);
  },
  //页面滑动到底部  
  bindDownLoad: function () {
    var that = this;
    loadMore(that);
    console.log("lower");
  },
  scroll: function (event) {
    //该方法绑定了页面滚动时的事件，我这里记录了当前的position.y的值,为了请求数据之后把页面定位到这里来。  
    this.setData({
      scrollTop: event.detail.scrollTop
    });
  },
  topLoad: function (event) {
    //   该方法绑定了页面滑动到顶部的事件，然后做上拉刷新  
    page = 0;
    this.setData({
      list: [],
      scrollTop: 0
    });
    loadMore(this);
    console.log("lower");
  } 
})

