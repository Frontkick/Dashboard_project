import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import './Logins.css';
import Dashboard from './Dashboard.js'
import { useNavigate } from 'react-router-dom';

let pic;
const Login = () => {

    const navigate=useNavigate();
    function click(){
        navigate("/Dashboard")
    }
    return (
        <>
        <div>
            <style>
                {`
                    
                    body{
                        width: 100px;
                        height: 100vh;
                        background-image: linear-gradient(to bottom right, yellow 10%, white 50%)
                    }
                `}
            </style>
        <div className="container">
            <div className="header">
                <div className="text">Sign In</div>
                <div style={{marginLeft:-60+"px"}}>Sign in to your account</div>
                <div className="underline"></div>
            </div>
            
            <div className="inputs">
                <p style={{marginLeft: 140 + 'px'}}><b>Email Address</b></p>
                <div className="input">
                    <input type="email"/>
                </div>
                <p style={{marginLeft: 140 + 'px'}}><b>Password</b></p>
                <div className="input">
                    <input type="password"/>
                </div>
            </div>
            <div className="forgot">Forgot Password?<span><a href="">Click Here!</a></span></div>
            <div className="submit-container">
                <button className="button"><b>Sign in</b></button>
                <div className="reg">Don't have an account? <a href="">register here</a></div>
            </div>
        </div>
        </div>
         <div className="google"><GoogleLogin
        onSuccess={credentialResponse => {
          click();
          const decoded = jwt_decode(credentialResponse.credential);
            pic = decoded.picture;
          const name = decoded.name;
          const email = decoded.email;

        } }
        onError={() => {
          console.log('Login Failed');
          
        } }
        />
        </div> 
        </>

    );
}
export default Login;
export {pic};

