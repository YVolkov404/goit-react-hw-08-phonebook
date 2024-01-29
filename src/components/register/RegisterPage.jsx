import { Link } from 'react-router-dom';
import { Box, Flex, Button, Heading, HStack, Image } from '@chakra-ui/react';

import { SignUpForm } from 'components/form/SignUpForm';
import regPgImg from '../../media/register.svg';

export const RegisterPage = () => {
  return (
    <Box as='section' bg='yellow.50' borderColor='red.400'>
      <Flex
        minW='600'
        position='relative'
        align='center'
        justify='space-around'
        direction='column'
        p='115px 58px 215px 58px'
        h='100%'
      >
        <HStack w='100%' justify='space-between' px='30px'>
          <Button
            as={Link}
            to='/'
            size='lg'
            color='blue.400'
            variant='outline'
            _hover={{
              color: 'blue.400',
              borderBottom: '0.15rem solid',
            }}
          >
            Home
          </Button>
          <Button
            as={Link}
            to='/login'
            size='lg'
            color='blue.400'
            variant='outline'
            _hover={{
              color: 'blue.400',
              borderBottom: '0.15rem solid',
            }}
          >
            SignIn
          </Button>
        </HStack>
        <Heading color='red.400' size='2xl' variant='shadow' mt='40px'>
          Let Us Begin
        </Heading>
        <SignUpForm />
        <Image
          position='absolute'
          bottom='115px'
          right='100px'
          src={regPgImg}
          alr='Cat'
        />
      </Flex>
    </Box>
  );
};
