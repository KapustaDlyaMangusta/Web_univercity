import Home from "./pages/Home/Home";
import Header from './components/Header';
import React from 'react';
import Footer from './components/Footer';
import { Navigate, Route, Routes } from 'react-router-dom';
import Catalog from './pages/Catalog/Catalog';
import { Button } from '@mui/material';

function App() {
  return (
    <div className='flex flex-col px-24 gap-16 min-h-screen'>
        <Header/>
        <div className='flex-grow'>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />

            <Route path="/home" element={<Home />} />

            <Route path="/catalog" element={<Catalog />} />
          </Routes>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
