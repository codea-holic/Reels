import React from 'react';
import "./profile.css";

function Profile() {
  return (
    <>
      <div className="header"></div>
      <div className="main">
        {/* <div className="p-img"></div> */}
        <div className="img-container">
          <img src="http://via.placeholder.com/640x360" alt="" className="p-img" />
        </div>
        <div className="details">
          <div className="content name"> Name : <span className='bold'> Name </span></div>
          <div className="content posts"> No. of Posts : <span className='bold'> Posts </span></div>
          <div className="content mail">Email : <span className='bold'> Email </span> </div>
        </div>
      </div>
    </>
  )
}

export default Profile;