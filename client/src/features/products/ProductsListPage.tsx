/* eslint-disable arrow-body-style */
import React from 'react';
import load from '../../assets/Spinner-1s-200px.svg';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ProductItem from './ProductItem';
import FormAddProduct from './FormAddProduct';
import {type RootState } from '../../redux/store';
import './styles/heroes.scss';

const ProductsListPage = (): JSX.Element => {
  const products = useSelector((store: RootState) => store.products.products);
  const loading = useSelector((store: RootState) => store.products.loading);
  const navigate = useNavigate();

  const content =(<>
  <FormAddProduct />
      <h1 className="hero-page__title">ProductsListPage</h1>
      <div className="hero-page__container">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
      <button onClick={() => navigate('/')} type="button">
        стоша говна зад
      </button>
  </>)

  return (
    <>
      {loading ? <img src={load} alt="loading" /> : content}
    </>
  );
};

export default ProductsListPage;