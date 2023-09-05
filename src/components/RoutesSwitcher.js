import React from 'react';
//importing routes and the needed dependencies
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { OrderPage } from './pages/OrderPage';
import { MenuPage } from './pages/MenuPage';
import { BookingPage } from './pages/BookingPage';
import { LoginPage } from './pages/LoginPage';
import { Confirmation } from './Confirmation';

export const RoutesSwitcher = () => {
  return (
    <Routes>
      <Route path='/' exact element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/order' element={<OrderPage />} />
      <Route path='/booking' element={<BookingPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/menu' element={<MenuPage />} />
      <Route path='/confirmed' element={<Confirmation />} />
    </Routes>
  );
};
