import React from "react";
import { ImCog, ImTwitch, ImShrink, ImBaffled } from "react-icons/im";
import { Link } from "react-router-dom";
import './agentTals.css'
import { AiOutlineLogout } from 'react-icons/ai';
import api from "../api/api";
import { useNavigate } from "react-router-dom";

const AgentPage =  () =>{
    
    const username = sessionStorage.getItem("user")

    const navigate = useNavigate()

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
                    <h4> {username}</h4>
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

                <div className="logout-nav"> <Link onClick={logout}><AiOutlineLogout /> Log Out</Link> </div>
            </div>

        <div class="content">
            <h2>Voice Agent</h2>
            <div class="container">
                <ul>
                    <li> <h4> Dental Front Desk Agent </h4> </li>
                    <li> <p> Agent Description </p>  </li>
                    <li> <button> Talk to Agent</button> </li>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default AgentPage