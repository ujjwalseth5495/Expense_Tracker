import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enterdTitle, setEnteredTitle] = useState("");
  const [enterdAmount, setEnteredAmount] = useState("");
  const [enterdDate, setEnteredDate] = useState("");

  const titleChangeHAndler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHAndler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHAndler = (event) => {
    setEnteredDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enterdTitle,
      amount: enterdAmount,
      date: new Date(enterdDate),
    };
    props.onSaveExpenseData(expenseData);
    console.log(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>title</label>
          <input
            type="text"
            value={enterdTitle}
            onChange={titleChangeHAndler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enterdAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHAndler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enterdDate} onChange={dateChangeHAndler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
