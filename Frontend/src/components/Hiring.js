import React from 'react';
import '../styles/Hiring.css';
import exampleImage from '../assets/Illustration.png';
import { Link } from 'react-router-dom';
const Hiring = () => {
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
              <h1>We Are Hiring</h1>
            </div>
            <div className='second_text'>
            <div className='second_content'>

          
              <p> Lorem ipsum dolor sit amet consectetur. Quam cras molestie consequat
                   quis enim netus pharetra. Enim libero sed urna in. Faucibus justo tellus
                    eget arcu. Turpis sed fermentum et risus cursus enim mauris suspendisse. 

                    Lorem ipsum dolor sit amet consectetur. Quam cras molestie consequat
                    quis enim netus pharetra. Enim libero sed urna in. Faucibus justo tellus
                    eget arcu. Turpis sed fermentum et risus cursus enim mauris suspendisse
                    </p>
                    </div>
                <div className=''>
                <button type="button">REGISTER</button>
                </div>
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

export default Hiring;
