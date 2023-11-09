import React from 'react';
import CartItems from './components/CartItems';
import { useSelector } from 'react-redux';
import ErrorMessage from '../../components/ErrorMessage';
import OutlinedButton from '../../components/OutlinedButton';
import FilledButton from '../../components/FilledButton';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const isCartEmpty = useSelector((state) => state.isEmpty);
  const navigate = useNavigate();

  const cartItems = isCartEmpty
    ? <ErrorMessage error='There are no items in cart. Go to catalog to add some!'/>
    : <CartItems/>

  const backToCatalogClickHandler = () => navigate('/catalog');

  return (
    <div className='flex flex-col justify-between min-h-screen py-10 gap-10'>
      <h2 className="text-5xl font-bold">Shopping cart</h2>

      cartItems

      <div className='flex item-center justify-between'>
        <OutlinedButton onClick={ backToCatalogClickHandler }>Back to Catalog</OutlinedButton>

        <FilledButton onClick={ backToCatalogClickHandler }>Add to cart</FilledButton>
      </div>
    </div>
  );
};

export default CartPage;