import { Link, NavLink as RouteLink } from 'react-router-dom';
import { HStack } from '@chakra-ui/react';

export const NavBar = () => {
  return (
    <HStack as='nav'>
      <RouteLink to='/'>
        <Link to='/Home' />
      </RouteLink>
      <RouteLink to='/register'>
        <Link to='/Profile' />
      </RouteLink>
      <RouteLink to='/login'>
        <Link to='/Contacts' />
      </RouteLink>
    </HStack>
  );
};
