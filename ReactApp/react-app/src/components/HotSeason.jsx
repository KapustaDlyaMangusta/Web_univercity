import React from 'react';
import hot from '../assets/images/hot-season.png'
import { Tooltip } from 'react-tooltip';

const HotSeason = ({ extended }) => {

  if (!extended) {
    return (
      <>
        <div className='flex items-center justify-center h-10 w-10 rounded-full bg-white border-orange-500 border'
             data-tooltip-id='hot-season-tooltip'
             data-tooltip-content='This carrot has an excellent harvest season!'>
          <img className='w-8 h-8' src={ hot } alt='Hot'/>
        </div>

        <Tooltip id='hot-season-tooltip'
                 className='border-orange-500 border'
                 classNameArrow='hidden'
                 style={ { color: 'black', backgroundColor: 'white' } }/>
      </>)
  }

  return (
    <div className='flex rounded-3xl items-center pr-3 gap-2 bg-orange-500' style={{width: '160px'}}>
      <div className='flex items-center justify-center h-10 w-10 rounded-full bg-white border-orange-500 border'>
        <img className='w-8 h-8' src={ hot } alt='Hot'/>
      </div>

      <span className='text-white font-bold'>Hot season!</span>
    </div>
  );
};

export default HotSeason;