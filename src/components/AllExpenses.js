import React, { useState } from "react";
import "./AllExpenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function AllExpenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYearr) => {
    setFilteredYear(selectedYearr);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      < ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
      
    </div>
  );
}
export default AllExpenses;
