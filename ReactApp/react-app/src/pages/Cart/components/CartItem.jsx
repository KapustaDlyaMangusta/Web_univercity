import React, { useEffect, useState } from 'react';
import QuantityInputControl from '../../../components/QuantityInputControl';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/slices/cart.slice';
import OutlinedButton from '../../../components/OutlinedButton';
const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const dispatch = useDispatch();

  return (
    <div className="flex bg-white border-2 rounded-2xl items-center justify-between gap-12 pr-10">
      <img src={ item.imageUrl } alt={ `${ item.title }` } className="rounded-l-2xl w-full"
           style={ { height: '120px', width: '120px' } }/>

      <h3 className="text-center text-xl font-bold">{ item.title }</h3>

      <div style={{width: "300px"}}><QuantityInputControl setStateFunc={ setQuantity } value={ quantity } onMinus={() => dispatch(cartActions.decreaseItemQuantity(item.id))} onPlus={() => dispatch(cartActions.increaseItemQuantity(item.id))}/></div>

      <OutlinedButton onClick={() => {dispatch(cartActions.removeFromCart(item.id))} }>Remove</OutlinedButton>
    </div>
  );
};

export default CartItem;