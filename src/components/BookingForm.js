import './../css/BookingForm.css';
import React, { useState, useEffect } from 'react';
import { fetchAPI, submitAPI } from './../api';
import { useNavigate } from 'react-router-dom';

export const BookingForm = () => {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('1');
  const [occasion, setOccasion] = useState('birthday');
  const navigate = useNavigate();

  useEffect(() => {
    updateTimes(date);
    initializeTimes();
  }, [date]);

  const initializeTimes = () => {
    const today = new Date();
    const availableTimesToday = fetchAPI(today);
    setAvailableTimes(availableTimesToday);
  };

  const updateTimes = (selectedDate) => {
    const availableTimesForDate = fetchAPI(selectedDate);
    setAvailableTimes(availableTimesForDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ date, time, guests, occasion });
    const response = submitAPI({ date, time, guests, occasion });
    if (response) {
      navigate('/confirmed');
    } else {
      alert('Your submission failed because the form is invalid');
    }
  };

  return (
    <form className='submit-form' onSubmit={handleSubmit}>
      <label htmlFor='res-date'>Choose date</label>
      <input
        type='date'
        id='res-date'
        value={date.toISOString().split('T')[0]}
        onChange={(e) => setDate(new Date(e.target.value))}
      />

      <label htmlFor='res-time'>Choose time</label>
      <select
        id='res-time'
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes.map((timeOption) => (
          <option key={timeOption}>{timeOption}</option>
        ))}
      </select>

      <label htmlFor='guests'>Number of guests</label>
      <input
        type='number'
        placeholder='1'
        min='1'
        max='10'
        id='guests'
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />

      <label htmlFor='occasion'>Occasion</label>
      <select
        id='occasion'
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value='birthday'>Birthday</option>
        <option value='anniversary'>Anniversary</option>
        <option value='other'>Other</option>
      </select>

      <button type='submit' className='booking-btn'>
        Submit
      </button>
    </form>
  );
};
