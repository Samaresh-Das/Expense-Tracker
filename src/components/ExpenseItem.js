import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./css/ExpenseItem.css";
import Card from "./Card";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title) //must be called directly inside functions but not in nested functions


  const clickHandler = () => {
    setTitle('UPDATED')
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
