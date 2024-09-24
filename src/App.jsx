// src/App.jsx
import React from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Expense Tracker</h1>
      <ExpenseForm />
      <ExpenseList />
    </div>
  );
};

export default App;
