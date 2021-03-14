import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";
import React from "react";
import DeleteOutlineTwoToneIcon from '@material-ui/icons/DeleteOutlineTwoTone';

interface IDictionary {
    [Key: string]: any;
}

interface ITableAction{
    onDelete?: (id: string) => void
}

interface ITableProps
{
    columns: string[],
    rows: IDictionary[],
    actions?: ITableAction
}

export default ({columns, rows, actions}: ITableProps) => {
return (
    <TableContainer>
        <Table stickyHeader size="small">
            <TableHead>
                <TableRow>
                    {columns.map(column => (
                        <TableCell key={column}>
                            <Typography variant="h6">{column}</Typography>
                        </TableCell>
                    ))}
                    {
                        actions && actions.onDelete && <TableCell>Actions</TableCell>
                    }
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                    <TableRow key={row._id}>
                        {
                            Object.entries(row).map(([key, value]) => {
                                return <TableCell key={key} align="left">{value}</TableCell>
                            })
                        }
                        {
                            actions && actions.onDelete &&
                            <TableCell>
                                <IconButton aria-label="Delete" onClick={() => actions.onDelete!(row._id)}>
                                    <DeleteOutlineTwoToneIcon/>
                                </IconButton>
                            </TableCell>
                        }
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
)};