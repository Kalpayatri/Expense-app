import React,{useState} from "react";

const Search=(props)=>{
    const {search,handleChange}=props

    const searchExpenses=()=>{
        const result= searchExpenses.filter((e)=>{
            return e.title.includes(search) || e.amount.toString().includes(search)

        })
    }

 
    return(
        <div>
            <form>
                <input type="text" placeholder="search" value={search} onChange={handleChange} />
            </form>
        </div>
    )
}

export default Search