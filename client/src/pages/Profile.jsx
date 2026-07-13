import React from "react";
import "./Profile.css";

function Profile() {

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="profile-container">

      <div className="profile-card">

        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Profile"
          className="profile-img"
        />

        <h2>{user?.name}</h2>

        <p>{user?.email}</p>

        <hr />

        <p><b>Age :</b> {user?.age}</p>

        <p><b>Gender :</b> {user?.gender}</p>

        <p><b>Height :</b> {user?.height} cm</p>

        <p><b>Weight :</b> {user?.weight} kg</p>

      </div>

    </div>
  );
}

export default Profile;