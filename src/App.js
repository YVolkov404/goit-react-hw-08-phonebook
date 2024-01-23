import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  ChakraProvider,
  theme,
  Home,
  Register,
  Profile,
  Login,
  Contacts,
  Info,
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="register" element={<Register />}>
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="login" element={<Login />}>
            <Route path="contacts" element={<Contacts />}>
              <Route path="info" element={<Info />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </ChakraProvider>
  );
}

export default App;

// {/* <Box textAlign="center" fontSize="xl">
//   <Grid minH="100vh" p={3}>
//     <ColorModeSwitcher justifySelf="flex-end" />
//     <VStack spacing={8}>
//       <Logo h="40vmin" pointerEvents="none" />
//       <Text>
//         Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
//       </Text>
//       <Link
//         color="teal.500"
//         href="https://chakra-ui.com"
//         fontSize="2xl"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn Chakra
//       </Link>
//     </VStack>
//   </Grid>
// </Box>; */}
