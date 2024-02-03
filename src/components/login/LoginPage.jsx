import { Link } from 'react-router-dom';
import { SignInForm } from '../form/SignInForm';
import { Box, Flex, Button, Heading, HStack, Image } from '@chakra-ui/react';

import LogPgImg from '../../media/login.svg';

export const LoginPage = () => {
  return (
    <Box as='section' bg='yellow.50' borderColor='red.400'>
      <Flex
        align='center'
        justify='space-between'
        direction='column'
        height='100%'
      >
        <HStack w='100%' justify='space-between'>
          <Button as={Link} to='/'>
            Home
          </Button>
          <Button as={Link} to='/register'>
            SignUp
          </Button>
        </HStack>

        <Heading letterSpacing='0.165em'>Welcome Back</Heading>
        <SignInForm />
        <Box alignSelf={'flex-end'}>
          <Image src={LogPgImg} alr='Kitty' width={'80%'} ml={'5rem'} />
        </Box>
      </Flex>
    </Box>
  );
};
