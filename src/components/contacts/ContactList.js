import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

//---------------------------------------------
import { List, Skeleton, Text, Wrap } from '@chakra-ui/react';
import { filteredContacts } from 'hooks/FilteredContacts';
//--------------------------------------------

export const Contacts = () => {
  const { isLoading, setIsLoading } = useState(true);
  const contacts = useSelector(filteredContacts);

  setIsLoading(() => {
    if (contacts.length > 0) {
      return isLoading === false;
    }
  });

  return (
    <Wrap as={List}>
      {contacts.map(({ id, name, number }) => {
        return (
          <Skeleton
            key={id}
            isLoaded={isLoading}
            bg="green.50"
            p="3px 5px 2px 10px"
            boxShadow={'base'}
            _hover={{
              color: 'yellow.50',
              bg: 'blue.400',
              cursor: 'pointer',
            }}
          >
            <NavLink>
              <Text as="span">{name}:</Text>
              <Text as="span">{number}</Text>
            </NavLink>
          </Skeleton>
        );
      })}
    </Wrap>
  );
};
