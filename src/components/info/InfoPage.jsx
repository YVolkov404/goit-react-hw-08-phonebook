import { useDispatch, useSelector } from 'react-redux';
import { Link as ReactRouterLink, useParams } from 'react-router-dom';
//----------------------------------------------
import { ArrowBackIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Button,
  Container,
  Divider,
  FormLabel,
  Heading,
  Input,
  Stack,
  VStack,
  Box,
  Image,
} from '@chakra-ui/react';
import { GiBrokenSkull } from 'react-icons/all';
import info from '../../media/info.svg';
//--------------------------------------------
import { deleteContact } from 'rdx/contacts/operations';
import { filteredContacts } from 'hooks/FilterHook';
//---------------------------------------------
export const InfoPage = () => {
  const dispatch = useDispatch();
  const { name, number } = useSelector(filteredContacts);
  const params = useParams();

  return (
    <Container as="section" position="relative" variant="primary">
      <Button as={ReactRouterLink} to={'/contacts'} variant="back-to-start">
        <ArrowBackIcon size="md" />
      </Button>
      <VStack
        position="relative"
        w="100%"
        h="725px"
        mt="3rem"
        p="1.75rem"
        bg="yellow.50"
        borderRadius="3xl"
        boxShadow="md"
      >
        <Stack w="100%" h="100%">
          <Avatar
            icon={<GiBrokenSkull size="3.75rem" />}
            variant="roundedSquare"
          ></Avatar>
          <Heading>Contact</Heading>
          <Divider borderColor={'red.400'} borderWidth={'0.15rem'} />

          <VStack w="100%" mt="2rem" align="center">
            <FormLabel as="label" variant="secondary">
              Name
            </FormLabel>
            <Input
              value={name}
              placeholder="Contact name"
              size="lg"
              readOnly
              _placeholder={{ color: 'blue.400' }}
            />

            <FormLabel as="label" variant="secondary">
              Number
            </FormLabel>
            <Input
              value={number}
              placeholder="Phone number"
              size="lg"
              readOnly
              _placeholder={{ color: 'blue.400' }}
            />
          </VStack>
          <Button
            type="button"
            as={ReactRouterLink}
            to="/contacts"
            variant="primary"
            onClick={() => dispatch(deleteContact(params.id))}
            mt="3rem"
            zIndex="99"
          >
            Delete Contact
          </Button>
        </Stack>
        <Box pos="absolute" bottom="1rem" w="90%">
          <Image src={info} alr="Profile" />
        </Box>
      </VStack>
    </Container>
  );
};
