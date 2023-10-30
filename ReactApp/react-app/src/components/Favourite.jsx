import React from 'react';
import favourite from '../assets/images/favourite.png';
import { Tooltip } from 'react-tooltip';
import hot from '../assets/images/hot-season.png';

const Favourite = ({ extended }) => {

  if (!extended) {
    return (
      <>
        <div className='flex items-center justify-center h-10 w-10 rounded-full bg-white border border-primary-blue'
             data-tooltip-id='favourite-tooltip'
             data-tooltip-content='This carrot is the best seller!'>
          <img className='w-6 h-6' src={ favourite } alt='Fav'/>
        </div>

        <Tooltip id='favourite-tooltip'
                 className='border-primary-blue border'
                 classNameArrow='hidden'
                 style={ { color: 'black', backgroundColor: 'white' } }/>
      </>
    );
  }

  return (
    <div className='flex rounded-3xl items-center pr-3 gap-2 bg-primary-blue' style={{width: '160px'}}>
      <div className='flex items-center justify-center h-10 w-10 rounded-full bg-white border border-primary-blue'>
        <img className='w-6 h-6' src={ favourite } alt='Fav'/>
      </div>

      <span className='text-white font-bold'>Best seller!</span>
    </div>
  );
};

export default Favourite;