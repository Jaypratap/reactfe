import React from "react";
import './loginregister.css' 
import { useState} from 'react';
import {
    useNavigate,
  } from "react-router-dom";
import api from "../api/api";

const LoginRegister =  () =>{

    const navigate = useNavigate()

    const [txt, setTxt] = useState("");

    const [data, setData] = useState({
            name: "",
            email: "",
            password: "",
            phone_no: ""

        })
    
    function handle(e){
        const newdata =  {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    const signUpUser = () =>{

        if(data.email==="" || data.password==="" || data.name==="" || data.phone_no==="") {

            alert("Please fill all the fields")
        }

        else {
            // Make a GET request
            api.post('signup/', {
                "email": data.email,
                "name": data.name,
                "password":data.password,
                "phone_no": data.phone_no
            })
            .then(response => {
                // Handle the response
                if (response.status===200){       
                    navigate('/agent');}
                else{

                    
                }
            })
            .catch(error => {
            // Handle errors
            setTxt(error['response']['data']['message']);

            });
        }
        
    }

    function LoginUser(){
        // Make a GET request
        if (data.email==="" || data.password==="")
        {
            alert("Please fill the data for username and password")
        }

        else{
            api.post('login/', {
                "username": data.email,
                "password": data.password
            })
            .then(response => {
                console.log(response.data)
                sessionStorage.setItem('user', response.data['username']);
                sessionStorage.setItem('refresh_token', response.data['tokens']['refresh']);
                sessionStorage.setItem('access_token', response.data['tokens']['access']);          
                navigate('/agent');
            })
            .catch(error => {
                // Handle errors
                console.error('Error in request:', error);
                setTxt(error['response']['data']['message']);
            });
        }
        

    }


    const [action, setAction] = useState("Sign Up")

    return (
        <div id="content">
        <div id="left" className="wrapper">
            <div className="form-box-login">
                <form action="" name="registration">
                    <h1>{action}</h1>
                    <div className="input-box">
                        <p className="input_title">Email</p>
                        <input onChange={(e)=>handle(e)} value={data.email} type="text" id="email" placeholder="" required />
                    </div>

                    {action==="Login"?<div></div>:<div className="input-box">
                        <p className="input_title">Name</p>
                        <input onChange={(e)=>handle(e)} value={data.name} type="text" id="name" placeholder="" required />
                    </div>}
                    

                    <div className="input-box">
                        <p className="input_title">Password</p>
                        <input onChange={(e)=>handle(e)} value={data.password} type="password" id="password" placeholder="" required />
                    </div>

                    {action==="Login"?<div></div>: <div className="input-box">
                        <p className="input_title">Phone Number</p>
                        <input onChange={(e)=>handle(e)} value={data.phone_no} type="text" id="phone_no" placeholder="" required />
                    </div>}
                    

                    {action==="Login"?<div></div>: <div className="accept-terms">
                        <label className="input_title"><input type="checkbox" checked />By Creating an acccount, I agree to our <a class="terms_link" href=""> terms of use </a>  and <a class="terms_link" href="">privacy policy</a> </label>
                    </div>}
                    
                    <div class="error_message">
                        {txt}
                    </div>

                    <div className="submit-container">
                        {action==="Sign Up"?<button class="btn" type="button" onClick={signUpUser} >Sign up</button>:
                        <button class="btn" type="button" onClick={LoginUser} > Login </button>}
                        
                    </div>
                    
                    

                </form>

            </div>

            {action==="Login"?<div className="accept-terms">
                <label>Don't have an account? <button class="btn2" onClick={()=> setAction("Sign Up")}>Sign Up</button></label></div>:<div className="accept-terms">
                <label>Already have an account? <button class="btn2" onClick={()=> setAction("Login")}>Log In</button></label>
            </div>}
        </div>

        <div id="right" className="wrapper2">
            <div class="wrapper2_top">
                <img src="home_page_image.png"  alt=""></img>
            </div>

            <div class="wrapper2_buttom">
                <div class="wrapper2_content">
                    <h2>Welcome to Ella</h2>

                    <ul class="menu-item">
                        <li class="menu-item"> AI Agent to automate your frondesk</li>
                        <li class="menu-item"> Available 24/7</li>
                        <li class="menu-item"> Calendar Integration</li>
                        <li class="menu-item"> Answer any type of inbound calls</li>
                    </ul>
                </div>

            </div>
        

        </div>


        </div>
    )
}

export default LoginRegister