import React from "react";
import { ImCog, ImTwitch, ImShrink, ImBaffled } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import './agentTals.css'
import $ from 'jquery';


const AgentConv =  () =>{
    
    /////////####################////////////////////
    const navigate = useNavigate()

    const endConversation = () =>{
        const opening_text = "Good Bye"
        $("#chatMessage").append("Good Bye")

        var ssu = new SpeechSynthesisUtterance(opening_text);
        window.speechSynthesis.speak( ssu );
        
        function _wait() {
            if ( ! window.speechSynthesis.speaking ) {
            return;
            }
        window.setTimeout( _wait, 5);
        }
        _wait(); 

        navigate("/agent");
        
    }

    ///////////############################//////////////////////


    // const username = sessionStorage.getItem("user")

    // const navigate = useNavigate()

    // function logout(){
    //     // Make a GET request
    //     window.location.href = '/';
    //     sessionStorage.setItem('user', '');
    //     sessionStorage.setItem('refresh_token', '');
    //     sessionStorage.setItem('access_token', '');   
    // }

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
            </div>

        <div class="content">
            <div class="container_agent_conv">
                <ul>
                    <li> <img src="/logo.png"  alt=""></img></li>
                    <li> <h3> Dental Front Desk Agent </h3>  </li>
                    <li> <p class="agent_description"> Agent Description </p>  </li>
                </ul>
                {/* <h3> Dental Front Desk Agent </h3>
                <p> Agent Description </p>
                <button> Talk to Agent</button> */}
            </div>
            <div id="chatMessage" class="container_agent_conv_main chatMessage">
                <p><img src="/logo.png"  alt=""></img>Hi I am Ella currently not avaialable for talking </p>
            </div>

            <div class="container_agent_conv_end">
                <button onClick={endConversation}>End Conversation</button>
            </div>


        </div>
        </div>
    )
}

export default AgentConv