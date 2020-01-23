import axios from 'axios'
import {
  hex_md5
} from "./md5";
//判断是否是本地开发环境，这样上线就不用更改
const host = process.env.VUE_APP_BASEURL
console.log(host,1111)
const date = new Date().getTime();
axios.defaults.withCredentials = true //开启后服务器才能拿到cookie
axios.defaults.crossDomain = true;//配置axios跨域
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8'
axios.defaults.headers.sign =  hex_md5("a17da0ce2a7e5372a326282eac8766df" + date)//配置签名
axios.defaults.headers.currenttime =  date
const ajax = axios.create({
    baseURL:host,
    timeout: 6000,//请求超时时间
})

ajax.interceptors.request.use((req)=>{
  //请求拦截下的数据，可以添加自己的处理和操作
  return req
})

ajax.interceptors.response.use((res)=>{
  //响应拦截下的数据，可以添加自己的处理和操作
  return res.data.body
})
export default ajax//最后导出