import React from 'react';
import { info } from 'Configs';

const Intro: React.FC = () => {
  return (
    <p
      style={{
        fontSize: '14px',
        textAlign: 'justify',
        lineHeight: 1.725,
        margin: '15px 0'
      }}
    >
      {info.introduction}
    </p>
  )
}

export default Intro;
