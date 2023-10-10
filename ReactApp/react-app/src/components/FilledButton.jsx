import React from 'react';

const FilledButton = ({ text }) => {
  return (
    <>
      <button className="filled-button font-bold text-white rounded-2xl py-3 bg-primary-blue hover:bg-blue-600 transition-colors"
              style={ { width: '180px' } }>{ text }</button>
    </>
  );
};

export default FilledButton;