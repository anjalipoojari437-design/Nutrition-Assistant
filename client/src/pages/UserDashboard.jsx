import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./UserDashboard.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function UserDashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
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
          <h2>Your