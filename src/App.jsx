import React from 'react';
import { Routes, Route } from 'react-router-dom';

//-----------------------------------------------
import { AppLayout } from 'components/layout/Layout';
import Home from './routes/Home';
import Register from './routes/Register';
import Profile from './routes/Profile';
import Login from './routes/Login';
import Contacts from './routes/Contacts';
import Info from './routes/Info';
import NotFound from 'routes/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path='register' element={<Register />} />
        <Route path='profile' element={<Profile />} />
        <Route path='login' element={<Login />} />
        <Route path='contacts' element={<Contacts />} />
        <Route path='contacts/:id' element={<Contacts />}>
          <Route path='info' element={<Info />} />
        </Route>
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
