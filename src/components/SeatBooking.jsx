import React from 'react';
import SeatDetails from './SeatDetails';
import SeatSelection from './SeatSelection';

const SeatBooking = () => {
  return (
    <div className='seat-booking'>
      <SeatDetails />
      <SeatSelection />
    </div>
  );
};

export default SeatBooking;
