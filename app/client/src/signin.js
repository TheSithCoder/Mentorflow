import React, { Component } from 'react';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

class SignIn extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>Sign in</h1>
                <p>Sign in to your user</p>
                <input type="text" value=""></input>
            </div>
        )
    }
}