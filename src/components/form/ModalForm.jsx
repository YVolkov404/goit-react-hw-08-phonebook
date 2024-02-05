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
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'rdx/operations';
import { selectContacts } from 'rdx/selectors';

//--------------------------------------------------------

export const ModalForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const submitHandler = async values => {
    try {
      const { name, number } = values;
      console.log(values);
      const hasContactName = contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );

      hasContactName
        ? alert(`${name} already in phonebook!`)
        : dispatch(addContact({ name, number }));
    } catch (error) {}
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(5, 'Name too short!')
          .max(16, 'Name too long!')
          .required('Required'),
        number: Yup.string()
          .min(9, 'Number too short!')
          .max(14, 'Number too long!')
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
          <FormControl isInvalid={formik.errors.name && formik.touched.name}>
            <FormLabel as='label'>Name</FormLabel>

            <Tooltip
              label={formik.errors.name}
              isOpen={true}
              placement='top-end'
              variant='secondary'
            >
              <InputGroup>
                <InputLeftAddon variant='secondary'>
                  <Icon as={HiUserCircle} boxSize='2.25em' fill='red.400' />
                </InputLeftAddon>
                <Input
                  name='name'
                  type='text'
                  {...formik.getFieldProps('name')}
                  placeholder='Sirius Don'
                  variant='secondary'
                  value={formik.name}
                  onChange={formik.handleValueChange}
                />
              </InputGroup>
            </Tooltip>
          </FormControl>

          <FormControl
            isInvalid={formik.errors.number && formik.touched.number}
          >
            <FormLabel as='label'>Number</FormLabel>

            <Tooltip
              label={formik.errors.number}
              isOpen='true'
              placement='top-end'
              variant='secondary'
            >
              <InputGroup>
                <InputLeftAddon bgColor='green.50' size='xl'>
                  <Icon as={HiPhone} variant='secondary' />
                </InputLeftAddon>
                <Input
                  name='number'
                  type='number'
                  {...formik.getFieldProps('number')}
                  placeholder='+38(066) 666-66-66'
                  variant='secondary'
                  value={formik.number}
                  onChange={formik.handleValueChange}
                />
              </InputGroup>
            </Tooltip>
          </FormControl>
        </Stack>
      )}
    </Formik>
  );
};
