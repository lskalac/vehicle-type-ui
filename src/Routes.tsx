import React from "react";
import { Route, Switch } from "react-router-dom";
import VehicleCreate from "./components/VehicleCreate";
import VehicleList from "./components/VehicleList";

const Routes: React.FC = () => (
    <Switch>
        <Route path="/vehicles" component={VehicleList} />
        <Route path="/vehicles/add" component={VehicleCreate} />
        <Route path="/login" component={VehicleList} />
        <Route path="/register" component={VehicleList} />
    </Switch>
);

export default Routes;