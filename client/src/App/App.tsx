import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductsListPage from '../features/products/ProductsListPage';
import NavBar from '../features/navbar/NavBar';
import MainPage from '../features/main/MainPage';
import ProductItemPage from '../features/products/ProductItemPage';
import { useAppDispatch } from '../redux/store';
import UsersListPage from '../features/users/UserListPage';
import RegistrationPage from '../features/auth/RegistrationPage';
import AuthorizationPage from '../features/auth/AuthorizationPage';
import { loadProducts, stopLoading } from '../features/products/productsSlice';
import { checkUser } from '../features/auth/authSlice';
import { loadUsers } from '../features/users/usersSlice';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadProducts()).catch(console.log);
    dispatch(loadUsers()).catch(console.log);
    dispatch(checkUser()).catch(console.log);
    setTimeout(() => dispatch(stopLoading()),1000);
    }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<ProductsListPage />} />
          <Route path="/products" element={<ProductsListPage />} />
          <Route path="/users" element={<UsersListPage />} />
          <Route path="/sign-up" element={<RegistrationPage />} />
          <Route path="/sign-in" element={<AuthorizationPage />} />
          <Route path="/products/:productId" element={<ProductItemPage />} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;