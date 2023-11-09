import React from 'react';

const ErrorMessage = ({ error }) => {
  return (
    <>
      <p className='text-3xl font-bold'>{ error }</p>
    </>
  );
};

export default ErrorMessage;