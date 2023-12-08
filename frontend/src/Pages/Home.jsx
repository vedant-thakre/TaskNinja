import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import Profile from './Profile';
import Middle from './Middle';
import { useApp } from '../Context/AppContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const { isAuthenticated } = useApp();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className='flex min-h-screen bg-slate-200'>
      <Sidebar/>
      <Middle/>
      <Profile/>
    </div>
  );
};

export default Home;


