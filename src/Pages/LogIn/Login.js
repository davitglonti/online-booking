import React, { useState,useEffect } from 'react';
import './Login.css';

const Login = ({isLoggedIn, onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [userData, setUserData] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Extract data from local storage
    const storedData = localStorage.getItem('userData');

    // Check if data exists in local storage
    if (storedData) {
      // Parse the stored data from JSON to JavaScript object
      const parsedData = JSON.parse(storedData);
      // Update the state with the extracted data
      setUserData(parsedData);
    }
  }, []); 
  console.log(userData)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      // If no errors, simulate login logic
      if (userData && formData.email === userData.email && formData.password === userData.password) {
        console.log('Login successful');
        window.location.href = '/service';
        onLogin();
      } else {
        setErrors({ login: 'Invalid email or password' });
      }
    } else {
      setErrors(errors);
    }
  };

  const validateForm = (data) => {
    let errors = {};
    // Your validation logic goes here
    return errors;
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <div className="email-login">
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.login && <p className="error-message">{errors.login}</p>}
        </div>

        <button className="cta-btn" type="submit">
          Continue
        </button>
      </form>

      <p className="subtitle">
        By signing in or creating an account you agree with our <a href="#">Terms & conditions</a>
      </p>
    </div>
  );
};

export default Login;