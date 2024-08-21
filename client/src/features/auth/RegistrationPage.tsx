/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';
import { type RootState, useAppDispatch } from '../../redux/store';
import { signUp } from './authSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import { User, UserSignUp } from './types';
import { Button, TextField } from '@mui/material';

const RegistrationPage = (): JSX.Element => {
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
    .then(() => navigate('/'))
    .catch(console.log);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
        error
        variant="filled"
        label='Name'
        {...register
          ('name', { 
            required: 'This field is required',
          })}
          helperText={nameError} />
        <TextField
        error 
        variant="filled"
        label='email'
        {...register
          ('email', {
            required: 'This field is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'invalid email address',
            },
          })}
          helperText={emailError} />

        <TextField
        error 
        variant="filled"
        label='Password'
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
          helperText={passwordError} />

        <TextField
        error 
        variant="filled"
        label='Repeat password'
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
          helperText={rpasswordError}
          />

        <Button type="submit" variant="contained">Зарегистрироваться</Button>

        {error &&  <p style={{ color: 'tomato', textTransform: 'uppercase' }}>{error}</p>}
      </form>
    </div>
  );
};

export default RegistrationPage;