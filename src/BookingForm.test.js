import { render, screen } from '@testing-library/react';
import { BookingForm } from './components/BookingForm';

jest.mock('./api', () => ({
  fetchAPI: jest.fn((date) => {
    return ['17:00', '18:00', '19:00'];
  }),
}));

initializeTimes = (state) => {
  const selectedDate = state.selectedDate;
  const exampleAvailableTimes = ['17:00', '18:00', '19:00'];

  return {
    ...state,
    availableTimes: exampleAvailableTimes,
  };
};

export const updateTimes = (state) => {
  const selectedDate = state.selectedDate;
  const updatedAvailableTimes = state.availableTimes;

  return {
    ...state,
    availableTimes: updatedAvailableTimes,
  };
};

test('initializeTimes returns the correct expected value', () => {
  const initialState = {
    availableTimes: [],
    selectedDate: new Date('2023-09-06'),
  };

  const expectedTimes = ['17:00', '18:00', '19:00'];
  const initializedState = initializeTimes(initialState);

  expect(initializedState.availableTimes).toEqual(expectedTimes);
});

test('updateTimes returns the same value as provided in the state', () => {
  const initialState = {
    availableTimes: ['17:00', '18:00', '19:00'],
    selectedDate: new Date('2023-09-07'),
  };

  const updatedState = updateTimes(initialState);

  expect(updatedState.availableTimes).toEqual(initialState.availableTimes);
});
