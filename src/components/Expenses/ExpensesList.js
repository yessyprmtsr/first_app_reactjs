import React from 'react';
import ExpenseItem from './ExpenseItem';
import "../UI/ExpensesList.css";

const ExpensesList = props => {
  /* check whether has data or not */

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          //rendering list of array use key identifier
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};
 
export default ExpensesList;
