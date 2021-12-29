import * as types from './actionType';
import axios from 'axios';
const { REACT_APP_API_URL } = process.env;

const getPersons = (persons) => ({
    type: types.GET_PERSONS,
    payload: persons
})

const personDeleted = (response) => ({
    type: types.DELETE_PERSON,
    response: response
})

const personAdded = (response) => ({
    type: types.ADD_PERSON,
    response: response
})

const getPerson = (person) => ({
    type: types.GET_SINGLE_PERSON,
    payload: person
})

const personUpdated = (response) => ({
    type: types.UPDATE_PERSON,
    response: response
})

const notificationReseted = (response) => ({
    type: types.RESET_NOTIFICATION,
    response: response
})

// Carga todas las personas registradas
export const loadPersons = () => {
    return async dispatch => {
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/get-persons`);
            console.log(res);
            dispatch(getPersons(res.data.data, res.data.message));
        } catch (error) {
            console.log(error);
        }
    }
}

// ELimina una persona por id
export const deletePerson = (id) => {
    return async dispatch => {
        try {
            const res = await axios.delete(`${REACT_APP_API_URL}/delete-person/${id}`);
            console.log(res);
            dispatch(personDeleted(res.data.message));
            dispatch(loadPersons());
        } catch (error) {
            console.log(error);
        }
    }
}

// Registra una nueva persona
export const addPerson = (person) => {
    return async dispatch => {
        try {
            const reqBody = {
                data: person
            }
            const res = await axios.post(`${REACT_APP_API_URL}/add-person`, reqBody);
            console.log(res);
            dispatch(personAdded(res.data.message));
        } catch (error) {
            console.log(error);
        }
    }
}

// Obtiene los datos de una persona por id
export const getSinglePerson = (id) => {
    return async dispatch => {
        try {
            const res = await axios.get(`${REACT_APP_API_URL}/get-single-person/${id}`);
            console.log(res);
            dispatch(getPerson(res.data.data.fields));
        } catch (error) {
            console.log(error);
        }
    }
}

// Actualiza datos de persona por id
export const updatePerson = (person, id) => {
    return async dispatch => {
        try {
            const reqBody = {
                data: person
            }
            const res = await axios.put(`${REACT_APP_API_URL}/update-person/${id}`, reqBody);
            console.log(res);
            dispatch(personUpdated(res.data.message));
        } catch (error) {
            console.log(error);
        }
    }
}

// Limpia notificaciones tipo push 
export const resetNotification = () => {
    return  dispatch => dispatch(notificationReseted(''));
}