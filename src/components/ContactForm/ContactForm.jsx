import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactSlice';
import { getVisibleContacts } from '../../redux/selectors';
import style from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contactNameId = nanoid();
  const contactNumberId = nanoid();

  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);

        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (name === '') {
      alert('Введіть, будь ласка, ім`я контакту.');
      return;
    }

    if (number === '') {
      alert('Введіть, будь ласка, номер телефону контакту');
      return;
    }

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <label className={style.label} htmlFor={contactNameId}>
        Name
        <input
          className={style.label}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          id={contactNameId}
        />
      </label>
      <label className={style.label} htmlFor={contactNumberId}>
        Number
        <input
          className={style.label}
          type="text"
          name="number"
          value={number}
          onChange={handleChange}
          id={contactNumberId}
        />
      </label>

      <button className={style.button}>Add contact</button>
    </form>
  );
};

export default ContactForm;
