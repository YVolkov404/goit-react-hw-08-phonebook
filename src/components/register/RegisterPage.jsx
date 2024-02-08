import { NavLink } from 'react-router-dom';

import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Spacer,
  VStack,
} from '@chakra-ui/react';
import registerImg from '../../media/register.svg';
import { SingUpForm } from 'components/form/SignUpForm';

export const RegisterPage = () => {
  return (
    <Container as="section" variant={'primary'}>
      <VStack spacing={5}>
        <HStack w="100%" justify="space-between">
          <HStack w="100%" justify="space-between">
            <Button as={NavLink} to="/" variant="secondary">
              Home
            </Button>
            <Button as={NavLink} to="/login" variant="secondary">
              SignIn
            </Button>
          </HStack>
        </HStack>

        <Heading as="h1" my="3rem" variant="secondary">
          Let Us Begin
        </Heading>

        <SingUpForm />

        <Spacer />
        <Box position="relative" w="100%" h="100%">
          <Image
            position="absolute"
            bottom="10px"
            src={registerImg}
            alr="Cats"
            opacity="0.222"
          />
        </Box>
      </VStack>
    </Container>
  );
};
