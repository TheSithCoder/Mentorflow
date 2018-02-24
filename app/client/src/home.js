import React, { Component } from 'react';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

class Home extends Component{
    render(){
        return (
            <div>
                <h1>Home Page</h1>
                <Link to='/signin'>SignIn</Link>
                <br />
                <a href="./requests">Requests</a>
            </div>
        );
    }
}

export default Home;