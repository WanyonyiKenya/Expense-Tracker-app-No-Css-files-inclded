import React from "react";


export default function Inputform (props){
    return (
        <div className="forms-div">
            <form className="form-name">
                <label htmlFor="expense-input" >
                    Input Expense Name
                </label>
                <br />
                <input
                    type= 'text'
                    id="expense-input"
                    name="text"
                    value={props.name}
                    autoComplete="off"
                    placeholder="Enter Expense"
                    onChange={props.inputName}
                />

            </form>
            <form className="form-amount">
                <label htmlFor="amountSpend-input" >
                    Input Amount
                </label>
                <br />
                <input
                    type= 'number'
                    id="amountSpend-input"
                    name="amount"
                    value={props.amount}
                    autoComplete="off"
                    placeholder="0.00"
                    onChange={props.inputAmount}
                />
            </form>
            <button className="add-btn" type="submit" onClick={props.handleInputForm}>Add new Expense</button>
            <button className="clear-btn" type="submit" onClick={props.clearExpenseList}>Clear Expense List</button>
        </div>
    )
    
}