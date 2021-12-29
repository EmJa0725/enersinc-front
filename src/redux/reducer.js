import * as types from './actionType';

const initialState = {
    persons: [],
    person: {},
    message: {},
    loading: false,
}

// Especificación casos para el reducer
const personsReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PERSONS:
            return {
                ...state,
                persons: action.payload,
                loading: false,
            }
        case types.DELETE_PERSON:
        case types.ADD_PERSON:
        case types.UPDATE_PERSON:
            return {
                ...state,
                loading: false,
                response: action.response
            }
        case types.GET_SINGLE_PERSON:
            return {
                ...state,
                person: action.payload,
                loading: false,
            }
        case types.RESET_NOTIFICATION:
            return {
                ...state,
                response: action.response
            }
        default:
            return state;
    }
}

export default personsReducers;