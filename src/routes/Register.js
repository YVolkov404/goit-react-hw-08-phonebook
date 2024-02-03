import * as React from 'react';

//-------------------------------------------------------------
import { RegisterPage } from 'components/register/RegisterPage';
import { ProfilePage } from 'components/profile/ProfilePage';

export default function Register() {
  return (
    <RegisterPage>
      <ProfilePage />
    </RegisterPage>
  );
}
