import React from 'react';
import { Button, TextField } from '@mui/material';
import FilledButton from '../../../components/FilledButton';
import OutlinedButton from '../../../components/OutlinedButton';

const CatalogActionBar = () => {
  return (
    <div className='flex gap-6'>
      <TextField label="Search" type="search" fullWidth/>

      <FilledButton>Search</FilledButton>
      <OutlinedButton>Filter</OutlinedButton>
    </div>
  );
};

export default CatalogActionBar;