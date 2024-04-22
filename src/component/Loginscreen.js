// src/components/Login.js

import React, { useState } from 'react';
import './Login.css'; // Import external CSS file
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform login logic here (e.g., API request)
    console.log('Logging in with:', formData);

    // Reset form fields
    setFormData({
      username: '',
      password: ''
    });
  };

  return (
    <div className="login-container">
      <div className="login-card p-4">
        <h2 className="login-title text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-input-container mb-3">
            <label htmlFor="username" className="form-label">
              Username <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-input-container mb-3">
            <label htmlFor="password" className="form-label">
              Password <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="d-grid gap-2">
            {/* Use Link to navigate to '/user' when button is clicked */}
            <Link to="/user" className="btn btn-purple submit-button">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
