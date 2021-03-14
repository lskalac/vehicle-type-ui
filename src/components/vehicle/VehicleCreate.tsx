import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import VehicleService from "../../services/VehicleService";
import IVehicle from "../../types/IVehicle";

export default () =>
{
    const history = useHistory();
    const [model, setModel] = useState<IVehicle>();

    const onSubmit = async (e: any) => {
        e.preventDefault();

        if(!model)
            return;

        try {
            const result = await VehicleService.post(model);
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
            <Typography variant="h5"> Create new vehicle</Typography>
            <form autoComplete="off" onSubmit={onSubmit}>
                <Grid xs={12}>
                    <TextField id="make" label="Make" required onChange={e => setModelValue("make", e.target.value)} />
                </Grid>
                <Grid xs={12}>
                    <TextField id="model" label="Model" required onChange={e => setModelValue("model", e.target.value)} />
                </Grid>
                <Grid xs={12}>
                    <TextField id="year" label="Year" required type="number" onChange={e => setModelValue("year", Number(e.target.value))} />
                </Grid>
                <Button variant="contained" color="primary" type="submit"> Submit</Button>
            </form>
        </div>
    )  
}