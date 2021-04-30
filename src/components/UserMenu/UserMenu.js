import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { logOut } from "../../redux/auth/authOperation"
import { getUserName } from "../../redux/auth/authSelector"
import styles from "./UserMenu.module.css"

const UserMenu = () => {

  const name = useSelector(getUserName)
  const dispatch = useDispatch()

  const onLogout = () => dispatch(logOut())

  return (
    <div className={styles.box}>
      <span>{` Welcome, ${name}`}</span>
      <button type="button" onClick={onLogout} className={styles.btn}>
        LogOut
      </button>
    </div>
  )
}


export default UserMenu
