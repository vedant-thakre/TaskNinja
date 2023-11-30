import React from 'react';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';

const Middle = () => {
    
  return (
    <div className='w-full px-0 xl:px-[250px]'>
      <Navbar/>
       <Routes>
          <Route/>  
       </Routes>
    </div>
  )
}

export default Middle