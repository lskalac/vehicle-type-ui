import { Box, Button, CircularProgress, IconButton, TextField, Typography } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import VehicleService from "../../services/VehicleService";
import IFilter from "../../types/IFilter";
import Table from "../common/Table";
import TablePagination from "../common/TablePagination";
import "./../../styles/style.css";
import AuthContext from "../../context/Auth";
import SearchIcon from '@material-ui/icons/Search';

export default () =>
{
    const authContext = useContext(AuthContext); 
    const [data, setData] = useState();
    const [total, setTotal] = useState<number>(1);
    const [params, setParams] = useState<IFilter>({page: 1});
    const [isLoading, setLoading] = useState<boolean>(true);
    const columns = ["Id", "Make", "Model", "Year"];

    const fetchData = async() => 
    {
        setLoading(true);
        let response = await VehicleService.find(params);
        setData(response.data.items);
        setTotal(response.data.total);
        setLoading(false);
    }
    
    useEffect(() =>{
        fetchData();
    }, [params.page]);

    const onPageChange = (page: number) => 
    {
        setParams(Object.assign({}, params, {page: page+1}));
    }

    const onSearch = (searchTerm: string) =>
    {
        setParams(Object.assign({}, params, {searchTerm: searchTerm}));
    }

    const onDelete = async (id: string) =>
    {
        try {
            const result = await VehicleService.delete(id); 
            await fetchData();
        } catch (error) {
            console.dir(error);
        }
    }

    const actions = Object.assign({}, authContext.authenticated ? { onDelete: onDelete} : {});

    return(
        <div>
                 
            {!isLoading ?
                <div>
                    <Typography variant="h5"> Vehicles</Typography>
                    <Box display="flex" justifyContent="space-between">
                        <Box>
                            <TextField id="standard-search" label="Search field" type="search" value={params.searchTerm} onChange={e => onSearch(e.target.value)} />
                            <IconButton aria-label="Search" onClick={() => {fetchData()}}>
                                <SearchIcon />
                            </IconButton>
                        </Box>
                        {authContext.authenticated && <Button variant="outlined" color="primary" href="/vehicles/add">Add new</Button>}
                    </Box>
                    <Table columns={columns} rows={data!} actions={actions} />
                    <TablePagination page={params.page! - 1} rpp={10} count={total} onChange={onPageChange} />
                </div> :  <CircularProgress className="loader" color="secondary" />
            }
        </div>
    )
}