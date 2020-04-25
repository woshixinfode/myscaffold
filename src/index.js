import React,{Component} from 'react';
import ReactDom,{render} from 'react-dom';
 import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import APP from './containers/APP';

render(<Router>
    <APP></APP>
</Router>,window.root)
