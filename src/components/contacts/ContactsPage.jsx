import React from 'react';
import ReactShadowScroll from 'react-shadow-scroll';
import {
  Avatar,
  Box,
  Divider,
  Flex,
  FormControl,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Stack,
  List,
  ListItem,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiGame, BiFilterAlt } from 'react-icons/bi';
import { ModalBox } from 'components/modal/Modal';

export const ContactsPage = data => {
  return (
    <Box as='section' bg='green.50' borderColor='blue.400'>
      <Flex
        position='relative'
        align='center'
        justify='space-between'
        direction='column'
        height='100%'
      >
        <HStack justify='flex-end'>
          <Link>
            <Text
              w='100%'
              h='auto'
              fontSize='5xl'
              fontFamily='Lilita One'
              bgGradient='linear(to-l, blue.600, blue.400, teal.200, yellow.300, red.400, red.500)'
              bgClip='text'
            >
              Usercat
            </Text>
            <Divider
              border='xl'
              opacity='1'
              size='9xl'
              variant='solid'
              borderColor='red.400'
            />
          </Link>
          <Link>
            <Avatar
              size='xl'
              src='https://bit.ly/broken-link'
              variant='roundedSquare'
            >
              <BiGame size='md' color='yellow.500' />
            </Avatar>
          </Link>
        </HStack>

        <FormControl>
          <InputGroup>
            <InputLeftElement>
              <BiFilterAlt />
            </InputLeftElement>

            <Input variant='filled' placeholder='You can filter contacts' />
          </InputGroup>
        </FormControl>

        <Stack
          w='100%'
          h='600px'
          py='1rem'
          px='2rem'
          bgColor='yellow.50'
          align='center'
        >
          <ModalBox />
          <ReactShadowScroll
            scrollColor='#F56565'
            scrollColorHover='#63B3ED'
            scrollWidth='20'
            shadow='none'
          >
            <List>
              <ListItem>1</ListItem>
              <ListItem>2</ListItem>
              <ListItem>3</ListItem>
              <ListItem>4</ListItem>
              <ListItem>5</ListItem>
              <ListItem>6</ListItem>
              <ListItem>7</ListItem>
              <ListItem>8</ListItem>
              <ListItem>9</ListItem>
              <ListItem>10</ListItem>
              <ListItem>11</ListItem>
              <ListItem>12</ListItem>
              <ListItem>13</ListItem>
              <ListItem>14</ListItem>
              <ListItem>15</ListItem>
              <ListItem>16</ListItem>
              <ListItem>17</ListItem>
              <ListItem>18</ListItem>
              <ListItem>19</ListItem>
              <ListItem>20</ListItem>
              <ListItem>21</ListItem>
              <ListItem>22</ListItem>
              <ListItem>23</ListItem>
              <ListItem>24</ListItem>
              <ListItem>25</ListItem>
            </List>
          </ReactShadowScroll>
        </Stack>
      </Flex>
    </Box>
  );
};

{
  /* <Stack>
  <Skeleton startColor='blue.400' endColor='red.400' height='20px' isLoaded>
    <SkeletonText>{data.contact}</SkeletonText>
  </Skeleton>

  <Skeleton startColor='blue.400' endColor='red.400' height='20px' isLoaded>
    <SkeletonText>{data.contact}</SkeletonText>
  </Skeleton>

  <Skeleton startColor='blue.400' endColor='red.400' height='20px' isLoaded>
    <SkeletonText>{data.contact}</SkeletonText>
  </Skeleton>

  <Skeleton startColor='blue.400' endColor='red.400' height='20px' isLoaded>
    <SkeletonText>{data.contact}</SkeletonText>
  </Skeleton>

  <Skeleton startColor='blue.400' endColor='red.400' height='20px' isLoaded>
    <SkeletonText>{data.contact}</SkeletonText>
  </Skeleton>
  <Skeleton startColor='blue.400' endColor='red.400' height='20px' isLoaded>
    <SkeletonText>{data.contact}</SkeletonText>
  </Skeleton>

  <Skeleton startColor='blue.400' endColor='red.400' height='20px' isLoaded>
    <SkeletonText>{data.contact}</SkeletonText>
  </Skeleton>
</Stack>; */
}
