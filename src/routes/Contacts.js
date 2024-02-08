import * as React from 'react';

//-------------------------------------------------------------
import { ContactsPage } from 'components/contacts/ContactsPage';
import { InfoPage } from 'components/info/InfoPage';
import { ProfilePage } from 'components/profile/ProfilePage';

export default function Contacts() {
  return (
    <ContactsPage>
      <InfoPage />
      <ProfilePage />
    </ContactsPage>
  );
}
