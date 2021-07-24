import React, { useState } from "react";
import "../UI/ExpensesForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmout, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate:''
  // })

  const setNewTitle = (event) => {
    setEnteredTitle(event.target.value);
    // setInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setInput((prevState) => {
    //     return{ ...prevState, enteredTitle: event.target.value};
    // })
  };

  const setNewAmount = (event) => {
    setEnteredAmount(event.target.value);
    // setInput({
    // ...userInput,
    // enteredAmount: event.target.value,
    // });
    // setInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };

  const setNewDate = (event) => {
    setEnteredDate(event.target.value);
    //  setInput({
    //    ...userInput,
    //    enteredDate: event.target.value,
    //  });
    // setInput((prevState) => {
    //   return { ...prevState, enterDate: event.target.value };
    // });
  };

  const submitForm = (event) => {
    event.preventDefault();

    const expense = {
      title: enteredTitle,
      amount: enteredAmout,
      date: new Date(enteredDate),
    };

    props.onSaveData(expense);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');

  };

  return (
    <form onSubmit={submitForm}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={setNewTitle}
            value={enteredTitle}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={setNewAmount}
            value={enteredAmout}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={setNewDate}
            value={enteredDate}
          ></input>
        </div>
        <div className="new-expense__control">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
