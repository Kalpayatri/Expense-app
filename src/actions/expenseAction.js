export const startGetExpenses=()=>{
    return (dispatch)=>{
        fetch('http://localhost:3055/api/expenses')
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            dispatch(setExpenses(data))
        })
        .catch((err)=>{
            console.log(err.message)
        })

    }
}

const setExpenses=(data)=>{
    return{
        type:'SET_EXPENSES',
        payload:data
    }

}

export const startCreateExpenses=()=>{
    return (dispatch)=>{
        fetch('http://localhost:3055/api/expenses')
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            dispatch(addExpenses(data))
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
}

const addExpenses=(data)=>{
    return{
        type:'ADD_EXPENSES',
        payload:data
    }
}


export const startDeleteExpenses=(_id)=>{
    return (dispatch)=>{
        fetch(`http://localhost:3055/api/expenses/${_id}`,{
            method: 'DELETE'

        })
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            dispatch(deleteExpenses(data._id))
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }

}

const deleteExpenses=(_id)=>{
    return{
        type:'DELETE_EXPENSES',
        payload:_id
    }

}