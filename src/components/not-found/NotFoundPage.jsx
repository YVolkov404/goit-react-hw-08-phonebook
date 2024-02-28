import { Link as ReactRouterLink } from 'react-router-dom';
import { Box, Button, Container, Image } from '@chakra-ui/react';
import pnf404 from '../../media/404.svg';
import { ArrowBackIcon } from '@chakra-ui/icons';

export const NotFoundPage = () => {
  return (
    <Container as="section" variant="secondary" height="40rem">
      <Box w="100%" position="relative">
        <Button
          as={ReactRouterLink}
          position="absolute"
          top="-2rem"
          left="2rem"
          to="/"
          rounded="full"
        >
          <ArrowBackIcon />
        </Button>
        <Image src={pnf404} />
      </Box>
    </Container>
  );
};
