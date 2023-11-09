import React from 'react';
import ErrorMessage from './ErrorMessage';

const HttpError = () => {
  return (
    <>
      <ErrorMessage error='Something went wrong. Please try again later :('/>
    </>
  );
};

export default HttpError;