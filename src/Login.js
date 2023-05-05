import { auth } from './firebase';
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import "./Login.css"

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
    .then((auth) => {
      history.push("/")
    })
    .catch((e) => {
      alert(e.message)
    })
  }

  const register = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email, password)
    .then((auth) => {
      history.push("/")
    })
    .catch((e) => {
      alert(e.message)
    })
  }

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src="https://www.exchangewire.jp/files/2018/09/amazon-logo.jpg" alt=""/>
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="text"/>
          <h5>Password</h5>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password"/>
          <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
        </form>
        <p>By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
        <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login
