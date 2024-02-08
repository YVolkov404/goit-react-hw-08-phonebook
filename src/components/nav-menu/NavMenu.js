import { Button } from '@chakra-ui/react';
// import { HomePage } from 'components/home/HomePage';
// import { RegisterPage } from 'components/register/RegisterPage';
import { Link } from 'react-router-dom';

export const NavMenu = () => {
  return (
    <>
      <Link to="/" component={<Button variant="secondary">Home</Button>} />
      <Link
        to="/login"
        component={<Button variant="secondary">SignIn</Button>}
      />
    </>
  );
};
