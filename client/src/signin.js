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
            console.log(response.data.free);
            if(response.data.free == false){
                callback(theUsername);
            }else{
                alert('Username does not exist');
            }
        })
    }

    render(){
        return(
            <div style={{"margin":"8px"}}>
                <div style={{"width":"100%", "background-color":"#ccc", "padding":"5px 10px", "margin-bottom":"8px"}}>
                    <div>
                        <h1 style={{"text-align":"center"}}>Sign In</h1>
                    </div>
                </div>
                <div style={{"width":"100%", "background-color":"#ddd","padding":"8px 8px"}}>
                    <form onSubmit={this.handleSubmit}>
                        <p>Sign in with existing user</p><br />
                        <p>Username: </p>
                        <input type="text" value={this.state.username}  onChange={this.handleChange}></input>
                        <input type="submit" value="Enter"></input>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignUp;