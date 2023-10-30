import React, { useContext } from 'react';
import CatalogItem from './CatalogItem';
import { catalogCarrotsData } from '../../../data/catalog-carrots-data';
import { CatalogContext } from '../../../store/catalog-context';

const CatalogItems = () => {
  const catalogCtx = useContext(CatalogContext);

  return (
    <div className='flex flex-wrap justify-between gap-8'>
      { catalogCtx.items.map(carrot => (
        <CatalogItem key={ carrot.id }
                     id={ carrot.id }
                     title={ carrot.title }
                     imageUrl={ carrot.imageUrl }
                     price={ carrot.price }
                     country={ carrot.country }
                     isHotSeason={ carrot.isHotSeason }
                     isFavourite={ carrot.isFavourite }/>
      )) }
    </div>
  );
};

export default CatalogItems;