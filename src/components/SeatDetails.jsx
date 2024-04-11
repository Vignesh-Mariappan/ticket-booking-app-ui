import React from 'react';
import { MdEventSeat } from 'react-icons/md';

const SeatDetails = () => {
  return (
    <div className='seat-details'>
      <div className='seat-detail'>
        <MdEventSeat size={'20px'} color='#4b5563' />
        <span className='poppins-light'>Available</span>
      </div>
      <div className='seat-detail'>
        <MdEventSeat size={'20px'} color='#9ca3af' />
        <span className='poppins-light'>Booked</span>
      </div>
      <div className='seat-detail'>
        <MdEventSeat size={'20px'} color='#f87171' />
        <span className='poppins-light'>Selected</span>
      </div>
    </div>
  );
};

export default SeatDetails;
