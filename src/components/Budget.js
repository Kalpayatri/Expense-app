import { useDispatch} from "react-redux"
import { startDeleteBudget } from "../actions/budget"

const Budget=(props)=>{
    const dispatch=useDispatch()
    const {budget,_id}=props
    
    const handleRemove=()=>{
        dispatch(startDeleteBudget(_id))

    }
    return(
        <div>
            <h3>{budget}</h3>
            <button>Category</button> <button>Item Name</button> 
            <button>Amount</button> <button>Expense Date</button> 
            <button onClick={handleRemove}>Remove</button>

        </div>
    )
}
export default Budget