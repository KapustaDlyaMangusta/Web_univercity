import React from 'react';
import hot from '../assets/images/hot-season.png'
import { Tooltip } from 'react-tooltip';

const HotSeason = () => {
  return (
    <>
      <div className='flex items-center justify-center h-10 w-10 rounded-full bg-white border-orange-500 border'
           data-tooltip-id='hot-season-tooltip'
           data-tooltip-content='This carrot has an excellent harvest season!'>
        <img className='w-8 h-8' src={hot} alt='Hot'/>
      </div>

      <Tooltip id='hot-season-tooltip'
               className='border-orange-500 border'
               classNameArrow='hidden'
               style={{ color:'black', backgroundColor: 'white'}}/>
    </>
  );
};

export default HotSeason;