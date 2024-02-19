import { Container, Heading, Spacer, VStack } from '@chakra-ui/react';
import { SingUpForm } from 'components/form/SignUpForm';
import { RegisterNavMenu } from 'components/nav-menu/RegisterNavMenu';
//------------------------------------------ -

//-------------------------------------------------------------
export default function Register() {
  return (
    <Container as="section" variant="primary">
      <VStack spacing="2.5rem">
        <RegisterNavMenu />
        <Heading as="h1" variant="secondary">
          Let Us Begin
        </Heading>
        <SingUpForm />
        <Spacer />
      </VStack>
    </Container>
  );
}
