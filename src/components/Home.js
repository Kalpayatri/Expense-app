import React, {useState } from "react"
import Form from "./Form"
import Search from "./Search"
import '../index.css'
import { Modal, Table } from "antd"
import { useSelector } from "react-redux"


const Home = (props) => {
    const [search, setSearch] = useState('')
    const [addEditExpenseOpen, setAddEditExpenseOpen] = useState(false)

    const expenses = useSelector((state) => {
        return state.expenses
    })




    const columns = [
        {
            title: "Date",
            datIndex: "date",
        },
        {
            title: "Amount",
            datIndex: "amount"
        },
        {
            title: "Type",
            datIndex: "type"
        },
        {
            title: "Note",
            datIndex: "note"
        }

    ]
    

    const showModal = () => {
        setAddEditExpenseOpen(true)
    }

    const handleOk = () => {
        setAddEditExpenseOpen(false)
    }

    const handelCancel = () => {
        setAddEditExpenseOpen(false)
    }


    const handleChange = (e) => {
        const search = e.target.value
        setSearch(search)
    }
   
    return (
        <div>
            Home
            <div className="filter d-flex justify-content-between align-items-center">
                <div>
                    <Search  search={search} handleChange={handleChange} />
                </div>
                <div>
                    <button className="primary" onClick={() => { showModal(true) }}>Add Expense</button>

                </div>

            </div>
            <div className="table-analytics">
                <div className="table">
                    <Table columns={columns}
                        dataSource={expenses.map((ele) => {
                            return (
                                <div>
                            <li key={ele.id}>{ele.amount}</li>
                            </div>
                            )
                        })}>
                    </Table>

                </div>

            </div>
            <Modal title="Add Expense" open={addEditExpenseOpen} onOk={handleOk} onCancel={handelCancel}
                footer={false}>
                    <Form />

            </Modal>
            


        </div>
    )
}
export default Home