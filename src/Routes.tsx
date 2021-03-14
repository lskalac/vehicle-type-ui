import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import UserLogin from "./components/user/UserLogin";
import VehicleCreate from "./components/vehicle/VehicleCreate";
import VehicleList from "./components/vehicle/VehicleList";
import AuthContext from "./context/Auth";

const Routes: React.FC = () => {
    const authContext = useContext(AuthContext);
    return(
        <Switch>
            <Redirect exact from="/" to="/vehicles" />
            <Route path="/vehicles" exact component={VehicleList} />
            <Route path="/vehicles/add" render={() => authContext.authenticated ? <VehicleCreate />
                : <Redirect to={{pathname: '/login'}} />} />
            <Route path="/login" component={UserLogin} />
        </Switch>
    )
}

export default Routes;