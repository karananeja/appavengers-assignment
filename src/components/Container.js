import React from 'react';
import MainSection from './MainSection';
import Sidebar from './Sidebar';
import '../css/Container.css';

function Container() {
  return (
    <div className='container'>
      <Sidebar />
      <MainSection />
    </div>
  );
}

export default Container;
