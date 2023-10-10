import React from 'react';
import logo from '../assets/images/header_logo.png';

const Logo = ({ className }) => {
  return (
    <>
      <img src={logo} className={className} alt="Logo"></img>
    </>
  );
};

export default Logo;