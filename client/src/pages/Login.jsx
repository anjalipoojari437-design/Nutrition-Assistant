import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      <div className="login-card">

        <div className="login-header">
          <h1>🥗 Nutrition Assistant</h1>
          <p>Welcome Back!</p>
        </div>

        <form className="login-form">

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
          />

          <label>Password</label>

          <div className="password-box">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
            />

            <button
              type="button"
              className="show-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <div className="forgot">
            <a href="#">Forgot Password?</a>
          </div>

          <button className="login-btn">
            Login
          </button>

          <div className="register-link">
            Don't have an account?
            <a href="#"> Register</a>
          </div>

        </form>

      </div>
    </div>
  );
}

export default Login;