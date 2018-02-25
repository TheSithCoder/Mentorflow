import React, { Component } from 'react';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

class Request extends Component{

    constructor(props){
        super(props);
    }

    render(){
        var inList = this.props.inList;
        var title = this.props.request.title;
        var id = this.props.request._id;
        if(inList){
            return(
                <li>
                    <h3>{title}</h3><br/>
                    <Link to={"/requests/" + id}>Go to request</Link>
                </li>
            );
        }else{
                console.log(this.props);
                var title = this.props.request.title;
                var mentee = this.props.request.mentee;
                var requestBody = this.props.requestBody;
                var id = this.props.request._id;
                var callback = this.props.callback;
            return(
                <div>
                    <h1>{title}</h1><br/>
                    <h3>Asked by {mentee}</h3><br/>
                    <p>{requestBody}</p>
                    <button onClick={() => callback(id)}>Take Request</button>
                </div>
            )
        }
    }

}

export default Request;