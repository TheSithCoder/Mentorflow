import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Home from './home.js';
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
      </Switch>
    );
  }
}

export default App;
