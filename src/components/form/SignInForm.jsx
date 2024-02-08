import { Formik } from 'formik';
import * as Yup from 'yup';

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

const validation = Yup.object({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(5, 'Password too short!')
    .max(24, 'Password too long!')
    .required('Required'),
});

export const SignInForm = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validation}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.resetForm();
      }}
    >
      {formik => (
        <Stack
          as="form"
          w="100%"
          spacing="1.5rem"
          onSubmit={formik.handleSubmit}
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
