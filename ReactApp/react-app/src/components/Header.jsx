import React from 'react';

import Navbar from "./Navbar";

import Logo from './Logo';


const Header = () => {

return (
    <div className="flex w-full items-center">
      <Logo className="justify-self-start w-32 h-32"/>

      <Navbar/>
    </div>
  );
};

export default Header;