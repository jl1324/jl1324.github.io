import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';  // Ensure you style this to match the image

const Profile = () => {
  return (
    <div className='profile-page'>
    
      <div className="profile-container">

        {/* Profile Content */}
        <div className="profile-content">
          <div className="profile-info">
            <div className="profile-pic">
              <img src="./src/assets/Images/profile.png" alt="Profile" />
            </div>
            <h2>Tri Nhan Pham</h2>
            <p>⚲ Brisbane, Australia</p>
            <p className="about-me">Lorem ipsum bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla Swap with me!!!</p>
            <button className="edit-profile-button">Edit Profile</button>
          </div>

          {/* Items Section */}
          <div className="your-items">
            <h3>Your Items</h3>
            <div className="items-grid">
              <div className="item">
                <img src="https://via.placeholder.com/150" alt="Black Cotton T-shirt" />
                <p>Black Cotton T-shirt</p>
              </div>
              <div className="item">
                <img src="https://via.placeholder.com/150" alt="Blue Denim Jeans" />
                <p>Blue Denim Jeans</p>
              </div>
              <div className="item">
                <div className="plus-item">
                  <p>+3</p>
                </div>
              </div>
            </div>
            
          </div>
          <button className="manage-items-button">Manage Items</button>
        </div>
      </div>
      </div>
  );
};

export default Profile;
