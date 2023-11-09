import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

import { Outlet, useNavigation } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './../store/store';

export const RootLayout = () => {
  const { state } = useNavigation();

  return (
    <Provider store={ store }>
      <div className='flex flex-col gap-14 min-h-screen px-24'>
        <Header/>
        <main className='grow'>
          { state === 'loading' && <Loader isLoading/> }
          <Outlet/>
        </main>
        <Footer/>
      </div>
    </Provider>
  );
};