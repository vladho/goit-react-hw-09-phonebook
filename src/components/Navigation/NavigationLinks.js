import React from "react"
import { useSelector } from "react-redux"
import { getIsAuthenticated } from "../../redux/auth/authSelector"
import { mainRoutes } from "../../routes/mainRoutes"
import NavigationLinkItem from "./NavigationLinkItem"
import styles from "./Navigation.module.css"

const NavigationLinks = () => {

  const isAuth = useSelector(getIsAuthenticated)


  return (
    <nav>
      <ul className={styles.list}>
        {mainRoutes.map((route) => (
          <NavigationLinkItem key={route.path} isAuth={isAuth} {...route} />
        ))}
      </ul>
    </nav>
  )
}


export default NavigationLinks
