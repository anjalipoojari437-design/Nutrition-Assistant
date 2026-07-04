import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import API from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !user.name ||
      !user.email ||
      !user.age ||
      !user.gender ||
      !user.height ||
      !user.weight ||
      !user.password
    ) {
      alert("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      const res = await API.post("/users/register", user);

      alert(res.data.message);

      setUser({
        name: "",
        email: "",
        age: "",
        gender: "",
        height: "",
        weight: "",
        password: "",
      });

      navigate("/login");

    } catch (err) {
      alert(err.response?.data?.message || "Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">

        <div className="register-header">
          <h1>🥗 Nutrition Assistant</h1>
          <p>Create Your Account</p>
        </div>

        <form className="register-form" onSubmit={handleSubmit}>

          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={user.name}
            onChange={handleChange}
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={user.email}
            onChange={handleChange}
          />

          <label>Age</label>
          <input
            type="number"
            name="age"
            placeholder="Enter your age"
            value={user.age}
            onChange={handleChange}
          />

          <label>Gender</label>
          <select
            name="gender"
            value={user.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <label>Height (cm)</label>
          <input
            type="number"
            name="height"
            placeholder="Enter height"
            value={user.height}
            onChange={handleChange}
          />

          <label>Weight (kg)</label>
          <input
            type="number"
            name="weight"
            placeholder="Enter weight"
            value={user.weight}
            onChange={handleChange}
          />

          <label>Password</label>

          <div className="password-box">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Create password"
              value={user.password}
              onChange={handleChange}
            />

            <button
              type="button"
              className="show-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button
            type="submit"
            className="register-btn"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

          <div className="login-link">
            Already have an account?
            <a href="/login"> Login</a>
          </div>

        </form>

      </div>
    </div>
  );
}

export default Register;