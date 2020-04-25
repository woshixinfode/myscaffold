import React from 'react';
import MHHeader from '../../../components/MHeader/MHeader';
import {Link} from 'react-router-dom';
import actions from '../../../store/actions/session';
import './index.less';
import {connect} from 'react-redux';
@connect(state=>({...state.session}),actions)
export default class Reg extends React.Component {
    componentWillUnmount(){
        this.props.clearMessage();
    }
  render(){
      return <div className="reg">
          <MHHeader>注册</MHHeader>
          <div>
              <ul>
                  <li>
                      <label htmlFor="username">用户名</label>
                      <input type="text" id='username' ref={x=>this.username = x}/>
                  </li>
                  <li>
                      <label htmlFor="password">密码</label>
                      <input type="password" id='password' ref={x=>this.password = x}/>
                  </li>
                  <li>
                      <button onClick={()=>{
                          this.props.toRegAPI(this.username.value,this.password.value,this.props.history)
                      }}>注册</button>
                  </li>
                  <li>
                      {this.props.err == 1?<p style={{color:'red'}}>{this.props.msg}</p>:null}
                      {this.props.success.length?<p style={{color:'green'}}>{this.props.success}</p>:null}
                  </li>
              </ul>
          </div>
      </div>
  }
}