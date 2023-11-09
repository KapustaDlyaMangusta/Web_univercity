import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const listItemClassName = 'text-center';
  const linkClassName = 'text-xl hover:bg-orange-500 hover:text-white py-3 rounded-3xl transition-all ease-in';
  const linkStyle = { display: 'block', width: '120px' };

  return (
    <>
      <nav className="w-full">
        <ul className="flex w-full justify-center gap-24">
          <li className={ listItemClassName }>
            <Link className={ linkClassName } style={ linkStyle } to=''>Home</Link>
          </li>
          <li className={ listItemClassName }>
            <Link className={ linkClassName } style={ linkStyle } to='catalog'>Catalog</Link>
          </li>
          <li className={ listItemClassName }>
            <Link className={ linkClassName } style={ linkStyle } to='cart'>Cart</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;