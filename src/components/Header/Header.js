import React from "react"
import { useSelector } from "react-redux"
import { getIsAuthenticated } from "../../redux/auth/authSelector"
import NavigationLinks from "../Navigation/NavigationLinks"
import UserMenu from "../UserMenu/UserMenu"

const Header = () => {

  const isAuth = useSelector(getIsAuthenticated)

  return (
    <header>
      <NavigationLinks />
      {isAuth && <UserMenu />}
    </header>
  )
}

export default Header
