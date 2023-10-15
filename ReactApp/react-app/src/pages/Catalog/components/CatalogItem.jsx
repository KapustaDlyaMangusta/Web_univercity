import React from 'react';
import HotSeason from '../../../components/HotSeason';
import Favourite from '../../../components/Favourite';
import FilledButton from '../../../components/FilledButton';

const CatalogItem = ({ imageUrl, title, price, country, isFavourite, isHotSeason}) => {

  return (
    <div>
      <div className="flex items-center rounded-2xl relative"
           style={ { maxWidth: '700px' } }>
        <div className='flex gap-2 absolute top-2 left-2'>
          { isHotSeason && <HotSeason/> }
          { isFavourite && <Favourite/> }
        </div>

        <div className="flex bg-white border-2 rounded-2xl">
          <img src={ imageUrl } alt={ `${ title } image` } className="rounded-l-2xl w-full"
               style={ { height: '350px', width: '420px' } }/>

          <div className='flex flex-col py-4 gap-8 justify-between items-center' style={ { width: '200px' } }>
            <h3 className="text-center text-xl font-bold">{ title }</h3>

            <p className="text-center text-xl">{ `€${ price }` }</p>

            <p className="text-center">{ country }</p>

            <FilledButton>View more</FilledButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogItem;