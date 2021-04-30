import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useRouteMatch } from "react-router-dom"
import { register, login } from "../../redux/auth/authOperation"
import styles from "./AuthForm.module.css"

const AuthForm = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const match = useRouteMatch()
  const dispatch = useDispatch()

    const onHandleChangeName = (e) => {
    setName(e.target.value)
  }
    const onHandleChangeEmail = (e) => {
    setEmail(e.target.value)
  }
    const onHandleChangePassword = (e) => {
    setPassword(e.target.value)
  }


  const onHandleSubmit = (e) => {
    e.preventDefault()
    match.url.slice(1) === "login"
      ? dispatch(login( {email, password}))
      :dispatch(register({name, email, password}))

  }

  const currentPage = match.url.slice(1)
  const isLoginPage = currentPage === "login" ? "Pls, SingIn" : "Pls, SingUp"
  return (
    <>
      <h1 className={styles.title}> {isLoginPage}</h1>
      <div className={styles.authform}>
        <form onSubmit={onHandleSubmit}>
          {currentPage === "register" && (
            <label>
              <p>Name</p>
              <input
                type="name"
                name="name"
                className={styles.inpt}
                value={name}
                required
                onChange={onHandleChangeName}
              />
            </label>
          )}
          <label>
            <p>Email</p>
            <input
              type="email"
              name="email"
              className={styles.inpt}
              value={email}
              required
              onChange={onHandleChangeEmail}
            />
          </label>
          <label>
            <p>Password</p>
            <input
              type="password"
              name="password"
              className={styles.inpt}
              value={password}
              required
              onChange={onHandleChangePassword}
            />
          </label>

          <button type="submit" className={styles.btn}>
            {currentPage}
          </button>
        </form>
      </div>
    </>
  )
}

export default AuthForm
