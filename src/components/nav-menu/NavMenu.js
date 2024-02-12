import { NavLink, Route } from 'react-router-dom';
import { Button, HStack } from '@chakra-ui/react';

export const NavMenu = () => {
  return (
    <HStack w="100%" justify="space-between">
      <Button type="button" as={NavLink} to="/">
        Home
      </Button>
      {/* <Route
          to="/login"
          component={
            <Button as={NavLink} to="/register">
              SignUp
            </Button>
          }
        /> */}
      {<Route path="/login" /> && (
        <Button type="button" as={NavLink} to="/register">
          SignUp
        </Button>
      )}
      &&
      {<Route path="/register" /> && (
        <Button type="button" as={NavLink} to="/login">
          SignIn
        </Button>
      )}
    </HStack>
  );
};
