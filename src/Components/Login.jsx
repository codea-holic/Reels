import React from 'react'
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
function Login() {
  const [email, setEmail] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const changeMail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  }
  const changePwd = (e) => {
    setPwd(e.target.value);
    console.log(e.target.value);
  }

  const printDetails = async function () {
    alert(email + " " + pwd);
    let userCred = await signInWithEmailAndPassword(auth, email, pwd);
    console.log(userCred.user);
  }

  return (
    <>
      <form action="">
        <input type="email" onChange={changeMail} value={email} placeholder="Email" required />
        <br></br>
        <div>--------------------------------</div>
        <input type="password" onChange={changePwd} value={pwd} placeholder="Password" required />
        <br></br>
        <button type="click" onClick={printDetails}>Login</button>
      </form>
    </>
  )
}



export default Login;