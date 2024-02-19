import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import ReactShadowScrollComponent from 'react-shadow-scroll';
import {
  Container,
  Avatar,
  Box,
  HStack,
  Stack,
  Image,
  StackItem,
  Heading,
  VStack,
} from '@chakra-ui/react';
import { ModalBox } from 'components/modal/Modal';
import { Contacts } from './ContactList';
//----------------------------------------------------
import { getAllContacts } from 'rdx/contacts/operations';
import { Filter } from './ContactsFilter';
import { useAuth } from 'hooks/AuthHook';
import { filteredContacts } from 'hooks/FilterHook';
//-----------------------------------------------------
import contactsImg from '../../media/contacts.svg';

export const ContactsPage = () => {
  const { user } = useAuth();
  const location = useLocation();
  const contacts = useSelector(filteredContacts);
  const dispatch = useDispatch();

  console.log(location);

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  return (
    <Container as="section" variant="secondary">
      <Stack>
        <VStack spacing="2rem">
          <HStack>
            <Link to="/profile" w="100%">
              <Heading>{user.name}</Heading>
            </Link>
          </HStack>

          <Filter />

          <Stack
            w="100%"
            h="596px"
            // p="2rem"
            bgColor="yellow.50"
            align="center"
            borderRadius="xl"
          >
            <ModalBox />
            <ReactShadowScrollComponent
              scrollColor="#F56565"
              scrollColorHover="#63B3ED"
              shadow="none"
              scrollWidth={20}
              scroll-behavior="revert"
            >
              <Stack spacing={2}>
                <Contacts as={StackItem} location={location} />
              </Stack>
              {contacts !== undefined || contacts > 0 ? (
                <Box w="100%" bg={'yellow.50'} m="1.75rem 0">
                  <Image w="100%" src={contactsImg} alt="Cat" />
                </Box>
              ) : (
                <Box w="100%" bg={'yellow.50'}>
                  <Image w="100%" src={contactsImg} alt="Cat" />
                </Box>
              )}
            </ReactShadowScrollComponent>
          </Stack>
        </VStack>
      </Stack>
    </Container>
  );
};
