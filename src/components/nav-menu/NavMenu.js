import { NavLink, Route } from 'react-router-dom';
import { Button, HStack } from '@chakra-ui/react';
import { RegisterPage } from 'components/register/RegisterPage';
import { LoginPage } from 'components/login/LoginPage';
import { NotFoundPage } from 'components/not-found/NotFoundPage';

export const NavMenu = () => {
  return (
    <HStack w="100%" justify="space-between">
      <Button type="button" as={NavLink} to="/">
        Home
      </Button>
      {<Route element={<LoginPage />} /> ? (
        <Button type="button" as={NavLink} to="/register">
          SignUp
        </Button>
      ) : (
        <Route element={<NotFoundPage />} />
      )}
      {<Route element={<RegisterPage />} /> ? (
        <Button type="button" as={NavLink} to="/login">
          SignIn
        </Button>
      ) : (
        <Route element={<NotFoundPage />} />
      )}
    </HStack>
  );
};
