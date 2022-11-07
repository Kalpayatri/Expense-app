import { useSelector, useDispatch } from "react-redux"
import { removeExpense } from "../actions/expenses"

const List=(props)=>{
    const expenses=useSelector((state)=>{
        return state.expenses
    })

    const dispatch=useDispatch()

    const handleRemove=()=>{
        dispatch(removeExpense())

    }

    
    return(
        <div>
            <ul>
           {
            expenses.map((ele)=>{
                return <li key={ele.id}>{ele.title} {ele.amount}
                <button onClick={()=>{handleRemove(ele.id)}}>remove</button>
                </li>
            })
           }
           </ul>
        </div>
    )
}
export default List