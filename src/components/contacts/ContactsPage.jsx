import React from 'react';
import ReactShadowScrollComponent from 'react-shadow-scroll';
import {
  Avatar,
  Box,
  Flex,
  FormControl,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Stack,
  Image,
  // Skeleton,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiFilterAlt } from 'react-icons/bi';
import { ModalBox } from 'components/modal/Modal';
import data from '../../data.json';
import { StackItems } from './ContactList';
import contactsImg from '../../media/contacts.svg';

export const ContactsPage = () => {
  return (
    <Box as='section' bg='green.50' borderColor='blue.400'>
      <Flex
        position='relative'
        align='center'
        justify='space-between'
        direction='column'
        height='100%'
      >
        <HStack
          position={'absolute'}
          top={'-1.75rem'}
          justify='flex-end'
          alignItems={'flex-end'}
          gap={'2rem'}
        >
          <Link to={`/profile`}>
            <Text
              w='100%'
              h='auto'
              fontSize='5xl'
              fontFamily='Lilita One'
              bgGradient='linear(to-l, blue.600, blue.400, teal.200, yellow.300, red.400, red.500)'
              bgClip='text'
            >
              Usercat
            </Text>
          </Link>
          <Link to={'/Profile'}>
            <Avatar
              size='xl'
              variant='roundedSquare'
              bg={'blue.400'}
              boxShadow={'lg'}
            />
          </Link>
        </HStack>

        <FormControl mt={'6rem'}>
          <InputGroup>
            <InputLeftElement>
              <BiFilterAlt currentColor='red.400' />
            </InputLeftElement>

            <Input variant='filled' placeholder='You can filter contacts' />
          </InputGroup>
        </FormControl>

        <Stack
          w='100%'
          h='600px'
          p='1rem 3rem 3rem 3rem'
          bgColor='yellow.50'
          align='center'
          spacing={5}
        >
          <Box w={'100%'} h={'8rem'} textAlign={'center'}>
            <ModalBox />
          </Box>

          <ReactShadowScrollComponent
            scrollColor='#F56565'
            scrollColorHover='#63B3ED'
            shadow='none'
            scrollWidth={20}
            scroll-behavior='revert'
          >
            <Stack spacing={2}>
              <StackItems data={data} />
            </Stack>
            <Box w='100%' h='85%' bg={'yellow.50'}>
              <Image w='100%' mt={'5rem'} src={contactsImg} alr='Cat' />
            </Box>
          </ReactShadowScrollComponent>
        </Stack>
      </Flex>
    </Box>
  );
};
