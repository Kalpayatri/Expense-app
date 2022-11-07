import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import expenseReducer from '../reducers/expenseReducer'
import budgetReducer from '../reducers/budgetReducer'

const configureStore=()=>{
    const store= createStore(combineReducers({
        expenses: expenseReducer,
        budget:budgetReducer
    }),applyMiddleware(thunk))
    
    return store

}

export default configureStore