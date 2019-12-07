import React from 'react';
import './index.scss';
import { info } from 'Configs';

const HomeHeader: React.FC = () => {
  return (
    <div className='home-header'>
      <img src="/assets/logo.png" alt="logo"/>
      <div className='home-header-right'>
        <h1>{info.name}'s blog</h1>
        <ul className='home-header-nav'>
          <li>Home</li>
          <li>About</li>
          <li>Writing</li>
          <li>Projects</li>
        </ul>
      </div>
    </div>
  )
}

export default HomeHeader;
