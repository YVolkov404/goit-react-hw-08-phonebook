import { useDispatch, useSelector } from 'react-redux';
import { Link as ReactRouterLink, useParams } from 'react-router-dom';
//----------------------------------------------
import { ArrowBackIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { GiBrokenSkull } from 'react-icons/all';
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
            icon={<GiBrokenSkull size="5.75rem" />}
            variant="roundedSquare"
          ></Avatar>
          <Heading variant="extra" size="3xl">
            Contact
          </Heading>
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
          >
            Delete Contact
          </Button>
        </Stack>
        <Box>
          <Text as="samp">fantom_ass 2014</Text>
        </Box>
      </VStack>
    </Container>
  );
};
