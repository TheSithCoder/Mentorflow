import React, { Component } from 'react';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

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
                {
                    this.state.requests.map(request =>  )
                }
            </div>
        );
    }
}

export default ListRequests;