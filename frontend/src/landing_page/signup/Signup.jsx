import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './Signup.css'
import axios from 'axios'

const Signup = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })
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
    const response = await axios.post("http://localhost:4000/signup", formData);

    console.log(response.data);
    alert("Signup successful!");
     setFormData({
    name: "",
    email: "",
    password: ""
  })
   navigate("/login");
  } catch (err) {
    console.error(err);
    alert("Signup failed!");
  }
 
  
};
  return (
  <div className="signup-page">
    <div className="signup-container">

      <h1>Create your account</h1>
      <p>Start your investing journey with us</p>

      <form onSubmit={handleSubmit}>

        <div className="input-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

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
          Sign Up
        </button>

      </form>

      <p className="login-text">
        Already have an account?
        <span onClick={() => navigate("/login")}>
          Login
        </span>
      </p>

    </div>
  </div>
);
}

export default Signup
