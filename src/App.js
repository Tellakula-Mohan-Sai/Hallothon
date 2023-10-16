import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import axios from 'axios';


const App = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState(''); // Add name state
  const [mobile, setMobile] = useState(''); // Add mobile state

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (isLogin) {
      // Handle login
      axios.post('http://127.0.0.1:5000/login',{
        email: email,
        password: password,
      })
      .then(function(response) {
        console.log(response)
        if (response.status === 200) {
          console.log(response.data);
          window.id = email;
          console.log(window.id)
          navigate('/userhome');
        } else {
          alert(response.data);
        }
      });
    }
     else {
      // Handle registration
      axios.post('http://127.0.0.1:5000/register', {
        email: email,
        password: password,
        name: name, // Add name field
        mobile: mobile // Add mobile field
      })
      .then(function(response) {
        if (response.status === 200) {
          // Registration successful, you can navigate to the login page or handle it as needed
          window.id = email;
          console.log(window.id)
          navigate('/userhome');
        } 
        else if(response.status===250){
          alert("User Already exists / Invalid User");
        }
        else{
          console.log(response.data);
        }
      });
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            </div>
          {!isLogin && (
            <>
              <div className="form-group">
                <label>Confirm Password:</label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Mobile:</label>
                <input
                  type="text"
                  placeholder="Enter your mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
              </div>
            </>
          )}
          <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>
        <p onClick={toggleForm} className="toggle-form">
          {isLogin ? 'Create an account' : 'Already have an account? Login'}
          </p>
      </div>
    </div>
  );
};

export default App;