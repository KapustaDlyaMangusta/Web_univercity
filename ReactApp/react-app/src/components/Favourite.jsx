import React from 'react';
import favourite from '../assets/images/favourite.png';
import { Tooltip } from 'react-tooltip';

const Favourite = () => {
  return (
    <>
      <div className='flex items-center justify-center h-10 w-10 rounded-full bg-white border border-primary-blue'
           data-tooltip-id='favourite-tooltip'
           data-tooltip-content='This carrot is the best seller!'>
        <img className='w-6 h-6' src={favourite} alt='Fav'/>
      </div>

      <Tooltip id='favourite-tooltip'
               className='border-primary-blue border'
               classNameArrow='hidden'
               style={{ color:'black', backgroundColor: 'white'}}/>
    </>
  );
};

export default Favourite;