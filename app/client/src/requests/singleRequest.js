import React, { Component } from 'react';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Request from './request.js';

class SingleRequest extends Component{
    constructor(props){
        
    }

    render(){
        <Request request={this.props.request}/>
    }
}