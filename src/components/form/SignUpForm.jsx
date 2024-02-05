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
import { useState } from 'react';

//------------------------------------------------------------

export const SingUpForm = () => {
  const [value, setValues] = useState();

  const submitFormHandler = e => setValues(e.target.value);

  console.log(submitFormHandler);

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
        submitFormHandler(values);
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
            <FormLabel>Name</FormLabel>

            <Tooltip label={formik.errors.name} isOpen={true} placement='top-e'>
              <InputGroup>
                <InputLeftAddon>
                  <Icon as={HiUserCircle} variant='primary' />
                </InputLeftAddon>
                <Input
                  name='name'
                  type='name'
                  {...formik.getFieldProps('name')}
                  placeholder='Cat Dow'
                  value={formik.name.value}
                  onChange={formik.handleOnChange}
                />
                :
              </InputGroup>
            </Tooltip>
          </FormControl>

          <FormControl isInvalid={formik.errors.email && formik.touched.email}>
            <FormLabel>Email</FormLabel>

            <Tooltip
              label={formik.errors.email}
              isOpen={true}
              placement='top-end'
            >
              <InputGroup>
                <InputLeftAddon>
                  <Icon as={HiMail} variant='primary' />
                </InputLeftAddon>
                <Input
                  name='email'
                  type='email'
                  {...formik.getFieldProps('email')}
                  placeholder='nickname@dow@mail.com'
                  value={formik.email.value}
                  onChange={formik.handleOnChange}
                />
              </InputGroup>
            </Tooltip>
          </FormControl>

          <FormControl
            isInvalid={formik.errors.password && formik.touched.password}
          >
            <FormLabel>Password</FormLabel>

            <Tooltip
              label={formik.errors.password}
              isOpen='true'
              placement='top-end'
            >
              <InputGroup>
                <InputLeftAddon>
                  <Icon as={HiKey} variant='primary' />
                </InputLeftAddon>
                <Input
                  name='password'
                  type='password'
                  {...formik.getFieldProps('password')}
                  placeholder='Password'
                  value={formik.password.value}
                  onChange={formik.handleOnChange}
                />
              </InputGroup>
            </Tooltip>
          </FormControl>
          <Button
            type='submit'
            as={Link}
            to='/profile'
            width='xs'
            alignSelf={'flex-end'}
            zIndex='333'
          >
            SignUp
          </Button>
        </Stack>
      )}
    </Formik>
  );
};
