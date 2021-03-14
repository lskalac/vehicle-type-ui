import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import UserLogin from "./components/user/UserLogin";
import VehicleCreate from "./components/vehicle/VehicleCreate";
import VehicleList from "./components/vehicle/VehicleList";

const Routes: React.FC = () => (
    <Switch>
        <Redirect exact from="/" to="/vehicles" />
        <Route path="/vehicles" exact component={VehicleList} />
        <Route path="/vehicles/add" component={VehicleCreate} />
        <Route path="/login" component={UserLogin} />
    </Switch>
);

export default Routes;