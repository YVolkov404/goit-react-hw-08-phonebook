import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { signin } from 'rdx/authorization';
//-------------------------------------------
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
//------------------------------------------

const validation = Yup.object({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Weak password!')
    .min(9, 'Fair password')
    .min(12, 'Good password!')
    .max(15, 'Strong password!')
    .required('Required'),
});
//-------------------------------------------
export const SignInForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = values => {
    const { email, password } = values;

    dispatch(
      signin({
        email: email,
        password: password,
      })
    );
  };

  return (
    <Formik
      initialValues={{
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
          onSubmit={formik.handleSubmit}
          as="form"
          w="100%"
          spacing="1.5rem"
        >
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
              variant="primary"
            >
              <InputGroup>
                <InputLeftAddon>
                  <Icon as={HiKey} />
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
            variant="secondary"
            width="xs"
            zIndex="333"
            mt="50px"
          >
            SignIn
          </Button>
        </Stack>
      )}
    </Formik>
  );
};
