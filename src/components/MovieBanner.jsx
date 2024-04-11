import React from 'react';
import { FaChevronLeft, FaLocationDot } from 'react-icons/fa6';

const MovieBanner = () => {
  return (
    <div className='movie-banner'>
      <FaChevronLeft className='go-back' size={'24px'} color='white' />
      <div className='movie-details'>
        <div className='movie-name poppins-regular'>GOAT</div>
        <div className='movie-location poppins-light'>
          <FaLocationDot color='white' size={'16px'} />
          <span>AMB Cinemas, Hyderabad</span>
        </div>
      </div>
    </div>
  );
};

export default MovieBanner;
