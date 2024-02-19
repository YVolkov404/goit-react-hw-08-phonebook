import { useAuth } from 'hooks/AuthHook';
import { signout } from 'rdx/auth/authorization';
import { useDispatch } from 'react-redux';
import { Link as ReactRouterLink } from 'react-router-dom';
//-----------------------------------------
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
  Image,
  VStack,
} from '@chakra-ui/react';
import { GiCrownedSkull } from 'react-icons/all';
import { ArrowBackIcon } from '@chakra-ui/icons';
import profile from '../../media/profile.svg';
//--------------------------------------
export const ProfilePage = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  return (
    <Container as="section" position="relative" variant="primary">
      <Button as={ReactRouterLink} to={'/contacts'} variant="back-to-start">
        <ArrowBackIcon size="1g" />
      </Button>
      <VStack
        position="relative"
        w="100%"
        mt="3rem"
        p="1.75rem"
        justify="space-between"
        bg="yellow.50"
        borderRadius="3xl"
        boxShadow="md"
      >
        <Stack w="100%" h="100%">
          <Avatar
            icon={<GiCrownedSkull size="5.75rem" />}
            variant="roundedSquare"
          ></Avatar>
          <Heading variant="extra" size="3xl">
            Profile
          </Heading>
          <Divider borderColor="red.400" borderWidth="0.15rem" />

          <VStack w="100%" mt="2rem" align="center">
            <FormLabel as="label" variant="primary">
              Name
            </FormLabel>
            <Input value={user.name} size="lg" readOnly />

            <FormLabel as="label" variant="primary">
              Email
            </FormLabel>
            <Input value={user.email} size="lg" readOnly fontSize="2xl" />
          </VStack>
          <Button
            type="button"
            as={ReactRouterLink}
            to="/"
            variant="secondary"
            onClick={() => dispatch(signout())}
            mt="3rem"
          >
            LogOut
          </Button>
        </Stack>
        <Box w="90%" mt="3rem">
          <Image src={profile} alr="Profile" />
        </Box>
      </VStack>
    </Container>
  );
};
