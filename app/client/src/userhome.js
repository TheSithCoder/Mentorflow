import React, { Component } from 'react';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {withCookies,Cookies} from 'react-cookie';
var axios = require('axios');

class UserHome extends Component{

    constructor(props){
        super(props);
        const{cookies} = this.props;
        this.state = {
            username : cookies.get('username')
        }
    }

    componentDidMount(){
        const {cookies} = this.props;
        console.log(cookies.get('username'));
    }

    render(){
        return (
            <div>
                <div>
                    <table style={{"width":"100%"}}>
                        <tbody>
                            <tr>
                                <td>
                                    <input type="button" value="Create Request" onClick={function(){}} />
                                </td>
                                <td>
                                    <input type="button" value="See all requests" onClick={function(){}} />
                                </td>
                                <td>
                                    <h3 style={{"text-align":"right"}}>{this.state.username}</h3>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div style={{"border-style":"none none solid none", "border-width":"1px", "width":"100%"}} />
                
                <h2>Pending requests for guidance</h2>
                <ul>
                    
                </ul>
                <h2>Chats with mentors</h2>
                <ul>
                
                </ul>
            </div>
        );
    }
}

export default withCookies(UserHome);