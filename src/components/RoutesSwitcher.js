import React from 'react';
//importing routes and the needed dependencies
import { Route, Routes, Router } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Order } from './pages/Order';
import { Menu } from './pages/Menu';
import { Booking } from './pages/Booking';
import { Login } from './pages/Login';

export const RoutesSwitcher = () => {
  return (
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/order' element={<Order />} />
      <Route path='/booking' element={<Booking />} />
      <Route path='/login' element={<Login />} />
      <Route path='/menu' element={<Menu />} />
    </Routes>
  );
};
