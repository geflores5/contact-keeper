import React, { Fragment, useContext } from 'react';
import Context from '../../context/Context';
import ContactItem from './ContactItem';

const Contacts = () => {
  const context = useContext(Context);
  const { contacts } = context;

  return (
    <Fragment>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </Fragment>
  );
};

export default Contacts;
