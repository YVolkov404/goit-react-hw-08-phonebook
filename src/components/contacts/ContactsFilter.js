import { useDispatch, useSelector } from 'react-redux';
import { getSearchQuery } from 'rdx/contactsFilterSlice';
import { filteredContacts } from 'hooks/FilteredContacts';
import { FormControl, FormErrorMessage, Input } from '@chakra-ui/react';
//-------------------------------------------------
export const Filter = () => {
  const filter = useSelector(filteredContacts);
  const dispatch = useDispatch();

  const handleChange = e => dispatch(getSearchQuery(e.target.value));
  const isError = filter === '';

  return (
    <FormControl as="form" isInvalid={isError}>
      <Input
        name="name"
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Find contacts by name"
      />
      <FormErrorMessage>Nothing found!</FormErrorMessage>
    </FormControl>
  );
};
