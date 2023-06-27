import React, { useState } from 'react';
import axios from 'axios';
import setAuthHeader from '../../hearders';
import { RiLogoutCircleRLine } from 'react-icons/ri';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Send a request to the backend to authenticate the user
    // Replace `your-backend-url` with the actual URL of your backend endpoint
    axios
      .post('your-backend-url/login', {
        username,
        password,
      })
      .then((response) => {
        // Check if login was successful
        if (response.data.token) {
          // Save the JWT token in the header
          setAuthHeader(response.data.token);

          // Redirect to the protected page or perform any other action
          // Replace `protected-page.html` with the actual URL of your protected page
          window.location.href = 'protected-page.html';
        } else {
          setError('Login failed. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setError('An error occurred. Please try again later.');
      });
  };

  const handleLogout = () => {
    // Perform logout functionality here
    // For example, clear local storage, reset state, etc.
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="container">
        <h1 className="text-center">Login Page</h1>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <button className="btn btn-link logout-button" onClick={handleLogout}>
            <span>
              <RiLogoutCircleRLine />
            </span>
            Logout
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

