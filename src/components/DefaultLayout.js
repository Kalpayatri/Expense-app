import React from "react";
import '../index.css'

const DefaultLayout = (props) => {
    return (
        <div className="layout">
            <div className="header d-flex justify-content-between align-items-center">
                <div>
                    <h1 className="logo">ExpenseEve</h1>
                </div>
                <div>
                    <h1 className="username"></h1>
                </div>

            </div>

            <div className="content">
                {props.children}

            </div>

        </div>
    )
}

export default DefaultLayout