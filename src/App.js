import React, { useState } from "react";
import NewExpense from "./components/NewExpenses/NewExpense.js";
import Expenses from "./components/expenses/Expenses.js";

let DUMMY__EXPENSE = [
  {
    id: "e1",
    title: "School Fee",
    amount: 250,
    date: new Date(2023, 5, 12),
  },
  {
    id: "e2",
    title: "Books",
    amount: 230,
    date: new Date(2023, 2, 22),
  },
  {
    id: "e3",
    title: "House Rent",
    amount: 700,
    date: new Date(2023, 4, 2),
  },
  {
    id: "e4",
    title: "Food",
    amount: 540,
    date: new Date(2023, 5, 5),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY__EXPENSE);

  const addExpenseHandler = (expense) => {
    const updatedExpense = [expense, ...expenses];
    setExpenses(updatedExpense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
