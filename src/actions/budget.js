export const startGetBudget=()=>{
    return (dispatch)=>{
        fetch('http://localhost:3055/api/budget')
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            dispatch(setBudget(data))
        })
        .catch((err)=>{
            console.log(err.message)
        })

    }
}

const setBudget=(data)=>{
    return{
        type:'SET_BUDGET',
        payload:data
    }

}

export const startCreateBudget=()=>{
    return (dispatch)=>{
        fetch('http://localhost:3055/api/budget')
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            dispatch(addBudget(data))
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
}

const addBudget=(data)=>{
    return{
        type:'ADD_BUDGET',
        payload:data
    }
}

export const startDeleteBudget=(_id)=>{
    return (dispatch)=>{
        fetch(`http://localhost:3055/api/budget/${_id}`,{
            method: 'DELETE'

        })
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            dispatch(deleteBudget(data._id))
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }

}

const deleteBudget=(_id)=>{
    return{
        type:'DELETE_BUDGET',
        payload:_id
    }

}