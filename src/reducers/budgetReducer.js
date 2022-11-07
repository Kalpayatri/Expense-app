const budgetInitialState=[]

const budgetReducer=(state=budgetInitialState,action)=>{
    switch(action.type){
        case 'SET_BUDGET': {
            return [...action.payload]
        }
        case 'ADD_BUDGET':{
            return [...state,{...action.payload}]
        }
        case 'DELETE_BUDGET':{
            return state.filter(ele=>ele.id !== action.payload)
        }
        default:{

            return [...state]
        }
    }

}

export default budgetReducer