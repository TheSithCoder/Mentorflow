import React, { Component } from 'react';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import ListRequests from './listRequests.js';
import SingleRequest from './singleRequest.js';
import {withCookies,Cookies} from 'react-cookie';
class Request extends Component{
    render(){
        var theComponent = this;
        return <Switch>
            <Route exact path='/requests' render={(props) => <ListRequests {...theComponent.props}/> }/>
            <Route path='/requests/:id' render={(props) => <SingleRequest {...theComponent.props} />}/>
        </Switch>
    }
}

export default withCookies(Request);