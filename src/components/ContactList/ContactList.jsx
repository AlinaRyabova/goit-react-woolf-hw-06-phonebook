import React from 'react';
import { removeContact } from './../../redux/contactSlice';
import { getVisibleContacts } from './../../redux/selectors';

import { useDispatch, useSelector } from 'react-redux';
import style from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    dispatch(removeContact(contactId));
  };

  return (
    <ul className={style.list}>
      {contacts.map(contact => {
        return (
          <li className={style.listItem} key={contact.id}>
            <span className={style.listItemText}>{contact.name}</span>
            <span className={style.listItemText}>{contact.number}</span>
            <button
              className={style.button}
              type="button"
              onClick={() => onDeleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
