import React, { Component } from 'react';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
var axios = require('axios');
class SignUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({username:event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        var theUsername = this.state.username;
        var callback = this.props.callback;
        axios.get('/api/users/' + theUsername).then(function(response){
            if(response.data.free == true){
                axios.post('/api/users/', {username:theUsername}).then(function(response){
                    console.log(callback);
                    callback(theUsername);
                    return true;
                })
            }else{
                alert('Username already used');
            }
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <h1>Sign Up</h1>
                <p>Sign up with a new user</p><br />
                <p>Username: </p>
                <input type="text" value={this.state.username}  onChange={this.handleChange}></input>
                <input type="submit" value="Enter"></input>
                </form>
            </div>
        )
    }
}

export default SignUp;