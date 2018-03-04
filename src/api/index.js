import axios from 'axios'

let baseurl = "http://localhost:3000";//占位接口
axios.defaults.baseURL = baseurl;
axios.defaults.withCredentials = true;
axios.interceptors.response.use(function(res){
    return res.data
})

export default axios