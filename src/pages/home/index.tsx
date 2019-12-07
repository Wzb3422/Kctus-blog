import React, { Suspense, lazy } from 'react';
import './index.scss';

const HomeHeader = lazy(() => import('./components/HomeHeader/index'));
const Intro = lazy(() => import('./components/Intro/index'));
const Writing = lazy(() => import('./components/Writing/index'));
const Projects = lazy(() => import('./components/Projects/index'));
const Footer = lazy(() => import('../../components/Footer/index'));

const Home: React.FC = () => {
  return (
    <>
      <div className='home-content-limit'>
        <div className='home-content'>
          <HomeHeader />
          <Intro />
          <Writing />
          <Projects />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Home;
