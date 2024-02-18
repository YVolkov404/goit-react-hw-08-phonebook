import { SignInForm } from 'components/form/SignInForm';
import { LoginNavMenu } from 'components/nav-menu/LoginNavMenu';
import { Box, Heading, Image, Container, VStack } from '@chakra-ui/react';
//-------------------------------------
import loginPgImg from 'media/login.svg';
//----------------------------------------------------
export default function Login() {
  return (
    <Container as="section" variant="secondary">
      <VStack spacing="2.5rem">
        <LoginNavMenu />
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
}
