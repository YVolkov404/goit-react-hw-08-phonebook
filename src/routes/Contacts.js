import * as React from 'react';

//-------------------------------------------------------------
import { ContactsPage } from 'components/contacts/ContactsPage';
import { InfoPage } from 'components/info/InfoPage';

export default function Contacts() {
  return (
    <ContactsPage>
      <InfoPage />
    </ContactsPage>
  );
}
