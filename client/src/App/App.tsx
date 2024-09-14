import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import ProductsListPage from '../features/products/ProductsListPage';
import NavBar from '../features/navbar/NavBar';
import ProductItemPage from '../features/products/ProductItemPage';
import { useAppDispatch } from '../redux/store';
import UsersListPage from '../features/users/UserListPage';
import RegistrationPage from '../features/auth/RegistrationPage';
import AuthorizationPage from '../features/auth/AuthorizationPage';
import { checkUser } from '../features/auth/authSlice';
import { loadUsers } from '../features/users/usersSlice';
import AdminPage from '../features/admin/AdminPage';
import SallerPage from '../features/saller/SallerPage';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(loadUsers()).catch(console.log);
    dispatch(checkUser()).catch(console.log);
    }, [location]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<ProductsListPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/seller" element={<SallerPage />} />
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