import { Link } from 'react-router-dom';
import {
  Box,
  Flex,
  Button,
  Heading,
  HStack,
  Image,
  Spacer,
} from '@chakra-ui/react';

import { SignUpForm } from 'components/form/SignUpForm';

import registerImg from '../../media/register.svg';

export const RegisterPage = () => {
  return (
    <Box as='section' bg='yellow.50' borderColor='red.400'>
      <Flex
        position='relative'
        align='center'
        justify='space-between'
        direction='column'
        height='100%'
      >
        <HStack w='100%' justify='space-between'>
          <Button as={Link} to='/' variant='secondary'>
            Home
          </Button>
          <Button as={Link} to='/login' variant='secondary'>
            SignIn
          </Button>
        </HStack>
        <Heading as='h1' my={'3rem'} variant='secondary'>
          Let Us Begin
        </Heading>
        <Box>
          <SignUpForm />
        </Box>
        <Spacer />
        <Box position={'relative'} w={'100%'} h={'100%'}>
          <Image
            position={'absolute'}
            bottom={'10'}
            src={registerImg}
            alr='Cats'
            opacity={'0.222'}
          />
        </Box>
      </Flex>
    </Box>
  );
};
