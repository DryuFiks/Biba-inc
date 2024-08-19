/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/store';
import { addProduct } from './productsSlice';

const FormAddProduct = (): JSX.Element => {
  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  const [description, setDescription] = useState('');
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);


  const dispatch = useAppDispatch();

  

  return (
    <form className="form-add" onSubmit={(e) => {
      e.preventDefault();
      dispatch(addProduct({ name, img, description, count, price })).catch(console.log);
      }}>
      <label className="form-add__label">
        Name
        <input 
          className="form-add__input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
      </label>
      <label className="form-add__label">
        Price
        <input
          className="form-add__input"
          value={price}
          onChange={(e) => setPrice(+e.target.value)}
          type="number"
        />
      </label>
        <label className="form-add__label">
        Count
        <input
          className="form-add__input"
          value={count}
          onChange={(e) => setCount(+e.target.value)}
          type="number"
        />
      </label>
      <label className="form-add__label">
        Description
        <input
          className="form-add__input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
        />
      </label>
      <label className="form-add__label">
        Img
        <input
          className="form-add__input"
          value={img}
          onChange={(e) => setImg(e.target.value)}
          type="text"
        />
      </label>
      <button className="form-add__submit" type="submit">
        Добавить Товар
      </button>
    </form>
  );
}
;

export default FormAddProduct;