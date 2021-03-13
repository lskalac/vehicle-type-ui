import { TablePagination } from "@material-ui/core"

interface ITablePaginationProps
{
    count: number,
    page: number,
    rpp: number,
    onChange: (page: number)  => void
}

export default ({count, page, rpp, onChange}: ITablePaginationProps) =>
{
    return(
        <TablePagination
            rowsPerPageOptions={[]}
            component="div"
            count={count}
            rowsPerPage={rpp}
            page={page}
            onChangePage={(e, page) => onChange(page)}
        />
    );
}