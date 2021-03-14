import { Button, Grid, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import UserService from "../../services/UserService";
import { useHistory } from "react-router-dom";
import IUser from "../../types/IUser";
import {useContext} from "react";
import AuthContext from "../../context/Auth";

export default () =>
{
    const authContext = useContext(AuthContext); 
    const history = useHistory();
    const [model, setModel] = useState<IUser>();

    const onSubmit = async (e: any) => {
        e.preventDefault();

        if(!model)
            return;

        try {
            const result = await UserService.login(model);
            UserService.setToken(result.data.token);
            authContext.setAuthenticated(true);
            history.push('/vehicles')   
        } catch (error) {
            console.dir(error);
        }
    }

    const setModelValue = (key: string, value: any) =>
    {
        setModel(Object.assign({}, model, {[key]: value}));
    }

    return(
        <div>
            <Typography variant="h5"> Login</Typography>
            <Typography variant="overline"> If you wanna create new or delete existing vehicle...</Typography>
            <form autoComplete="off" onSubmit={onSubmit}>
                <Grid xs={12}>
                    <TextField id="username" label="Username" required onChange={e => setModelValue("username", e.target.value)} />
                </Grid>
                <Grid xs={12}>
                    <TextField id="password" label="Password" required type="password" onChange={e => setModelValue("password", e.target.value)} />
                </Grid>
                <Button variant="contained" color="primary" type="submit"> Submit</Button>
            </form>
        </div>
    )  
}
