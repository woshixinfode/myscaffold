import * as Types from '../action-types';
import {getSliders,getLessons} from "../../api/home";

let actions = {
    updateCurrentLesson(lesson){//更新当前选择的课程

        return function(dispatch,getState){
             dispatch({type:Types.SET_CURRENT_LESSON,lesson});//更改课程类型
            actions.refreshAPI()(dispatch,getState)

        }
    },
    getSlidersAPI() {
        return function (dispatch, getState) {
            dispatch({type: Types.SET_SLIDERS, payload: getSliders()});//redux-promise的用法 可以将payload的promise执行

        }
    },
    getLessonsAPI() {
        return function (dispatch, getState) {//store.getState
            let {currentLesson, lesson: {hasMore, offset, limit,isLoading}} = getState().home;
            //如果派发请求还需要一个改loading的一个方法
            if (!hasMore || isLoading) return
            //发送请求之前，状态变成正在加载
            dispatch({type:Types.CHANGE_LOADING_STATUS,status:true})
            dispatch({type: Types.SET_LESSONS, payload: getLessons(offset, limit, currentLesson)})
        }
    },
    refreshAPI(){
        return function(dispatch,getState){
            dispatch({type:Types.CLEAR_LESSONS});//派发清空
            actions.getLessonsAPI()(dispatch,getState);//获取
        }
    }
}

export default actions