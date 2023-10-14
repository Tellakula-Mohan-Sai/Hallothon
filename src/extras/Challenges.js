import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Challenges.css'; // Add your custom styles for Challenges component here

import { Card,CardMedia } from '@mui/material';
const Challenges = () => {
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState('Challenges');
  const [selectedChallenge, setSelectedChallenge] = useState(null);

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
    <div className="challenges-container">
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

      {/* Challenges content */}
      <div className="content">
      <Card>
    <CardMedia>
        <img src="https://wallpaperboat.com/wp-content/uploads/2021/04/15/75170/finance-02.jpg"/>
    </CardMedia>
</Card>
   
      </div>
    </div>
  );
};

export default Challenges;
