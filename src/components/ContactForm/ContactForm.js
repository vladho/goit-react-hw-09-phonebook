import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Contacts from "../Contacts/Contacts";
import Filter from "../Filter/Filter";
import Phonebook from "../Phonebook/Phonebook";
import Section from "../Section/Section";
import {
  addContact,
  getContacts,
} from "../../redux/contacts/contactsOperation";
import {
  getAllContacts
} from "../../redux/contacts/contactsSelector";

const ContactForm = () => {

const dispatch = useDispatch()
const items = useSelector(getAllContacts)

  useEffect(() => {
    dispatch(getContacts())
  }, [dispatch]);


  const submitForm = (data) => {
    const isOriginal = items.find(
      (item) => item.name.toLowerCase() === data.name.toLowerCase()
    );
    isOriginal
      ? alert(`${data.name} is already in contacts`)
      : dispatch(addContact(data))
  };
  return (
    <>
      <Section title="Phonebook">
        <Phonebook onSubmit={submitForm} />
      </Section>
      <Section title="Contacts">
        <Filter />
        <Contacts items={items} />
      </Section>
    </>
  );
};

export default ContactForm;
