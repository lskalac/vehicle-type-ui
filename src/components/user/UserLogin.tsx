import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
import UserService from "../../services/UserService";
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";


export default ({}) =>
{
    const history = useHistory();
    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();

    const onSubmit = async (e: any) => {
        e.preventDefault();

        if(!username || !password)
            return;

        try {
            const result = await UserService.login(
                { username: username, password: password}
            );
            console.dir(result.data.token);
            history.push('/vehicles')   
        } catch (error) {
            console.dir( error.response.data.message);
        }
    }

    return(
        <div>
            <form autoComplete="off" onSubmit={onSubmit}>
                <TextField id="username" label="Username" required onChange={e => setUsername(e.target.value)} />
                <TextField id="password" label="Password" required type="pasword" onChange={e => setPassword(e.target.value)} />
                <Button variant="contained" color="primary" type="submit"> Submit</Button>
            </form>
        </div>
    )  
}