import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../Config/firebase-config";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("")
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const signup = async (e)=>{
    e.preventDefault();
    try {
      
      const createUser = await createUserWithEmailAndPassword(auth, email, password)
      const user = createUser.user;
      const addUser = await addDoc(collection(db, "users"), {
        id:user.uid,
        name: name,
        phone: phone,    
      })
      navigate('/')
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setError("Email address is already in use. Please sign in with a different account.");
      }
    }
  }

  return (
    <div>
      <div className="signupParentDiv">
        {/* <img width="50px" height="50px" src={Logo}></img> */}
        <h1 className="sHeading">SignUp</h1>
        <h3>{error}</h3>
        <form onSubmit={signup}>
          <label className="label" htmlFor="fname">
            Name
          </label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="ename"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="pname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}
