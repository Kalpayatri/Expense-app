import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addExpenses } from "../actions/expenses";
import { startGetExpenses } from "../actions/expenseAction";
import Expenses from "./Expenses";
import '../index.css'

const Form = (props) => {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState(new Date())
  const [note, setNote] = useState('')
  const [type, setType] = useState('')



  const dispatch = useDispatch()

  const expenses = useSelector((state) => {
    return state.expenses
  })

  useEffect(() => {
    dispatch(startGetExpenses())
  }, [dispatch])




  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      id: Date.now(),
      title,
      amount: Number(amount),
      date,
      note,
      type
    }
    const resetForm = () => {
      setTitle('')
      setAmount('')
      setDate(new Date())
      setNote('')
      setType('')
    }
    dispatch(addExpenses(formData, resetForm))
  }
  const handleChange = (e) => {
    if (e.target.name === 'title') {
      setTitle(e.target.value)
    } else if (e.target.name === 'amount') {
      setAmount(e.target.value)
    } else if (e.target.name === 'date') {
      setDate(e.target.value)
    } else if (e.target.name === 'note') {
      setNote(e.target.value)
    } else if (e.target.type === 'type') {
      setType(e.target.value)
    }
  }

  return (
    <div className="form">
      <div className="row">

        <div className="col-md-5">

        </div>
        <div className="col-md-5">
          {expenses.map((ele) => {
            return (
              <div>
                <h3>{ele.expenses}</h3>
                <Expenses key={ele._id} {...ele} />
              </div>
            )
          })}
          <form onSubmit={handleSubmit}>
            <h2>Total-{expenses.length}</h2>
            <select onChange={handleChange}>
              <option value="Category">Category</option>
              <option value="Budget">Budget</option>
              <option value="Expense">Expense</option>
            </select><br />
            <input type="text" placeholder="enter title" value={title} onChange={handleChange} name="title" /><br />
            <input type="text" placeholder="enter amount" value={amount} onChange={handleChange} name="amount" /><br />
            <input type="date" value={date} onChange={handleChange} name="date" /><br />
            <textarea placeholder="About expenses" value={note} onChange={handleChange} name="note" /><br />


            <button className="primary">Save</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Form