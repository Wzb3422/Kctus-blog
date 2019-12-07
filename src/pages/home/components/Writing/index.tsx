import React from 'react';
import './index.scss';

const Writing: React.FC = () => {
  return (
    <div className='home-Writing'>
      <h1>Writing</h1>
      <ul>
        <li>
          <span className='home-writing-item-date'>2019-12-08</span>
          <span className='home-writing-item-title'>Hello world</span>
        </li>
        <li>
          <span className='home-writing-item-date'>2019-12-09</span>
          <span className='home-writing-item-title'>Good Morning</span>
        </li>
        <li>
          <span className='home-writing-item-date'>2019-12-11</span>
          <span className='home-writing-item-title'>God said: let there be light.</span>
        </li>
        <li>
          <span className='home-writing-item-date'>2019-12-08</span>
          <span className='home-writing-item-title'>Hello world</span>
        </li>
        <li>
          <span className='home-writing-item-date'>2019-12-09</span>
          <span className='home-writing-item-title'>Good Morning</span>
        </li>
        <li>
          <span className='home-writing-item-date'>2019-12-11</span>
          <span className='home-writing-item-title'>God said: let there be light.</span>
        </li>
      </ul>
    </div>
  )
}

export default Writing;
