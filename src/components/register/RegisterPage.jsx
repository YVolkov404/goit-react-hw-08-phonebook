import {
  Box,
  Container,
  Heading,
  Image,
  Spacer,
  VStack,
} from '@chakra-ui/react';
import { SingUpForm } from 'components/form/SignUpForm';
import { NavMenu } from 'components/nav-menu/NavMenu';
//------------------------------------------ -
import registerPgImg from '../../media/register.svg';
//-------------------------------------------
export const RegisterPage = () => {
  return (
    <Container as="section" variant="primary">
      <VStack spacing="2.5rem">
        <NavMenu />
        <Heading as="h1" variant="secondary">
          Let Us Begin
        </Heading>
        <SingUpForm />
        <Spacer />
        <Box position="relative" w="100%">
          <Image
            src={registerPgImg}
            position="absolute"
            bottom="-2rem"
            opacity="0.333"
          />
        </Box>
      </VStack>
    </Container>
  );
};
