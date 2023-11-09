import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchCarrotById } from '../../../api/carrots.api';
import CatalogItemInfo from './CatalogItemInfo';
import QuantityInputControl from '../../../components/QuantityInputControl';
import { SelectControl } from '../../../components/SelectControl';
import OutlinedButton from '../../../components/OutlinedButton';
import FilledButton from '../../../components/FilledButton';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/slices/cart.slice';

const CatalogItem = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [kilograms, setKilograms] = useState(1);
  const [type, setType] = useState('');
  const [price, setPrice] = useState(kilograms * item.price);

  useEffect(() => {
    const newPrice = (item.price + (item.specific.find(o => o.value === type)?.bonusPricePerKilogram || 0)) * kilograms;
    setPrice(newPrice.toFixed(2))
  }, [kilograms, type]);

  const typeChangeHandler = (event) => {
    setType(event.target.value);
  }

  const goBackClickHandler = () => navigate('..');
  const addToCartClickHandler = () => {
    const specific = type === '' ? type : item.specific.find(t => t.value === type).title;

    dispatch(cartActions.addToCart({
      title: item.title,
      price: item.price,
      totalItemPrice: price,
      quantity: kilograms,
      specific: specific
    }))
    navigate('..');
  }

  return (
    <div className='flex flex-col justify-between h-screen py-10'>
      <div className='flex gap-16'>
        <img src={ item.imageUrl } alt="Carrot" className='rounded-3xl'
             style={ { width: '500px', height: '500px' } }/>

        <div className='flex flex-col justify-between'>
          <CatalogItemInfo title={ item.title }
                           description={ item.description }
                           country={ item.country }
                           price={ item.price }
                           isFavourite={ item.isFavourite }
                           isHotSeason={ item.isHotSeason }/>

          <div className='flex justify-between gap-8 items-center'>
            <QuantityInputControl setStateFunc={ setKilograms } value={ kilograms }/>

            <SelectControl label='Specific'
                           onChange={ typeChangeHandler }
                           value={ type }
                           controlId='catalog-sort-control'
                           selectItems={ item.specific }/>
          </div>
        </div>
      </div>

      <div className='flex item-center justify-between'>
        <OutlinedButton onClick={ goBackClickHandler }>Go back</OutlinedButton>

        <div className='flex gap-20 items-center '>
          <span className='text-3xl font-bold'>Price:</span>
          <span className='text-5xl font-bold text-orange-500'>{ `€${ price }` }</span>
        </div>

        <FilledButton onClick={ addToCartClickHandler }>Add to cart</FilledButton>
      </div>
    </div>
  );
};

export default CatalogItem;