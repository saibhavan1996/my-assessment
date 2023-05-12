import React from 'react'
import "./index.css"
import { Link } from 'react-router-dom'


function LandingPage() {
  return (
    <div className='container'>
    <div className='main-bg-container'>
     <div className='landing-bg-container'>
          <h1 className='heading'>Welcome to PopX</h1>
          <p className='des'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </p>
          <Link to={"/Signup"}>
          <button className='create-button'>Create Account</button>
          </Link>
          <Link to={"/LoginPage"}>
          <button className='login-button'>Already Registered? Login</button>
          </Link>
     </div>
    </div>
    </div>
  )
}

export default LandingPage