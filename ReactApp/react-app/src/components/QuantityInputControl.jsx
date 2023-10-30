import React from 'react';
import plusIcon from '../assets/images/plus.png'
import minusIcon from '../assets/images/minus.png'
import { InputBase } from '@mui/material';

const QuantityInputControl = ({ value , setStateFunc }) => {
  const actionButtonClassName = 'flex justify-center items-center text-center rounded-full text-orange-500 font-bolt text-3xl hover:bg-orange-100 hover:bg-opacity-50';

  const changeHandler = (event) => {
    const newValue = event.target.value.replace(/\D/,'');

    if(value === newValue){
      return;
    }

    if(newValue === '' || newValue === '0'){
      setStateFunc(1);
      return;
    }

    setStateFunc(parseInt(newValue));
  }

  const minusHandler = () => {
    if(value === 1){
      return;
    }

    setStateFunc(prevState => prevState - 1);
  }
  const plusHandler = () => setStateFunc(prevState => prevState + 1);

  return (
    <div className='quantity-input-control flex w-full py-2 px-4 border border-orange-500 rounded-2xl gap-4 items-center' style={{height: '60px'}}>
      <button className={actionButtonClassName} style={{minWidth: '30px', height: '30px'}} onClick={minusHandler}>
        <img src={minusIcon} style={{ height: '30px', width: '30px'}} alt=''/>
      </button>

      <InputBase value={value} onChange={changeHandler} className='flex justify-center w-full text-center'/>
      
      <button className={actionButtonClassName} style={{minWidth: '30px', height: '30px'}} onClick={plusHandler}>
        <img src={plusIcon} style={{ height: '30px', width: '30px'}} alt=''/>
      </button>
    </div>
  );
};

export default QuantityInputControl;