import React, { Component } from 'react';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {withCookies,Cookies} from 'react-cookie';
import Modal from 'react-modal';
var axios = require('axios');

class UserHome extends Component{

    constructor(props){
        super(props);
        const{cookies} = this.props;
        this.state = {
            username : cookies.get('username'),
            requests : [],
            showNewRequest:false,
            title:"",
            requestText:""
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleRequestChange = this.handleRequestChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
    }

    openModal(e){
        e.preventDefault();
        this.setState({showNewRequest:true});
    }

    handleTitleChange(e){
        e.preventDefault();
        this.setState({title:e.target.value});
    }

    handleRequestChange(e){
        e.preventDefault();
        this.setState({requestText:e.target.value})
    }

    onSubmit(e){
        e.preventDefault();
        axios.post('/api/requests/new',{
            username: this.state.username,
            requestBody: this.state.requestText,
            title: this.state.title
        }).then(function(response){
            if(response.data.message == "Added request"){
                alert('Success');
            }
        })
    }

    closeModal(){
        this.setState({showNewRequest:false});
        var theComponent = this;
        axios.get('/api/requests/mine/'+this.state.username).then(function(response){
            theComponent.setState({requests: response.data});
            theComponent.forceUpdate();
        })
    }

    componentDidMount(){
        var theComponent = this;
        axios.get('/api/requests/mine/'+this.state.username).then(function(response){
            theComponent.setState({requests: response.data});
            theComponent.forceUpdate();
        })
    }

    render(){
        return (
            <div>
                <div style={{"border-style":"none none solid none", "border-width":"1px"}}>
                    <table style={{"width":"100%"}}>
                        <tbody>
                            <tr>
                                <style>
                                    {".buttonspace { width: 33%; padding: 0px 80px; border-style: none solid none none; border-width: 1px; border-color: #000; }"}
                                    {".buttonspace input { height: 48px; width: 128px; }"}
                                </style>
                                <td class="buttonspace">
                                    <input type="button" value="Create Request" onClick={this.openModal}/>
                                </td>
                                <td class="buttonspace">
                                    <a href="/requests"><input type="button" value="See all requests" onClick={function(){}} /></a>
                                </td>
                                <td style={{"width":"34%"}}>
                                    <h3 style={{"text-align":"right"}}>{this.state.username}</h3>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style={{"margin":"8px"}}>
                    <div>
                        <h2>Requests for guidance</h2>
                        <div style={{"margin":"8px"}}>
                        {
                            this.state.requests.map(request => (request.mentee == this.state.username ? (
                                <div style={{"width":"90%","background-color":"#ddd","padding":"6px 0px 1px 12px","margin-bottom":"8px"}}>
                                    <div>
                                        <a style={{"font-size":"150%"}} href={'/requests/' + request._id}>{request.title}</a>
                                    </div>
                                    <div>
                                        <p>{request.requestBody}</p>
                                    </div>
                                </div>
                            ): null))
                        }
                        </div>
                    </div>
                    <div>
                        <h2>Mentoring Chats</h2>
                        <div style={{"margin":"8px"}}>
                        {
                            this.state.requests.map(request => (request.mentor == this.state.username ? (
                                <div style={{"width":"90%","background-color":"#ddd","padding":"6px 0px 1px 12px","margin-bottom":"8px"}}>
                                    <div>
                                        <a style={{"font-size":"150%"}} href={'/requests/' + request._id}>{request.title}</a>
                                    </div>
                                    <div>
                                        <p>{request.requestBody}</p>
                                    </div>
                                </div>
                            ) : null))
                        }
                        </div>
                    </div>
                </div>
                <Modal isOpen={this.state.showNewRequest}>
                    <table style={{"width":"100%"}}>
                        <tbody>
                            <tr>
                                <td>
                                    <h1>Request a topic</h1>
                                    <form onSubmit={this.onSubmit}>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td style={{"height":"3em"}}>Title:</td>
                                                    <td>
                                                        <input type="text" onChange={this.handleTitleChange} value={this.state.title}/>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={{"height":"3em"}}>Topic:</td>
                                                    <td>
                                                        <input type="text" onChange={this.handleRequestChange} value={this.state.requestText}/>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={{"height":"3em"}} colspan="2">
                                                        <input type="submit" value="Request a mentor"/>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </form>
                                </td>
                                <td>
                                    <div style={{"float":"right"}}>
                                        <button onClick={this.closeModal}> Close</button><br/>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Modal>
            </div>
        );
    }
}

export default withCookies(UserHome);