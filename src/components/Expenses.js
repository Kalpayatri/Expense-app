import { useDispatch} from "react-redux"
import { startDeleteExpenses } from "../actions/expenseAction"

const Expenses=(props)=>{
    const dispatch=useDispatch()
    const {expenses,_id}=props
    
    const handleRemove=()=>{
        dispatch(startDeleteExpenses(_id))

    }

    return(
        <div>
            <h3>{expenses}</h3>
            <button onClick={handleRemove}>Remove</button>            
            




        </div>
    )
}
export default Expenses