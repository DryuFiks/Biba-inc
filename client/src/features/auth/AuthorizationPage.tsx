/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/store';
import { signIn } from './authSlice';
import { useNavigate } from 'react-router-dom';

const AuthorizationPage = (): JSX.Element => {
  const [name, setName] = useState('');
  const [password, setPasssword] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  
  return (
    <div>
      <h1>AuthorizationPage</h1>
      <form onSubmit={(e) => {
        e.preventDefault(); 
        dispatch(signIn({ name, password }))
        .catch(console.log);
        navigate('/');
        }}>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
        <input value={password} onChange={(e) => setPasssword(e.target.value)} type="text" />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default AuthorizationPage;