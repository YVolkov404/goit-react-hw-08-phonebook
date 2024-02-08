import * as React from 'react';
import { NavLink, Route } from 'react-router-dom';

//----------------------------------------------------
import { LoginPage } from 'components/login/LoginPage';
import { RegisterPage } from 'components/register/RegisterPage';
import { HomePage } from 'components/home/HomePage';

// import Register from './Register';

export default function Login() {
  return (
    <LoginPage>
      <NavLink to="/" component={<HomePage />} />
      {<Route path="/login" /> ? (
        <NavLink exact to="/register" component={<RegisterPage />} />
      ) : (
        <NavLink exact to="/login" component={<LoginPage />} />
      )}
    </LoginPage>
  );
}
