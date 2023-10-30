import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { catalogCarrotsData } from '../../data/catalog-carrots-data';

import CatalogItemInfo from './components/CatalogItemInfo';
import QuantityInputControl from '../../components/QuantityInputControl';
import { SelectControl } from '../../components/SelectControl';
import OutlinedButton from '../../components/OutlinedButton';
import FilledButton from '../../components/FilledButton';

const typeSelectOptions = [
  {
    title: 'Washed',
    value: 'washed',
    bonusPricePerKilogram: 1
  },
  {
    title: 'Peeled',
    value: 'peeled',
    bonusPricePerKilogram: 2
  },
];

const CatalogItemPage = () => {
  const params = useParams();

  const id = params.catalogItemId;
  const currentItem = catalogCarrotsData.find(i => i.id === +id);

  if (!currentItem) {
    throw Error(`Catalog item with id: "${ id }" was not found!`);
  }

  const navigate = useNavigate();

  const [kilograms, setKilograms] = useState(1);
  const [type, setType] = useState('');
  const [price, setPrice] = useState(kilograms * currentItem.price);

  useEffect(() => {
    const newPrice = (currentItem.price + (typeSelectOptions.find(o => o.value === type)?.bonusPricePerKilogram || 0)) * kilograms;

    setPrice(newPrice.toFixed(2))
  }, [kilograms, type]);

  const typeChangeHandler = (event) => {
    setType(event.target.value);
  }

  const goBackClickHandler = () => navigate('..');

  return (
    <div className='flex flex-col justify-between h-screen py-10'>
      <div className='flex gap-16'>
        <img src={ currentItem.imageUrl } alt="Carrot" className='rounded-3xl'
             style={ { width: '500px', height: '500px' } }/>

        <div className='flex flex-col justify-between'>
          <CatalogItemInfo title={ currentItem.title }
                           description={ currentItem.description }
                           country={ currentItem.country }
                           price={ currentItem.price }
                           isFavourite={ currentItem.isFavourite }
                           isHotSeason={ currentItem.isHotSeason }/>

          <div className='flex justify-between gap-8 items-center'>
            <QuantityInputControl setStateFunc={ setKilograms } value={ kilograms }/>

            <SelectControl label='Specific'
                           onChange={ typeChangeHandler }
                           value={ type }
                           controlId='catalog-sort-control'
                           selectItems={ typeSelectOptions }/>
          </div>
        </div>
      </div>

      <div className='flex item-center justify-between'>
        <OutlinedButton onClick={goBackClickHandler}>Go back</OutlinedButton>

        <div className='flex gap-20 items-center '>
          <span className='text-3xl font-bold'>Price:</span>
          <span className='text-5xl font-bold text-orange-500'>{`€${ price }`}</span>
        </div>

        <FilledButton onClick={goBackClickHandler}>Add to cart</FilledButton>
      </div>
    </div>
  );
};

export default CatalogItemPage;