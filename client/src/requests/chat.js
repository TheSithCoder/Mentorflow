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
        setInterval(() => this.getChat(),1000);
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
        var theComponent = this;
        axios.post('/api/requests/chat/' + this.state.id, {username:this.state.username,chatText:this.state.text}).then(function(response){
            theComponent.getChat();
        })
    }

    render(){
        return (
            <div style={{"margin":"8px"}}>
                <div className="header" style={{"background-color":"#ddd", "padding":"1px 8px"}}>
                    <h1 style={{"background-color":"#bbb","padding":"6px 8px","margin":"4px"}}>{this.state.request.title}</h1>
                    <style>
                        {"p { margin: 4px; }"}
                    </style>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <p>Mentee:</p>
                                </td>
                                <td>
                                    <p>{this.state.request.mentee}</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Mentor:</p>
                                </td>
                                <td>
                                    <p>{this.state.request.mentor}</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <br/>
                <div className="chat">
                    <div style={{"overflow":"auto","width":"280px","height":"384px","resize":"both","border-width":"1px","border-color":"#000","border-style":"solid"}}>
                        {
                            this.state.chat.map((message) => (
                                <div>
                                    {message.author + ": " + message.chatText}
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="chatForm">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Message" onChange={this.handleTextChange} value={this.state.value}/>
                        <input type="submit" value="send"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default withCookies(Chat);