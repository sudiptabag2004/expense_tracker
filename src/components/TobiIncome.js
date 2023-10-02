import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalState';

export const TobiIncome = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className='IncomeExpense'>
      <div className='tobibox'>
        <h2>Income</h2>
        <p className='income'>{income}</p>
      </div>
      <div className='tobibox'>
        <h2>Expense</h2>
        <p className='expense'>{expense}</p>
      </div>
    </div>
  );
}
