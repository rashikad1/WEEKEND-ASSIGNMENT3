import React, { useState } from 'react';
import '../css/Signup.css';

const SignUp = ({ navigateTo }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password && confirmPassword) {
      if (password === confirmPassword) {
        alert('Account created successfully!');
        navigateTo('login');
      } else {
        alert('Passwords do not match.');
      }
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="signup-container">
      <div className="header">
        <h1>B.planet</h1>
        <div className="contact-us" onClick={() => navigateTo('contact')}>
          <span>Contact us</span>
        </div>
      </div>
      <div className="signup-content">
        <h2>Sign Up</h2>
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account?{' '}
          <span className="login-link" onClick={() => navigateTo('login')}>
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
