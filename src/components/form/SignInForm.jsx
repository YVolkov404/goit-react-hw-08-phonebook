import { Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

//-----------------------------------------------------------
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  Stack,
  Tooltip,
  InputLeftAddon,
  Icon,
  InputGroup,
} from '@chakra-ui/react';

import { HiMail, HiKey } from 'react-icons/hi';

export const SignInForm = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string()
          .min(5, 'Password too short!')
          .max(24, 'Password too long!')
          .required('Required'),
      })}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.resetForm();
      }}
    >
      {formik => (
        <Stack
          as='form'
          w='100%'
          spacing='1.5rem'
          onSubmit={formik.handleSubmit}
        >
          <FormControl isInvalid={formik.errors.email && formik.touched.email}>
            <FormLabel as='label' fontSize='3xl' mb='0'>
              Email
            </FormLabel>

            <Tooltip
              label={formik.errors.email}
              isOpen={true}
              placement='top-end'
            >
              <InputGroup>
                <InputLeftAddon bgColor='green.50'>
                  <Icon as={HiMail} boxSize='2.25em' fill='red.400' />
                </InputLeftAddon>
                <Input
                  name='email'
                  {...formik.getFieldProps('email')}
                  placeholder='john-dow@mail.com'
                  variant={'primary'}
                />
              </InputGroup>
            </Tooltip>
          </FormControl>

          <FormControl
            isInvalid={formik.errors.password && formik.touched.password}
          >
            <FormLabel as='label' fontSize='3xl' mb='0'>
              Password
            </FormLabel>

            <Tooltip
              label={formik.errors.password}
              isOpen='true'
              placement='top-end'
            >
              <InputGroup>
                <InputLeftAddon bgColor='green.50'>
                  <Icon as={HiKey} boxSize='2.25em' fill='red.400' />
                </InputLeftAddon>
                <Input
                  name='password'
                  type='password'
                  {...formik.getFieldProps('password')}
                  placeholder='Password'
                  variant={'primary'}
                />
              </InputGroup>
            </Tooltip>
          </FormControl>

          <Button
            type='submit'
            as={Link}
            to='/contacts'
            variant='secondary'
            width='xs'
            zIndex='333'
            mt='50px'
          >
            SignIn
          </Button>
        </Stack>
      )}
    </Formik>
  );
};
