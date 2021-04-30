import React, { useState } from "react";
import styles from "./Phonebook.module.css";


  const Phonebook =({onSubmit}) =>{

  const [name, setName] = useState("")
  const [number, setNumber] = useState("")

 const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({name,number});
    reset();
  };


  const onInputChangeName = (e) => {
setName(e.target.value)
  }
   const onInputChangeNumber = (e) => {
setNumber(e.target.value)
  }

   const reset = () => {
    setName("")
    setNumber("")
  };

    return (
      <div className={styles.phonebook}>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Name</p>
            <input
              type="text"
              value={name}
              name="name"
              className={styles.inpt}
              onChange={onInputChangeName}
              // autoComplete="off"
            />
          </label>
          <label>
            <p>Number</p>
            <input
              type="text"
              value={number}
              name="number"
              className={styles.inpt}
              onChange={onInputChangeNumber}
              // autoComplete="off"
            />
          </label>
          <button type="submit" className={styles.btn}>
            Add contact
          </button>
        </form>
      </div>
    );
  
}

export default Phonebook;
