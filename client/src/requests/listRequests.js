import React, { Component } from 'react';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Request from './request.js';
var axios = require('axios');
class ListRequests extends Component{
    constructor(props){
        super(props);
        this.state = {
            requests: []
        }
    }

    componentDidMount(){
        var theComponent = this;
        axios.get('/api/requests/').then(function(response){
            theComponent.setState({requests:response.data});
            theComponent.forceUpdate();
        })
    }

    render(){
        return(
            <div>
                <h2>Request</h2>
                <div style={{"margin":"8px"}}>
                {
                    this.state.requests.map(request => (
                        <div style={{"width":"90%","background-color":"#ddd","padding":"6px 0px 1px 12px","margin-bottom":"8px"}}>
                            <div>
                                <a style={{"font-size":"150%"}} href={'/requests/' + request._id}>{request.title}</a>
                            </div>
                            <div>
                                <p>{request.requestBody}</p>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        );
    }
}

export default ListRequests;