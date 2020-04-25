import React from 'react';
import './index.less';
import HomeHeader from './HomeHeader';
import HomeSlider from './HomeSlider';
import HomeList from './HomeList';
import {connect} from 'react-redux';
import actions from '../../store/actions/home'
import Loading from '../../components/Loading/Loading'
import {loadMore,pullRefresh} from '../../common/util'
@connect(state=>({...state.home}),actions)
export default class Home extends React.Component {
  componentDidMount(){
    if(this.props.sliders.length==0){
        this.props.getSlidersAPI();
    }
    if(this.props.lesson.list.length ==0){//如果课程没数据才开始请求
        this.props.getLessonsAPI()
    }
    //写一个刷新方法，先清空数据，再去获取课程
    loadMore(this.ele,this.props.getLessonsAPI)
      pullRefresh(this.ele,this.props.refreshAPI)
  }
  loadMore=()=>{
      this.props.getLessonsAPI();
  }
  //选择当前是哪门课程
  selectCurrentLesson = (val)=>{//val是当前选择的课程
    this.props.updateCurrentLesson(val)
  }
  render(){
      console.log(this.props);
      return <div>
          <HomeHeader selectCurrentLesson={this.selectCurrentLesson}/>
          <div className="content" ref={x=>{this.ele = x}}>
              {this.props.sliders.length?<HomeSlider lists={this.props.sliders}></HomeSlider>:<Loading/>}
              <h2 className="home-title">
                  <i className="iconfont icon-wode_kecheng"></i>&nbsp;&nbsp;<span>我的课程</span>
              </h2>
              <HomeList lists={this.props.lesson.list}/>

              {this.props.lesson.isLoading?<Loading/>:null}
              <button onClick={this.loadMore}>加载更多</button>
          </div>
      </div>
  }
}