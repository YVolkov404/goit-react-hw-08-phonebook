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

import { HiUserCircle, HiMail, HiKey } from 'react-icons/hi';

export const SignUpForm = () => {
  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(5, 'Name too short!')
          .max(16, 'Name too long!')
          .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string()
          .min(6, 'Weak password!')
          .min(9, 'Fair password')
          .min(12, 'Good password!')
          .max(15, 'Strong password!')
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
          spacing='1.75rem'
          onSubmit={formik.handleSubmit}
        >
          <FormControl isInvalid={formik.errors.name && formik.touched.name}>
            <FormLabel fontSize='3xl' mb='0'>
              Name
            </FormLabel>

            <Tooltip
              label={formik.errors.name}
              isOpen={true}
              placement='top-end'
            >
              <InputGroup>
                <InputLeftAddon bgColor='green.50'>
                  <Icon as={HiUserCircle} boxSize='2.25em' fill='blue.400' />
                </InputLeftAddon>
                <Input
                  name='name'
                  type='name'
                  {...formik.getFieldProps('username')}
                  placeholder='Cat Dow'
                  variant={'primary'}
                />
              </InputGroup>
            </Tooltip>
          </FormControl>

          <FormControl isInvalid={formik.errors.email && formik.touched.email}>
            <FormLabel fontSize='3xl' mb='0'>
              Email
            </FormLabel>

            <Tooltip
              label={formik.errors.email}
              isOpen={true}
              placement='top-end'
            >
              <InputGroup>
                <InputLeftAddon bgColor='green.50'>
                  <Icon as={HiMail} boxSize='2.25em' fill='blue.400' />
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
            <FormLabel fontSize='3xl' mb='0'>
              Password
            </FormLabel>

            <Tooltip
              label={formik.errors.password}
              isOpen='true'
              placement='top-end'
            >
              <InputGroup>
                <InputLeftAddon bgColor='green.50'>
                  <Icon as={HiKey} boxSize='2.25em' fill='blue.400' />
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
            to='/profile'
            width='xs'
            zIndex='333'
            mt='3rem'
          >
            SignUp
          </Button>
        </Stack>
      )}
    </Formik>
  );
};
