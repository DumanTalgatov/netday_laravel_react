import React from 'react';
import '../App.css';

import './About.css';

function About() {
  return (
    <>
    <div data-aos="fade-up" id="about" className='mainSection'>
        <div className='contentBox'>
            <h1 >NETWORKING DAY</h1>
            <p>SDU is inviting young talents with an interest 
                in Computer Networking, Network Security, to participate in an 
                epic battle for the title of best Networking Talent of 2022. There will be an 
                individual duel, a team game and an incredibly cool quest. Take part and you will get a 
                cool experience and new acquaintances and valuable prizes as a bonus</p>
        </div>
        <div className='imgContainer'>
        <img src="images/vas.png" alt='netday'/> 
        </div>
    </div>
    </>
  );
}

export default About; 