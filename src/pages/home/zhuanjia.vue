<template class="Yy-content">
  <div>
    <div class="Ll">
      <ul>
        <router-link v-for="(item,index) in NameList" tag="li" :to="{path:item.path}" active-class="active">
          {{item.showname}}</router-link>
      </ul>
    </div>
    <div class="Yy">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      </div>
  </div>
</template>

<script>

import axios from 'axios'

    export default {
      // created() {
      //   let Nid = this.Nid
      //   axios({
      //     method:'post',
      //     url:'http://www.51kangduo.com/midserver.asq',
      //     dataType:'json',
      //     data:'{"service": "weixin.checkUser",' +
      //     '"partner": "WYFRONTTEST",' +
      //     '"hospitalCode": "000004","dataFormat": "JSON","inputCharset": "utf-8","debug": true, "requestEncrypted": "+l946Wek1izYa++D9OBmpw==","signType": "md5","sign": "192C2382A2BFA47DCB52B961574CB525"}',
      //   })
      //     .then(function (response) {
      //       console.log(response)
      //       //response = response.config
      //       //console.log(response.config.params.openId)
      //       Nid.push(response.config.openId)
      //       console.log(Nid)
      //     })
      //     .catch(function (error) {
      //       console.log(error);
      //     });
      // },
      data() {
        return {
          NameList: [
            {
              showname: '医生',
              path: '/zhuanjia/yisheng'
            },
            {
              showname: '护士',
              path: '/zhuanjia/hushi'
            },
            {
              showname: '大夫',
              path: '/zhuanjia/daifu'
            }
          ]
        }
      },
    }
</script>

<style scoped>
  #app{
    margin-top: 30px;
  }
  .Ll{
    width: 30%;
    float: left;
    text-align: center;
  }
  .Ll li{
    border: 1px solid #ccc;
  }
  .Ll li.active,
  .Ll li:hover{
    background-color: antiquewhite;
    color: red;
  }
  .Yy{
    width: 70%;
    float: right;
    text-align: center;
  }
</style>
