/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import { type RootState, useAppDispatch } from '../../redux/store';
import { clearError, signUp } from './authSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RegistrationPage = (): JSX.Element => {
  const [name, setName] = useState('');
  const [img, setImg] = useState('');
  const [password, setPasssword] = useState('');
  const [rpassword, setRpasssword] = useState('');  
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const error = useSelector((store: RootState) => store.auth.error);
  

  return (
    <div>
      <h1>RegistrationPage</h1>
      {error &&  <h1 style={{ color: 'red', textTransform: 'uppercase' }}>{error}</h1>}
      <form onSubmit={(e) => {
        e.preventDefault(); 
        dispatch(signUp({ name, img, password, rpassword }))
        .catch(console.log);
        navigate('/');
      } }>
        <input value={name} onChange={(e) =>{
          setName(e.target.value)
          dispatch(clearError());
          }} type="text" />
        <input value={img} onChange={(e) => setImg(e.target.value)} type="text" />
        <input value={password} onChange={(e) => setPasssword(e.target.value)} type="text" />
        <input value={rpassword} onChange={(e) => setRpasssword(e.target.value)} type="text" />
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default RegistrationPage;