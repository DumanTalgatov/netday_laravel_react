import React from 'react';
import '../App.css';

import './Awards.css';
import line from '../assets/images/hr-line.png'



function Awards() {
  return (
    <>
    <div data-aos="fade-up" id="awards" className='awardSection'>
    <h1>AWARDS</h1>
    <div className="flex-center">
                        <img src={line} alt="hr-line" className="underline"/>
                    </div>
            <div className='imgAward'>
        <img className='imgo' src="images/awards.png" alt='netday' /> 
        </div>
    </div>
    </>
  );
}

export default Awards; 