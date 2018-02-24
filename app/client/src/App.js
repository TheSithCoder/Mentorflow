import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Home from './home.js';
import SignIn from './signin.js';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users:[]
    }
  }

  componentDidMount(){
    /*fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({users}));
      */
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/signin' component={SignIn}/>
      </Switch>
    );
  }
}

export default App;
