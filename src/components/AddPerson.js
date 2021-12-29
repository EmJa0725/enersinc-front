import React, { useState } from 'react'
// Router
import { useNavigate } from 'react-router-dom';
// Redux
import { useDispatch } from 'react-redux';
import { addPerson } from '../redux/actions';
// Forms
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
// Button
import Button from '@mui/material/Button';
// Utils
import { tipoDocumentoDict } from '../utils/docTypesDictionary';
// Styles
import { useStyles } from '../styles/styles'

const AddPerson = () => {
    // Const & Variables
    const classes = useStyles();
    const navigate = useNavigate();
    const [personData, setPersonData] = useState({
        tipo_documento: "",
        documento: "",
        nombres: "",
        apellidos: "",
        hobbie: ""
    })
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const { tipo_documento, documento, nombres, apellidos, hobbie } = personData;

    // Functions 
    const handleInputChange = e => {
        let { name, value } = e.target;
        //Documento no puede exceder 10 digitos
        if (name === 'documento' && value.toString().length > 10) return;
        setPersonData({ ...personData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!tipo_documento || !documento || !nombres || !apellidos || !hobbie) {
            setError('Por favor diligenciar todos los campos');
            return;
        }
        dispatch(addPerson(personData));
        navigate('/');
    }

    return (
        <div className={classes.formContainer}>
            <h1>Agregar persona</h1>
            {error && <h3 style={{ color: 'red' }}>{error}</h3>}
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch', marginTop: '20px' },
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <div>
                    <TextField
                        required
                        id="tipo_documento"
                        name="tipo_documento"
                        select
                        label="Tipo documento"
                        value={tipo_documento}
                        onChange={handleInputChange}
                        variant="standard"
                    >
                        {tipoDocumentoDict.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>

                    <TextField
                        required
                        id="documento"
                        name="documento"
                        type="number"
                        label="Número"
                        value={documento}
                        onChange={handleInputChange}
                        variant="standard"
                    />
                </div>
                <div>
                    <TextField
                        required
                        id="nombres"
                        name="nombres"
                        type="text"
                        label="Nombres"
                        value={nombres}
                        variant="standard"
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <TextField
                        required
                        id="apellidos"
                        name="apellidos"
                        type="text"
                        label="Apellidos"
                        value={apellidos}
                        variant="standard"
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <TextField
                        required
                        id="hobbie"
                        name="hobbie"
                        type="text"
                        label="Hobbie"
                        value={hobbie}
                        variant="standard"
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <Button
                        className={classes.addPersonButton}
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Agregar
                    </Button>
                    <Button
                        className={classes.addPersonButton}
                        variant="contained"
                        color="secondary"
                        type="button"
                        onClick={() => navigate("/")}
                    >
                        Regresar
                    </Button>
                </div>
            </Box>
        </div>
    )
}

export default AddPerson;