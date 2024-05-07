import React from "react";
import './homepage.css' 
import { ImCog, ImTwitch, ImShrink, ImBaffled } from "react-icons/im";
import { Link } from "react-router-dom";

const HomePage =  () =>{
    
    // const username = localStorage.getItem('username');

    return (
        <div>

        
            <div class="sidebar">
                <label>Username</label>
                <ul>
                    <li> 
                        <Link to="/agent"><ImShrink /> Agent</Link>
                    </li>
                    <li> 
                        <Link to="/integrations"><ImCog /> Integrations</Link>
                    </li>
                    <li> 
                        <Link to="/setting"><ImTwitch /> Settings</Link>
                    </li>
                    <li> 
                        <Link to="/support"><ImBaffled /> Support</Link>
                    </li>
                </ul>

                <label>usernme with logout</label>
            </div>

        <div class="content">
            <h2>Responsive Sidebar Example</h2>
            <p>This example use media queries to transform the sidebar to a top navigation bar when the screen size is 700px or less.</p>
            <p>We have also added a media query for screens that are 400px or less, which will vertically stack and center the navigation links.</p>
            <h3>Resize the browser window to see the effect.</h3>
        </div>
        </div>
    )
}

export default HomePage