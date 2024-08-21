/* eslint-disable arrow-body-style */
import React from 'react';
import load from '../../assets/Spinner-1s-200px.svg';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ProductItem from './ProductItem';
import FormAddProduct from './FormAddProduct';
import {type RootState } from '../../redux/store';
import './styles/heroes.scss';
import { Box, Button, CircularProgress, Container, Grid } from '@mui/material';

const ProductsListPage = (): JSX.Element => {
  const user = useSelector((store: RootState) => store.auth.auth);
  const products = useSelector((store: RootState) => store.products.products);
  const loading = useSelector((store: RootState) => store.products.loading);
  const navigate = useNavigate();

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