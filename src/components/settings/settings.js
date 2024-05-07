import React from "react";
import { ImCog, ImTwitch, ImShrink, ImBaffled } from "react-icons/im";
import { Link } from "react-router-dom";
import { AiOutlineLogout } from 'react-icons/ai';
import './settings.css'

const SettingPage =  () =>{
    
    function logout(){
        // Make a GET request
        sessionStorage.setItem('user', '');
        sessionStorage.setItem('refresh_token', '');
        sessionStorage.setItem('access_token', '');
        window.location.href = '/';
    }
    const username = localStorage.getItem('username');
    return (
        <div>
            <div class="sidebar">
                
                <div class="username">
                    <h2>{username}</h2>
                </div>
                
                <ul>
                    <li> 
                        <Link to="/agent"><ImBaffled /> Agent</Link>
                    </li>
                    <li> 
                        <Link to="/integrations"><ImShrink /> Integrations</Link>
                    </li>
                    <li className="active"> 
                        <Link to="/setting"><ImCog /> Settings</Link>
                    </li>
                    <li> 
                        <Link to="/support"><ImTwitch /> Support</Link>
                    </li>
                </ul>

                <div className="logout-nav"> <Link onClick={logout}><AiOutlineLogout /> Log Out</Link> </div>
            </div>

        <div class="content">
            <h2>Settings</h2>
            <div class="content_data">
                <h3> This Page is in under maintenance</h3>
            </div>
        </div>
        </div>
    )
}

export default SettingPage