import { Formik } from 'formik';
import * as Yup from 'yup';

//-----------------------------------------------------------
import {
  Input,
  FormControl,
  FormLabel,
  Stack,
  Tooltip,
  InputLeftAddon,
  Icon,
  InputGroup,
} from '@chakra-ui/react';

import { HiUserCircle, HiPhone } from 'react-icons/hi';

export const ModalForm = () => {
  return (
    <Formik
      initialValues={{
        username: '',
        number: '',
      }}
      validationSchema={Yup.object({
        username: Yup.string()
          .min(5, 'Name too short!')
          .max(24, 'Name too long!')
          .required('Required'),
        number: Yup.string()
          .min(9, 'Number too short!')
          .max(14, 'Number too long!')
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
          <FormControl
            isInvalid={formik.errors.username && formik.touched.username}
          >
            <FormLabel as='label' fontSize='3xl' mb='0' color='blue.400'>
              Name
            </FormLabel>

            <Tooltip
              label={formik.errors.username}
              isOpen={true}
              placement='top-end'
              variant='secondary'
            >
              <InputGroup>
                <InputLeftAddon bgColor='green.50'>
                  <Icon as={HiUserCircle} boxSize='2.25em' fill='red.400' />
                </InputLeftAddon>
                <Input
                  name='username'
                  {...formik.getFieldProps('username')}
                  placeholder='John Dow'
                />
              </InputGroup>
            </Tooltip>
          </FormControl>

          <FormControl
            isInvalid={formik.errors.number && formik.touched.number}
          >
            <FormLabel as='label' fontSize='3xl' mb='0' color='blue.400'>
              Number
            </FormLabel>

            <Tooltip
              label={formik.errors.number}
              isOpen='true'
              placement='top-end'
              variant='secondary'
            >
              <InputGroup>
                <InputLeftAddon bgColor='green.50'>
                  <Icon as={HiPhone} boxSize='2.25em' fill='red.400' />
                </InputLeftAddon>
                <Input
                  name='number'
                  type='number'
                  {...formik.getFieldProps('number')}
                  placeholder='+38()'
                />
              </InputGroup>
            </Tooltip>
          </FormControl>
        </Stack>
      )}
    </Formik>
  );
};
