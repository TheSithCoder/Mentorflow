import React, { Component } from 'react';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import ListRequests from './listRequests.js';
import SingleRequest from './singleRequest.js';
import {withCookies,Cookies} from 'react-cookie';
var axios = require('axios');

class Chat extends Component{
    constructor(props){
        super(props);
        var uri = window.location.href;
        var lastIndex = uri.lastIndexOf('/');
        var theId = uri.substring(lastIndex+1);
        const {cookies} = this.props;
        this.state = {
            request: this.props.request,
            text: "",
            id: theId,
            chat: this.props.request.chat,
            username: cookies.get('username')
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    componentDidMount(){
        this.getChat();
        setInterval(this.getChat(), 1000);
    }

    getChat(){
        var theComponent = this;
        axios.get('/api/requests/chat/'+ this.state.id).then(function(response){
            theComponent.setState({chat: response.data});
            theComponent.forceUpdate();
        })
    }

    handleTextChange(e){
        e.preventDefault();
        this.setState({text: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        axios.post('/api/requests/chat/' + this.state.id, {username:this.state.username,chatText:this.state.text}).then(function(response){
            this.getChat();
        })
    }

    render(){
        return <div>
            <div className="header">
                <h1>{this.state.request.title}</h1>
                <h3>{"Mentee: " + this.state.request.mentee}</h3>
                <h3>{"Mentor: " + this.state.request.mentor}</h3>
            </div>
            <br/>
            <div className="chat">
                {
                    this.state.chat.map((message)=>
                    <div>
                        {message.author + ": " + message.chatText}
                    </div>
                )
                }
            </div>
            <div className="chatForm">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Message" onChange={this.handleTextChange} value={this.state.value}/>
                    <input type="submit" value="send"/>
                </form>
            </div>
        </div>
    }
}

export default withCookies(Chat);