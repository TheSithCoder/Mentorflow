import React, { Component } from 'react';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

class Home extends Component{
    render(){
        return (
            <div style={{"margin":"8px"}}>
                <table>
                    <tbody>
                        <tr>
                            <style>
                                {"td { height: 8em; background-color: #ccc; }"}
                            </style>
                            <td>
                                <style>
                                    {".buttonspace { background-color: #ddd; text-align: center; padding: 8px; display: inline-block; width: 80%; height: 90%; }"}
                                    {".buttonspace a { font-size: 150%; }"}
                                    {"td { margin: auto; }"}
                                </style>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td colspan="2">
                                                <div style={{"background-color":"#eee", "padding":"1px 16px", "margin-bottom":"8px"}}>
                                                    <p style={{"font-size":"300%"}}>Home Page</p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="buttonspace">
                                                    <Link to='/signup'>Sign Up</Link>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="buttonspace">
                                                    <Link to="/signin">Sign In</Link>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td>
                                <div style={{"background-color":"#ddd"}}>
                                    <p>hey</p>
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