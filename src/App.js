import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import { getCurrentUser } from "./redux/auth/authOperation";

import "./App.css"

const App = ({ loading }) => {

  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getCurrentUser());
      }, []);

  return (
    <>
      {loading && "загрузка..."}
      <Header />
      <Main />
    </>
  )
}

export default App
