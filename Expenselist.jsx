import React from "react";



export default function ExpenseList (props){
   
     
    return (
        <main> 
            <div>
                 <ul>
                    <li>
                        {props.name||props.amountSpend ?
                   <div><li>{props.name}  Ksh {props.amountSpend}</li>  <button onClick={()=>props.deleteExpense(props.id)}>Delete</button></div> : 
                   null}
                    </li>
                  
                </ul>
             </div>
        </main>
        
    )
}