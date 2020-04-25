import * as Types from '../action-types';
// import {toReg,toLogin,toValidate} from "../../api/session";


let actions = {
    toRegAPI(username,password,history){//history是组件中的
        //如果注册成功跳转页面
        return function(dispatch,getState){
            toReg(username,password).then(function(data){
                //data服务端返回的结果
                dispatch({type:Types.SET_USER_INFO,user:data})
                if(data.err ===0){//失败手动派发数据
                    setTimeout(()=>{

                        history.push('/login')
                    },500)
                }
            })
        }
    },
    clearMessage(){
        return {type:Types.CLEAR_MESSAGE,info:{msg:'',success:'',err:''}}
    },
    toLoginAPI(username,password,history){
        return function(dispatch,getState){
            toLogin(username,password).then(function(data){
                dispatch({type:Types.SET_USER_INFO,user:data})
                if(data.err === 0){
                    setTimeout(()=>{
                        history.push('/profile');
                    },1000)
                }
            })
        }
    },
    toValidateAPI(){
        return function(dispatch,getState){
            toValidate().then(function(data){
                dispatch({type:Types.SET_USER_INFO,user:data})
            })

        }
    }
}
export default actions