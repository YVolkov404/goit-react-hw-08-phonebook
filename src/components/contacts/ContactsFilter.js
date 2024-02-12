import { useDispatch, useSelector } from 'react-redux';
import { getSearchQuery } from 'rdx/contactsFilterSlice';
import { selectFilteredContacts } from 'hooks/FilteredContacts';
import {
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { BiFilterAlt } from 'react-icons/bi';
//-------------------------------------------------
export const Filter = () => {
  const filter = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const handleChange = e => dispatch(getSearchQuery(e.target.value));
  const isError = filter === '';

  return (
    <FormControl as="form" isInvalid={isError} mt="6rem">
      <InputGroup>
        <InputLeftElement>
          <BiFilterAlt />
        </InputLeftElement>
        <Input
          name="name"
          type="text"
          value={filter}
          onChange={handleChange}
          placeholder="Find contacts by name"
          variant="filled"
        />
        <FormErrorMessage>Nothing found!</FormErrorMessage>
      </InputGroup>
    </FormControl>
  );
};
