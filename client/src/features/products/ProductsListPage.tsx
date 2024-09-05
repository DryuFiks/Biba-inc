/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from 'react';
import load from '../../assets/Spinner-1s-200px.svg';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ProductItem from './ProductItem';
import FormAddProduct from './FormAddProduct';
import {useAppDispatch, type RootState } from '../../redux/store';
import './styles/heroes.scss';
import { Box, Button, CircularProgress, Container, Grid } from '@mui/material';
import { ProductFilters, SORT_BY, SORT_ORDER } from './types';
import { loadProducts } from './productsSlice';

const ProductsListPage = (): JSX.Element => {
  const [filters, setFilters ] = useState <ProductFilters> ({
    name: '',
    price: 0,
    sortBy: SORT_BY.NAME,
    sortOrder: SORT_ORDER.ASC,
    skip: 0,
    limit: 10000
  });
  const user = useSelector((store: RootState) => store.auth.auth);
  const products = useSelector((store: RootState) => store.products.products);
  const loading = useSelector((store: RootState) => store.products.loading);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadProducts(filters))
  },[filters])

  const content =(<>
  {user?.isSaller && <FormAddProduct />}
      <Grid container spacing={2}>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </Grid>
      <Button variant="contained" onClick={() => navigate('/')} type="button">
        стоша говна зад
      </Button>
  </>)

  return (
    <>
      {loading ? <Box sx={{ display: 'flex' }}>
      <CircularProgress color="secondary" />
    </Box> : content}
    </>
  );
};

export default ProductsListPage;