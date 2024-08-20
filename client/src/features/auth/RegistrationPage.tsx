/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import { type RootState, useAppDispatch } from '../../redux/store';
import { clearError, signUp } from './authSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import { User, UserSignUp } from './types';

const RegistrationPage = (): JSX.Element => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPasssword] = useState('');
  // const [rpassword, setRpasssword] = useState('');  
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { register, handleSubmit, formState: { errors}, watch } = useForm<User>({
    mode: 'onChange',
  });

  const emailError = errors.email?.message;
  const nameError = errors.name?.message;
  const passwordError = errors.password?.message;
  const rpasswordError = errors.rpassword?.message;
  const error = useSelector((store: RootState) => store.auth.error);
  
  const onSubmit: SubmitHandler<UserSignUp> = (data) => {
    dispatch(signUp(data))
    .catch(console.log);
    navigate('/');
  };

  return (
    <div>
      <h1>RegistrationPage</h1>
      {error &&  <h1 style={{ color: 'red', textTransform: 'uppercase' }}>{error}</h1>}
      <form onSubmit={handleSubmit(onSubmit)}>
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
        })}
        type="text" />
        <input 
        placeholder='email'
        // value={email} 
        // onChange={(e) => setEmail(e.target.value)}
        {...register
        ('email', {
          required: 'This field is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'invalid email address',
          },
        })}
        type="email" />
        <input 
        placeholder='Password'
        // value={password} 
        // onChange={(e) => setPasssword(e.target.value)} 
        {...register
        ('password', {
          required: 'This field is required',
          minLength: {
            value: 6,
            message: 'min length is 6',
          },
          maxLength: {
            value: 20,
            message: 'max length is 20',
          },
          pattern: {
            value: /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/i,
            message: 'password must contain numbers and letters',
          },
        })}
        type="password" />

        <input 
        placeholder='Repeat password'
        // value={rpassword} 
        // onChange={(e) => setRpasssword(e.target.value)} 
        {...register
          ('rpassword', {
          required: 'This field is required',
          minLength: {
            value: 6,
            message: 'min length is 6',
          },
          maxLength: {
            value: 20,
            message: 'max length is 20',
          },
          pattern: {
            value: /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/i,
            message: 'password must contain numbers and letters',
          },
          validate: (val: string) => {
            if (watch('password') != val) {
              return "Your passwords do no match";
            }
          },
        })}
        type="password" />

        <button type="submit">Зарегистрироваться</button>
        {emailError && <p style={{ color: 'tomato', textTransform: 'uppercase' }}>{emailError}</p>}
        {nameError && <p style={{ color: 'tomato', textTransform: 'uppercase' }}>{nameError}</p>}
        {passwordError && <p style={{ color: 'tomato', textTransform: 'uppercase' }}>{passwordError}</p>}
        {rpasswordError && <p style={{ color: 'tomato', textTransform: 'uppercase' }}>{rpasswordError}</p>}
      </form>
    </div>
  );
};

export default RegistrationPage;