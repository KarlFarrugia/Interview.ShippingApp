//#region Imports

import * as React from 'react';
import { Route, Switch } from "react-router-dom";
import Suspend from './components/Suspend';

//Pages
const Home = React.lazy(() => import('./Pages/Home'));
const ShipFaster = React.lazy(() => import('./Pages/ShipFaster'));
const Cargo4You = React.lazy(() => import('./Pages/Cargo4You'));
const MaltaShip = React.lazy(() => import('./Pages/MaltaShip'));

//#endregion

export default () => (
  <Switch>
    <Route
      path="/Cargo4You"
      component={Suspend(Cargo4You)}
    />
    <Route
      path="/ShipFaster"
      component={Suspend(ShipFaster)}
    />
    <Route
      path="/MaltaShip"
      component={Suspend(MaltaShip)}
    />
    <Route
      path="/"
      component={Suspend(Home)}
    />
  </Switch>
);
