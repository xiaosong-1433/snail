import axios,{
    AxiosInstance,AxiosRequestConfig,AxiosResponse
} from 'axios'

import {getCookie} from '../utils/cookie'

const ins:AxiosInstance = axios.create({
    baseURL:'http://192.168.125.2:80/dashboard/snail/php',
    timeout:20000
})

ins.interceptors.request.use(config => {
    config.headers.common['Authorization'] = getCookie('token')
    return config
},error=>Promise.reject(error))


ins.interceptors.response.use(res=>res.data,err=>Promise.reject(err))

export default function requests (config:AxiosRequestConfig):Promise<AxiosResponse<any>> {
    const {method = 'GET',url="",data={},headers=""} = config 
    switch (method.toUpperCase()) {
      case 'GET':
        return ins.get(url,{params:data})
      case 'POST':
        //todo form提交
        if (headers['content-type'] === 'application/x-www-form-url-encoded'){
          //todo 转参数 URLSearchParams/第三方库qs
          const p:URLSearchParams = new URLSearchParams() 
          for (let key in data) {
            p.append(key,data[key])
          }
          return ins.post(url,p,{headers})
        }
        //todo file提交
        if (headers['content-type'] === 'multipart/form-data') {
          //? 文件提交  URLSearchParams   qs
          const p = new FormData()
          for (let key in data ) {
            p.append(key,data[key])
          }
          return ins.post(url,p,{headers})
        }
        //todo json提交 默认
        return ins.post(url,data)
      case 'PUT': 
        return ins.put(url,data)
      case 'DELETE':
        return ins.delete(url,{data})
      case 'PATCH':
        return ins.patch(url,data)
      default:
        return ins(config)
    }
  }