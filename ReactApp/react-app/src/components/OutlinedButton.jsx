import React from 'react';

const OutlinedButton = ({ onClick, children }) => {
  return (
    <>
      <button onClick={ onClick }
              className="outlined-button font-bold text-orange-500 rounded-2xl py-3 border-orange-500 border bg-white hover:border-red-500 hover:text-red-500 transition-colors"
              style={ { width: '180px' } }>{ children }</button>
    </>
  );
};

export default OutlinedButton;