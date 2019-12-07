import React from 'react';
import './index.scss';

const Projects : React.FC = () => {
  return (
    <div className='home-projects'>
      <h1>Projects</h1>
      <ul>
        <li>
          <span className='home-projects-item-name'>Hexo</span>:&nbsp;
          <span className='home-projects-item-desc'>Hello world</span>
        </li>
        <li>
          <span className='home-projects-item-name'>Hexo</span>:&nbsp;
          <span className='home-projects-item-desc'>Hello world</span>
        </li>
        <li>
          <span className='home-projects-item-name'>Hexo</span>:&nbsp;
          <span className='home-projects-item-desc'>Hello world</span>
        </li>
      </ul>
    </div>
  )
}

export default Projects;
