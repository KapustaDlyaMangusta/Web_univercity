import React from 'react';

import Navbar from "./Navbar";

import logo from '../../../../assets/images/header_logo.png'
import Banner from "./Banner";
import Logo from '../../../../components/Logo';


const Header = () => {

  return (
    <div className="flex flex-col px-24 gap-16 h-screen">
      <div className="flex w-full items-center">
        <Logo className="justify-self-start w-32 h-32"/>

        <Navbar/>
      </div>

      <Banner/>
    </div>
  );
};

export default Header;