import { Link, NavLink as RouteLink } from 'react-router-dom';
import { HStack } from '@chakra-ui/react';

export const NavBar = () => {
  return (
    <HStack as="nav">
      <RouteLink to="/">
        <Link text="Home" />
      </RouteLink>
      <RouteLink to="/register">
        <Link text="Register" />
      </RouteLink>
      <RouteLink to="/login">
        <Link text="Login" />
      </RouteLink>
    </HStack>
  );
};
