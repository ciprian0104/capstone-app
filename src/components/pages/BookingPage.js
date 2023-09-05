import React from 'react';
import { useState, useEffect } from 'react';
import '../../css/Booking.css';
import { BookingForm } from './../BookingForm';

export const BookingPage = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className='reservation-w50 fh'>
      <div>
        <h2 className='welcome-header'>
          Welcome to Little Lemon! Book a table:
        </h2>
        <BookingForm />
      </div>
    </div>
  );
};
