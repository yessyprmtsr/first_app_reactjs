import React from "react";
import '../UI/NewExpense.css';
import ExpenseForm from "./ExpenseFrom";

const NewExpense = () => {
    return (
      <div className="new-expense">
        <ExpenseForm />
      </div>
    );
};

export default NewExpense;