import React, { useContext } from 'react';
import { CatalogContext } from '../../../context/catalog-context';
import { SelectControl } from '../../../components/SelectControl';
import { TextField } from '@mui/material';
import { filterSelectOptions, sortSelectOptions } from '../../../utils/data/catalog-actions.data';
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