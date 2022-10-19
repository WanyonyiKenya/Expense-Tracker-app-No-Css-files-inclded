import React from "react";
import Inputform from ".Inputform";
import ExpenseList from ".Expenselist";
import Listhead from ".Listhead";
import { nanoid } from "nanoid";


const Expenses = localStorage.getItem('expenses')
? JSON.parse(localStorage.getItem('expenses')) : []
console.log(Expenses)

export default function App() {
  const[allExpenses, setAllExpenses] = React.useState(Expenses)
  const[name,setName]= React.useState ('')
  const[amountSpend,setAmountSpend]=React.useState('')


  const inputName = (e) => {
    console.log("name", e.target.value)
    setName(e.target.value)
  }
  const inputAmount = (e) => {
    console.log("Amount", e.target.value)
    setAmountSpend(e.target.value)
  }

  const handleInputForm = (e) => {
    e.preventDefault()
    if(name !== ''&& amountSpend > 0){
      const newExpense = { id: `${nanoid()}`,name, amountSpend}
      setAllExpenses([...allExpenses,newExpense])

      setName('')
      setAmountSpend('')
    }else{
      alert('Enter valid input values')
    }
  }
  React.useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(allExpenses))
  }, [allExpenses])

  const clearExpenseList = ()=> {
    setAllExpenses([])
   
  }
  const deleteExpense = (id) => {
    const remainderExpenses = allExpenses.filter((expense)=> id !== expense.id)
    setAllExpenses([...remainderExpenses])
  }
  
  const DIsplayExpenses = allExpenses.map((expense) =>(
            <ExpenseList
              id = {expense.id}
              key = {expense.id}
              name = {expense.name}
              amountSpend = {expense.amountSpend}
              deleteExpense = {deleteExpense}
             
            />
  ) )
  console.log(DIsplayExpenses)
  return(
      <div >
          <h2>Expenses</h2>
         
          <Inputform 
            name = {name}
            amount = {amountSpend}
            inputName = {inputName}
            inputAmount = {inputAmount}
            handleInputForm = {handleInputForm}
            clearExpenseList = {clearExpenseList}
          />
          <Listhead />
          {DIsplayExpenses}
          <div>
               The Total Expenses is ksh{''}
                {allExpenses.reduce((adder,currentExpense) => {
                  return(adder += parseInt(currentExpense.amountSpend))
                }, 0)}
          </div>
      </div>
  )

  }
