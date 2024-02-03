import {
  Button,
  HStack,
  Text,
  Image,
  VStack,
  Heading,
  Box,
  Flex,
  Stack,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

import homeImg from '../../media/home.svg';

export const HomePage = () => {
  return (
    <Box as='section' bgColor='green.50' borderColor='blue.400'>
      <Flex align='center' justify='space-between' direction='column' h='100%'>
        <Box as='header'>
          <Heading as='h1'>Catsbook</Heading>
        </Box>
        <Stack as='main' spacing={8}>
          <HStack justify='center' gap='2rem'>
            <Button as={Link} to='/register'>
              SignUp
            </Button>
            <Text>for free</Text>
          </HStack>
          <Image src={homeImg} alr='Cats' />
          <VStack spacing={8}>
            <Text>already have an account?</Text>
            <Button as={Link} to='/login'>
              SignIn
            </Button>
          </VStack>
        </Stack>
        <Box as='footer'>
          <Text fontSize='xl' fontWeight='normal'>
            fantom_ass 2014
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};
