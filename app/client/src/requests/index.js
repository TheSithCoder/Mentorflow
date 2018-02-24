import React, { Component } from 'react';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

class Request extends Component{
    render(){
        <Switch>
            <Route exact path='/request' render={}/>
            <Route path='/request/:id' render={}/>
        </Switch>
    }
}

export default Request;