import React from 'react';

const FilledButton = ({ children }) => {
  return (
    <>
      <button className="filled-button font-bold text-white rounded-2xl py-3 bg-primary-blue hover:bg-blue-600 transition-colors"
              style={ { width: '180px' } }>{ children  }</button>
    </>
  );
};

export default FilledButton;