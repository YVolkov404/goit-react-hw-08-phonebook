import { ArrowBackIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import { BiGame } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export const ProfilePage = () => {
  return (
    <Box
      position='relative'
      as='section'
      bgColor='green.50'
      borderColor='blue.400'
    >
      <Button
        as={Link}
        position={'absolute'}
        top={'4rem'}
        left={'4rem'}
        to={'/contacts/'}
        rounded={'full'}
      >
        <ArrowBackIcon />
      </Button>
      <Box
        position='relative'
        w='100%'
        h={'815px'}
        mt='3rem'
        bg='yellow.100'
        borderRadius='3xl'
        boxShadow={'lg'}
        p={35}
      >
        <Flex
          align='center'
          justify='space-between'
          direction='column'
          alignContent='flex-end'
          h='100%'
        >
          <Avatar
            position='absolute'
            right='5rem'
            top={-75}
            w={44}
            h={44}
            variant='roundedSquare'
            bg={'blue.400'}
            boxShadow={'xl'}
            icon={<BiGame size='lg' />}
          ></Avatar>
          <Heading mt={98} textAlign={'left'}>
            Profile
          </Heading>
          <Divider borderColor={'red.400'} borderWidth={'0.15rem'} />
          <VStack mt={'2rem'} align={'left'} spacing={6}>
            <Box>
              <Text fontSize={'3xl'}>Username</Text>
              <Box
                w={'lg'}
                h={50}
                border={'2px solid'}
                borderRadius={'lg'}
                borderColor={'red.400'}
              ></Box>
            </Box>
            <Box>
              <Text fontSize={'3xl'}>Email</Text>
              <Box
                w={'lg'}
                h={50}
                border={'2px solid'}
                borderRadius={'lg'}
                borderColor={'red.400'}
              ></Box>
            </Box>
            <Button variant={'secondary'}>LogOut</Button>
          </VStack>
          <Button mt={40} alignSelf={'flex-end'}>
            Delete Account
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};
