import { Link as ReactRouterLink } from 'react-router-dom';
import { Button, HStack } from '@chakra-ui/react';

export const LoginNavMenu = () => {
  return (
    <HStack w="100%" justify="space-between">
      <Button type="button" as={ReactRouterLink} to="/">
        Home
      </Button>

      <Button type="button" as={ReactRouterLink} to="/register">
        SignUp
      </Button>
    </HStack>
  );
};
