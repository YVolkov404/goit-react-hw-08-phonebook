import {
  Button,
  HStack,
  Text,
  Image,
  VStack,
  Heading,
  Box,
  Container,
} from '@chakra-ui/react';

import { NavLink } from 'react-router-dom';

import homeImg from '../../media/home.svg';

export const HomePage = () => {
  return (
    <Container as="section" variant="primary">
      <VStack spacing={10}>
        <Box>
          <Heading as="h1">Phonebook</Heading>
        </Box>
        <VStack spacing={10}>
          <HStack justify="center" gap="2rem">
            <Button type="button" as={NavLink} to="register">
              SignUp
            </Button>
            <Text>for free</Text>
          </HStack>
          <Image src={homeImg} alr="Cats" />
          <VStack spacing={2}>
            <Text>already have an account?</Text>
            <Button type="button" as={NavLink} to="login">
              SignIn
            </Button>
          </VStack>
        </VStack>
        <Box>
          <Text as="copyright">fantom_ass 2014</Text>
        </Box>
      </VStack>
    </Container>
  );
};
