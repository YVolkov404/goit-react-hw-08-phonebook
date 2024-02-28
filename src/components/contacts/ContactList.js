import { Link as ReactRouterLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
//--------------------------------------------
import { filteredContacts } from 'hooks/FilterHook';
//--------------------------------------------
import { Link, List, Skeleton, Text, Wrap } from '@chakra-ui/react';
//--------------------------------------------

export const Contacts = ({ location }) => {
  // const [isLoading, setIsLoading] = useState(true);
  const contacts = useSelector(filteredContacts);

  console.log(location);

  return (
    (contacts !== undefined || contacts > 0) && (
      <Wrap as={List}>
        {contacts.map(({ id, name, number }) => {
          return (
            <Skeleton
              key={id}
              isLoaded={true}
              fadeDuration={1}
              w="100%"
              boxShadow="md"
              borderLeftRadius="xl"
              overflow="hidden"
              _hover={{
                boxShadow: 'none',
              }}
            >
              <Link
                as={ReactRouterLink}
                variant="brandPrimary"
                to={`/contacts/${id}`}
                state={{ from: location }}
              >
                <Text as="span" color="red.400" fontSize="2xl">
                  {name}:
                </Text>
                <Text as="span" color="green.200" fontSize="2xl">
                  {number}
                </Text>
              </Link>
            </Skeleton>
          );
        })}
      </Wrap>
    )
  );
};
