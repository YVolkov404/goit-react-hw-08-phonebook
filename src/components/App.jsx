import React, { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from 'PrivateRoute';
import { RestrictedRoute } from 'RestrictedRoute';
import { useDispatch } from 'react-redux';

import { Alert, AlertIcon, Spinner } from '@chakra-ui/react';

//-----------------------------------------------
// import { Root } from '../Layout';
import { useAuth } from '../hooks/Hooks';
import { refreshing } from 'rdx/authorization';
import { Layout } from '../Layout';

const Home = lazy(() => import('routes/Home'));
const Register = lazy(() => import('routes/Register'));
const Profile = lazy(() => import('routes/Profile'));
const Login = lazy(() => import('routes/Login'));
const Contacts = lazy(() => import('routes/Contacts'));
const Info = lazy(() => import('routes/Info'));
const NotFound = lazy(() => import('routes/NotFound'));

//------------------------------------------------

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshing());
  }, [dispatch]);

  return isRefreshing ? (
    <Alert status="warning">Pending refreshing user</Alert>
  ) : (
    <Routes path="/" element={<Layout />}>
      <Route index element={<Home />} />

      <Route
        path="/register"
        element={
          <RestrictedRoute redirectTo="/profile" element={<Register />} />
        }
      />

      <Route
        path="/login"
        element={<PrivateRoute redirectTo="/contacts" element={<Login />} />}
      />

      <Route
        path="/profile"
        element={<PrivateRoute redirectTo="/register" element={<Profile />} />}
      />

      <Route
        path="/contacts"
        element={<PrivateRoute redirectTo="/" element={<Contacts />} />}
      >
        <Route path="contactId" element={<Info />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
