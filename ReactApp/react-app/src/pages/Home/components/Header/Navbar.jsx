import React from 'react';

const Navbar = () => {
  const linkClassName = 'text-xl hover:bg-orange-500 hover:text-white py-3 rounded-3xl text-center transition-all ease-in'
  const linkStyle = { width: '120px' };

  return (
    <>
      <nav className="w-full">
        <ul className="flex w-full justify-center gap-24">
          <li className={ linkClassName } style={ linkStyle }>Home</li>
          <li className={ linkClassName } style={ linkStyle }>Catalog</li>
          <li className={ linkClassName } style={ linkStyle }>Cart</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;