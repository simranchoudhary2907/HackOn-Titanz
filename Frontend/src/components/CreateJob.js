import React from 'react';
import '../styles/CreateJob.css';
import exampleImage from '../assets/Illustration.png';
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <div>
      <div className='landingPage'>
        <nav className='nav'>
          <div className='User'>
            <p>
                 User
            </p>
          </div>
        </nav>
        <header className='header'>
          <div className='header_content'>
            <div className='first_text'>
              <h1>Create Job Opening</h1>
            </div>
            <div className='second_text'>
              <p> Register your opening here</p>
            </div>
            <div className=''>
            <button type="button">Create</button>
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
