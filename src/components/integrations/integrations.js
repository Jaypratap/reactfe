import React from "react";
import { ImCog, ImTwitch, ImShrink, ImBaffled } from "react-icons/im";
import { Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

const IntegrationsPage =  () =>{
    
    function logout(){
            // Make a GET request
            sessionStorage.setItem('user', '');
            sessionStorage.setItem('refresh_token', '');
            sessionStorage.setItem('access_token', '');
            window.location.href = '/';
    }

    const username = sessionStorage.getItem('user');

    return (
        <div>
            <div class="sidebar">
                <div class="username">
                    <h4> Ella </h4>
                </div>
                <ul>
                    <li> 
                        <Link to="/agent"><ImBaffled /> Agent</Link>
                    </li>
                    <li className="active"> 
                        <Link to="/integrations"><ImShrink /> Integrations</Link>
                    </li>
                    <li> 
                        <Link to="/setting"><ImCog /> Settings</Link>
                    </li>
                    <li> 
                        <Link to="/support"><ImTwitch /> Support</Link>
                    </li>
                </ul>

                <div class="logout-nav">
                    <Link onClick={logout}><img src="user_profile.png"  alt="dsgadg"></img>{username} Log Out <FaSignOutAlt/> </Link>
                </div>
            </div>

        <div class="content">
            <h2>Integrations</h2>
            <div class="content_data">
                <h3> This Page is in under maintenance</h3>
            </div>
        </div>
        </div>
    )
}

export default IntegrationsPage