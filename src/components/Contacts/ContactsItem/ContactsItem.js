import React from "react"
import {useDispatch} from "react-redux"
import styles from "./ContactsItem.module.css"
 import { deleteContact } from "../../../redux/contacts/contactsOperation";
import IconButton from "@material-ui/core/IconButton"
import DeleteIcon from "@material-ui/icons/Delete"

const ContactsItem = ({ contact }) => {

  const dispatch = useDispatch()

  const { name, number, id } = contact
  return (
    <li className={styles.name}>
      {name}: {number}
      <IconButton aria-label="delete" onClick={() => dispatch(deleteContact(id))}>
        <DeleteIcon />
      </IconButton>
    </li>
  )
}

export default ContactsItem
