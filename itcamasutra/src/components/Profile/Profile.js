import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo";

const Profile = () => {

  return (
    <div className="profile">

      <ProfileInfo/>

      <div className="row">
        <hr/>
      </div>

      <MyPosts/>

    </div>
  )
}

export default Profile

