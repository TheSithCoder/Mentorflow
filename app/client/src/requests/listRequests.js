import React, { Component } from 'react';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Request from './request.js';

class ListRequests extends Component{
    constructor(props){
        super(props);
        this.state = {
            requests: []
        }
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