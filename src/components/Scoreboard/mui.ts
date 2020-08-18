import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import {
    withStyles,
    Theme,
    createStyles,
} from '@material-ui/core/styles'

export const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
            fontSize: 15,
        },
        body: {
            fontSize: 10,

        },
    }),
)(TableCell)

export const StyledTableRow = withStyles((theme: Theme) =>
    createStyles({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }),
)(TableRow)
