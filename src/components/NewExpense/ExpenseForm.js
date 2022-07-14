import "../css/ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
//   const [userInput, setUserInput] = useState({
//     enteredTitle: '',
//     enteredAmount: '',
//     enteredDate: ''
//   })

  const titleChangeHandler = (event) => {
    // setUserInput({
    //     ...userInput, //if you don't use or declare other key value pairs here even if you don't want to update them, they will get lost, so you can wither use them or use the spread operator
    //     enteredTitle: event.target.value,
    // });
    setEnteredTitle(event.target.value)
  };
  const amountChangeHandler = (event) => {
    // // setUserInput({
    // //     ...userInput,
    // //     enteredAmount: event.target.value,
    // // })
    // setUserInput((prevState) => {
    //     return {...prevState, enteredAmount: event.target.value}
    // })
    setEnteredAmount(event.target.value)
  };
  const dateChangeHandler = (event) => {
    // // setUserInput({
    // //     ...userInput,
    // //     enteredDate: event.target.value,
    // // })
    // setUserInput((prevState) => {
    //     return {...prevState, enteredDate:event.target.value}
    // })
    setEnteredDate(event.target.value)
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate)
    }

    props.onSaveExpenseData(expenseData)
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input type="text" value = {enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            value={enteredAmount} //two way binding
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
          value={enteredDate}
            type="date"
            min="2019-01-01"
            max="2025-01-01"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
