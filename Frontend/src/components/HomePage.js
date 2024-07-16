import React from 'react';
import './HomePage.css';
import exampleImage from '../asserts/Illustration.png';
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <div>
      <div className='landingPage'>
        <nav className='nav'>
          <div className='Login_button'>
            <p>
                Login/Signup
            </p>
          </div>
        </nav>
        <header className='header'>
          <div className='header_content'>
            <div className='first_text'>
              <h1>Searching for a job</h1>
            </div>
            <div className='second_text'>
              <p> Here is your one way stop to find jobs most suitable for you</p>
            </div>
          </div>
          <div className='Img_content'>
            <img src={exampleImage}></img>
          </div>
        </header>
      </div>
      <div className="footer">
        <div className="style">
          <p>Made completely on Web3</p>
        </div>
      </div>
        
    </div>
  );
};

export default HomePage;
