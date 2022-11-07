const expenseInitialState=[]

const expenseReducer=(state= expenseInitialState, action)=>{
    switch(action.type){
        case 'SET_EXPENSES': {
            return [...action.payload]
        }
        case 'ADD_EXPENSES':{
            return [...state,{...action.payload}]
        }
        case 'DELETE_EXPENSES':{
            return state.filter(ele => ele.id !== action.payload)

        }
        default:{
            return [...state]
        }
    }

}

export default expenseReducer
