// pages/home/home.js
Page({
  data: {
    imagepath:''
  },
  handlechooseAlbum(){
    wx.chooseImage({
      // 用function  下面 this指向undefind 所以使用ES6中的箭头函数 this的指向才正确
     success: (res)=> {  
     // 1.取出路径
     const path = res.tempFilePaths [0] 
     //取出第一张图片的地址 局部变量不能直接设置到home.wxml中
     //2.取到值后 设置imagepath
     this.setData ({
     imagepath:path 
     })
   },
 })
  },
  handleimageload(){
    console.log('图片加载完成')
  }
})