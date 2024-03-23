import React, { useState } from 'react';

import Logo from '../../olx-logo.png';
import './Login.css';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Config/firebase-config';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const signin = async (e)=>{
    e.preventDefault()
    try {
      const user = await signInWithEmailAndPassword(auth, email, password)
      navigate('/')
    } catch (error) {
      console.log(error, "error")
      setError("invalid user")
    }
  }
  return (
    <div>
      <div className="loginParentDiv">
      <h1 className="sHeading">SignUp</h1>
        <h3>{error}</h3>
        <form onSubmit={signin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
       <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
}

export default Login;