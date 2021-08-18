import React,{useState} from "react";
import '../UI/NewExpense.css';
import ExpenseForm from "./ExpenseFrom";

const NewExpense = (props) => {

  const[isEditing, setIsEditing] = useState(false);

    const onSaveData = (enteredExpenses) => {
      const expense = {
        ...enteredExpenses,
        id: Math.random().toString()
      };
     props.onAddExpense(expense)
     setIsEditing(false);
    }
    const startEditingHandler = () => {
      setIsEditing(true);
    }
    const stopEditingHandler = () => {
      setIsEditing(false);
    };
    return (
      <div className="new-expense">
        {!isEditing && (
          <button onClick={startEditingHandler}>Add New Expense</button>
        )}
        {isEditing && (
          <ExpenseForm onSaveData={onSaveData} onCancel={stopEditingHandler} />
        )}
      </div>
    );
};

export default NewExpense;