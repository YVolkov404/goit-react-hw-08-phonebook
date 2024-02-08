import { Formik } from 'formik';
import * as Yup from 'yup';
// import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//-----------------------------------------------------------

import { signup } from 'rdx/authorization';

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

const validation = Yup.object({
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
});

//------------------------------------------------------------

export const SingUpForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form);

    dispatch(
      signup({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={validation}
      onSubmit={(values, actions) => {
        handleSubmit(values);
        actions.resetForm();
      }}
    >
      {formik => (
        <Stack
          as="form"
          w="100%"
          spacing="1.75rem"
          onSubmit={formik.handleSubmit}
          zIndex="999"
        >
          <FormControl isInvalid={formik.errors.name && formik.touched.name}>
            <FormLabel as="label" variant="secondary">
              Name
            </FormLabel>

            <Tooltip
              label={formik.errors.name}
              placement="top-e"
              isOpen={true}
              variant="primary"
            >
              <InputGroup>
                <InputLeftAddon>
                  <Icon as={HiUserCircle} variant="primary" />
                </InputLeftAddon>
                <Input
                  name="name"
                  type="text"
                  {...formik.getFieldProps('name')}
                  placeholder="Jane Dow"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
              </InputGroup>
            </Tooltip>
          </FormControl>

          <FormControl isInvalid={formik.errors.email && formik.touched.email}>
            <FormLabel as="label" variant="primary">
              Email
            </FormLabel>

            <Tooltip
              label={formik.errors.email}
              isOpen={true}
              placement="top-end"
              variant="primary"
            >
              <InputGroup>
                <InputLeftAddon>
                  <Icon as={HiMail} />
                </InputLeftAddon>
                <Input
                  name="email"
                  type="email"
                  {...formik.getFieldProps('email')}
                  placeholder="john-dow@mail.com"
                  size="md"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
              </InputGroup>
            </Tooltip>
          </FormControl>

          <FormControl
            isInvalid={formik.errors.password && formik.touched.password}
          >
            <FormLabel as="label" variant="primary">
              Password
            </FormLabel>

            <Tooltip
              label={formik.errors.password}
              isOpen="true"
              placement="top-end"
            >
              <InputGroup>
                <InputLeftAddon>
                  <Icon as={HiKey} variant="primary" />
                </InputLeftAddon>
                <Input
                  name="password"
                  type="password"
                  {...formik.getFieldProps('password')}
                  placeholder="Enter your password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
              </InputGroup>
            </Tooltip>
          </FormControl>

          <Button
            type="submit"
            width="xs"
            alignSelf="flex-end"
            mt={16}
            zIndex="333"
          >
            SignUp
          </Button>
        </Stack>
      )}
    </Formik>
  );
};
