export const addExpenses= (data,reset)=>{
    reset()
    return{
        type:'ADD_EXPENSES',
        payload:data
    }

}

export const removeExpenses=(id)=>{
    return{
        type:'REMOVE_EXPENSES',
        payload:id
    }
}