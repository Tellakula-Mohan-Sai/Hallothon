

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import UserHome from './UserHome';
import Challenges from './Challenges';
import Profile from './Profile';
import Leaderboards from "./Leaderboards"
ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route path="/userhome" element={<UserHome/>} />
      <Route path="/challenges" element={<Challenges/>} />
      <Route path="/leaderboards" element={<Leaderboards/>} />
      <Route path="/profile" element={<Profile/>} />
    </Routes>
  </Router>,
  document.getElementById('root')
);