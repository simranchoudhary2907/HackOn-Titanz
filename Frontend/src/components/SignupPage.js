import React, { useState } from 'react';
import './SignupPage.css';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (event) => {
    event.preventDefault();
    // Add signup logic here
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <p className="title">Create account</p>
        <p className="sub-title">Let's get started with your 30 days free trial</p>
        <form className="form" onSubmit={handleSignup}>
          <input type="text" className="input" placeholder="Name" />
          <input type="email" className="input" placeholder="Email" />
          <input type="password" className="input" placeholder="Password" />
          <button className="form-btn" type="submit">Create account</button>
        </form>
        <p className="sign-up-label">
          Already have an account? <span className="sign-up-link">Log in</span>
        </p>
        <div className="buttons-container">
          <div className="apple-login-button">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" className="apple-icon" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z"></path>
            </svg>
            <span>Sign up with Apple</span>
          </div>
          <div className="google-login-button">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" x="0px" y="0px" className="google-icon" viewBox="0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
    c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
    c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
              <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,19.018,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
    C34.046,6.053,29.268,4,24,4C15.642,4,8.343,8.924,6.306,14.691z"></path>
              <path fill="#4CAF50" d="M24,44c5.116,0,9.771-1.955,13.314-5.139l-6.102-5.19C28.845,34.627,26.522,35.999,24,36
    c-5.204,0-9.611-3.329-11.254-7.977l-6.491,5.006C8.333,39.751,15.614,44,24,44z"></path>
              <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.733,2.069-1.981,3.925-3.604,5.334
    c0.002-0.001,0.003-0.002,0.005-0.004l6.102,5.19c-0.433,0.387,6.895-5.027,6.895-5.027c-0.112,0.095,0.007-0.006,0,0
    C43.087,29.432,44,26.788,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
            </svg>
            <span>Sign up with Google</span>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="style">Made completely on Web3</div>
      </div>
    </div>
  );
}

export default SignupPage;


