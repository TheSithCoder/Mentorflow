import React, { Component } from 'react';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Request from './request.js';
import {withCookies,Cookies} from 'react-cookie';
import Chat from './chat.js';
var axios = require('axios');

class SingleRequest extends Component{
    constructor(props){
        super(props);
        const {cookies} = this.props;
        var uri = window.location.href;
        var lastIndex = uri.lastIndexOf('/');
        var theId = uri.substring(lastIndex+1);
        this.state = {
            request:{},
            id : theId,
            username: cookies.get('username'),
        }
        console.log(theId);
        this.takeRequest = this.takeRequest.bind(this);
    }

    componentDidMount(){
        var theComponent = this;
        axios.get('/api/requests/' + this.state.id).then(function(response){
            theComponent.setState({request: response.data});
            theComponent.forceUpdate();
            console.log(response.data);
        });
    }

    takeRequest(id){
        var theComponent = this;
        axios.get('/api/requests/take/' + id + '/' + this.state.username).then(function(response){
            console.log(response.data);
            theComponent.setState({request:response.data});
            theComponent.forceUpdate();
        })
    }

    render(){
        if(!this.state.request.isTaken){
            return <Request request={this.state.request} callback={this.takeRequest}/>
        }else{
            return <Chat request={this.state.request}/>
        }
    }
}

export default withCookies(SingleRequest);