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
import { useState } from 'react';

export const SignInForm = () => {
  const [value, setData] = useState('');

  const submitHandler = e => setData(e.target.value);

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
        submitHandler(values);
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
            <FormLabel as='label'>Email</FormLabel>

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
                  type='email'
                  {...formik.getFieldProps('email')}
                  placeholder='john-dow@mail.com'
                  size='md'
                  value={formik.email.value}
                  onChange={formik.OnSubmitHandler}
                />
              </InputGroup>
            </Tooltip>
          </FormControl>

          <FormControl
            isInvalid={formik.errors.password && formik.touched.password}
          >
            <FormLabel as='label'>Password</FormLabel>

            <Tooltip
              label={formik.errors.password}
              isOpen='true'
              placement='top-end'
            >
              <InputGroup>
                <InputLeftAddon bgColor='green.50'>
                  <Icon as={HiKey} variant='primary' />
                </InputLeftAddon>
                <Input
                  name='password'
                  type='password'
                  {...formik.getFieldProps('password')}
                  placeholder='Password'
                  value={formik.password.value}
                  onChange={formik.omSubmitHandler}
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
