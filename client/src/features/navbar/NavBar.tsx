/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './styles/navbar.scss';

import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { logOut } from '../auth/authSlice';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AssistWalkerIcon from '@mui/icons-material/AssistWalker';
import { Typography } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';

const NavBar = (): JSX.Element => {
  const user = useSelector((store: RootState) => store.auth.auth);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();



  return (
    <>
      {/* <ul className="nav__container">
        {user && <li>Hello, {user.name}!</li>}
        <li className="nav__item">
          <NavLink className="nav__link" to="/">
            Main
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/users">
            Users
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/products">
            Shop
          </NavLink>
        </li>
        {!user && 
        <>
          <li className="nav__item">
            <NavLink className="nav__link" to="/sign-up">
              Registration
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav__link" to="/sign-in">
              Authorization
            </NavLink>
          </li>
        </>}
        {user &&
        <li onClick={() => {
          dispatch(logOut()).catch(console.log);
          navigate('/');
          }} className="nav__item">
          <NavLink className="nav__link" to="/logout">
            LogOut
          </NavLink>
        </li>}
      </ul> */}
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <AssistWalkerIcon onClick={() => {navigate('/products');}}/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
            {user && `Hello, ${user.name}!`}
          </Typography>
          <Button color="inherit" onClick={() => {navigate('/sign-in');}}>
            Sign-In
          </Button>
          <Button color="inherit" onClick={() => {navigate('/sign-up');}}>
            Sign-Up
          </Button>
          {user && <Button color="inherit" onClick={() => {
            dispatch(logOut()).catch(console.log);
            navigate('/');}} >
            Log-Out
          </Button>}
        </Toolbar>
      </AppBar>
    </Box>
<Outlet />
  <h1 style={{ fontSize: '100px', color: 'red', textAlign: 'center' }}>Footer</h1>
    </>
  );
};

export default NavBar;