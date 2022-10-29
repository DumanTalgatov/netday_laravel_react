import React, {useState, useEffect} from 'react'
import { HashLink } from 'react-router-hash-link'
import { Button } from './Button';
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false);

  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth<=960){
      setButton(false)
    } else{
      setButton(true)
    }
  };

  useEffect(() => {
    showButton();
  },[]);

  const scrollWithOffsetAbout= (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -90; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }

  const scrollWithOffsetPartners = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -250; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

const scrollWithOffsetSchedule= (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -170; 
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}
const scrollWithOffsetAwards= (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -100; 
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}
const scrollWithOffsetCont= (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -80; 
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

  window.addEventListener('resize', showButton);

  return (
    <>
    <nav className='navbar'>
      <div className='navbar-container'>
        <HashLink to="#top" className='navbar-logo' spy={true} smooth={true} offset={500} duration={500} onClick={closeMobileMenu}>
        <svg width="140" height="36" viewBox="0 0 140 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.7678 14.3308C24.1817 16.7487 29.5426 24.1941 19.3817 26.0163C15.7726 26.6635 13.2672 27.235 13.5816 31.4752C13.8214 34.7366 17.0302 36.9373 20.5014 35.321C25.5997 32.9482 20.6425 24.5241 30.6802 23.5517C40.5608 22.5956 36.1512 11.5684 29.7678 14.3308Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.8163 1.47815C11.0016 4.59794 16.2296 11.1161 5.1255 12.9222C-4.06314 14.4178 1.12107 25.49 7.451 21.8903C12.2965 19.1328 6.9486 11.4525 18.069 10.2773C26.9739 9.3355 22.4477 -2.81679 15.8163 1.47815Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.0804 14.1102C10.7067 15.7683 13.5833 25.2097 19.8192 23.199C25.368 21.4073 23.4573 12.4521 17.0804 14.1102Z" fill="white"/>
<path d="M53.3384 18.75L51.6634 15.25H51.5884V27H48.0134V9.55H52.1634L56.9384 17.8L58.6134 21.3H58.6884V9.55H62.2634V27H58.1134L53.3384 18.75ZM66.1042 27V9.55H77.9792V12.925H69.9042V16.5H76.8292V19.85H69.9042V23.625H77.9792V27H66.1042ZM88.5647 12.925V27H84.7647V12.925H80.0397V9.55H93.2897V12.925H88.5647ZM96.289 9.55H102.139C103.223 9.55 104.206 9.7333 105.089 10.1C105.973 10.4667 106.723 11.0167 107.339 11.75C107.973 12.4667 108.456 13.375 108.789 14.475C109.123 15.5583 109.289 16.825 109.289 18.275C109.289 19.725 109.123 21 108.789 22.1C108.456 23.1833 107.973 24.0917 107.339 24.825C106.723 25.5417 105.973 26.0833 105.089 26.45C104.206 26.8167 103.223 27 102.139 27H96.289V9.55ZM102.139 25.15C102.856 25.15 103.514 25.0333 104.114 24.8C104.714 24.55 105.231 24.1917 105.664 23.725C106.098 23.2583 106.431 22.6917 106.664 22.025C106.914 21.3417 107.039 20.5667 107.039 19.7V16.85C107.039 15.9833 106.914 15.2167 106.664 14.55C106.431 13.8667 106.098 13.2917 105.664 12.825C105.231 12.3583 104.714 12.0083 104.114 11.775C103.514 11.525 102.856 11.4 102.139 11.4H98.389V25.15H102.139ZM123.694 27L121.944 21.85H114.894L113.144 27H111.019L117.119 9.55H119.794L125.894 27H123.694ZM118.469 11.5H118.344L115.394 20H121.419L118.469 11.5ZM131.417 27V20.1L125.417 9.55H127.817L132.467 17.95H132.542L137.192 9.55H139.592L133.517 20.025V27H131.417Z" fill="white"/>
</svg>


        </HashLink>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
          <HashLink  to="/#about"
             scroll={el => scrollWithOffsetAbout(el)}  className='nav-links' onClick={closeMobileMenu}>
              What is?
            </HashLink>
          </li>
          <li className='nav-item'>
            <HashLink to='/#info'  className='nav-links' scroll={el => scrollWithOffsetSchedule(el)} onClick={closeMobileMenu}>
              Schedule
            </HashLink>
          </li>
          <li className='nav-item'>
            <HashLink to='/#awards' className='nav-links' scroll={el => scrollWithOffsetAwards(el)} onClick={closeMobileMenu}>
              Awards
            </HashLink>
          </li>
          <li className='nav-item'>
            <HashLink  to="/#partners"
              scroll={el => scrollWithOffsetPartners(el)}
               className='nav-links' onClick={closeMobileMenu}>
              Partners
            </HashLink>
          </li>
          <li className='nav-item'>
            <HashLink to='/#contacts' scroll={el => scrollWithOffsetCont(el)} className='nav-links' onClick={closeMobileMenu}>
              Contacts
            </HashLink>
          </li>
          <li className='nav-item'>
            <HashLink to='/#registration' className='nav-links-mobile' onClick={closeMobileMenu}>
              Register
            </HashLink>
          </li>
        
        </ul>
        {button && <Button  buttonStyle='btn--outline'>Register</Button>}
      </div>
    </nav>
    </>
  )
}

export default Navbar;
