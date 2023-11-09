import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const CartItems = () => {
  const cartItems = useSelector((state) => state.cartItems);

  return (
    <div className='flex flex-col gap-12'>
        {
          cartItems.map(item => (
            <CartItem key={item.id}
                      item={item}/>
          ))
        }
    </div>
  );
};

export default CartItems;