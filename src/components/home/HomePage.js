import { Link as ReactRouterLink } from 'react-router-dom';
//----------------------------------------
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
import homeImg from 'media/home.svg';
//----------------------------------------
export const HomePage = () => {
  return (
    <Container as="section" variant="primary" layerStyle="base">
      <VStack spacing={10}>
        <Box>
          <Heading as="h1">Phonebook</Heading>
        </Box>
        <VStack spacing={10}>
          <HStack justify="center" gap="2rem">
            <Button type="button" as={ReactRouterLink} to="register">
              SignUp
            </Button>
            <Text>for free</Text>
          </HStack>
          <Image src={homeImg} width={'90%'} alr="Cats" />
          <VStack spacing={2}>
            <Text>already have an account?</Text>
            <Button type="button" as={ReactRouterLink} to="login">
              SignIn
            </Button>
          </VStack>
        </VStack>
        <Box>
          <Text as="samp" variant="selected">
            fantom_ass 2024
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};
