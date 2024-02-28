import { useDispatch, useSelector } from 'react-redux';
import { getSearchQuery } from 'rdx/contacts/contactsFilterSlice';
import { selectFilteredContacts } from 'rdx/contacts/selectors';
import {
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { BiFilterAlt } from 'react-icons/bi';

//----------------------------------------
export const Filter = () => {
  const filter = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  const handleChange = e => dispatch(getSearchQuery(e.target.value));

  return (
    <FormControl as="form">
      <InputGroup>
        <InputLeftElement color="red.400" fontSize="3xl">
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
      </InputGroup>
    </FormControl>
  );
};
