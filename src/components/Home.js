import React, { useEffect, Fragment } from 'react';
// Router
import { useNavigate } from 'react-router-dom';
// Redux Context
import { useDispatch, useSelector } from 'react-redux';
import { loadPersons, deletePerson } from '../redux/actions';
// Material UI
// Table
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// Button
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
// Spinner
import CircularProgress from '@mui/material/CircularProgress';
// Styles
import { StyledTableCell, StyledTableRow, useStyles } from '../styles/styles'
// Components
import Notifications from './Notifications';

const Home = () => {
    // Const & Variables
    const classes = useStyles();
    const navigate = useNavigate();
    const { persons, response } = useSelector((state) => state.data);
    let dispatch = useDispatch();

    useEffect(() => {
        console.log('Carga tabla de personas');
        !persons.length && dispatch(loadPersons());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        response && dispatch(loadPersons())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [response]);

    // Functions
    const handleDelete = (id) => {
        if (window.confirm("¿Esta seguro de eliminar la persona?")) {
            dispatch(deletePerson(id));
        }
    }

    return (
        <Fragment>
            <h1>CRUD PERSONAS (PRUEBA ENERSINC)</h1>
            <div className={classes.headerButtonContainer}>
                <Button variant="contained"
                    color="primary"
                    onClick={() => navigate("/agregar-persona")}>
                    Agregar persona
                </Button>
            </div>
            {response && <Notifications message={response} />}
            <TableContainer component={Paper} sx={{width: 'auto', maxHeight: '75vh', margin: '30px 30px 0 30px' }}>
                <Table stickyHeader aria-label="customized table" className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">Tipo documento</StyledTableCell>
                            <StyledTableCell align="center">Documento</StyledTableCell>
                            <StyledTableCell align="center">Nombres</StyledTableCell>
                            <StyledTableCell align="center">Apellidos</StyledTableCell>
                            <StyledTableCell align="center">Hobbie</StyledTableCell>
                            <StyledTableCell align="center">Acción</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {persons && persons.map(({ pk, fields }) => (
                            <StyledTableRow key={pk}>
                                <StyledTableCell align="center">{fields.tipo_documento}</StyledTableCell>
                                <StyledTableCell align="center">{fields.documento}</StyledTableCell>
                                <StyledTableCell align="center">{fields.nombres}</StyledTableCell>
                                <StyledTableCell align="center">{fields.apellidos}</StyledTableCell>
                                <StyledTableCell align="center">{fields.hobbie}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <ButtonGroup variant="contained" aria-label="outlined primary button group"  >
                                        <Button color="primary"
                                            className={classes.button}
                                            onClick={() => navigate(`/editar-persona/${pk}`)}>
                                            Editar
                                        </Button>
                                        <Button color="secondary"
                                            onClick={() => handleDelete(pk)}>
                                            Eliminar
                                        </Button>
                                    </ButtonGroup>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {!persons.length && <CircularProgress style= {{marginTop: '50px'}} color="secondary" />}
        </Fragment>
    )
}

export default Home;
