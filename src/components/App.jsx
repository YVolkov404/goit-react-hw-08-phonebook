import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from 'PrivateRoute';
import { RestrictedRoute } from 'RestrictedRoute';
import { useDispatch } from 'react-redux';
//-----------------------------------------------
import { useAuth } from '../hooks/AuthHook';
import { refreshing } from 'rdx/auth/authorization';
import { Layout } from '../Layout';
// import { Alert, AlertIcon } from '@chakra-ui/react';

const HomePage = lazy(() => import('pages/Home'));
const RegisterPage = lazy(() => import('pages/Register'));
const ProfilePage = lazy(() => import('pages/Profile'));
const LoginPage = lazy(() => import('pages/Login'));
const ContactsPage = lazy(() => import('pages/Contacts'));
const InfoPage = lazy(() => import('pages/Info'));
const NotFoundPage = lazy(() => import('pages/NotFound'));

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
            path="profile"
            element={<PrivateRoute component={<ProfilePage />} />}
          />
        </Route>

        <Route
          path={`/contacts/:id`}
          element={<PrivateRoute component={<InfoPage />} />}
        >
          <Route
            path="contactId"
            element={
              <PrivateRoute redirectTo="/contacts" component={<InfoPage />} />
            }
          />
        </Route>
        <Route
          path="*"
          element={<PrivateRoute redirectTo="/" component={<NotFoundPage />} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
