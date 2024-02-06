import * as React from 'react';
import { NavLink, Route } from 'react-router-dom';

//----------------------------------------------------
import { LoginPage } from 'components/login/LoginPage';
import Register from './Register';

export default function Login() {
  return (
    <LoginPage>
      <NavLink to="/">Home</NavLink>
      {<Route path="/login" /> ? (
        <NavLink exact to="register" component={<Login />} />
      ) : (
        <NavLink exact to="login" component={<Register />} />
      )}
      /
    </LoginPage>
  );
}
