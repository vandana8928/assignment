// src/components/UserCard.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import './UserCard.css';

const UserCard = () => {
  return (
    <div className="user-card">
      <h4 className="account-settings-title">Account Settings</h4>
      <div className="content">
        <div className="profile-picture-container">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
            alt="Profile"
            className="profile-picture"
          />
          <div className="camera-icon">
            <FontAwesomeIcon icon={faCamera} />
          </div>
        </div>
        <div className="user-info">
          <h3>hello</h3>
          <p className="bold">hello123@gmail.com</p>
        </div>
      </div>
      <p className="additional-content">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book.
      </p>
    </div>
  );
};

export default UserCard;
