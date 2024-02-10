import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from 'PrivateRoute';
import { RestrictedRoute } from 'RestrictedRoute';
import { useDispatch } from 'react-redux';
//-----------------------------------------------
import { useAuth } from '../hooks/Hooks';
import { refreshing } from 'rdx/authorization';
import { Layout } from '../Layout';
// import { Alert, AlertIcon } from '@chakra-ui/react';

const HomePage = lazy(() => import('routes/Home'));
const RegisterPage = lazy(() => import('routes/Register'));
const ProfilePage = lazy(() => import('routes/Profile'));
const LoginPage = lazy(() => import('routes/Login'));
const ContactsPage = lazy(() => import('routes/Contacts'));
const InfoPage = lazy(() => import('routes/Info'));
const NotFoundPage = lazy(() => import('routes/NotFound'));

//------------------------------------------------

function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshing());
  }, [dispatch]);

  return isRefreshing ? (
    <Suspense fallback />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/profile"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute redirectTo="/register" component={<ProfilePage />} />
          }
        />
        <Route
          path="/contacts"
          element={<PrivateRoute component={<ContactsPage />} />}
        >
          <Route
            path="contactId"
            element={<PrivateRoute component={<InfoPage />} />}
          />
          <Route
            path="profile"
            element={<PrivateRoute component={<ProfilePage />} />}
          />
        </Route>
        <Route path="*" component={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
