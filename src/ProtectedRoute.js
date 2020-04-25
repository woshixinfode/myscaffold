import React from 'react';
// import {toValidate} from './api/session';
import {withRouter} from 'react-router-dom';
@withRouter
export default class ProtectedRoute extends React.Component {
   async componentDidMount(){
        let {user} = await toValidate()
       if(!user){
            this.props.history.push('/login')
       }
    }
  render(){//默认正常渲染lesson页面
       let C = this.props.component
    return <C/>
  }
}