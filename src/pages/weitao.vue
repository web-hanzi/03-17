<template>
  <div class="container" id="box">
    <form role="form">
      <div class="form-group">
        <label for="url">url</label>
        <input type="text" id="url" class="form-control" placeholder="url" v-model="url">
      </div>
      <div class="form-group">
        <label for="service">service</label>
        <input type="text" id="service" class="form-control" placeholder="service" v-model="postData.service">
      </div>
      <div class="form-group">
        <label for="partner">partner</label>
        <input type="text" class="form-control" id="partner" placeholder="partner" v-model="postData.partner">
      </div>
      <div class="form-group">
        <label for="hospitalCode">hospitalCode</label>
        <input type="text" class="form-control" id="hospitalCode" placeholder="hospitalCode"
               v-model="postData.hospitalCode">
      </div>
      <div class="form-group">
        <label for="dataFormat">dataFormat</label>
        <input type="text" class="form-control" id="dataFormat" placeholder="dataFormat" v-model="postData.dataFormat">
      </div>
      <div class="form-group">
        <label for="inputCharset">inputCharset</label>
        <input type="text" class="form-control" id="inputCharset" placeholder="inputCharset"
               v-model="postData.inputCharset">
      </div>
      <div class="form-group">
        <label for="requestEncrypted">requestJson</label>
        <input type="text" class="form-control" id="requestJson" placeholder="requestJson" v-model="requestJson">
      </div>
      <div class="form-group">
        <input type="button" value="加密" class="btn btn-danger" >
        <input type="button" value="加密1" class="btn btn-primary">
        <input type="button" value="加签" class="btn btn-primary" >
      </div>
      <div class="form-group">
        <label for="requestEncrypted">requestEncrypted</label>
        <input type="text" class="form-control" id="requestEncrypted" placeholder="requestEncrypted"
               v-model="postData.requestEncrypted">
      </div>
      <div class="form-group">
        <label for="signType">signType</label>
        <input type="text" class="form-control" id="signType" placeholder="signType" v-model="postData.signType">
      </div>
      <div class="form-group">
        <label for="sign">sign</label>
        <input type="text" class="form-control" id="sign" placeholder="sign" v-model="postData.sign">
      </div>
      <div class="form-group">
        <input type="button" value="请求Post" class="btn btn-danger" @click="postMidserver">
      </div>
      <div class="form-group">
        <label for="responseJson1">responseJson</label>
        <input type="text" class="form-control" id="responseJson1" placeholder="responseJson"
               v-model="responseData.responseJsonstr">
      </div>
      <div class="form-group">
        <label for="resultCode">resultCode</label>
        <input type="text" class="form-control" id="resultCode" placeholder="resultCode"
               v-model="responseData.resultCode">
      </div>
    </form>
  </div>
</template>

<style>
.weitao{
  width: 100%;
  height: 100%;
  padding-bottom: 100px;
}
</style>

<script>
  import axios from 'axios'

  import  { MidPost }   from '../assets/libs/midPost/MidPost'

  export default {
    name: 'app',
    data () {
      return {
        url: 'https://www.51kangduo.com/midserver.asq',
        requestJson: '{"openId": "23423421312"}',
        Aeskey: '17C133AE614211DC',
        responseData: {
          resultCode: '',
          resultMessage: '',
          responseEncrypted: '',
          responseJsonstr: '{"x":""}',
          responseJson: null
        },
        postData: {
          service: 'weixin.checkUser',
          partner: 'WYFRONTTEST',
          hospitalCode: '000004',
          dataFormat: 'JSON',
          inputCharset: 'utf-8',
          debug: true,
          requestEncrypted: '+l946Wek1izYa++D9OBmpw==',
          signType: 'md5',
          sign: '192C2382A2BFA47DCB52B961574CB525'
        }
      }
    },
    methods: {
      //请求数据

      postMidserver: function () {
        var that = this
        MidPost.postMidserver({success:function (result) {
            that.responseData.resultCode = JSON.stringify(result);
          }}, this.postData.service,this.requestJson);
      },
    }
  }

</script>
