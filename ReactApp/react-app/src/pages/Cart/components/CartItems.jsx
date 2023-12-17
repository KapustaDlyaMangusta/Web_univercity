import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <div className='flex flex-col gap-10 w-full'>
      <div className='flex flex-col gap-12'>
        {
          cartItems.map(item => (
            <CartItem key={ item.id }
                      item={ item }/>
          ))
        }
      </div>

      <div className='w-full flex items-center justify-end'>
        <h3 className='text-2xl font-bold ital2ic text-end'>Total price: €{ totalPrice }</h3>
      </div>
    </div>
  );
};

export default CartItems;