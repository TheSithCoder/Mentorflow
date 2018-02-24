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
                Requests
                <ul>
                    {
                      this.state.requests.map((theRequest) =>(
                            <Request request={theRequest} inList={true}/>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default ListRequests;