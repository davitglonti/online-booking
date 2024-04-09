import React, { useState } from 'react';
import './Register.css'; // Import your CSS file

const Register = () => {
  // State for form data and errors
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    photo: null, // Add photo state
  });
  const [errors, setErrors] = useState({});

  // Function to handle changes in form fields
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'photo') {
      // If it's a file input for photo, update photo state
      setFormData({
        ...formData,
        [name]: files[0], // Store the selected file object
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      // Save form data to local storage
      localStorage.setItem('userData', JSON.stringify(formData));
      // Redirect to login page
      window.location.href = '/login'; // Assuming '/login' is the route for your login page
    } else {
      setErrors(errors);
    }
  };

  // Function to validate form data
  const validateForm = (data) => {
    let errors = {};

    // Validate password length
    if (data.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    // Validate password for at least one capital letter
    if (!/[A-Z]/.test(data.password)) {
      errors.password = "Password must contain at least one capital letter";
    }

    // Check if passwords match
    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = "Passwords don't match";
    }

    // Other validation logic goes here

    return errors;
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <div className="email-login">
          {/* Form fields for registration */}
          <label htmlFor="firstName">
            <b>First Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter your first name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />

          <label htmlFor="lastName">
            <b>Last Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter your last name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="email"
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
          {/* Display error message for password */}
          {errors.password && <p className="error-message">{errors.password}</p>}

          <label htmlFor="confirmPassword">
            <b>Confirm Password</b>
          </label>
          <input
            type="password"
            placeholder="Re-enter your Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {/* Display error message for confirmPassword */}
          {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}

          {/* Upload photo */}
          {formData.photo ? (
            <>
              <img
                src={URL.createObjectURL(formData.photo)}
                alt="Uploaded"
                style={{ maxWidth: '101px', height: '100px', borderRadius: '50%', marginTop: '10px' }}
              />
            </>
          ) : (
            <>
              <label htmlFor="photo">
                <b>Photo</b>
              </label>
              <input type="file" name="photo" onChange={handleChange} accept="image/*" />
            </>
          )}
        </div>

        {/* Submit button */}
        <button className="cta-btn" type="submit">
          Continue
        </button>
      </form>
    </div>
  );
};

export default Register;
