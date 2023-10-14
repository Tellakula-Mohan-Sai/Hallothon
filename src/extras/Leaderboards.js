import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Leaderboards.css'; // Add your custom styles for Leaderboards component here

const Leaderboards = () => {
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState('Leaderboard');
  const [selectedLeaderboard, setSelectedLeaderboard] = useState(null);

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
    <div className="leaderboards-container">
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

      {/* Leaderboards content */}
      <div className="content">
        {/* Your Leaderboards component content goes here */}
      </div>
    </div>
  );
};

export default Leaderboards;