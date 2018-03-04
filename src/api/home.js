import axios from './index'
//每个接口返回的都是promise

export function getJson(id){
    return axios.get(`/some/${id}`)
}

export function toPost(username,password){
    return axios.post('/some',{username,password})
}