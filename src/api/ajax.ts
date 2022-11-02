import ajax from 'uni-ajax'

// 创建实例
const instance = ajax.create({
    baseURL: 'http://localhost:3000'
})

// 添加请求拦截器
instance.interceptors.request.use(config => {
    return config;
}, error => {
    return Promise.reject(error)
})


// 添加相应拦截器
instance.interceptors.response.use(response => {
    return response
}, error => {
    return Promise.reject(error)
})


export default instance;