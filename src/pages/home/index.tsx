import React, { Suspense, lazy } from 'react';
import './index.scss';

const HomeHeader = lazy(() => import('./components/HomeHeader/index'));
const Intro = lazy(() => import('./components/Intro/index'))

const Home: React.FC = () => {
  return (
    <>
      <div className='home-content-limit'>
        <div className='home-content'>
          <HomeHeader />
          <Intro />
        </div>
      </div>
    </>
  )
}

export default Home;
