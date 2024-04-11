import React from 'react';
import { FaChevronRight } from 'react-icons/fa6';

const TicketInfo = () => {
  return (
    <div className='ticket-info'>
      <div className='ticket-info-left poppins-light'>
        <div>Date</div>
        <div>Tickets</div>
        <div className='total'>Total</div>
      </div>
      <div className='ticket-info-right'>
        <div className='ticket-details poppins-regular'>
          <div>June 22, 2024</div>
          <div>2</div>
          <div>Rs. 500</div>
        </div>
        <button className='next-button'>
          <span>Next</span>
          <FaChevronRight color='#f87171' />
        </button>
      </div>
    </div>
  );
};

export default TicketInfo;
