import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch,Route,Redirect} from 'react-router-dom';
import Home from './home.js';
import SignUp from './signup.js';
import SignIn from './signin.js';
import Request from './requests'
import UserHome from './userhome.js';
import {withCookies,Cookies} from 'react-cookie';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users:[],
      username:"",
      loggedIn: false
    };
    this.setUsername = this.setUsername.bind(this);
  }

  setUsername(uName){
    this.setState({username: uName});
    const {cookies} = this.props;
    cookies.set('username', uName, {path:'/'});
  }

  render() {
    return (
      <Switch>
        {this.state.redirect}
        <Route exact path='/' component={Home}/>
        <Route path='/signup' render={(props) => <SignUp {...props} callback={this.setUsername}/>}/>
        <Route path='/signin' render={(props) => <SignIn {...props} callback={this.setUsername}/>}/>
    <Route path='/userhome' render={(props) => ((this.state.username =="")? <UserHome {...props} username={this.state.username} /> : <Redirect path="/userhome"/> )}/>
    <Route path='/requests' render={(props) => <Request {...props} username={this.state.username}/>}/>
      </Switch>
    );
  }
}

export default withCookies(App);
