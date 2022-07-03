import React from 'react';
import "./profile.css";

function Profile() {
  return (
    <>
      <div className="header"></div>
      <div className="main">
        {/* <div className="p-img"></div> */}
        <img src="http://via.placeholder.com/640x360" alt="" className="p-img" />
        <div className="details">
          <div className="content name"> Name </div>
          <div className="content posts"> No. of Posts <span> Posts </span></div>
          <div className="content mail">Email </div>
        </div>
      </div>
    </>
  )
}

export default Profile;