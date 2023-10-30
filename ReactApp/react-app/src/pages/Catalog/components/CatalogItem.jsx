import React from 'react';
import FilledButton from '../../../components/FilledButton';
import ItemTypeBar from '../../../components/ItemTypeBar';
import { useNavigate } from 'react-router-dom';

const CatalogItem = ({ id, imageUrl, title, price, country, isFavourite, isHotSeason }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex items-center rounded-2xl relative"
           style={ { maxWidth: '700px' } }>
        <div className='absolute top-2 left-2'>
          <ItemTypeBar isHotSeason={isHotSeason} isFavourite={isFavourite} />
        </div>

        <div className="flex bg-white border-2 rounded-2xl">
          <img src={ imageUrl } alt={ `${ title }` } className="rounded-l-2xl w-full"
               style={ { height: '350px', width: '420px' } }/>

          <div className='flex flex-col py-4 gap-8 justify-between items-center' style={ { width: '200px' } }>
            <h3 className="text-center text-xl font-bold">{ title }</h3>

            <p className="text-center text-xl">{ `€${ price }` }</p>

            <p className="text-center">{ country }</p>

            <FilledButton onClick={ () => navigate(`${id}`) }>View more</FilledButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogItem;