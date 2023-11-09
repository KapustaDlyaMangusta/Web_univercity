import React from 'react';
import ItemTypeBar from '../../../components/ItemTypeBar';

const CatalogItemInfo = ({ title, description, country, price, isFavourite, isHotSeason }) => {
  const itemBlockClassName = 'flex flex-col gap-8';
  const propertyBlockClassName = 'flex justify-between items-center w-full';
  const propertyNameClassName = 'text-xl font-bold';

  return (
    <div className={itemBlockClassName}>
      <ItemTypeBar isFavourite={ isFavourite } isHotSeason={ isHotSeason } extended/>

      <h2 className='text-5xl font-bold'>{ title }</h2>

      <p className='text-2xl italic'>{ description }</p>

      <div className={ propertyBlockClassName }>
        <span className={ propertyNameClassName }>Country:</span>

        <span className='text-2xl'>{ country }</span>
      </div>

      <div className={ propertyBlockClassName }>
        <span className={ propertyNameClassName }>Price per kilogram:</span>

        <span className='text-2xl font-bold italic text-primary-blue'>{ `€${ price }` }</span>
      </div>
    </div>
  );
};

export default CatalogItemInfo;