import React from 'react';
import MovieBanner from '../components/MovieBanner';
import SeatBooking from '../components/SeatBooking';
import TicketInfo from '../components/TicketInfo';

const TicketBooking = () => {
  return (
    <div className='ticket-booking'>
      <MovieBanner />
      <SeatBooking />
      <TicketInfo />
    </div>
  );
};

export default TicketBooking;
