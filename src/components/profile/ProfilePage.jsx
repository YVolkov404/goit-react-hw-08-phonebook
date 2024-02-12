import { ArrowBackIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Button,
  Container,
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
    <Container as="section" position="relative" variant="primary">
      <Button
        as={Link}
        position={'absolute'}
        top={'3rem'}
        left={'4rem'}
        to={'/contacts/'}
        rounded={'full'}
      >
        <ArrowBackIcon />
      </Button>
      <Box
        position="relative"
        w="100%"
        h="725px"
        mt="3rem"
        bg="yellow.50"
        borderRadius="3xl"
        boxShadow={'md'}
        p={35}
      >
        <Flex
          align="center"
          // justify='space-between'
          direction="column"
          alignContent="flex-end"
          h="100%"
        >
          <Avatar
            position="absolute"
            right="5rem"
            top={-75}
            w={36}
            h={36}
            bg={'blue.400'}
            boxShadow={'xl'}
            icon={<BiGame size="lg" />}
            variant="roundedSquare"
          ></Avatar>
          <Heading
            mt={84}
            size={'3xl'}
            fontFamily={'Lilita One, serif'}
            bgGradient="linear(to-r, blue.600, blue.400, blue.300, red.300, red.400, red.600)"
            bgClip="text"
          >
            Profile
          </Heading>
          <Divider borderColor={'red.400'} borderWidth={'0.15rem'} />
          <VStack mt={'1.5rem'} align={'left'} spacing={4}>
            <Box>
              <Text>Username</Text>
              <Box
                w={'sm'}
                h={50}
                border={'2px solid'}
                borderRadius={'lg'}
                borderColor={'red.400'}
              ></Box>
            </Box>
            <Box>
              <Text>Email</Text>
              <Box
                w={'sm'}
                h={50}
                border={'2px solid'}
                borderRadius={'lg'}
                borderColor={'red.400'}
              ></Box>
            </Box>

            <Button as={Link} to="/" variant={'secondary'}>
              LogOut
            </Button>
          </VStack>
          <Button mt={20} alignSelf={'flex-end'} as={Link} to="/not-found">
            Delete Account
          </Button>
        </Flex>
      </Box>
    </Container>
  );
};
