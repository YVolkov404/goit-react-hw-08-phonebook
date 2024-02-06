import { Container, Spinner } from '@chakra-ui/react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
//---------------------------------------------

export const Layout = () => {
  return (
    <Container basename="root" size="xl" bg="gray.100" centerContent>
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
