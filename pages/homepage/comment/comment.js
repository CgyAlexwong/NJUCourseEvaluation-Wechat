const app = getApp();

Page({
  data: {
    currentClasses:'',
    currentIndex:'',
    class0: true,
    class1: true,
    class2: true,
    class3: true,
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    picker: ['大一上学期', '大一下学期', '大二上学期','大二下学期'],
    classes0:[
      {
        id:0,
        name : '微积分Ⅰ',
        teacher: '窦斗',
        status : '去评价',
        disabled : false
      },
      {
        id:1,
        name : '计基',
        teacher: '王浩然',
        status : '去评价',
        disabled : false
      }
    ],
    classes1: [
      {
      id: 0,
      name: '微积分Ⅱ',
      teacher: '窦斗',
      status: '去评价',
      disabled: false
      },
      {
        id: 1,
        name: '软工Ⅰ',
        teacher: '刘钦',
        status: '去评价',
        disabled: false
      }
    ],
    classes2: [
      {
        id: 0,
        name: '计组',
        teacher: '任桐炜',
        status: '去评价',
        disabled: false
      },
      {
        id: 1,
        name: '数据结构',
        teacher: '伏晓',
        status: '去评价',
        disabled: false
      },
      {
        id: 2,
        name: '毛概',
        teacher: '武海宝',
        status: '去评价',
        disabled: false
      }
    ],
    classes3: [
    {
      id: 0,
      name: '计网',
      teacher: '刘峰',
      status: '去评价',
      disabled: false
    },
    {
      id: 1,
      name: '软统',
      teacher: '陈振宇',
      status: '去评价',
      disabled: false
    }
    ],
    TabCur: 0,
    scrollLeft: 0,
    star: 0,
    starMap: [
      '非常差',
      '差',
      '一般',
      '好',
      '非常好',
    ],
  },
  tabSelect(e) {
    console.log(e);
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },
  PickerChange(e) {
    console.log(e);
    this.setData({
      index: e.detail.value
    })
    var index=e.detail.value;
    if(index==0){
      this.setData({
        currentClasses: 'classes0',
        class0: false,
        class1: true,
        class2: true,
        class3: true,
      })
    }else if(index==1){
      this.setData({
        currentClasses: 'classes1',
        class0: true,
        class1: false,
        class2: true,
        class3: true,
      })
    }else if(index==2){
      this.setData({
        currentClasses: 'classes2',
        class0: true,
        class1: true,
        class2: false,
        class3: true,
      })
    } else if (index == 3) {
      this.setData({
        currentClasses: 'classes3',
        class0: true,
        class1: true,
        class2: true,
        class3: false,
      })
    }
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  myStarChoose(e) {
    let star = parseInt(e.target.dataset.star) || 0;
    this.setData({
      star: star,
    });
  },
  /**
   * 弹窗
   */
  showDialogBtn: function (e) {
    var id = e.currentTarget.dataset.id;
    console.log(id);
    this.setData({
      currentIndex:id
    })
    this.setData({
      showModal: true
    })
  },
  /**
   * 弹出框蒙层截断touchmove事件
   */
  preventTouchMove: function () {
  },
  /**
   * 隐藏模态对话框
   */
  hideModal: function (e) {
    this.setData({
      showModal: false
    });
  },
  /**
   * 对话框取消按钮点击事件
   */
  onCancel: function () {
    this.hideModal();
  },
  /**
   * 对话框确认按钮点击事件
   */
  onConfirm: function (e) {
    wx.showToast({
      title: '提交成功',
      icon: 'success',
      duration: 2000
    })
    this.hideModal();
    var currentClasses = this.data.currentClasses;
    var currentIndex = this.data.currentIndex;
    this.setData({
      [currentClasses + '[' + currentIndex + '].disabled']: true,
      [currentClasses + '[' + currentIndex + '].status']: '已评价',
    })
  },
})