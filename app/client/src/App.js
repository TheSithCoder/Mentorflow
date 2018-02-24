import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Home from './home.js';
import SignUp from './signup.js';
import SignIn from './signin.js';
import Request from './requests'
import UserHome from './userhome.js';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users:[],
      username:"",
      loggedIn: false
    }
    this.setUsername = this.setUsername.bind(this);
  }

  setUsername(uName){
    this.setState({username: uName});
    alert('Signed in as: ' + uName);
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/signup' render={(props) => <SignUp {...props} callback={this.setUsername}/>}/>
        <Route path='/signin' render={(props) => <SignIn {...props} callback={this.setUsername}/>}/>
        <Route path='/userhome' render={(props) => <UserHome {...props} username={this.state.username}/>} />
        <Route path='/request' render={(props) => <Request {...props} username={this.state.username}/>}/>
      </Switch>
    );
  }
}

export default App;
