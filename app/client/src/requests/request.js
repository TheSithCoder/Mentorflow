import React, { Component } from 'react';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

class Request extends Component{

    constructor(props){
        super(props);
    }

    render(){
        if(this.props.inList){
            return(
                <li>
                    <h3>{this.props.title}</h3><br/>
                    <Link to={"/request/" + this.props._id}>Go to request</Link>
                </li>
            );
        }else{
            return(
                <div>
                    <h1>{this.props.title}</h1><br/>
                    <h3>Asked by {this.props.mentee}</h3><br/>
                    <p>{this.props.requestText}</p>
                    <input type="button" onClick={this.props.callback}>Take Request</input>
                </div>
            )
        }
    }

}

export default Request;