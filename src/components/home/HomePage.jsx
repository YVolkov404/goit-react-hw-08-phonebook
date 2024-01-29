import {
  Box,
  Button,
  Flex,
  HStack,
  Stack,
  Text,
  Image,
  VStack,
  Heading,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';

import homeImg from '../../media/home.svg';

export const HomePage = () => {
  return (
    <Box as='section' bg='green.50' borderColor='blue.400'>
      <Flex
        minW='600'
        align='center'
        justify='space-between'
        direction='column'
        p='115px 58px'
        height='100%'
      >
        <Stack as='header' align='center' spacing='1.5rem'>
          <Heading as='h1' color='blue.400' size='3xl' variant='shadow'>
            Catsbook
          </Heading>
          <HStack spacing='2.25em'>
            <Button
              as={Link}
              to='/register'
              size='lg'
              color='red.400'
              variant='outline'
              _hover={{
                color: 'blue.400',
                borderBottom: '0.15rem solid',
              }}
            >
              SignUp
            </Button>
            <Text>for free</Text>
          </HStack>
        </Stack>

        <Stack as='main'>
          <VStack spacing='1.75em'>
            <Image src={homeImg} alr='Cats' />
            <Text>already have an account?</Text>
            <Button
              as={Link}
              to='/login'
              size='lg'
              color='red.400'
              variant='outline'
              _hover={{ color: 'blue.400', borderBottom: '0.15rem solid' }}
            >
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
