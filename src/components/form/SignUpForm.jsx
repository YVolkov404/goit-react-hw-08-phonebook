import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

//-----------------------------------------------------------
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  Stack,
  Tooltip,
  InputLeftAddon,
  Icon,
  InputGroup,
} from '@chakra-ui/react';

import { HiUserCircle, HiMail, HiKey } from 'react-icons/hi';

export const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, 'Too Short!')
        .max(24, 'Too Long!')
        .required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string()
        .min(5, 'Too Short!')
        .max(24, 'Too Long!')
        .required('Required'),
    }),
    onSubmit: (values, actions) => {
      alert(JSON.stringify(values, null, 2));
      actions.resetForm();
    },
  });

  return (
    <>
      <Stack as='form' w='100%' spacing='1.5rem' onSubmit={formik.handleSubmit}>
        <FormControl isInvalid={formik.errors.username}>
          <FormLabel color='blue.400' fontSize='2xl' letterSpacing='widest'>
            Name
          </FormLabel>
          <Tooltip
            label={formik.errors.username}
            isOpen={true}
            placement='top-end'
            hasArrow
            color='yellow.50'
            bgColor='red.400'
            fontWeight='semibold'
            variant='outline'
          >
            <InputGroup>
              <InputLeftAddon bgColor='green.50' h='auto'>
                <Icon
                  fill='red.400'
                  as={HiUserCircle}
                  w={10}
                  h={10}
                  textShadow='dark-lg'
                />
              </InputLeftAddon>
              <Input
                name='username'
                type='username'
                value={formik.values.username}
                onChange={formik.handleChange}
                placeholder='John Dow'
                variant='outline'
                size='lg'
                bgColor='gray.50'
                fontSize='2xl'
              />
            </InputGroup>
          </Tooltip>
        </FormControl>

        <FormControl isInvalid={formik.errors.email}>
          <FormLabel color='blue.400' fontSize='2xl' letterSpacing='widest'>
            Email
          </FormLabel>

          <Tooltip
            label={formik.errors.email}
            isOpen={true}
            placement='top-end'
            hasArrow
            color='yellow.50'
            bgColor='red.400'
            fontWeight='semibold'
          >
            <InputGroup>
              <InputLeftAddon bgColor='green.50' h='auto'>
                <Icon fill='red.400' as={HiMail} w={10} h={10} />
              </InputLeftAddon>
              <Input
                name='email'
                type='email'
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder='john-dow@mail.com'
                variant='outline'
                size='lg'
                bgColor='gray.50'
                fontSize='2xl'
              />
            </InputGroup>
          </Tooltip>
        </FormControl>

        <FormControl isInvalid={formik.errors.password}>
          <FormLabel color='blue.400' fontSize='2xl' letterSpacing='widest'>
            Password
          </FormLabel>

          <Tooltip
            label={formik.errors.password}
            isOpen='true'
            placement='top-end'
            hasArrow
            color='yellow.50'
            bgColor='red.400'
            fontWeight='semibold'
            // fontFamily='Lilita One, serif'
          >
            <InputGroup>
              <InputLeftAddon bgColor='green.50' h='auto'>
                <Icon fill='red.400' as={HiKey} w={10} h='100%' />
              </InputLeftAddon>
              <Input
                name='password'
                type='password'
                value={formik.values.password}
                onChange={formik.handleChange}
                placeholder='Password'
                variant='outline'
                size='lg'
                bgColor='gray.50'
                fontSize='2xl'
              />
            </InputGroup>
          </Tooltip>
        </FormControl>

        <Button
          zIndex='333'
          as={Link}
          to='/profile'
          width='xs'
          size='lg'
          color='red.400'
          variant='outline'
          ml='30px'
          mt='120px'
          _hover={{
            color: 'blue.400',
            borderBottom: '0.15rem solid',
          }}
        >
          SignUp
        </Button>
      </Stack>
    </>
  );
};
