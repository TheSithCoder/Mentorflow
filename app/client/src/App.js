import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Home from './home.js';
import SignUp from './signup.js';
import SignIn from './signin.js';
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

  componentDidMount(){
    /*fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({users}));
      */
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
        <Route path='/request' render={(props) => (<Request username={this.state.username} {...props}/>)}/>
      </Switch>
    );
  }
}

export default App;
