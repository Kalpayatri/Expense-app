import React from "react"
import { useEffect } from "react"
import Budget from "./Budget"
import {useDispatch,useSelector} from "react-redux"
import { startCreateBudget, startGetBudget } from "../actions/budget"


const Settings=(props)=>{
    const dispatch= useDispatch()
    const budget= useSelector((state)=>{
        return state.budget
  
    })

    useEffect(()=>{
        dispatch(startGetBudget())
  
    },[dispatch])
  
  
  
    const handleAdd=()=>{
        dispatch(startCreateBudget())
    }
    

    return(
        <div> 
            Settings 
            <h2>Budget</h2>
        <h3>Listing Budget-{budget.length}</h3>
        <button onClick={handleAdd}>Add Budget</button>
        

        {budget.map((ele)=>{
         return (
             <div>
                 <h3>{ele.budget}</h3>
                 <Budget key={ele._id} {...ele}/>
             </div>
         )
        })}
        
        </div>
    )
}
export default Settings