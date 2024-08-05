import React, { useState } from 'react';
import '../css/Login.css';
import image from '../assets/Logininpageimage.png'

const Login = ({ navigateTo }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      navigateTo('home');
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="login-container">
      <div className="header">
        <h1>B.planet</h1>
        <div className="contact-us" onClick={() => navigateTo('contact')}>
          <button>Contact us</button>
        </div>
      </div>
      <div className="login-content">
        <div className="login-image">
          <img src={image} alt="Plant" />
        </div>
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
          </form>
          <p>
            Don't have an account yet? <a onClick={() => navigateTo('signup')}>Sign up for free</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
