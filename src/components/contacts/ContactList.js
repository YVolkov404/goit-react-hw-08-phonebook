import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { List, Skeleton, Text, Wrap } from '@chakra-ui/react';

//---------------------------------------------
import { filteredContacts } from 'hooks/FilteredContacts';
//--------------------------------------------

export const StackItems = () => {
  const { isLoading, setIsLoading } = useState(true);
  const contacts = useSelector(filteredContacts);

  console.log(contacts);

  setIsLoading(() => {
    if (contacts.length > 0) {
      return isLoading === false;
    }
  });

  return (
    <Wrap as={List}>
      {contacts.length > 0 &&
        contacts.map(({ contacts, id }) => {
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
                <Text as="span">{contacts.name}:</Text>
                <Text as="span">{contacts.number}</Text>
              </NavLink>
            </Skeleton>
          );
        })}
    </Wrap>
  );
};
