import { Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

export const AppLayout = () => {
  return (
    <Container size='xl' bg='gray.100' centerContent>
      <Outlet />
    </Container>
  );
};
