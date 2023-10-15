import React from 'react';
import Logo from './Logo';

import SocialIcons from './SocialIcons';
import Divider from './Divider';

const Footer = () => {
  return (
    <div className='flex flex-col py-8 items-center'>
      <div className='flex justify-between items-center w-full'>
        <div className='w-1/3'>
          <h4 className='text-xl font-bold'>Branding stuff</h4>
          <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cumque in natus perspiciatis!</p>
        </div>

        <div className='flex justify-center w-1/3'>
          <Logo className='w-32 h-32'/>
        </div>

        <div className='flex justify-end w-1/3'>
          <SocialIcons />
        </div>
      </div>

      <Divider/>

      <span>2023 Iot © Copyright all rights reserved</span>
    </div>
  );
};

export default Footer;