import changeTheNumber from './reducer'
import multTheNumber from './mutDiv'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    changeTheNumber : changeTheNumber,
    multTheNumber:multTheNumber
})


export default rootReducer