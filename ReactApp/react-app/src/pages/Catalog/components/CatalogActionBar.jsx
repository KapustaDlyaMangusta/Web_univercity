import React, { useContext } from 'react';
import { CatalogContext } from '../../../store/catalog-context';
import { SelectControl } from '../../../components/SelectControl';
import { TextField } from '@mui/material';

const sortSelectOptions = [
  {
    title: 'Name',
    value: 'title'
  },
  {
    title: 'Price',
    value: 'price'
  },
  {
    title: 'Country',
    value: 'country'
  }
];

const filterSelectOptions = [
  {
    title: 'Favorite',
    value: 'favorite'
  },
  {
    title: 'Hot Season',
    value: 'hotseason'
  },
];

const CatalogActionBar = () => {
  const catalogCtx = useContext(CatalogContext);

  return (
    <div className='flex gap-6'>
      <TextField label="Search" type="search"
                 onChange={ catalogCtx.searchQueryChangeHandler }
                 value={ catalogCtx.searchQuery }
                 style={ { minWidth: '70%' } }
                 fullWidth />

      <SelectControl label='Filter'
                     onChange={ catalogCtx.filterOptionChangeHandler }
                     value={ catalogCtx.filterOption }
                     controlId='catalog-filter-control'
                     selectItems={ filterSelectOptions }/>

      <SelectControl label='Sort'
                     onChange={ catalogCtx.sortOptionChangeHandler }
                     value={ catalogCtx.sortOption }
                     controlId='catalog-sort-control'
                     selectItems={ sortSelectOptions }/>
    </div>
  );
};

export default CatalogActionBar;