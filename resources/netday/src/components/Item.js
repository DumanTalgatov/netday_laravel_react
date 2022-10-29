/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react'



function Item(props) {
  return (
    <>
    <li className='cards__item'>
            <figure className='cards__item__pic-wrap' data-category={props.label}>
               <img src={props.src} alt='CourseImage' 
               className='cards__item__img'/> 
            </figure>
        </li>    
    </>
  )
}

export default Item
