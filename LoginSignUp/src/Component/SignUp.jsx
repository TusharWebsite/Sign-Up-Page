import React, { useState } from 'react';
import './SignUp.css';
import axios from 'axios';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/signup', {
        email,
        password,
      });

      console.log('Response:', response.data);
      
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="container">
      <div className="truck">
        <img
          src="https://media.istockphoto.com/id/1465157700/photo/brightly-red-colored-semi-truck-speeding-on-a-two-lane-highway-with-cars-in-background-under.webp?b=1&s=170667a&w=0&k=20&c=sPYVxhIZwoQ9__O8KukZ5eILdhzSMvwUYrS3n11FGx4="
          alt=""
          width={499}
          height={498}
        />
      </div>

      <div className="signup-data">
        <div className="headers">
          <div className="text">Sign Up to APML</div>
          <div className="underline"></div>
        </div>
        <div className="text1">
          <p>
            Don't have an account? <a href="/">Get Started</a>
          </p>
        </div>
        <form>
          <input
            type="email"
            placeholder="Email Address*"
            required
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            placeholder="Password*"
            required
            value={password}
            onChange={handlePasswordChange}
          />

          <div className="forgot-password">
            <a href="/">Forgot Password?</a>
          </div>

          <button className="submit" onClick={handleSubmit}>
            Sign Up
          </button>
        </form>

        <div className="or">OR</div>
        <div className="google">
          <img
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            alt="google"
            width={30}
            height={30}
          />
          <a href="/">Sign in with Google</a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
