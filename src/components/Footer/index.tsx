import React from 'react';
import './index.scss';

const Footer : React.FC = () => {
  return (
    <div className='footer'>
      <div className='footer-left'>Copyright © 2019 Wzb3422</div>
      <ul className='footer-right'>
        <li>Home</li>
        <li>About</li>
        <li>Writing</li>
        <li>Projects</li>
      </ul>
    </div>
  )
}

export default Footer;
