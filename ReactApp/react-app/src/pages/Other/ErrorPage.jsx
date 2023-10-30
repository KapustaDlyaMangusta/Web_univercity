import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className='flex flex-col justify-center items-center gap-10 w-screen h-screen'>
      <h1 className='text-5xl font-bold'>An error occurred!</h1>

      { !!error.message && <p className='text-3xl font-italic'>{error.message}</p>}
    </div>
  );
};

export default ErrorPage;