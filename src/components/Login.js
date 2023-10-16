import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import './Logins.css';
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
                        background-image: linear-gradient(to bottom right, blue 10%, white 50%)
                    }
                `}
            </style>
        <div className="container">
            <div className="header">
                <div className="text">Sign In</div>
            </div>
            
            <div className="inputs">
                <div className='signin'>Sign in to your account</div>
                <div className='email'>Email</div>
                <div >
                    <input style={{width: "250px"}} className='input' type='email' placeholder="email"/>
                </div>
                <div className='pass'>Password</div>
                <div>
                    <input style={{width: "250px"}}  className="input" placeholder="password" type="password"/>
                </div>
            </div>
            <div className="forgot">Forgot Password?<span><a href="">Click Here!</a></span></div>
            <div className="submit-container">
                <button className="button1"><b>Sign in</b></button>
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
        <h1 style={{marginTop:"-750px",marginLeft:"50px",color:"white"}}><b>LOGO</b></h1>
        <div className='imge_icon1'>
        <img className='imge_icon'src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/>
        <img className='imge_icon'src="https://static01.nyt.com/images/2014/08/10/magazine/10wmt/10wmt-superJumbo-v4.jpg"/>
        <img className='imge_icon'src="https://cdn-icons-png.flaticon.com/512/174/174857.png"/>
        <img className='imge_icon'src="https://play-lh.googleusercontent.com/0oO5sAneb9lJP6l8c6DH4aj6f85qNpplQVHmPmbbBxAukDnlO7DarDW0b-kEIHa8SQ"/>
        </div>
        <h1 className='board'>Board</h1>
        </>

    );
}
export default Login;
export {pic};

