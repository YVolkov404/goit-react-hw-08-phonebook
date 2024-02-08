import { Container, Spinner } from '@chakra-ui/react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
//---------------------------------------------

export const Layout = () => {
  return (
    <Container basename="root" size="xl" bg="inherit" centerContent>
      <Suspense fallback={<Spinner thickness="5px" />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

// function Loader() {
//   return (
//     <Alert status="warning">
//       <AlertIcon />
//       Pending refreshing user
//     </Alert>
//   );
// }
