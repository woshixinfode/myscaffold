import React,{Component} from 'react';
import ReactDom,{render} from 'react-dom';

import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'

import Detail from './containers/Detail/Detail';

import App from './containers/App';

import Login from './containers/Login/Login';
import Reg from './containers/Reg/Reg';
import ProtectedRoute from './ProtectedRoute'
import {Provider} from 'react-redux'
import store from './store'
import syncComponent from './SyncComponent';
let Home = syncComponent(()=>import("./containers/Home/Home"));
let Lesson = syncComponent(()=>import("./containers/Lesson/Lesson"));
let Profile = syncComponent(()=>import("./containers/Profile/Profile"));
render(<Provider store={store}>
        <Router>
            <App>
                <Switch>
                    <Route path="/" exact={true} component={Home}/>
                    <ProtectedRoute path="/lesson" component={Lesson}/>
                    <Route path="/profile/"  component={Profile}/>
                    <Route path="/detail/:lessonId" component={Detail}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/reg" component={Reg}></Route>
                </Switch>
            </App>
        </Router>
    </Provider>
    ,window.root)