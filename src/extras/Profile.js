import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css'; // Add your custom styles for Profile component here
import Navbar from './Navbar';

const Profile = () => {
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState('Profile');
  const [userProfile, setUserProfile] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    switch (option) {
    
      case 'Challenges':
        navigate('/challenges');
        break;
      case 'Profile':
        navigate('/profile');
        break;
      case 'Leaderboard':
        navigate('/leaderboards');
        break;
      default:
        navigate('/userhome');
        break;
    }
  };
  return (
    <div className="profile-container">
      <Navbar/>
      {/* Navbar */}
      <div className="navbar">
        <div className="logo">Finance App</div>
        <div className="nav-options">
          <div
            className={`nav-option ${selectedOption === 'Home' ? 'active' : ''}`}
            onClick={() => handleOptionClick('Home')}
          >
            Home
          </div>
          <div
            className={`nav-option ${selectedOption === 'Challenges' ? 'active' : ''}`}
            onClick={() => handleOptionClick('Challenges')}
          >
            Challenges
          </div>
          <div
            className={`nav-option ${selectedOption === 'Leaderboard' ? 'active' : ''}`}
            onClick={() => handleOptionClick('Leaderboard')}
          >
            Leaderboard
          </div>
          <div
            className={`nav-option ${selectedOption === 'Profile' ? 'active' : ''}`}
            onClick={() => handleOptionClick('Profile')}
          >
            Profile
          </div>
        </div>
      </div>

      {/* Profile content */}
      <div className="content">
        {/* Your Profile component content goes here */}
      </div>
    </div>
  );
};

export default Profile;
