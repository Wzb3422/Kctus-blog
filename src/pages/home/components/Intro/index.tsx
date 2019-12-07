import React from 'react';
import { info } from 'Configs';
import './index.scss';

const Intro: React.FC = () => {
  return (
    <p className='home-header-intro'>
      {info.introduction}
    </p>
  )
}

export default Intro;
