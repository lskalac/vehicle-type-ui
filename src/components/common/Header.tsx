import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import { useContext } from "react";
import AuthContext from "../../context/Auth";
import UserService from "../../services/UserService";

export default () => {
    const authContext = useContext(AuthContext); 

    const logout = () => {
        UserService.removeToken();
        authContext.setAuthenticated(false);
    }
    
    return (
        <AppBar position="static">
            <Toolbar>
                <Box width={1} display="flex" justifyContent="space-between">
                    <IconButton href="/vehicles">
                        <HomeIcon color="disabled"/>
                    </IconButton>
                    <Typography variant="h4"> Vehicles Management</Typography>
                    {
                         authContext.authenticated ? 
                        <Button color="inherit" onClick={() => logout()}>Logut</Button> :
                        <Button color="inherit" href="/login">Login</Button>
                    }
                </Box>
            </Toolbar>
        </AppBar>
    );
}
