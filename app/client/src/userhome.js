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
                <div>
                    <table style={{"width":"100%"}}>
                        <tbody>
                            <tr>
                                <td>
                                    <input type="button" value="Create Request" onClick={this.openModal}/>
                                </td>
                                <td>
                                    <input type="button" value="See all requests" onClick={function(){}} />
                                </td>
                                <td>
                                    <h3 style={{"text-align":"right"}}>{this.state.username}</h3>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style={{"border-style":"none none solid none", "border-width":"1px", "width":"100%"}} />
                
                <h2>Requests for guidance</h2>
                <ul>{
                     this.state.requests.map(request => (request.mentee == this.state.username ?<li><a href={'/requests/' + request._id}>{request.title}</a></li> : null))
                }
                    
                </ul>
                <h2>Mentoring Chats</h2>
                <ul>
                {
                     this.state.requests.map(request => (request.mentee !== this.state.username ?<li><a href={'/requests/' + request._id}>{request.title}</a></li> : null))
                }
                </ul>
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