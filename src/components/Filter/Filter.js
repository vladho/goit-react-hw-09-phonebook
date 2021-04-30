import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { filterContacts } from "../../redux/contacts/contactsActions";
import { getFilter } from "../../redux/contacts/contactsSelector";
import styles from "./Filter.module.css";

const Filter = () => {

  const filter = useSelector(getFilter)
const dispatch = useDispatch()

  const SetFilter = (e) => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <>
      <div className={styles.filter}>
        <label>
          <p>Find contacts by name</p>
          <input
            type="text"
            value={filter}
            onChange={SetFilter}
            className={styles.inpt}
            autoComplete="off"
          />
        </label>
      </div>
    </>
  );
};


export default Filter;
