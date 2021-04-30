import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { getIsAuthenticated } from "../../redux/auth/authSelector";
import { mainRoutes } from "../../routes/mainRoutes";

const NavigationRoutes = () => {

  const isAuth = useSelector(getIsAuthenticated)


  return (
    <Suspense fallback={<h2>loading..</h2>}>
      <Switch>
        {mainRoutes.map(
          ({ path, exact, component, isRestricted }) =>
            ((!isAuth && isRestricted) || (isAuth && !isRestricted)) && (
              <Route
                key={path}
                path={path}
                exact={exact}
                component={component}
              />
            )
        )}
        {isAuth ? <Redirect to="/contacts" /> : <Redirect to="/login" />}
      </Switch>
    </Suspense>
  );
};

export default NavigationRoutes
