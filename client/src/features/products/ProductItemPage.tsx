import React from 'react';
import './styles/heroes.scss';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState} from '../../redux/store';

const ProductItemPage = (): JSX.Element => {
  const { productId } = useParams();
  const products  = useSelector((store: RootState) => store.products);
  const currentProduct = productId && products.products.find((product) => product.id === +productId);

  return currentProduct ? (
    <div className="hero-item-page__item">
      <h2 className="hero-item-page__item--name">{currentProduct.name}</h2>
      <h3 className="hero-item-page__item--description">{currentProduct.description}</h3>
      <h3 className="hero-item-page__item--description">{currentProduct.price}</h3>
      <h3 className="hero-item-page__item--description">{currentProduct.count}</h3>
      <img className="hero-item-page__item--img" src={currentProduct.img} alt="Product" />
    </div>
  ) : (
    <h1>Такого героя нет!!!!</h1>
  );
};

export default ProductItemPage;