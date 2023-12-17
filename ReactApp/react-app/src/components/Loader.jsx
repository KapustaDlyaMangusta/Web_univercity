import React from 'react';
import { Backdrop, CircularProgress } from '@mui/material';
import { createPortal } from 'react-dom';

const Loader = ({ isLoading }) => {
  return createPortal((
    <div>
      <Backdrop
        sx={ { color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 } }
        open={ isLoading }>
        <CircularProgress size={150} color='inherit' />
      </Backdrop>
    </div>
  ), document.getElementById('overlay'));
};

export default Loader;
