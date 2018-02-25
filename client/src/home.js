import React, { Component } from 'react';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

class Home extends Component{
    render(){
        return (
            <div style={{"margin":"8px","width":"100%","height":"100%","background-color":"#ccc"}}>
                <style>
                    {".buttonspace { background-color: #ddd; text-align: center; padding: 8px; display: inline-block; width: 95%; height: 384px; }"}
                    {".buttonspace a { font-size: 150%; }"}
                    {"tr { height: 400px; }"}
                    {"p { display: block; }"}
                </style>
                <table style={{"width":"100%"}}>
                    <tbody>
                        <tr>
                            <td colspan="2">
                                <div style={{"background-color":"#eee", "padding":"1px 16px", "margin-bottom":"8px", "height":"320px"}}>
                                <br />
                                <br />
                                <br />
                                <br />
                                
                                    <p style={{"font-size":"300%", "text-align":"center"}}>Mentorflow</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="buttonspace">
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                
                                    <Link to='/signup'>Sign Up</Link>

                                </div>
                            </td>
                            <td>
                                <div class="buttonspace">
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                
                                    <Link to="/signin">Sign In</Link>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Home;