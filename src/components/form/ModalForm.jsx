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
  Button,
  useDisclosure,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';

import { HiUserCircle, HiPhone } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'rdx/operations';
import { selectContacts } from 'hooks/FilteredContacts';

//-----------------------------------------------

const validation = Yup.object({
  name: Yup.string()
    .min(5, 'Name too short!')
    .max(16, 'Name too long!')
    .required('Required'),
  number: Yup.string()
    .min(9, 'Number too short!')
    .max(14, 'Number too long!')
    .required('Required'),
});

//----------------------------------------------

export const ModalForm = values => {
  const { onClose } = useDisclosure();
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const submitHandler = async values => {
    try {
      const { name, number } = values;
      const hasContactName = contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );

      hasContactName ? (
        <Alert status="warning">
          <AlertIcon />
          `${name} already in phonebook!`
        </Alert>
      ) : (
        dispatch(addContact({ name, number }))
      );
    } catch (error) {}
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={validation}
      onSubmit={(values, actions) => {
        submitHandler(values);
        actions.resetForm();
      }}
    >
      {formik => (
        <Stack as="form" w="100%" spacing="1.5rem" onSubmit={formik.submitForm}>
          <FormControl isInvalid={formik.errors.name && formik.touched.name}>
            <FormLabel as="label" variant="primary">
              Name
            </FormLabel>

            <Tooltip
              label={formik.errors.name}
              isOpen={true}
              placement="top-end"
              variant="secondary"
            >
              <InputGroup>
                <InputLeftAddon>
                  <Icon as={HiUserCircle} variant="primary" />
                </InputLeftAddon>
                <Input
                  name="name"
                  type="text"
                  {...formik.getFieldProps('name')}
                  placeholder="Sirius Don"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
              </InputGroup>
            </Tooltip>
          </FormControl>

          <FormControl
            isInvalid={formik.errors.number && formik.touched.number}
          >
            <FormLabel as="label" variant="primary">
              Number
            </FormLabel>

            <Tooltip
              label={formik.errors.number}
              isOpen="true"
              placement="top-end"
              variant="secondary"
            >
              <InputGroup>
                <InputLeftAddon>
                  <Icon as={HiPhone} variant="primary" />
                </InputLeftAddon>
                <Input
                  name="number"
                  type="number"
                  {...formik.getFieldProps('number')}
                  placeholder="+38(066) 666-66-66"
                  value={formik.values.number}
                  onChange={formik.handleChange}
                />
              </InputGroup>
            </Tooltip>
          </FormControl>

          <Button type="submit" onClick={onClose} variant="secondary">
            Add Contact
          </Button>
        </Stack>
      )}
    </Formik>
  );
};
