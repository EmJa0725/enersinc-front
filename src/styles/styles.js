
import { styled } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export const useStyles = makeStyles(theme => ({
    table: {
        minWidth: 700,
    },
    button: {
        marginRight: '10px !important'
    },
    headerButtonContainer: {
        marginTop: 50,
    },
    addPersonButton: {
        width: '100px !important',
        margin: '10px !important'
    },
    formContainer: {
        marginTop: '100px'
    },
}));
