import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import React from "react";

export default () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h4"> Vehicles Management</Typography>
                <Button color="inherit" href="/login">Login</Button>
            </Toolbar>
        </AppBar>
    );
}
