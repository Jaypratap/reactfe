import React from "react";
import { ImCog, ImTwitch, ImShrink, ImBaffled } from "react-icons/im";
import { Link } from "react-router-dom";
import './agentTals.css'
import { FaSignOutAlt } from "react-icons/fa";

const AgentPage =  () =>{
    
    const username = sessionStorage.getItem("user")

    // const navigate = useNavigate()

    function logout(){
        // Make a GET request
        window.location.href = '/';
        sessionStorage.setItem('user', '');
        sessionStorage.setItem('refresh_token', '');
        sessionStorage.setItem('access_token', '');   
    }

    return (
        <div>
            <div class="sidebar">
                <div class="username">
                    <h4> Ella </h4>
                </div>
                <ul>
                    <li className="active"> 
                        <Link to="/agent" className="Active"><ImBaffled /> Agent</Link>
                    </li>
                    <li> 
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
            <h2>Voice Agents</h2>
            <div class="container">
                


                <ul>
                    <li> <img src="logo.png"  alt=""></img></li>
                    <li> <h3> Dental Front Desk Agent </h3>  </li>
                    <li> <p class="agent_description"> Agent Description </p>  </li>
                    <li> <button class="agent_b"> Talk to Agent</button> </li>
                </ul>
                {/* <h3> Dental Front Desk Agent </h3>
                <p> Agent Description </p>
                <button> Talk to Agent</button> */}
            </div>
        </div>
        </div>
    )
}

export default AgentPage