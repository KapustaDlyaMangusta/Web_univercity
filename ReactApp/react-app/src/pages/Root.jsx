import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { Outlet } from 'react-router-dom';

export const RootLayout = () => {
  return (
    <div className='flex flex-col gap-14 min-h-screen px-24'>
      <Header />
      <main className='grow'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};