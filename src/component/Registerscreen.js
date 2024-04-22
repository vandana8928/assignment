// src/components/Register.js

import React, { useState } from 'react';
import './Register.css'; // Import external CSS file
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    mobileNumber: '',
    companyType: '',
    agency: ''
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

    // Perform registration logic here (e.g., API request)
    console.log('Registering with:', formData);

    // Reset form fields
    setFormData({
      username: '',
      password: '',
      email: '',
      mobileNumber: '',
      companyType: '',
      agency: ''
    });
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-input-container">
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
          <div className="form-input-container">
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
          <div className="form-input-container">
            <label htmlFor="email" className="form-label">
              Email <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-input-container">
            <label htmlFor="mobileNumber" className="form-label">
              Mobile Number <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="text"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-input-container">
            <label htmlFor="companyType" className="form-label">
              Company Type <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="text"
              id="companyType"
              name="companyType"
              value={formData.companyType}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-input-container">
            <label htmlFor="agency" className="form-label">
              Are you in agency? <span style={{ color: 'red' }}>*</span>
            </label>
            <div className="radio-container">
              <div className="radio-input">
                <input
                  type="radio"
                  name="agency"
                  id="agencyYes"
                  value="yes"
                  checked={formData.agency === 'yes'}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="agencyYes">Yes</label>
              </div>
              <div className="radio-input">
                <input
                  type="radio"
                  name="agency"
                  id="agencyNo"
                  value="no"
                  checked={formData.agency === 'no'}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="agencyNo">No</label>
              </div>
            </div>
          </div>
          <div className="d-grid gap-2">
            {/* Use Link to navigate to '/user' when button is clicked */}
            <Link to="/user" className="btn btn-purple submit-button">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
