import React from 'react';
import { useState, useEffect } from 'react';

export const BookingPage = () => {
  const [date, setDate] = useState(new Date());

  return (
    <form className='submit-form'>
      <label htmlFor='res-date'>Choose date</label>
      <input
        type='date'
        id='res-date'
        value={date.toISOString().split('T')[0]}
        required
        min={new Date().toISOString().split('T')[0]}
      />

      <label htmlFor='res-time'>Choose time</label>
      <select id='res-time' required>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
      </select>

      <label htmlFor='guests'>Number of guests</label>
      <input
        type='number'
        placeholder='1'
        min='1'
        max='10'
        id='guests'
        required
      />

      <label htmlFor='occasion'>Occasion</label>
      <select id='occasion' value='Which' required>
        <option value='birthday'>Birthday</option>
        <option value='anniversary'>Anniversary</option>
        <option value='other'>Other</option>
      </select>

      <button type='submit'>Submit</button>
    </form>
  );
};
