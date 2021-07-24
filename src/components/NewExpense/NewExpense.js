import React from "react";
import '../UI/NewExpense.css';
import ExpenseForm from "./ExpenseFrom";

const NewExpense = (props) => {

    const onSaveData = (enteredExpenses) => {
      const expense = {
        ...enteredExpenses,
        id: Math.random().toString()
      };
     props.onAddExpense(expense)
    }

    return (
      <div className="new-expense">
        <ExpenseForm onSaveData={onSaveData} />
      </div>
    );
};

export default NewExpense;