import React from "react";
//import s from './Navbar.module.scss'

const Profile = () => {
  return (
    <div className="profile">
      <div className="row">
        <h2>Profile</h2>
      </div>
      <div className="row">
        <div className="card">
          <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg"
               preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap">
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#868e96"></rect>
            <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
          </svg>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile

