import { Container, Spinner } from '@chakra-ui/react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
//---------------------------------------------

export const Layout = () => {
  return (
    <Container basename="root" minW="420px" layerStyle="base" centerContent>
      <Suspense fallback={<Spinner thickness="1.25rem" />}>
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
