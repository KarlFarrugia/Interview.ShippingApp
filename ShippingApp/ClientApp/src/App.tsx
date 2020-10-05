//#region Imports

import * as React from 'react';
import { Route, Switch } from "react-router-dom";
import Suspend from './components/Suspend';

//Pages
const Home = React.lazy(() => import('./Pages/Home'));
const Cargo4You = React.lazy(() => import('./Pages/Cargo4You'));

//#endregion

export default () => (
  <Switch>
    <Route
      path="/Cargo4You"
      component={Suspend(Cargo4You)}
    />
    <Route
      path="/"
      component={Suspend(Home)}
    />
  </Switch>
);
