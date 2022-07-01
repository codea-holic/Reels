import React from 'react';
import Feed from './Components/Feed';
import ForgotPwd from './Components/ForgotPwd';
import Login from './Components/Login';
import PageNotFound from './Components/PageNotFound';
import Profile from './Components/Profile';
import SignUp from './Components/SignUp';
import { Routes, Route, Navigate } from 'react-router-dom';


function App() {
  return (
    <>
      {/* <div>NavBar</div> */}
      <Routes>
        <Route path="/" element={<Navigate to="/feed" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/forget-pwd" element={<ForgotPwd />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}

export default App;