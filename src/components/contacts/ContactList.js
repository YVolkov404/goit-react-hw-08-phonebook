import { Skeleton, Text } from '@chakra-ui/react';

export const StackItems = ({ data }) => {
  return data.map(({ name, number, id }) => {
    return (
      <Skeleton
        key={id}
        isLoaded='false'
        bg='green.50'
        p='3px 5px 2px 10px'
        boxShadow={'base'}
        _hover={{
          color: 'yellow.50',
          bg: 'blue.400',
          cursor: 'pointer',
        }}
      >
        <Text as='span'>
          {name}: {number}
        </Text>
      </Skeleton>
    );
  });
};
