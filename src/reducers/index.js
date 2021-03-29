import { combineReducers } from 'redux';

let initialState = {}

const gitReducer = (state = {}, action) => {
    switch(action.type){
        case 'CREATE_REQUEST':
            return {...state, ...action.payload}

        case 'RESET':
            return initialState

        default:
            return state;
    }
}

const gitMessage = (state = [], action) => {
    switch(action.type){
        case 'GET_MESSAGE':
            return {...state, ...action.payload}

        case 'RESET':
            return initialState

        default:
            return state;
    }
}









export default combineReducers({
    git: gitReducer,
    gitMessage: gitMessage,
})