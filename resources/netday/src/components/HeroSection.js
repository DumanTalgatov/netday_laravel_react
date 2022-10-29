import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { useNavigate } from 'react-router-dom'  


function HeroSection() {
  const navigate = useNavigate()

  return (
    <div id="home" className='hero-container'>
        
      <h1>NETWORKING DAY</h1>
      <p>What are you waiting for?</p>
      
      <Button
      
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          // eslint-disable-next-line no-undef
          onClick={() => navigate("/#about")}
        >
         Register Now
        </Button>
   
    </div>
  );
}

export default HeroSection; 