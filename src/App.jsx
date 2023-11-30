import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Let1 from './Components/Let1';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/home/*' element={<Home/>} />
        <Route path='/temp/*' element={<Let1/>} />
      </Routes>
    </>
  )
}

export default App