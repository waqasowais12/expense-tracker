// src/ExpenseList.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeExpense } from './features/expenseSlice';

const ExpenseList = () => {
  const expenses = useSelector((state) => state.expenses);
  const dispatch = useDispatch();

  return (
    <ul className="mt-4">
      {expenses.map((expense) => (
        <li key={expense.id} className="flex justify-between p-2 border-b">
          <span>{expense.description}: ${expense.amount.toFixed(2)}</span>
          <button
            onClick={() => dispatch(removeExpense(expense.id))}
            className="text-red-500 hover:underline"
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
