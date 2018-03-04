import React from 'react';
import './index.less';
import MHeader from '../../components/MHeader/MHeader';
import {getLesson} from '../../api/home';
import 'babel-polyfill'
export default class Detail extends React.Component {
    constructor(){
        super();
        this.state = {lesson:{}}
    }
   async componentWillMount(){
        let lesson = this.props.location.state;
        if(lesson){
            this.setState({lesson})
        }else{
         lesson = await getLesson(this.props.match.params.lessonId)
            this.setState({lesson})
        }
    }
  render(){
      //如果state中有值说明用户是从页面点击过来的
      //用户自己写不是通过点击过来的，此时需要取出id到服务端查询
      console.log(this.props.location.state)
    return <div>
        <MHeader>详情</MHeader>
        <video src={this.state.lesson.video} style={{width:'100%'}} poster={this.state.lesson.poster} controls={true}></video>
    </div>
  }
}