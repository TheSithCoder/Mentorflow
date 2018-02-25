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
                var requestBody = this.props.request.requestBody;
                var id = this.props.request._id;
                var callback = this.props.callback;
            return(
                <div style={{"margin":"8px"}}>
                    <div style={{"width":"100%", "background-color":"#ccc", "padding":"5px 10px", "margin-bottom":"8px"}}>
                        <div>
                            <h1 style={{"text-align":"center"}}>{title}</h1>
                            <h3>Asked by {mentee}</h3>
                        </div>
                    </div>
                    <div style={{"width":"100%", "background-color":"#ddd","padding":"8px 8px"}}>
                        <p>{requestBody}</p>
                        <button onClick={() => callback(id)}>Take Request</button>
                    </div>
                </div>
            )
        }
    }

}

export default Request;