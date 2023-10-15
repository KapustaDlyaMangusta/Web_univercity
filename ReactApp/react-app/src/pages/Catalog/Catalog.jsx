import React from 'react';
import CatalogActionBar from './components/CatalogActionBar';
import CatalogItems from './components/CatalogItems';

const Catalog = () => {
  return (
    <div className='flex flex-col gap-10'>
      <CatalogActionBar/>

      <CatalogItems/>
    </div>
  );
};

export default Catalog;