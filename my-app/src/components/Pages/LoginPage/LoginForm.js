import React from 'react'
import 'materialize-css';
import './login.css'
import home_logo from '../../images/home_logo.png'
import GoogleButton from 'react-google-button'

const LoginForm = () => {
    return (
        <div className="login-page-ctr">

          <div className="login-ctr">

            <div className="image-ctr">
              <img src={home_logo} alt="login log" />
            </div>

            <div className="login-text">
              <h3>Create a bucket list of the places you have always wanted to visit
              </h3>
            </div>
            <hr></hr>
            <div className="google-button">
              <GoogleButton />

            </div>


          </div>
        </div>
    )
}


export default LoginForm