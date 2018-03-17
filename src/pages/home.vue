<template>
  <div class="home">
    <myheader txt="首页"></myheader>
    <Banner swiperid='go' class="banner">
      <div slot='swiper-con' class="swiper-slide ban" >
        <img src="../assets/images/13.jpg" alt="" />
      </div>
      <div slot='swiper-con' class="swiper-slide ban">
        <img src="../assets/images/13.jpg" alt="" />
      </div>
      <div slot='swiper-con' class="swiper-slide ban">
        <img src="../assets/images/13.jpg" alt="" />
      </div>
    </Banner>

    <div class="menulist">
      <ul >
        <router-link v-for="item in List" tag="li" :to="{path:item.path}">
          <img :src="item.src" alt=""> <br> {{item.title}}</router-link>
      </ul>
    </div>

  </div>
</template>

<script>


  import myheader from '../components/myheader'
  import Banner from '../components/banner.vue'
  import  { MidPost }   from '../../node_modules/Post/MidPost'
  export default{
    components:{
      Banner,
      myheader
    },
    created () {
      var that = this; // 改变this的指向
      MidPost.postMidserver({success:function(data){
          //console.log(data.ifNew)
          if(data.ifNew && data.ifNew == 0){
             that.$router.push('/home')
          }else{
            console.log(JSON.stringify(data));
            that.$router.push('/weitao')
          }
        },
        service:"weixin.checkUser",
        requestjson:"{'openId':'23423421312'}"
      })
    },
    data () {
      return {
        List:[
          {//在js中引入图片 要配合require 以后的webpack打包
            src:require('../assets/images/14.png'),
            title:'医院简介',
            path:'yiyuan'
          },
          {//在js中引入图片 要配合require 以后的webpack打包
            src:require('../assets/images/1.png'),
            title:'科室介绍',
            path:'keshi'
          },
          {//在js中引入图片 要配合require 以后的webpack打包
            src:require('../assets/images/9.png'),
            title:'专家介绍',
            path:'zhuanjia'
          },
          {//在js中引入图片 要配合require 以后的webpack打包
            src:require('../assets/images/8.png'),
            title:'就诊指南',
            path:'jiuzhen'
          },
          {//在js中引入图片 要配合require 以后的webpack打包
            src:require('../assets/images/10.png'),
            title:'预约挂号',
            path:'yuyue'
          },
          {//在js中引入图片 要配合require 以后的webpack打包
            src:require('../assets/images/4.png'),
            title:'智能导诊',
            href:'zhineng'
          },
          {//在js中引入图片 要配合require 以后的webpack打包
            src:require('../assets/images/6.png'),
            title:'医疗缴费',
            path:'yiliao'
          },
          {//在js中引入图片 要配合require 以后的webpack打包
            src:require('../assets/images/5.png'),
            title:'检验检查',
            path:'jianyan'
          },
          {//在js中引入图片 要配合require 以后的webpack打包
            src:require('../assets/images/3.png'),
            title:'排队候诊',
            path:'home/paidui'
          },
          {//在js中引入图片 要配合require 以后的webpack打包
            src:require('../assets/images/7.png'),
            title:'电子病历',
            path:'bingli'
          },
          {//在js中引入图片 要配合require 以后的webpack打包
            src:require('../assets/images/2.png'),
            title:'个人中心',
            path:'geren'
          }
        ]
      }
    }
  }
</script>


<style>
  *{
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .menulist{
    padding-top: 5px;
    background-color: lightgray;
  }
  .menulist ul{
    width: 100%;
    margin-top: 5px;
    clear: both;
    display: inline-block;
    background-color: white;
    margin-bottom: 60px;
  }
  .menulist ul li{
    list-style: none;
    float: left;
    width: 18%;
    margin: 0 7%;
    font-size: 14px;
  }
  .menulist ul li img{
    width: 100%;
  }
  .banner{
    padding: 10px 0;
    background-color: lightgray;
  }
</style>



