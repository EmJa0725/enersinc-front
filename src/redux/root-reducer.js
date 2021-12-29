import { combineReducers } from 'redux';
import personsReducers from './reducer';


// Almacena el store dentro de llave data
const rootReducer = combineReducers({
    data: personsReducers
})

export default rootReducer;