// src/ExpenseForm.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addExpense } from './features/expenseSlice';

const ExpenseForm = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description && amount) {
      dispatch(addExpense({ id: Date.now(), description, amount: parseFloat(amount) }));
      setDescription('');
      setAmount('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col p-4 border rounded">
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="mb-2 p-2 border rounded"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        className="mb-2 p-2 border rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
