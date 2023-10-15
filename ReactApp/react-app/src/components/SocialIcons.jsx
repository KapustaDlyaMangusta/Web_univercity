import React from 'react';

import linkedIn from '../assets/images/icon-linkedin.svg';
import facebook from '../assets/images/icon-facebook.svg';
import telegram from '../assets/images/icon-telegram.svg';

const SocialIcons = () => {
  const iconsClassName = 'w-10 h-10';

  return (
    <div className='flex gap-10'>
        <img src={linkedIn} className={iconsClassName} alt="LinkedIn Icon" />
        <img src={facebook} className={iconsClassName} alt="Facebook Icon"/>
        <img src={telegram} className={iconsClassName} alt="Telegram Icon"/>
    </div>
  );
};

export default SocialIcons;