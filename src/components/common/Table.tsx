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
                    <TableRow key={row.name}>
                        {
                            Object.entries(row).map(([key, value]) => {
                                return <TableCell align="left">{value}</TableCell>
                            })
                        }
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
)};