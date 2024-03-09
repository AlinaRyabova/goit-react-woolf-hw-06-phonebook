import React from 'react';
import { useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { getContacts } from '../redux/selectors';

import '../components/App.module.css';

const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList contacts={contacts} />
    </>
  );
};
export default App;
