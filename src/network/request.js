import axios from "axios";



// 第四种封装：直接返回axios的实例，因为该实例本身就是一个Promise对象
export function request(config, success, failure) {
  const request = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/hy66',
    timeout: 5000
  })
  // 请求拦截：在请求发送前进行拦截
  // request.interceptors.request.use(config => {
  //   console.log(config);
  //   return config
  // }, err => {
  // })
  // 响应拦截：
  request.interceptors.response.use(res => {
    // console.log(res.data);
    return res.data;
  }, err => {

  })
  return request(config)
}