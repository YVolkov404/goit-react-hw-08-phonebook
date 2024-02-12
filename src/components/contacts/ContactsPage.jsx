import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactShadowScrollComponent from 'react-shadow-scroll';
import {
  Avatar,
  Box,
  Flex,
  HStack,
  Text,
  Stack,
  Image,
  StackItem,
  // Skeleton,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ModalBox } from 'components/modal/Modal';
import { Contacts } from './ContactList';
//----------------------------------------------------
import { getAllContacts } from 'rdx/operations';
import { selectContacts } from 'hooks/FilteredContacts';
//-----------------------------------------------------
import contactsImg from '../../media/contacts.svg';
import { Filter } from './ContactsFilter';

// import data from '../../data.json';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  return (
    <Box as="section" variant="primary">
      <Flex
        position="relative"
        align="center"
        justify="space-between"
        direction="column"
        height="100%"
      >
        <HStack
          position={'absolute'}
          top={'-1.75rem'}
          justify="flex-end"
          alignItems={'flex-end'}
          gap={'2rem'}
        >
          <Link to={`/profile`}>
            <Text
              w="100%"
              h="auto"
              fontSize="5xl"
              fontFamily="Lilita One"
              bgGradient="linear(to-l, blue.600, blue.400, teal.200, yellow.300, red.400, red.500)"
              bgClip="text"
            >
              Usercat
            </Text>
          </Link>
          <Link to={'/profile'}>
            <Avatar
              size="xl"
              variant="roundedSquare"
              bg={'blue.400'}
              boxShadow={'lg'}
            />
          </Link>
        </HStack>

        <Filter />

        <Stack
          w="100%"
          h="600px"
          p="1rem 3rem 3rem 3rem"
          bgColor="yellow.50"
          align="center"
          spacing={5}
        >
          <Box w={'100%'} h={'8rem'} textAlign={'center'}>
            <ModalBox />
          </Box>

          <ReactShadowScrollComponent
            scrollColor="#F56565"
            scrollColorHover="#63B3ED"
            shadow="none"
            scrollWidth={20}
            scroll-behavior="revert"
          >
            <Stack spacing={2}>
              {contacts.length > 0 && <Contacts as={StackItem} />}
            </Stack>
            <Box w="100%" h="85%" bg={'yellow.50'}>
              <Image w="100%" mt={'5rem'} src={contactsImg} alt="Cat" />
            </Box>
          </ReactShadowScrollComponent>
        </Stack>
      </Flex>
    </Box>
  );
};
