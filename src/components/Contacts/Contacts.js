import React from "react";
import PropTypes from "prop-types";
import ContactsItem from "./ContactsItem/ContactsItem";
import { useSelector } from "react-redux";
import { getFilterContacts } from "../../redux/contacts/contactsSelector";

const Contacts = () => {

  const filterContacts = useSelector(getFilterContacts)

  return (
    <>
      <ul className="contacts__name">
        {filterContacts.map((el) => (
          <ContactsItem
            contact={el}
            key={el.id}
          />
        ))}
      </ul>
    </>
  );
};

Contacts.propTypes = {
  items: PropTypes.array,
  filter: PropTypes.string,
};

export default Contacts;