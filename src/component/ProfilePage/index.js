import React from 'react';
import './index.css';

const ProfilePage = () => {
  return (
    <div className="profile-container">
      <div className='account-container'>
        Account Details
      </div>
      <div className="profile-content">
        <div className="profile-picture">
          <img src="profile-picture.jpg" alt="Profile" />
        </div>
        <div className="profile-details">
          <h3>John Doe</h3>
          <p>john.doe@example.com</p>
        </div>
      </div>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Praesent lacinia ac dui ac tincidunt. Ut ac fermentum ante.
      Ut faucibus neque dui, at faucibus mauris placerat a.
      Mauris venenatis ante vel eros congue, ac condimentum erat efficitur.
      </p>
    </div>
  );
};

export default ProfilePage;
