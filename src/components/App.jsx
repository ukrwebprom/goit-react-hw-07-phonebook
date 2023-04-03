import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import ContactForm from './ContactForm';
import { ContactList, ContactListHeader } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container, Title } from './App.styled';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading } from "redux/selectors";

import './App.scss';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />

      {/* <SubTitle>Contacts
      
      </SubTitle> */}
      <ContactListHeader><Filter /></ContactListHeader>
      {isLoading && <p>Loading contacts...</p>}
      {error? <p>{error}</p> : <ContactList />}
    </Container>
  );
}
