/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';
import type { Product } from './types';
import { Link } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../redux/store';
import { removeProduct } from './productsSlice';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';

const ProductItem = ({ product }: { product: Product }): JSX.Element => {
const dispatch = useAppDispatch();
const user = useSelector((store: RootState) => store.auth.auth);

  
  return (
    <div className="hero-page__item">
      <h2 className="hero-page__item--name">{product.name}</h2>
      <img className="hero-page__item--img" src={product.img} alt="product" />
      <h3 className="hero-page__item--description">{product.description}</h3>
      <h3 className="hero-page__item--description">{product.price}</h3>
      <h3 className="hero-page__item--description">{product.count}</h3>
      <Link to={`/products/${product.id}`}>More information</Link>
      {user?.isSaller && 
        <Button
          variant="contained"
          onClick={() => dispatch(removeProduct(product.id))}>
          Remove
        </Button>}
    </div>
  );
};

export default ProductItem;