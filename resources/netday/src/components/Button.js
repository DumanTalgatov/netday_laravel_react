
import React, {useState, useEffect} from 'react'
import './Button.css';
import { HashLink } from 'react-router-hash-link'

const STYLES = ['btn--primary', 'btn--outline', 'btn--white'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const [click, setClick] = useState(false);

  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);
  
  const scrollWithOffsetReg= (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -85; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }

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

  return (
    <HashLink to='/#registration' smooth={true}
    scroll={el => scrollWithOffsetReg(el)}  className='btn-mobile' onClick={closeMobileMenu}>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
     </HashLink>
  );
};
