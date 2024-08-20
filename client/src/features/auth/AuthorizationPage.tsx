/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/store';
import { signIn } from './authSlice';
import { useNavigate } from 'react-router-dom';


const AuthorizationPage = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPasssword] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  
  return (
    <div>
      <h1>AuthorizationPage</h1>
      <form onSubmit={(e) => {
        e.preventDefault(); 
        dispatch(signIn({ email, password }))
        .catch(console.log);
        navigate('/');
        }}>
        <input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} type="text" />
        <input placeholder='Password' value={password} onChange={(e) => setPasssword(e.target.value)} type="text" />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default AuthorizationPage;