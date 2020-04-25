import React from 'react';
import MHHeader from '../../../components/MHeader/MHeader';
import {Link} from 'react-router-dom';
import './index.less';
import actions from '../../store/actions/session';
import {connect} from 'react-redux';
@connect(state=>({...state.session}),actions)
export default class Login extends React.Component {
    componentWillUnmount(){
        this.props.clearMessage();
    }
  render(){
    return <div className="login">
        <MHHeader>登录</MHHeader>
        <div>
            <ul>
                <li>
                    <label htmlFor="username">用户名</label>
                    <input type="text" id='username' ref={x=>this.username=x}/>
                </li>
                <li>
                    <label htmlFor="password">密码</label>
                    <input type="password" id='password' ref={x=>this.password = x}/>
                </li>
                <li>
                    <Link to={'/reg'}>前往注册</Link>
                </li>
                <li>
                    <button onClick={()=>{
                        this.props.toLoginAPI(this.username.value,this.password.value,this.props.history)
                    }}>登录</button>
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