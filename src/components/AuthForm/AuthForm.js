import React, { Component, useState } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { register, login } from "../../redux/auth/authOperation"
import styles from "./AuthForm.module.css"

const AuthForm = (props) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onHandleChange = (e) => {
    setName(e.target.value)
    setEmail(e.target.value)
    setPassword(e.target.value)
  }

  const onHandleSubmit = (e) => {
    // e.preventDefault()
    // props.location.pathname.slice(1) === "login"
    //   ? props.onLogin(name, email, password)
    //   : props.onRegister(name, email, password)
    // this.setState({ ...this.initialState })
  }

  // const currentPage = props.location.pathname.slice(1)
  // const isLoginPage = currentPage === "login" ? "Pls, SingIn" : "Pls, SingUp"
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
                onChange={onHandleChange}
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
              onChange={onHandleChange}
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
              onChange={onHandleChange}
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
// class AuthForm extends Component {
//   initialState = {
//     name: "",
//     email: "",
//     password: "",
//   }
//   state = {
//     ...this.initialState,
//   }

//   onHandleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value })
//   }
//   onHandleSubmit = (e) => {
//     e.preventDefault()
//     this.props.location.pathname.slice(1) === "login"
//       ? this.props.onLogin(this.state)
//       : this.props.onRegister(this.state)
//     this.setState({ ...this.initialState })
//   }
//   render() {
//     const currentPage = this.props.location.pathname.slice(1)
//     const isLoginPage = currentPage === "login" ? "Pls, SingIn" : "Pls, SingUp"

//     return (
//       <>
//         <h1 className={styles.title}> {isLoginPage}</h1>
//         <div className={styles.authform}>
//           <form onSubmit={this.onHandleSubmit}>
//             {currentPage === "register" && (
//               <label>
//                 <p>Name</p>
//                 <input
//                   type="name"
//                   name="name"
//                   className={styles.inpt}
//                   value={this.state.name}
//                   required
//                   onChange={this.onHandleChange}
//                 />
//               </label>
//             )}
//             <label>
//               <p>Email</p>
//               <input
//                 type="email"
//                 name="email"
//                 className={styles.inpt}
//                 value={this.state.email}
//                 required
//                 onChange={this.onHandleChange}
//               />
//             </label>
//             <label>
//               <p>Password</p>
//               <input
//                 type="password"
//                 name="password"
//                 className={styles.inpt}
//                 value={this.state.password}
//                 required
//                 onChange={this.onHandleChange}
//               />
//             </label>

//             <button type="submit" className={styles.btn}>
//               {currentPage}
//             </button>
//           </form>
//         </div>
//       </>
//     )
//   }
// }

// const mapDispatchToProps = {
//   onRegister: register,
//   onLogin: login,
// }
// export default connect(null, mapDispatchToProps)(withRouter(AuthForm))

// import React, { Component } from "react"
// import { connect } from "react-redux"
// import { withRouter } from "react-router"
// import { register, login } from "../../redux/auth/authOperation"
// import styles from "./AuthForm.module.css"

// class AuthForm extends Component {
//   initialState = {
//     name: "",
//     email: "",
//     password: "",
//   }
//   state = {
//     ...this.initialState,
//   }

//   onHandleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value })
//   }
//   onHandleSubmit = (e) => {
//     e.preventDefault()
//     this.props.location.pathname.slice(1) === "login"
//       ? this.props.onLogin(this.state)
//       : this.props.onRegister(this.state)
//     this.setState({ ...this.initialState })
//   }
//   render() {
//     const currentPage = this.props.location.pathname.slice(1)
//     const isLoginPage = currentPage === "login" ? "Pls, SingIn" : "Pls, SingUp"

//     return (
//       <>
//         <h1 className={styles.title}> {isLoginPage}</h1>
//         <div className={styles.authform}>
//           <form onSubmit={this.onHandleSubmit}>
//             {currentPage === "register" && (
//               <label>
//                 <p>Name</p>
//                 <input
//                   type="name"
//                   name="name"
//                   className={styles.inpt}
//                   value={this.state.name}
//                   required
//                   onChange={this.onHandleChange}
//                 />
//               </label>
//             )}
//             <label>
//               <p>Email</p>
//               <input
//                 type="email"
//                 name="email"
//                 className={styles.inpt}
//                 value={this.state.email}
//                 required
//                 onChange={this.onHandleChange}
//               />
//             </label>
//             <label>
//               <p>Password</p>
//               <input
//                 type="password"
//                 name="password"
//                 className={styles.inpt}
//                 value={this.state.password}
//                 required
//                 onChange={this.onHandleChange}
//               />
//             </label>

//             <button type="submit" className={styles.btn}>
//               {currentPage}
//             </button>
//           </form>
//         </div>
//       </>
//     )
//   }
// }

// const mapDispatchToProps = {
//   onRegister: register,
//   onLogin: login,
// }
// export default connect(null, mapDispatchToProps)(withRouter(AuthForm))
