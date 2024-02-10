import { SignInForm } from '../form/SignInForm';
import { NavMenu } from 'components/nav-menu/NavMenu';
import { Box, Heading, Image, Container, VStack } from '@chakra-ui/react';
//-------------------------------------
import loginPgImg from '../../media/login.svg';
//-------------------------------------
export const LoginPage = () => {
  return (
    <Container as="section" variant="secondary">
      <VStack spacing="2.5rem">
        <NavMenu />
        <Heading as="h1" fontSize="2.7rem">
          Welcome Back
        </Heading>
        <SignInForm />
        <Box alignSelf="flex-end">
          <Image src={loginPgImg} />
        </Box>
      </VStack>
    </Container>
  );
};
