/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';
import type { Product } from './types';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';
import { removeProduct } from './productsSlice';

const ProductItem = ({ product }: { product: Product }): JSX.Element => {
const dispatch = useAppDispatch();
  
  return (
    <div className="hero-page__item">
      <h2 className="hero-page__item--name">{product.name}</h2>
      <img className="hero-page__item--img" src={product.img} alt="product" />
      <h3 className="hero-page__item--description">{product.description}</h3>
      <h3 className="hero-page__item--description">{product.price}</h3>
      <h3 className="hero-page__item--description">{product.count}</h3>
      <Link to={`/products/${product.id}`}>More information</Link>
      <button
        className="hero-page__btn--remove"
        onClick={() => dispatch(removeProduct(product.id))}
        type="button"
      >
        Remove
      </button>
    </div>
  );
};

export default ProductItem;