import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'
import axios from "axios";

const Login = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
    const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://tradeflow-7egr.onrender.com/login",
        formData,
        {
    withCredentials: true,
  }
      );

      console.log(response.data);

      // Store JWT token
      // localStorage.setItem("token", response.data.token);

      alert("Login successful!");
      window.location.href = "https://tradeflow-dashboard-wbks.onrender.com";

    } catch (err) {
      console.error(err);
      alert("Login failed!");
    }

    setFormData({
      email: "",
      password: ""
    });
  };

 return (
    <div className="login-page">

      <div className="login-container">

        <h1>Welcome Back</h1>

        <p>Login to continue to your account</p>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit">
            Login
          </button>

        </form>

        <p className="signup-text">
          Don't have an account?
          <span onClick={() => navigate ("/signup")}>
            Sign Up
          </span>
        </p>

      </div>

    </div>
  );
};

export default Login;