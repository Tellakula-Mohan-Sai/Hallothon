import React, { useState } from 'react';
import './UserHome.css';
import { useNavigate } from 'react-router-dom';



const UserHome = () => {
    const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('Home');
  const [selectedStock, setSelectedStock] = useState(null);
  const [stocks, setStocks] = useState([
    { symbol: 'AAPL', name: 'Apple Inc.', price: 150.25, prevClose: 148.50 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 2700.75, prevClose: 2685.90 },
    // Add more stock data
  ]);
  const [news, setNews] = useState([
    { title: 'Sample News 1', description: 'Description of sample news 1' },
    { title: 'Sample News 2', description: 'Description of sample news 2' },
    // Add more news data
  ]);

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
        navigate('/');
        break;
    }
  };

  const handleStockSelect = (symbol) => {
    const selectedStock = stocks.find((stock) => stock.symbol === symbol);
    setSelectedStock(selectedStock);
  };
  
  return (
    <div  className="user-home-container" >
      <div className="navbar">
        <div className="logo">Finance App</div>
        <div className="nav-options">
          <div className={`nav-option ${selectedOption === 'Home' ? 'active' : ''}`} onClick={() => handleOptionClick('Home')}>Home</div>
          <div className={`nav-option ${selectedOption === 'Challenges' ? 'active' : ''}`} onClick={() => handleOptionClick('Challenges')}>Challenges</div>
          <div className={`nav-option ${selectedOption === 'Leaderboard' ? 'active' : ''}`} onClick={() => handleOptionClick('Leaderboard')}>Leaderboard</div>
          <div className={`nav-option ${selectedOption === 'Profile' ? 'active' : ''}`} onClick={() => handleOptionClick('Profile')}>Profile</div>
        </div>
      </div>

      <div className="content">
      

          {/* <h2>Top Stocks</h2>
        <div className="stock-card">
          <select onChange={(e) => handleStockSelect(e.target.value)}>
            {stocks.map((stock) => (
              <option key={stock.symbol} value={stock.symbol}>
                {stock.name}
              </option>
            ))}
          </select>
          {selectedStock && (
            <div className="stock-details">
              <p>Symbol: {selectedStock.symbol}</p>
              <p>Price: ${selectedStock.price}</p>
              <p>Previous Close: ${selectedStock.prevClose}</p>
            </div>
          )}
        </div> */}

      </div>
        <h2>Financial News</h2>
      <div className="news-section">
        <br></br>
        {news.map((item, index) => (
          <div key={index} className="news-item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div> 
  );
};

export default UserHome;
