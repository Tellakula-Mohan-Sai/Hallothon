

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import UserHome from './UserHome';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/userhome" element={<UserHome/>} />
    </Routes>
  </Router>,
  document.getElementById('root')
);