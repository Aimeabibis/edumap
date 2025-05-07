import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './pages/home';
import { Add } from './pages/add';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { Maps } from './pages/map';
import { About } from './pages/about';
import { Admin } from './admin/admin';
import { Don } from './pages/don';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/add' element={<Add/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/map' element={<Maps/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/don' element={<Don/>} />


      </Routes>
    </BrowserRouter>
    
  );
};

export default App;