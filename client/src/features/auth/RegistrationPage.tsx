/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import { type RootState, useAppDispatch } from '../../redux/store';
import { clearError, signUp } from './authSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { User } from './types';

const RegistrationPage = (): JSX.Element => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPasssword] = useState('');
  const [rpassword, setRpasssword] = useState('');  
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<User>();
  const error = useSelector((store: RootState) => store.auth.error);
  

  return (
    <div>
      <h1>RegistrationPage</h1>
      {error &&  <h1 style={{ color: 'red', textTransform: 'uppercase' }}>{error}</h1>}
      <form onSubmit={(e) => {
        e.preventDefault(); 
        dispatch(signUp({ name, email, password, rpassword }))
        .catch(console.log);
        navigate('/');
      } }>
        <input 
        placeholder='Name'
        // value={name} 
        // onChange={(e) =>{
        // setName(e.target.value)
        // dispatch(clearError());
        // }} 
        {...register
        ('name', { 
          required: 'This field is required',
          
          } 
          )} type="text" />
        <input 
        placeholder='email'
        value={email} 
        onChange={(e) => setEmail(e.target.value)} type="text" />
        <input 
        placeholder='Password'
        value={password} 
        onChange={(e) => setPasssword(e.target.value)} type="text" />
        <input 
        placeholder='Repeat password'
        value={rpassword} 
        onChange={(e) => setRpasssword(e.target.value)} type="text" />
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default RegistrationPage;