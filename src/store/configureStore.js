import {createStore, combineReducers} from 'redux'
import numbersReducer from '../reducers/numbersReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        numbers: numbersReducer
    }))
    return store
}

export default configureStore