import { MENU_CHANGE } from '../action/index'
import {combineReducers} from 'redux'

const InitialState = {
    isMenuChanged: false
}


const reducer = (state = InitialState, action: any) => {
    switch(action.type){
        case MENU_CHANGE:
            return{
                ...state,
                isMenuChanged: action.data,
            }
        default:
            return state;
    }
} 

const reducers = combineReducers({
    reducer
})

export default reducers;
