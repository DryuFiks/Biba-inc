/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/store';
import { signIn } from './authSlice';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { UserSignIn } from './types';


const AuthorizationPage = (): JSX.Element => {
  // const [email, setEmail] = useState('');
  // const [password, setPasssword] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { register, handleSubmit, formState: { errors} } = useForm<UserSignIn>({
    mode: 'onChange',
  });

  const emailError = errors.email?.message;
  const passwordError = errors.password?.message;
  const onSubmit: SubmitHandler<UserSignIn> = (data) => {
    dispatch(signIn(data))
    .catch(console.log);
    navigate('/');
  };
  return (
    <div>
      <h1>AuthorizationPage</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <button type="submit">Войти</button>
        {emailError &&  <p style={{ color: 'tomato', textTransform: 'uppercase' }}>{emailError}</p>}   
        {passwordError &&  <p style={{ color: 'tomato', textTransform: 'uppercase' }}>{passwordError}</p>}     
      </form>
    </div>
  );
};

export default AuthorizationPage;