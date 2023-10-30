import React from 'react';
import HotSeason from './HotSeason';
import Favourite from './Favourite';

const ItemTypeBar = ({ isHotSeason, isFavourite, extended }) => {
  return (
    <div className='flex gap-2'>
      { isHotSeason && <HotSeason extended={extended}/> }
      { isFavourite && <Favourite extended={extended}/> }
    </div>
  );
};

export default ItemTypeBar;