<template>
  <div id="box" :style="{backgroundImage: 'url(' + img + ')' }">
    <p class="title">template系统</p>
    <div class="inputWrap" style="">
      <el-input v-model="userName" class="name" placeholder="请输入账号">
        <i slot="prefix" class="iconfont icon-yonghu"/>
      </el-input>
      <el-input v-model="password" type="password" placeholder="请输入密码" >
        <i slot="prefix" class="iconfont icon-mima"/>
      </el-input>
      <el-input v-model="code" placeholder="验证码" @keyup.enter.native='login'/>
      <img :src="imgsrc" class="codeImg" style="" alt="验证码" @click="getImgCode">
      <button @click="login" >登录</button>
    </div>
  </div>
</template>
<script>
import Img from '@/assets/login/BG.png'
export default {
  name: 'Login',
  data() {
    return {
      img: Img,
      userName: '',
      password: '',
      code: '',
      imgsrc: process.env.BASE_API + 'code' + '?timestamp=' + new Date().getTime()
    }
  },
  created() {
  },
  mounted() {
    console.log('登陆')
    window.localStorage.removeItem('userDatas')
  },
  methods: {
    getImgCode() {
      this.imgsrc = process.env.BASE_API + 'code' + '?timestamp=' + new Date().getTime()
    },
    login() {
      const me = this
      const data = {
        userName: me.userName,
        password: me.password,
        code: me.code,
        userPower:['1','1-1','2',"2-1",'2-2']
      }

        // 登陆成功存储登陆信息
          window.localStorage.setItem('userDatas', JSON.stringify(data))
          // 存储权限
          this.$store.dispatch("setUserInfo",data).then(routerList=>{
                      this.$store.dispatch("GenerateRoutes",routerList).then(() => {
       this.$router.addRoutes( this.$store.getters.getaddRouters); // 动态添加可访问路由表
            });
          this.$router.push({name:'Home'})
          })

      return
      login(data).then(res => {
        if (res.success) {
          // 登陆成功存储登陆信息
          window.localStorage.setItem('userDatas', JSON.stringify(res.data))
          // 存储权限
          this.$store.dispatch("setUserInfo",res.data)

        } else {
          me.getImgCode()
          me.imgsrc = process.env.BASE_API + 'code' + '?timestamp=' + new Date().getTime()
          me.$message.error(res.msg)
        }
      })
    }
  }
}
</script>
<style>
  html,body,#app{
    margin: 0px;
    padding: 0px;
    width: 100%;
    height:100%;
  }
</style>
<style rel="stylesheet/scss" lang="scss" scoped>
  #box{
    text-align: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .title{
      color: #fff;
      font-family: "微软雅黑";
      font-weight: bold;
      font-size: 36px;
      margin-top: 380px;
      margin-bottom: 50px;
    
    }
    .logoImg{
      display: block;
      margin: 0px auto;
      margin-bottom:40px;
      width: 500px;
    }
    .el-input{
      width: 200px;
      margin-right: 10px;
      // position: relative;
    }
    .codeImg{
       cursor: pointer;
       font-size: 16px;
       width: 100px; ;
       height: 30px;
    }
 
    button{
      background: #3ec0af;
      border: none;
      color: white;
      font-weight: bold;
      padding: 6px 16px;
      border-radius: 4px;
      width: 80px;
    }
   .inputWrap{
     display:inline-block;
     padding:10px;
     background:#909090;
     opacity: 0.7;
     display: flex;
     margin:0 auto;
     width: 800px;
     justify-content: space-around;
   }
  }
 
</style>

