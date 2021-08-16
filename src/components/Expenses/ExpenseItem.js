
import React from "react";
import ExpenseDate from "./ExpenseDate";
import "../UI/ExpenseItem.css";
import Card from "./Card";


const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};
// function ExpenseItem(props) {
// const [title, setTitle] = useState(props.title);

// const clickHandler = () => {
//   setTitle('Updated');
// };
//   return (
//     <Card className="expense-item">
//       <ExpenseDate date={props.date} />
//       <div className="expense-item__description">
//         <h2>{title}</h2>
//         <div className="expense-item__price">${props.amount}</div>
//       </div>
//       <button onClick={clickHandler}>Change Title</button>
//     </Card>
//   );
// }



export default ExpenseItem;
