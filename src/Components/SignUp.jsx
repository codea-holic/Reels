import React, { useState } from 'react';
import {createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebase";

function SignUp() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [fullName, setFullName] = useState("");
  let [loader, setLoader] = useState(false);
  let [error, setError] = useState("");
  let [user, setUser] = useState("");

  const printDetails = () => {
    alert(`${email}\n${password}\n${fullName}`);
  }

  async function signUpProcess() {
    try {
      setLoader(true);
      let userCred = await
        createUserWithEmailAndPassword(auth, email, password)
        setUser(userCred.user);
    } catch (err) {
      setError(err.message);
      // after some time -> error message remove 
      setTimeout(() => {
        setError("")
      }, 2000)
    }
    setLoader(false);
  }

  return (
    error !== "" ? <strong>Error is {error}</strong> :
      loader === true ? <strong>...Loading</strong> :
      user !== "" ? <strong>Signed Up user is {user.uid} </strong> :
        <>
          <input type="email" onChange={(e) => {
            setEmail(e.target.value);
          }} value={email} placeholder="Email" ></input>
          <br></br>
          <input type="password" onChange={(e) => {
            setPassword(e.target.value);
          }} value={password} placeholder="Password"
          ></input>
          <br></br>
          <input type="text" onChange={(e) => {
            setFullName(e.target.value);
          }} value={fullName} placeholder="Full Name"
          ></input>
          <br></br>
          <button type="click" onClick={signUpProcess}
          >Sign Up</button>
        </>
  )
}

export default SignUp;