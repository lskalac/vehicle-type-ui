import { makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";

interface IDictionary {
    [Key: string]: any;
}

interface ITableProps
{
    columns: string[],
    rows: IDictionary[]
}

export default ({columns, rows}: ITableProps) => {
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
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
)};