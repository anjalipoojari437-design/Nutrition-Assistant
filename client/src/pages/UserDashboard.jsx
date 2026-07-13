import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./UserDashboard.css";
import API from "../services/api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function UserDashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [disease, setDisease] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [calories, setCalories] = useState("");
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const getSuggestion = async () => {
  const height = Number(user.height);
  const weight = Number(user.weight);
  const age = Number(user.age);
  
let dailyCalories = 0;

if (user.gender === "Male") {
  dailyCalories =
    10 * weight +
    6.25 * height -
    5 * age +
    5;
} else {
  dailyCalories =
    10 * weight +
    6.25 * height -
    5 * age -
    161;
}

setCalories(Math.round(dailyCalories));
    if (!disease) {
      alert("Please enter a disease");
      return;
    }

    try {
      const res = await API.post("/suggestions", {
        disease,
        userId: user?._id,
      });

      setSuggestion(res.data.suggestion);
    } catch (err) {
      console.log(err);
      alert("Failed to generate suggestion");
    }
  };

  return (
    <>
      <Navbar />

      <div className="dashboard">
        <div className="dashboard-header">
          <h1>🥗 Nutrition Assistant Dashboard</h1>

          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        </div>

        <div className="welcome-card">
          <h2>Welcome {user?.name || "User"} 👋</h2>
          <p>Your personal health dashboard.</p>
        </div>

        <div className="profile-card">
          <h2>Your Profile</h2>

          <p>
            <strong>Name:</strong> {user?.name}
          </p>

          <p>
            <strong>Email:</strong> {user?.email}
          </p>

          <p>
            <strong>Age:</strong> {user?.age}
          </p>

          <p>
            <strong>Gender:</strong> {user?.gender}
          </p>

          <p>
            <strong>Height:</strong> {user?.height} cm
          </p>

          <p>
            <strong>Weight:</strong> {user?.weight} kg
          </p>
        </div>

        <div className="profile-card">
          <h2>Get Nutrition Suggestion</h2>

          <input
            type="text"
            placeholder="Enter disease (fever, diabetes, bp...)"
            value={disease}
            onChange={(e) => setDisease(e.target.value)}
            style={{
              padding: "10px",
              width: "100%",
              marginBottom: "10px",
            }}
          />

          <button
            onClick={getSuggestion}
            className="dashboard-btn"
          >
            Generate Suggestion
          </button>

          {suggestion && (
            <div style={{ marginTop: "15px" }}>
              <h3>Suggestion:</h3>
              <p>{suggestion}</p>
            </div>
          )}
        </div>

        <div className="dashboard-links">
          <Link to="/userdata" className="dashboard-btn">
            Health Data
          </Link>

          <Link to="/suggestions" className="dashboard-btn">
            Nutrition Suggestions
          </Link>

          <Link to="/profile" className="dashboard-btn">
            Profile
          </Link> 
        </div>
      </div>
      {calories && (
  <div style={{ marginTop: "15px" }}>
    <h3>Daily Calories Needed</h3>
    <p>{calories} kcal/day</p>
  </div>
)}

      <Footer />
    </>
  );
}

export default UserDashboard;