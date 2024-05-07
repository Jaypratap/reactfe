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
                        <label className="input_title"><input type="checkbox" />By Creating an acccount, I agree to our terms of use and privacy policy</label>
                    </div>}
                    
                    <div class="error_message">
                        {txt}
                    </div>

                    <div className="submit-container">
                        {action==="Sign Up"?<button type="button" onClick={signUpUser} >Sign up</button>:
                        <button type="button" onClick={LoginUser} > Login </button>}
                        
                    </div>
                    
                    

                </form>

            </div>

            {action==="Login"?<div className="accept-terms">
                <label>Don't have an account? <button onClick={()=> setAction("Sign Up")}>Sign Up</button></label></div>:<div className="accept-terms">
                <label>Already have an account? <button onClick={()=> setAction("Login")}>Log In</button></label>
            </div>}
        </div>

        <div id="right" className="wrapper2">
        <img src="home_page_image.png"  alt=""></img>

        </div>


        </div>
    )
}

export default LoginRegister